# fhnw-schedule-pairb200

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Global conclusion
- Primal: -19.3699612046452058100
- Dual / certificate: -19.36996120464520581
- Global conclusion: OPT = -19.3699612046452058100
- Evidence: Portable exact certificate
- Project primal update vs MIPLIB v36: True (numeric_improvement)
- Dual improvement vs historical COPT 10h: True

Computational optimum; independent rerun and Pair-A cross-check, no portable formal lower-bound proof

采用本题原MPS字面系数对应的精确认证值。最终证明不依赖已撤回的旧energy cuts或浮点D_safe。精确树证书是后续补全，不冒充旧搜索轨迹重放。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/fhnw-schedule-pairb200/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `1727f630c710e026f645480ed7829049262e34a7e119d87c9aa59c731cd79725`
