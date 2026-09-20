# fastxgemm-n3r23s5t6

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Verified feasible; open
- **Primal bound / feasibility:** 153 (BILR 2018; strictly verified)
- **Dual bound / certificate:** 90
- **Optimization status and evidence:** Verified primal-dual interval [90, 153]; the dual bound is proved in this work, while the primal bound comes from an attributed external construction and is excluded from the campaign's primal-bound count; global optimum remains open

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
- **Source README SHA-256:** `5089e07a9c9aae4a48074dbd849586ce42093e924b1875656a9de21c35c757b1`

## Package integrity

- **Archive:** `fastxgemm-n3r23s5t6-findings.tar.gz`
- **Compressed bytes:** `4469985`
- **SHA-256:** `398905c9939c5c5224f272b97560b65925307acb9b8e349eae8f199a2bd453a2`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/fastxgemm-n3r23s5t6/README.md
