# a2864-99blp

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Global conclusion
- Primal: -257
- Dual / certificate: -257
- Global conclusion: OPT = -257
- Evidence: Published-theorem transfer
- Project primal update vs MIPLIB v36: False (not_in_project_primal_table)
- Dual improvement vs historical COPT 10h: True

Optimal, exact geometry crosswalk + published theorem; theorem computation not replayed locally

−257的文献迁移严格成立，匹配可行解还可闭合最优值。没有重新执行论文内部计算；四次派生COPT超时均不是这条证明的前提。较弱−282证书不替代−257。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/a2864-99blp/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `778126d79d2751da224c423235938134ae2d11712f2030f4cfa6f525d8ffd197`
