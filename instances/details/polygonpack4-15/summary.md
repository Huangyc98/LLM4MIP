# polygonpack4-15

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Verified feasible; open
- **Primal bound / feasibility:** -63,613,612.411253203798895776945039... (strict repair)
- **Dual bound / certificate:** no new global lower bound
- **Optimization status and evidence:** Exact recovered geometry, radius/object neighborhoods and mask screening; no MIPLIB headline improvement; global optimum open

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
- **Source README SHA-256:** `0a2f010d09a1a8fd9011fdee3e976a64e7d5ad86b022432c3c5c1a6cf6ee7976`

## Package integrity

- **Archive:** `polygonpack4-15-findings.tar.gz`
- **Compressed bytes:** `464209`
- **SHA-256:** `daf77a55612c580e7b699ec7436a1f0452dd6c284d410a819625edf98b044909`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/polygonpack4-15/README.md
