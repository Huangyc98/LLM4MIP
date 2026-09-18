# scpl4

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Finding and progress

- **Campaign status:** Verified feasible; open
- **Best verified result:** 259
- **Best bound or certificate:** 214 (portable strict)
- **Study finding:** Complete target-213 exact branch/dual replay; COPT terminal exclusion corroborates; global optimum open

## Interpretation

The campaign does not claim a global optimum or infeasibility result for this instance. The archived work may still contain a stricter incumbent, a stronger lower bound, an exact structural reduction, a closed local neighborhood, or a documented negative experiment.

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
- **Source README SHA-256:** `586ab132dae61d35b5d82ddb84fa92767ee74110113b0de7d60d9b4c7aeca996`

## Package integrity

- **Archive:** `scpl4-findings.tar.gz`
- **Compressed bytes:** `4742255`
- **SHA-256:** `22338f7ea0a4468e6029eb2d05a5f23a653036118a5a9b9f06af3677dac940a4`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/scpl4/README.md
