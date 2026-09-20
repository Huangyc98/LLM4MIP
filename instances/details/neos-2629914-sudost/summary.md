# neos-2629914-sudost

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Certified optimality / infeasibility
- **Primal bound / feasibility:** 48,180
- **Dual bound / certificate:** 48,180
- **Optimization status and evidence:** Optimal, exact QAP/cut-enumeration certificate

## Optimality / infeasibility result

- **Resolved status:** OPT = 48,180
- **Main method:** exact QAP reduction + cut-chain enumeration
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
- **Source README SHA-256:** `0e1925d6452f56c31a17c8d8ab3b9cd5cfafc68713bfa6fdc29a8d6f977063cc`

## Package integrity

- **Archive:** `neos-2629914-sudost-findings.tar.gz`
- **Compressed bytes:** `285259`
- **SHA-256:** `ebe3f75b65605aa20fbdd32fc2ef4fa7c57f9b8c9d4726b305443e1c7488747b`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/neos-2629914-sudost/README.md
