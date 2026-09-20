# nj3

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Verified feasible; open
- **Primal bound / feasibility:** 382.0606208032 (first strict incumbent)
- **Dual bound / certificate:** no new nontrivial global dual bound
- **Optimization status and evidence:** Exact nj2-to-nj3 projection and label anchoring completed; local neighborhoods solved to optimality; zero-tolerance feasibility audit completed; global optimum remains open

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
- **Source README SHA-256:** `676b8cd6fc57bc076745aea95c4863e82a993adcdc974270303812000d5c4098`

## Package integrity

- **Archive:** `nj3-findings.tar.gz`
- **Compressed bytes:** `664538`
- **SHA-256:** `58d102f3ed3a94d5baeace5b33fdb95660f8692803465840cc9edeec82d1cba7`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/nj3/README.md
