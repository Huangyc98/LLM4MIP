# sing5

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Verified feasible; open
- **Primal bound / feasibility:** 18,778,435.60767737 (strict)
- **Dual bound / certificate:** 18,462,676.77864 (locally reproducible solver dual bound; 1.6815% gap)
- **Optimization status and evidence:** The imported run improves the prior local dual bound by 19,778.272826703; the archived PDF-only dual bound 18,605,207.3 remains stronger; runtime metadata are inconsistent; global optimum remains open

## Interpretation

The campaign does not claim a global optimum or infeasibility result for this instance. The archived work may still contain a stricter incumbent, a stronger dual bound, an exact structural reduction, a local neighborhood solved to optimality, or a documented negative experiment.

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
- **Source README SHA-256:** `9015c095dcb3a3a96ff7e782f126e793781e11ef87e4775c34e2594a10dda0da`

## Package integrity

- **Archive:** `sing5-findings.tar.gz`
- **Compressed bytes:** `350617`
- **SHA-256:** `9506e8ab7c7815022a4524bd2a9443e1d0f0bfd0bd2b3ab499b1aaeaf89b1f7c`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/sing5/README.md
