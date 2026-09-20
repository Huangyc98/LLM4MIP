#!/usr/bin/env python3
"""Emit a compact, read-only structural profile of an MPS model with Gurobi.

The script never calls optimize() or presolve().  Its classifications are
matrix signals for research routing, not claims about application semantics.
"""

from __future__ import annotations

import argparse
import collections
import gzip
import hashlib
import json
import math
import platform
import re
import sys
from pathlib import Path
from typing import Iterable

import gurobipy as gp


TOL = 1e-12


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def sha256_model_text(path: Path) -> str:
    """Hash decompressed bytes for .gz inputs and raw bytes otherwise."""
    digest = hashlib.sha256()
    opener = gzip.open if path.suffix.lower() == ".gz" else Path.open
    if opener is gzip.open:
        handle = gzip.open(path, "rb")
    else:
        handle = path.open("rb")
    with handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def finite_or_text(value: float):
    if math.isinf(value):
        return "+inf" if value > 0 else "-inf"
    if math.isnan(value):
        return "nan"
    return value


def name_prefix(name: str) -> str:
    match = re.match(r"([^0-9]+)", name)
    return match.group(1) if match else "<numeric>"


def quantiles(values: Iterable[int | float]) -> dict[str, int | float]:
    ordered = sorted(values)
    if not ordered:
        return {}
    n = len(ordered)
    return {
        "min": ordered[0],
        "q25": ordered[(n - 1) // 4],
        "median": ordered[(n - 1) // 2],
        "q75": ordered[(3 * (n - 1)) // 4],
        "max": ordered[-1],
        "mean": sum(ordered) / n,
    }


def is_close(value: float, target: float) -> bool:
    return abs(value - target) <= TOL


def reverse_sense(sense: str) -> str:
    return {"<": ">", ">": "<", "=": "="}[sense]


class DisjointSet:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, item: int) -> int:
        while self.parent[item] != item:
            self.parent[item] = self.parent[self.parent[item]]
            item = self.parent[item]
        return item

    def union(self, left: int, right: int) -> None:
        root_left = self.find(left)
        root_right = self.find(right)
        if root_left == root_right:
            return
        if self.size[root_left] < self.size[root_right]:
            root_left, root_right = root_right, root_left
        self.parent[root_right] = root_left
        self.size[root_left] += self.size[root_right]


def expected_check(label: str, actual: int, expected: int | None) -> None:
    if expected is not None and actual != expected:
        raise RuntimeError(f"{label} mismatch: expected {expected:,}, read {actual:,}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("model", type=Path, help="Original .mps or .mps.gz path")
    parser.add_argument("--output", type=Path, required=True, help="Output JSON path")
    parser.add_argument("--expect-vars", type=int)
    parser.add_argument("--expect-rows", type=int)
    parser.add_argument("--expect-nnz", type=int)
    parser.add_argument(
        "--local-row-max-nnz",
        type=int,
        default=100,
        help="Rows wider than this are treated as possible coupling rows for component profiling",
    )
    parser.add_argument(
        "--ignore-row-prefix",
        action="append",
        default=[],
        help=(
            "Regex for a semantically checked coupling-row family to remove during component "
            "profiling; repeat as needed"
        ),
    )
    args = parser.parse_args()

    source = args.model.resolve()
    if not source.is_file():
        raise FileNotFoundError(source)

    model = gp.read(str(source))
    model.update()
    variables = model.getVars()
    constraints = model.getConstrs()
    matrix = model.getA().tocsr()
    csc = matrix.tocsc()

    expected_check("variables", model.NumVars, args.expect_vars)
    expected_check("rows", model.NumConstrs, args.expect_rows)
    expected_check("nonzeros", model.NumNZs, args.expect_nnz)

    vtypes = [variable.VType for variable in variables]
    variable_prefixes = [name_prefix(variable.VarName) for variable in variables]
    binary = [
        vtype == gp.GRB.BINARY
        or (
            vtype in (gp.GRB.INTEGER, gp.GRB.SEMIINT)
            and is_close(variable.LB, 0.0)
            and is_close(variable.UB, 1.0)
        )
        for variable, vtype in zip(variables, vtypes)
    ]
    row_nnz = [int(value) for value in matrix.indptr[1:] - matrix.indptr[:-1]]
    col_nnz = [int(value) for value in csc.indptr[1:] - csc.indptr[:-1]]
    objective_support = [index for index, variable in enumerate(variables) if not is_close(variable.Obj, 0.0)]
    objective_support_set = set(objective_support)
    ignored_patterns = [re.compile(pattern) for pattern in args.ignore_row_prefix]

    row_classes: collections.Counter[str] = collections.Counter()
    row_algebra_signatures: collections.Counter[str] = collections.Counter()
    implication_rows = 0
    suspected_big_m_rows = 0
    mixed_binary_continuous_rows = 0
    binary_control_bound_like_rows = 0
    objective_integer_definition_rows: list[str] = []
    coefficient_ratios: list[float] = []
    wide_rows: list[int] = []
    explicitly_ignored_rows: list[int] = []
    dsu = DisjointSet(model.NumVars)

    for row_index, constraint in enumerate(constraints):
        start, end = matrix.indptr[row_index], matrix.indptr[row_index + 1]
        indices = matrix.indices[start:end]
        coefficients = matrix.data[start:end]
        width = len(indices)

        local_vtypes = [vtypes[int(index)] for index in indices]
        local_prefix_counts = collections.Counter(variable_prefixes[int(index)] for index in indices)
        coefficient_shape = collections.Counter(
            "+1"
            if is_close(float(value), 1.0)
            else "-1"
            if is_close(float(value), -1.0)
            else "+other"
            if float(value) > 0
            else "-other"
            for value in coefficients
        )
        rhs_class = (
            "0"
            if is_close(constraint.RHS, 0.0)
            else "1"
            if is_close(constraint.RHS, 1.0)
            else "-1"
            if is_close(constraint.RHS, -1.0)
            else "+other"
            if constraint.RHS > 0
            else "-other"
        )
        algebra_key = "|".join(
            [
                f"sense={constraint.Sense}",
                f"rhs={rhs_class}",
                f"nnz={width}",
                "types=" + ",".join(f"{key}:{value}" for key, value in sorted(collections.Counter(local_vtypes).items())),
                "prefixes=" + ",".join(f"{key}:{value}" for key, value in sorted(local_prefix_counts.items())),
                "coef=" + ",".join(f"{key}:{value}" for key, value in sorted(coefficient_shape.items())),
            ]
        )
        row_algebra_signatures[algebra_key] += 1

        has_binary = any(binary[int(index)] for index in indices)
        has_continuous = any(vtypes[int(index)] == gp.GRB.CONTINUOUS for index in indices)
        if has_binary and has_continuous:
            mixed_binary_continuous_rows += 1
            if constraint.Sense != "=" and width <= 4:
                binary_control_bound_like_rows += 1

        objective_continuous = [
            int(index)
            for index in indices
            if int(index) in objective_support_set and vtypes[int(index)] == gp.GRB.CONTINUOUS
        ]
        other_indices = [int(index) for index in indices if int(index) not in objective_continuous]
        if (
            constraint.Sense == "="
            and len(objective_continuous) == 1
            and other_indices
            and all(vtypes[index] != gp.GRB.CONTINUOUS for index in other_indices)
        ):
            if len(objective_integer_definition_rows) < 20:
                objective_integer_definition_rows.append(constraint.ConstrName)

        explicitly_ignored = any(pattern.search(constraint.ConstrName) for pattern in ignored_patterns)
        if explicitly_ignored:
            explicitly_ignored_rows.append(row_index)
        if width > args.local_row_max_nnz:
            wide_rows.append(row_index)
        elif not explicitly_ignored and width >= 2:
            anchor = int(indices[0])
            for index in indices[1:]:
                dsu.union(anchor, int(index))

        magnitudes = [abs(float(value)) for value in coefficients if abs(float(value)) > TOL]
        if magnitudes:
            ratio = max(magnitudes) / min(magnitudes)
            coefficient_ratios.append(ratio)
            if ratio >= 1e4:
                suspected_big_m_rows += 1

        if width == 2 and all(binary[int(index)] for index in indices):
            ordered = sorted(float(value) for value in coefficients)
            if is_close(ordered[0], -1.0) and is_close(ordered[1], 1.0):
                if constraint.Sense in ("<", ">") and is_close(constraint.RHS, 0.0):
                    implication_rows += 1

        if not width or not all(binary[int(index)] for index in indices):
            continue
        values = [float(value) for value in coefficients]
        sense = constraint.Sense
        rhs = float(constraint.RHS)
        if all(is_close(value, 1.0) for value in values):
            pass
        elif all(is_close(value, -1.0) for value in values):
            sense = reverse_sense(sense)
            rhs = -rhs
        else:
            continue
        if sense == "=" and is_close(rhs, 1.0):
            row_classes["set_partitioning_eq_1"] += 1
        elif sense == "<" and is_close(rhs, 1.0):
            row_classes["set_packing_le_1"] += 1
        elif sense == ">" and is_close(rhs, 1.0):
            row_classes["set_covering_ge_1"] += 1
        else:
            row_classes["other_unit_binary"] += 1

    roots = collections.Counter(dsu.find(index) for index in range(model.NumVars))
    component_sizes = sorted(roots.values(), reverse=True)
    coefficient_values = collections.Counter(float(value).hex() for value in matrix.data)
    var_prefixes = collections.Counter(name_prefix(variable.VarName) for variable in variables)
    row_prefixes = collections.Counter(name_prefix(row.ConstrName) for row in constraints)

    payload = {
        "audit_kind": "gurobi_read_only_structure_profile",
        "optimization_called": False,
        "presolve_called": False,
        "source": str(source),
        "archive_sha256": sha256_file(source),
        "canonical_model_bytes_sha256": sha256_model_text(source),
        "host": platform.node(),
        "python": sys.version.split()[0],
        "gurobi_version": ".".join(map(str, gp.gurobi.version())),
        "model_name": model.ModelName,
        "objective_sense": "min" if model.ModelSense == gp.GRB.MINIMIZE else "max",
        "dimensions": {
            "variables": model.NumVars,
            "linear_constraints": model.NumConstrs,
            "quadratic_constraints": model.NumQConstrs,
            "sos": model.NumSOS,
            "general_constraints": model.NumGenConstrs,
            "nonzeros": model.NumNZs,
        },
        "variable_types": dict(sorted(collections.Counter(vtypes).items())),
        "constraint_senses": dict(
            sorted(collections.Counter(row.Sense for row in constraints).items())
        ),
        "objective": {
            "nonzero_count": len(objective_support),
            "support_fraction": len(objective_support) / model.NumVars if model.NumVars else 0.0,
            "supported_variable_types": dict(
                sorted(collections.Counter(vtypes[index] for index in objective_support).items())
            ),
            "coefficient_values_top20_hex": collections.Counter(
                variables[index].Obj.hex() for index in objective_support
            ).most_common(20),
            "constant": model.ObjCon,
        },
        "row_width": quantiles(row_nnz),
        "column_degree": quantiles(col_nnz),
        "coefficient_magnitude_ratio_by_row": quantiles(coefficient_ratios),
        "candidate_matrix_signals": {
            "unit_binary_rows": dict(sorted(row_classes.items())),
            "two_binary_implication_like_rows": implication_rows,
            "suspected_big_m_rows_ratio_ge_1e4": suspected_big_m_rows,
            "mixed_binary_continuous_rows": mixed_binary_continuous_rows,
            "small_binary_control_bound_like_rows": binary_control_bound_like_rows,
            "objective_continuous_defined_by_integer_equality_examples": objective_integer_definition_rows,
            "possible_coupling_rows_above_width_threshold": len(wide_rows),
            "semantically_selected_coupling_rows": len(explicitly_ignored_rows),
            "ignored_row_prefix_regexes": args.ignore_row_prefix,
            "local_row_width_threshold": args.local_row_max_nnz,
            "components_after_ignoring_possible_coupling_rows": {
                "count": len(component_sizes),
                "singletons": sum(size == 1 for size in component_sizes),
                "largest_20": component_sizes[:20],
            },
        },
        "bounded_descriptive_hints": {
            "coefficient_values_top20_hex": coefficient_values.most_common(20),
            "variable_name_prefixes_top20": var_prefixes.most_common(20),
            "row_name_prefixes_top20": row_prefixes.most_common(20),
            "row_algebra_signatures_top30": row_algebra_signatures.most_common(30),
            "warning": (
                "Name prefixes, row signatures, width/regex-based coupling rows, implication rows, "
                "mixed binary-continuous templates, and big-M ratios are hypothesis signals only. "
                "Confirm semantics from full row algebra and authoritative sources."
            ),
        },
    }

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(json.dumps(payload, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
