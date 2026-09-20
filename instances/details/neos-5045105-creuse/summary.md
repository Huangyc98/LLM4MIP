# neos-5045105-creuse

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Pending strict verification
- **Primal bound / feasibility:** 20.571410408673 (Gurobi-accepted)
- **Dual bound / certificate:** 19.932229270717
- **Optimization status and evidence:** Feasible under solver tolerances; combined observed gap 3.1071%; strict verification and global optimum open

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
- **Source README SHA-256:** `255861c0cfc4e7e3d7a3dd1100fc660b95d30482b7ecd14fd6cb95fe650a83a9`

## Package integrity

- **Archive:** `neos-5045105-creuse-findings.tar.gz`
- **Compressed bytes:** `195900`
- **SHA-256:** `a88018735c670190f4c460dd28fe6222e5078e3bc9a540e1542eb81425117b5f`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/neos-5045105-creuse/README.md
