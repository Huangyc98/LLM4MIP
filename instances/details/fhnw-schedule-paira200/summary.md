# fhnw-schedule-paira200

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** -19.369961204645204 (new strict incumbent)
- **Dual bound / certificate:** -19.369961204645204 (Gurobi + audited valid cuts)
- **Optimization status and evidence:** Computational optimum; independent rerun and original-MPS audit

## Optimality / infeasibility result

- **Resolved status:** OPT = -19.369961204645205810
- **Main method:** portable exact branch-and-dual certificate with frozen or rebuilt strengthening, untouched-original-MPS audit, and paired-formulation cross-check where available
- **Evidence grade:** PE — Portable exact certificate
- **Source evidence characterization:** solver-based global-optimality evidence; original-MPS and cross-formulation audits, no portable formal MIP proof
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
- **Source README SHA-256:** `09462db7cc705326686ce557fb4491e95cf1d722e21878d9e382914304f3c160`

## Package integrity

- **Archive:** `fhnw-schedule-paira200-findings.tar.gz`
- **Compressed bytes:** `889102`
- **SHA-256:** `abf6f69c086141748adbda82f35fe93cc42535f8f37782343125a882d9c67fda`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/fhnw-schedule-paira200/README.md
