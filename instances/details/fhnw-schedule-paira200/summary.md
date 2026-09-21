# fhnw-schedule-paira200

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Global conclusion
- Primal: -19.369961204645204
- Dual / certificate: -19.36996120464520581
- Global conclusion: OPT = -19.369961204645204
- Evidence: Portable exact certificate
- Project primal update vs MIPLIB v36: True (numeric_improvement)
- Dual improvement vs historical COPT 10h: True

Computational optimum; independent rerun and original-MPS audit

采用认证值；旧headline末位偏高，不能把旧字面十进制恢复为严格下界。最终证明不依赖已撤回的旧energy cuts或浮点D_safe。精确树证书是后续补全，不冒充旧搜索轨迹重放。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/fhnw-schedule-paira200/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `abf6f69c086141748adbda82f35fe93cc42535f8f37782343125a882d9c67fda`
