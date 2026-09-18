# bppc6-06

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Finding and progress

- **Campaign status:** Global conclusion
- **Best verified result:** 208
- **Best bound or certificate:** 208
- **Study finding:** Optimal, tight-profile CNF/LRAT certificate and exact witness

## Supported global conclusion

- **Conclusion:** OPT = 208
- **Main method:** exact tight-profile reduction + checked CNF/LRAT + witness
- **Evidence grade:** HP — Checked exact proof with large trace retained externally by hash
- **Earlier source-table wording:** checked exact certificate; 2.65 GiB proof files retained by hash outside Git
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
- **Source README SHA-256:** `d26c9cd0a79ea5e9c86efa49b6e1477affec6262fd43d64caa9d845491cd2ffb`

## Package integrity

- **Archive:** `bppc6-06-findings.tar.gz`
- **Compressed bytes:** `109796`
- **SHA-256:** `9eca1bf2709e91cc5ac418d8c46068c157665d77e14b61f88a0f90e8b12f9926`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/bppc6-06/README.md
