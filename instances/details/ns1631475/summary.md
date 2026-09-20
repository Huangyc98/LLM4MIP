# ns1631475

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** 11,100
- **Dual bound / certificate:** 11,100
- **Optimization status and evidence:** Optimal, exact cyclic-cutwidth enumeration and audited witness

## Optimality / infeasibility result

- **Resolved status:** OPT = 11,100
- **Main method:** original-MPS ring recovery + exact cyclic-cutwidth enumeration + witness
- **Evidence grade:** EX — Specialized exact exhaustive computation without a standalone trace
- **Source evidence characterization:** exact exhaustive computation; no standalone proof trace
- **Reconciliation rule:** The evidence grade above governs this snapshot when older instance or table wording differs.

## Experiment workflow

1. Freeze the original model, baseline, objective convention, and acceptance tolerance.
2. Profile the untouched formulation and propose falsifiable structural hypotheses.
3. Run bounded primal, dual, reduction, or certificate experiments with explicit stopping rules.
4. Map useful results back to the original MPS and grade the surviving evidence.

## Download bundle

The sibling `.tar.gz` archive copies the related research material from this instance directory and adds this summary plus a package manifest. Only official raw `.mps`/`.mps.gz` inputs are omitted to avoid redistributing bulky benchmark source files; public solutions, hashes, derived proof models, runs, logs, and any proof traces present in the directory remain included. Files retained externally by hash cannot be embedded here.

## Provenance

Generated from the local `MIPLIB_openproblem` research archive for the LLM4MIP website. Read the source instance README and package manifest before reusing a numerical claim.

- **Source base commit:** `89a8abd0847941bdf774353a1983d5e6a00457a0` plus the disclosed 18 September working-tree reconciliation
- **Source README SHA-256:** `f8958945309e05e68ae5be71e5a28edc40f5a6a31f77f52e0e982f99d50e5e27`

## Package integrity

- **Archive:** `ns1631475-findings.tar.gz`
- **Compressed bytes:** `48864`
- **SHA-256:** `2f97ec45e65d8d4d50f6ca5c8e10ff37506d886af4c481660896c58860af26f5`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/ns1631475/README.md
