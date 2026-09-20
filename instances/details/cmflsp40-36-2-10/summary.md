# cmflsp40-36-2-10

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Verified feasible; open
- **Primal bound / feasibility:** 66,452,236.4536 (strict repair)
- **Dual bound / certificate:** 65,928,415.3068 (solver)
- **Optimization status and evidence:** 985 exact item/period neighborhoods closed; 0.7883% global gap; no strict primal improvement

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
- **Source README SHA-256:** `3bf7b526c110ef6279a082a01400aa2124fcdf814206811adeddb1e829f6f1b4`

## Package integrity

- **Archive:** `cmflsp40-36-2-10-findings.tar.gz`
- **Compressed bytes:** `113271`
- **SHA-256:** `2cfa10bf9129bb99a2b09fb1e21686e84f46d896036a8d1ff71fffc2d158c84d`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/cmflsp40-36-2-10/README.md
