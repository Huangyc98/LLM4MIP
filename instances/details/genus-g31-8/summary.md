# genus-g31-8

> Snapshot: 2026-09-18 UTC. This is a concise publication summary of the archived research state; it is not an official MIPLIB status change.

## Instance-level optimization result

- **Campaign status:** Pending strict verification
- **Primal bound / feasibility:** -23 candidate (native genus 3; 1e-15 literal-MPS residual)
- **Dual bound / certificate:** -23 exact lower bound
- **Optimization status and evidence:** Same graph and lower bound; exact-decimal MPS optimum open pending a zero-tolerance witness

## Interpretation

The campaign does not claim a global optimum or infeasibility result for this instance. The archived work may still contain a stricter incumbent, a stronger dual bound, an exact structural reduction, a local neighborhood solved to optimality, or a documented negative experiment.

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
- **Source README SHA-256:** `bf9dbb85adad7cdce5a2c4ce801772b6b13978ccfd4147e3671d297fb5968935`

## Package integrity

- **Archive:** `genus-g31-8-findings.tar.gz`
- **Compressed bytes:** `11171`
- **SHA-256:** `bd52e66c1df933ec826147927692644a16084ca7aa8d2cf2f6cd08763080416b`
- **Pinned source README:** https://github.com/Huangyc98/MIPLIB_openproblem/blob/89a8abd0847941bdf774353a1983d5e6a00457a0/instances/genus-g31-8/README.md
