# sorrell7

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Accepted feasible; open
- Primal: -198
- Dual / certificate: -210
- Global conclusion: Not established
- Evidence: See the stated numerical tolerances and source audits.
- Project primal update vs MIPLIB v36: False (not_in_project_primal_table)
- Dual improvement vs historical COPT 10h: True

Feasible; any improvement must change at least 27 bits; global optimum open

精确全局下界−210通过；不宣称有210串可行解或原问题最优值已闭合。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/sorrell7/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `c4ece06e543a7173ffcf9e1325b59895b5a6f20b5e86d6c80d57a51fbde134cb`
