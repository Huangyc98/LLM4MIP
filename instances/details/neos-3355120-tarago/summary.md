# neos-3355120-tarago

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Verified feasible; open
- **Primal bound / feasibility:** -11,110,906.689290019 (verified @ 1e-9)
- **Dual bound / certificate:** -11,123,832.676970437
- **Optimization status and evidence:** Feasible; incumbent-centered binary exchange attempted; 0.1163% gap remains

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
- **Source README SHA-256:** `c81a31a6840a551a08b7b0d6ddf0304ccaf87b8a6ee05e3b63eea1bfd5f5f8f8`

## Package integrity

- **Archive:** `neos-3355120-tarago-findings.tar.gz`
- **Compressed bytes:** `211837`
- **SHA-256:** `aae88afc44d0eccd1f5ae80a6e310dcf3793c420e3b5fab7ea6da0f10d951b6c`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/neos-3355120-tarago/README.md
