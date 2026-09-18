# fhnw-schedule-pairb200

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Finding and progress

- **Campaign status:** Global conclusion
- **Best verified result:** -19.3699612046452058100 (new strict incumbent)
- **Best bound or certificate:** -19.3699612046452058100 (Gurobi + audited valid cuts)
- **Study finding:** Computational optimum; independent rerun and Pair-A cross-check, no portable formal lower-bound proof

## Supported global conclusion

- **Conclusion:** OPT = -19.369961204645205810
- **Main method:** portable exact branch-and-dual certificate with frozen or rebuilt strengthening, untouched-original-MPS audit, and paired-formulation cross-check where available
- **Evidence grade:** PE — Portable exact certificate
- **Earlier source-table wording:** computational global conclusion; independently rerun and cross-formulation audited, no portable formal MIP proof
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
- **Source README SHA-256:** `f5d5841f8c250f510655fc1ba49f90f975c8ce453e06f8007c13641d1548ce19`

## Package integrity

- **Archive:** `fhnw-schedule-pairb200-findings.tar.gz`
- **Compressed bytes:** `1337969`
- **SHA-256:** `48c5bd17a972b36a18785f1d0ca27f5bc92bbea95335476d0ba7eb5cc84efbda`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/fhnw-schedule-pairb200/README.md
