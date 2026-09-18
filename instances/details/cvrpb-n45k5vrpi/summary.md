# cvrpb-n45k5vrpi

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Finding and progress

- **Campaign status:** Global conclusion
- **Best verified result:** 751 (new strict incumbent)
- **Best bound or certificate:** 751
- **Study finding:** Optimal, mixed database/computational evidence; no portable exact lower-bound trace

## Supported global conclusion

- **Conclusion:** OPT = 751
- **Main method:** exact compiled-MPS projection + CVRPLIB five-route optimum + Gurobi exclusion for at least six routes
- **Evidence grade:** MX — Mixed database and commercial-solver evidence
- **Earlier source-table wording:** mixed database/computational global conclusion; no portable exact lower-bound trace
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
- **Source README SHA-256:** `ef221375d4007d8412b94f151d249e6add9420d5179938fa5e9974783a972fbc`

## Package integrity

- **Archive:** `cvrpb-n45k5vrpi-findings.tar.gz`
- **Compressed bytes:** `410500`
- **SHA-256:** `0e23e7798bf7a031c0afbc2374d835fd00dd4ff0dfe8ebeba10e2a8d03c47e6b`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/cvrpb-n45k5vrpi/README.md
