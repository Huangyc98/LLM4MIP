# neos-2978205-isar

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Finding and progress

- **Campaign status:** Global conclusion
- **Best verified result:** -11.925808687
- **Best bound or certificate:** -11.925808687
- **Study finding:** Optimal, computational global conclusion; exact symmetry quotient and lift with no portable formal lower-bound trace

## Supported global conclusion

- **Conclusion:** OPT approximately -11.925808687
- **Main method:** exact symmetry quotient and mapping + zero-gap solve + independently audited lifted solution
- **Evidence grade:** NS — Strict primal audit plus floating-point zero-gap solver run
- **Earlier source-table wording:** computational global conclusion; no portable formal lower-bound trace
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
- **Source README SHA-256:** `e5fbb47be8846b0af630ad35c21e2be32932dd4112ea2045353ae830c632a633`

## Package integrity

- **Archive:** `neos-2978205-isar-findings.tar.gz`
- **Compressed bytes:** `128567`
- **SHA-256:** `8345eb49238ad795fc1e27d6bb474487334212700860717b3dafa5f048617293`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/neos-2978205-isar/README.md
