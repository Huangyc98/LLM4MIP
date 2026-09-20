# circ10-3

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** 242
- **Dual bound / certificate:** 242 published
- **Optimization status and evidence:** Optimal, exact MPS crosswalk + published exhaustive result

## Optimality / infeasibility result

- **Resolved status:** OPT = 242
- **Main method:** exact MPS/TTP crosswalk + published exhaustive result
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
- **Source README SHA-256:** `daea6a1aa6cd12e9c46b496f2a5700d80ade6a68b8ea900ff54e217437ab9a0d`

## Package integrity

- **Archive:** `circ10-3-findings.tar.gz`
- **Compressed bytes:** `23757`
- **SHA-256:** `d04bdfbe1581dd5c31e3cdc8a3eb8ae7ef6739be209627285e1536e574a22b14`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/circ10-3/README.md
