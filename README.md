# LLM4MIP — How Much Can LLMs Help Solve MIPs?

## Research website

**[Open the LLM4MIP research website →](https://huangyc98.github.io/LLM4MIP/)**

Research website for the `MIPLIB_openproblem` project. An LLM-assisted campaign studied 112 open MIP problems and certified optimality or infeasibility for 30 instances (28 optimal and two infeasible), produced 21 primal-bound improvements relative to MIPLIB v36 plus four first finite primal bounds, and produced 41 dual-bound improvements relative to a frozen historical COPT table.

Two of the 21 incumbent improvements use an attributed external `fastxgemm` construction; the project contribution there is truncation, mapping, and strict verification rather than authorship of the parent construction.

The site is organized around one question: how much can language models help solve difficult mixed-integer programs? It separates the LLM's role in structural analysis, reduction design, falsification, checker construction, and workflow coordination from the role of solvers and deterministic proof systems. The campaign counts overlap and are descriptive, not a causal success-rate estimate.

The closest 20-instance comparison is deliberately reported as a mixed result: the structure-focused workflow more often produced the better primal bound and certified global optimality for two instances, while the comparison workflow more often produced the stronger numerical dual bound. Exact solvers, exhaustive computations, SAT/LRAT checking, and audits against the original MPS decide which claims count as evidence.

## Site structure

- `index.html` — brief interactive campaign overview
- `instances/` — searchable 112-instance catalogue; every instance has a generated `summary.md` and a downloadable findings archive
- `skill/` — downloadable `milp-structure-research` skill and the 20-instance skill-effect study
- `solver-replacement/` — evidence-based analysis of whether LLMs can fully replace optimization solvers
- `technical-report.pdf` — evidence-graded technical report
- `technical-report.tex` — editable LaTeX source
- `downloads/` — skill, experiment, and reconciliation-audit packages

The instance bundles retain research reports, scripts, artifacts, solutions,
derived proof models, logs, runs, and proof traces present in each instance
directory. They omit only official raw
`input/*.mps*` benchmark models, whose sizes and SHA-256 hashes are recorded in
each package manifest. The historical `rmine14` calibration is excluded from
the 112-instance catalogue.

## Rebuild generated data

From this repository, with the sibling `MIPLIB_openproblem` checkout present:

```sh
python3 scripts/build_site_data.py
```

This regenerates the catalogue JSON/JavaScript, all 112 summaries and
deterministic archives, the skill download, the comparison data, and the two
18 September reconciliation audits bundled for publication. The source snapshot is commit
`89a8abd` plus the explicitly disclosed working-tree reconciliation. A fresh
checkout of `89a8abd` alone is not sufficient to reproduce the current output;
the reconciled sibling working tree (or a later source commit containing those
reviews) is required.

## Publish with GitHub Pages

GitHub Pages is configured from the `main` branch root. The public site is available at [huangyc98.github.io/LLM4MIP](https://huangyc98.github.io/LLM4MIP/).

Suggested repository topics: `llm`, `mixed-integer-programming`, `mip`, `miplib`, `optimization`, `operations-research`, `ai-for-optimization`.
