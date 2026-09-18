# nj1

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Finding and progress

- **Campaign status:** Verified feasible; open
- **Best verified result:** 382.0606208032 (improved first strict incumbent)
- **Best bound or certificate:** no new nontrivial strict global lower bound
- **Study finding:** Tree/compound search, 21 pair, 39 anchor-fixed triple, and 67 anchor-fixed quad closures, plus a zero-tolerance audit; global optimum open

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
- **Source README SHA-256:** `fe6728f2e5919ccba557d8107403b49bc36f84c625852293707001bc3d8f39c5`

## Package integrity

- **Archive:** `nj1-findings.tar.gz`
- **Compressed bytes:** `2087914`
- **SHA-256:** `2c5f04ce3eab2dfce736ef6b27561d08152487a483f85865bde605930cc7a8f9`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/nj1/README.md
