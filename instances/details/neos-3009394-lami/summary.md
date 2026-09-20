# neos-3009394-lami

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** 5.5
- **Dual bound / certificate:** 5.5
- **Optimization status and evidence:** Optimal, exact Hall/matching certificate

## Optimality / infeasibility result

- **Resolved status:** OPT = 5.5
- **Main method:** exact bottleneck matching + Hall deficiency
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
- **Source README SHA-256:** `006aa5717c7578c8fab4e581710b38993394759a3bbedc4f137434472ab31bd5`

## Package integrity

- **Archive:** `neos-3009394-lami-findings.tar.gz`
- **Compressed bytes:** `39069`
- **SHA-256:** `76cd37f57520fd0e2a7d5f5caa24f6bb2bfc5af462db49eaf401cfe55b834477`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/neos-3009394-lami/README.md
