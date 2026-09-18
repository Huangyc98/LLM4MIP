# cvrpa-n64k9vrpi

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Finding and progress

- **Campaign status:** Global conclusion
- **Best verified result:** 1,401 (new strict incumbent)
- **Best bound or certificate:** 1,401
- **Study finding:** Optimal, mixed database/computational evidence; exact MPS projection and rational 17+ bound, but no portable complete lower-bound trace

## Supported global conclusion

- **Conclusion:** OPT = 1,401
- **Main method:** exact compiled-MPS projection + CVRPLIB fixed-nine optimum + exact-route-count Gurobi/COPT exclusions + rational K>=17 dual
- **Evidence grade:** MX — Mixed database and commercial-solver evidence
- **Earlier source-table wording:** mixed database/computational global conclusion; no portable complete lower-bound trace
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
- **Source README SHA-256:** `0de5fe82b941d5b87f551f4ee72998faa572644d311bcd1c7bbd953dfac84d8c`

## Package integrity

- **Archive:** `cvrpa-n64k9vrpi-findings.tar.gz`
- **Compressed bytes:** `351399`
- **SHA-256:** `dffc7ec7eb664b8813c2a8626b2f019cabe845f518c8a7c031ae04167d2e2110`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/cvrpa-n64k9vrpi/README.md
