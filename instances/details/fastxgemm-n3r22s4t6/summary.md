# fastxgemm-n3r22s4t6

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Verified feasible; open
- **Primal bound / feasibility:** 1,150 (external-derived; strictly verified)
- **Dual bound / certificate:** 90
- **Optimization status and evidence:** Verified primal-dual interval [90, 1,150]; the dual bound is proved in this work, while the primal bound comes from an attributed external construction and is excluded from the campaign's primal-bound count; global optimum remains open

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
- **Source README SHA-256:** `2e53ad481a0f8aeaf191fc78d8e9475e33ceb9829085e09ab353995fde64addc`

## Package integrity

- **Archive:** `fastxgemm-n3r22s4t6-findings.tar.gz`
- **Compressed bytes:** `13871664`
- **SHA-256:** `091a5ec28f652fb34bb0b7f76fd29b6345f0e05f03bc8f92faa8db357173a9b0`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/fastxgemm-n3r22s4t6/README.md
