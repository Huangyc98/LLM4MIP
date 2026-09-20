# assign1-10-4

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** 422
- **Dual bound / certificate:** 422
- **Optimization status and evidence:** Optimal, exact certificate

## Optimality / infeasibility result

- **Resolved status:** OPT = 422
- **Main method:** exact categorical counting bound + feasible witness
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
- **Source README SHA-256:** `3d20d0d6d6085ba4fec0585b902321ece0da088695dae592d145a0dfa58136ec`

## Package integrity

- **Archive:** `assign1-10-4-findings.tar.gz`
- **Compressed bytes:** `39103`
- **SHA-256:** `ececaf70c7f0ec910dd85c38083989e2574e648bbc8ba67b52ea7216b0aa8c91`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/assign1-10-4/README.md
