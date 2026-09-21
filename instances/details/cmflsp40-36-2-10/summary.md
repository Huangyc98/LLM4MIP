# cmflsp40-36-2-10

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Accepted feasible; open
- Primal: 66452236.4536
- Dual / certificate: 65928415.306808524
- Global conclusion: Not established
- Evidence: See the stated numerical tolerances and source audits.
- Project primal update vs MIPLIB v36: False (not_in_project_primal_table)
- Dual improvement vs historical COPT 10h: True

985 exact item/period neighborhoods closed; 0.7883% global gap; no strict primal improvement

按用户认可的模型与合理日志标准通过；原global runner缺失仍限制完整复现。32位指纹不构成无碰撞数学身份证明，也不覆盖一切潜在历史callback。没有发现额外限制的实际证据，但不能宣称恢复了全部运行源码或精确认证所有小数位。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/cmflsp40-36-2-10/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `2cfa10bf9129bb99a2b09fb1e21686e84f46d896036a8d1ff71fffc2d158c84d`
