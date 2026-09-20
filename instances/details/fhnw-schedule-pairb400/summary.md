# fhnw-schedule-pairb400

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** -36.27696674236886 (new strict incumbent)
- **Dual bound / certificate:** -36.27696674236886 (independent safe suffix master)
- **Optimization status and evidence:** Computational optimum; two safe runs, cross-formulation audit, invalid old cuts explicitly rejected

## Optimality / infeasibility result

- **Resolved status:** OPT = -36.276966742368865136
- **Main method:** portable exact branch-and-dual certificate with frozen or rebuilt strengthening, untouched-original-MPS audit, and paired-formulation cross-check where available
- **Evidence grade:** PE — Portable exact certificate
- **Source evidence characterization:** solver-based global-optimality evidence; two safe zero-gap runs and full-row audits, no portable formal MIP proof
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
- **Source README SHA-256:** `42634b6c2f6fc2edf99f4526daa31df4abc6346fdff40a84535cd716fc86127e`

## Package integrity

- **Archive:** `fhnw-schedule-pairb400-findings.tar.gz`
- **Compressed bytes:** `124728`
- **SHA-256:** `6693e6fe9d49d15867115fadd2204558f368e716411c5b28d785615ef6579fe4`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/fhnw-schedule-pairb400/README.md
