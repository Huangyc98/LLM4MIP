# pythago7825

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** —
- **Dual bound / certificate:** published UNSAT theorem
- **Optimization status and evidence:** Infeasible, exact encoding/core crosswalk + published theorem; proof archive not replayed locally

## Optimality / infeasibility result

- **Resolved status:** infeasible
- **Main method:** exact NAE-SAT crosswalk + published UNSAT theorem
- **Evidence grade:** LT — Exact crosswalk plus published theorem or exhaustive result
- **Source evidence characterization:** literature-dependent theorem transfer
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
- **Source README SHA-256:** `5d5a2498ad546979018e8db84927a80950529ad3a6a25447fc1d4f35c7e88ef0`

## Package integrity

- **Archive:** `pythago7825-findings.tar.gz`
- **Compressed bytes:** `35485479`
- **SHA-256:** `7d5aa6970458eebca46f03cff747262f2fbcd0e09f582bb73d8c911604abaf09`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/pythago7825/README.md
