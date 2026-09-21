# neos-3355120-tarago

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Accepted feasible; open
- Primal: -11110906.689290019
- Dual / certificate: -11123832.676970437
- Global conclusion: Not established
- Evidence: See the stated numerical tolerances and source audits.
- Project primal update vs MIPLIB v36: False (not_in_project_primal_table)
- Dual improvement vs historical COPT 10h: True

Feasible; incumbent-centered binary exchange attempted; 0.1163% gap remains

按接受合理solver全局数值结果的标准通过。未独立核算全部内部cuts或分支树，也未进行商业数值复跑；API小数是数值记录，不是逐位精确认证。相对旧COPT PDF的提高不能归因为某个参数，也不是同预算性能优势的证明。

## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/neos-3355120-tarago/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `aae88afc44d0eccd1f5ae80a6e310dcf3793c420e3b5fab7ea6da0f10d951b6c`
