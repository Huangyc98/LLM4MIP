# neos-3594536-henty

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Global conclusion
- Primal: 401092
- Dual / certificate: 401092
- Global conclusion: OPT = 401092
- Evidence: Floating-point zero-gap verification
- Project primal update vs MIPLIB v36: True (numeric_improvement)
- Dual improvement vs historical COPT 10h: True

Computational optimum; exact primal audit, no portable exact lower-bound certificate

归约部分严格成立，401092这一数值由历史全局solver支持。两种solver一致和401092可行解不等于独立精确下界证书；本次没有重跑它们。没有采用improve-only cutoff分支或较弱400947替代原声明。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/neos-3594536-henty/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `2ed092ab77426078604afc6f52664f37987a932b2ce9e48ab00146eb0aedbfab`
