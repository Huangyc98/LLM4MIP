# cvrpa-n64k9vrpi

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Global conclusion
- Primal: 1401
- Dual / certificate: 1401
- Global conclusion: OPT = 1401
- Evidence: Mixed computational evidence
- Project primal update vs MIPLIB v36: True (numeric_improvement)
- Dual improvement vs historical COPT 10h: True

Optimal, mixed database/computational evidence; exact MPS projection and rational 17+ bound, but no portable complete lower-bound trace

混合证据支持1401。外部固定9车和商业排除未在本次完整重跑；plain K10/K11的超时既不能证明不可行，也不否定另一次成功nonmerge运行。固定路线回填子问题的bound不用于全局证明。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/cvrpa-n64k9vrpi/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `39478b6c792db51dd6dcaf82967eea8ef6b78ada7b877c64e7eff6119cda8a1d`
