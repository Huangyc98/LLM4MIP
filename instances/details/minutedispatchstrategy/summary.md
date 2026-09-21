# minutedispatchstrategy

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Global conclusion
- Primal: 3109.9034777596576
- Dual / certificate: 3109.9034777596576
- Global conclusion: OPT = 3109.9034777596576
- Evidence: Floating-point zero-gap verification
- Project primal update vs MIPLIB v36: False (not_in_project_primal_table)
- Dual improvement vs historical COPT 10h: True

Repository computational closure; official page still `open`; strict primal audit, not yet incorporated into or confirmed by MIPLIB, and no portable exact lower-bound certificate

按用户决定采用新下界，但冻结旧PDF primal=3109.90308低于新界约0.00039776，对应原解仍缺。另一份COPT残差不能解释该特定旧记录；历史差异尚未解决，未发现经验证反例。采用新值是使用决定，不把未决事项改写成证明已闭合。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/minutedispatchstrategy/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `02490e2e65b9b22422b44556a0984dc574b30b689926a2905f036d7fc7a1278a`
