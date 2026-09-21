# nag

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Accepted feasible; open
- Primal: 930
- Dual / certificate: 550.5405405405405
- Global conclusion: Not established
- Evidence: See the stated numerical tolerances and source audits.
- Project primal update vs MIPLIB v36: True (numeric_improvement)
- Dual improvement vs historical COPT 10h: True

Feasible under the stated tolerance; global optimum open

按接受合理solver全局数值结果的标准通过。未独立核算全部内部cuts或分支树，也未进行商业数值复跑；API小数是数值记录，不是逐位精确认证。相对旧COPT PDF的提高不能归因为某个参数，也不是同预算性能优势的证明。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/nag/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `da91f4f7a3fced9604481fc4323a5bf1f199ba5f3d21368e17b1522d005ebac6`
