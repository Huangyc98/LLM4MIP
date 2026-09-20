# fhnw-binschedule0

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** 15,958
- **Dual bound / certificate:** 15,958
- **Optimization status and evidence:** Optimal, exact interval-order path-cover certificate

## Optimality / infeasibility result

- **Resolved status:** OPT = 15,958
- **Main method:** endpoint interval-order path cover + even-load lattice
- **Evidence grade:** PE — Portable exact certificate
- **Source evidence characterization:** self-contained exact certificate
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
- **Source README SHA-256:** `6a05e97a086982e2cf5730fd9f04b0d5f4bed8ba4092c47c1fb05ce8a5800f30`

## Package integrity

- **Archive:** `fhnw-binschedule0-findings.tar.gz`
- **Compressed bytes:** `42474`
- **SHA-256:** `94309f1f67b5e268bf2e3ab040af95b99d55d5fe4e67c3bda99a29f6bcc990b1`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/fhnw-binschedule0/README.md
