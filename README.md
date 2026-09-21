# LLM4MIP — How Much Can LLMs Help Solve MIPs?

## Research website

**[Open the LLM4MIP research website →](https://huangyc98.github.io/LLM4MIP/)**

Research website for the `MIPLIB_openproblem` project. The 21 September 2026 snapshot covers **132 instances** (112 original + 20 subsequent): **32 optimal**, **2 infeasible**, **29 primal updates** (25 finite improvements + 4 first feasible solutions), and **66 dual improvements** versus historical COPT 10h at an absolute threshold of 1e-7.

The optimal count includes two genus closures accepting residuals below 1e-10. Dual improvements are numerical comparisons with graded evidence, not 66 formal proofs. There are 131 finite COPT baselines and 108 paired finite duals. Two primal updates use attributed external fastxgemm constructions; one is numerical polishing. Historical calibration `rmine14` is excluded.

The catalogue partitions into 34 global conclusions, 93 accepted feasible/open, one pending strict verification, and four with no feasible point found. The subsequent 20 records select the best valid bounds across separate skill runs; their tolerance and certificate limitations remain in each summary.

The site is organized around one question: how much can language models help solve difficult mixed-integer programs? It separates the LLM's role in structural analysis, reduction design, falsification, checker construction, and workflow coordination from the role of solvers and deterministic proof systems. The campaign counts overlap and are descriptive, not a causal success-rate estimate.

The skill page compares **primal vs primal-skill** and **dual vs dual-skill** using the historical no-skill AI as the baseline. Primal-skill has 9 wins, 9 ties, 1 loss and 1 excluded invalid candidate (the raw table reported 10 wins). Dual-skill has 17 wins, 1 tie and 2 losses. Their best valid bounds, selected after separate runs, reduce the gap on 18/20 instances versus no-skill AI. Against direct Gurobi 150 minutes, the combination has 17 wins (16 smaller gaps + 1 feasibility win), 1 tie and 2 losses over 20 cases, averaging 19.2762 percentage points less gap over the 19 finite-gap pairs. This is not a matched-budget online parallel experiment.

## Site structure

- `index.html` — brief interactive campaign overview
- `instances/` — searchable 132-instance catalogue; every instance has a generated `summary.md` and a downloadable findings archive
- `skill/` — experimental and current primal/dual skills, separate objective comparisons and combined gaps
- `solver-replacement/` — evidence-based analysis of whether LLMs can fully replace optimization solvers
- `technical-report.pdf` — historical 30-conclusion report (not updated in this count refresh)
- `technical-report.tex` — editable LaTeX source
- `downloads/` — skill, experiment, and reconciliation-audit packages

The original 112 research bundles remain immutable historical archives. Current summaries supersede their old counts and genus policy. The 20 new compact result bundles contain summaries, ledger records and the license; full experiment evidence is linked in the research repository. They are not complete proof archives. Existing skill-study downloads retain their original experimental scope.

## Rebuild generated data

```sh
python scripts/build_site_data.py
```

No sibling checkout, solver, or network is needed. This builds 132 summaries, the catalogue, campaign charts/statistics and 20 deterministic result bundles from checked-in `data/campaign-catalogue.json` and `data/campaign-metrics.json`. Both are copied from research commit `b63b89634917ccde2f9e7dc7aefe1583a3eb55e8`. `data/legacy-catalogue-20260918.json` preserves archive hashes and reconciled evidence grades. The builder verifies all 112 historical bundle hashes and preserves their bytes. The same command runs `scripts/build_skill_data.py` to rebuild the focused comparison CSV/JSON, interactive data and deterministic skill/evidence bundles. Historical downloads remain archived but are no longer linked as the current study.

To update the campaign, replace the two canonical input snapshots together and update the pinned source commit in `scripts/build_campaign_data.py`; review its cohort/count assertions and the explanatory page text. `assets/campaign-data.js`, `data/site-metrics.json` and the instance catalogue are generated outputs.

## Publish with GitHub Pages

GitHub Pages is configured from the `main` branch root. The public site is available at [huangyc98.github.io/LLM4MIP](https://huangyc98.github.io/LLM4MIP/).

Suggested repository topics: `llm`, `mixed-integer-programming`, `mip`, `miplib`, `optimization`, `operations-research`, `ai-for-optimization`.

## Focused skill study sources

Inputs were copied from `organize/complete-results-20260921` at the same pinned commit. `data/skill-study/source-manifest.json` records original paths and SHA-256 hashes. `data/skill-study/source/` retains the source tables and reports byte-for-byte; `packages/` separates frozen experiment versions from current skills. See `downloads/primal-dual-source.md` for selection rules and exclusions. The website uses only the two-skill Gurobi/independent-certificate portfolio, excluding COPT terminal replays. Original provenance files preserve all original columns.

The skill comparison now opens with the combined gap versus no-skill AI. Historical COPT is a separate tab: 19 wins (16 smaller gaps + 3 feasibility wins), 1 loss. COPT cdma aborted after 0.1 seconds and is explicitly labeled. Feasibility wins are counted in outcomes but excluded from mean numerical gap reductions (17 finite COPT pairs).
