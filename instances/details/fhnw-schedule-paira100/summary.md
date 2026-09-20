# fhnw-schedule-paira100

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** -15.113116512593402 (strict)
- **Dual bound / certificate:** -15.113116512593402 (Gurobi + audited valid cuts)
- **Optimization status and evidence:** Computational optimum; official lower headline is nonintegral, so no numerical primal improvement is claimed

## Optimality / infeasibility result

- **Resolved status:** OPT = -15.113116512593401992
- **Main method:** portable exact branch-and-dual certificate with frozen or rebuilt strengthening, untouched-original-MPS audit, and paired-formulation cross-check where available
- **Evidence grade:** PE — Portable exact certificate
- **Source evidence characterization:** solver-based global-optimality evidence; original-MPS and row-semantic audits, no portable formal MIP proof
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
- **Source README SHA-256:** `2843e2c13cc2d03b0e9df8665f841c4673b13f69a858780d8c3005931fd8e7c8`

## Package integrity

- **Archive:** `fhnw-schedule-paira100-findings.tar.gz`
- **Compressed bytes:** `508097`
- **SHA-256:** `7b628150be83d078ea9708b11b033c96d34a97f6ff428f598041bf7930f19b64`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/fhnw-schedule-paira100/README.md
