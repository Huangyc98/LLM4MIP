# cvrpb-n45k5vrpi

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Global conclusion
- Primal: 751
- Dual / certificate: 751
- Global conclusion: OPT = 751
- Evidence: Mixed computational evidence
- Project primal update vs MIPLIB v36: True (numeric_improvement)
- Dual improvement vs historical COPT 10h: True

Optimal, mixed database/computational evidence; no portable exact lower-bound trace

按允许外部结果和合理solver日志的标准通过。固定5车外部计算及K≥6商业搜索未由本次重新求解；altman的原MPS COPT超时日志不是成功排除，cutoff可行性模型的目标0也不是路线下界。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/cvrpb-n45k5vrpi/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `c0247a5985d3e9aa77ce0e1a0d67a70f29c9eff7257a474a270494e3b3abd1b1`
