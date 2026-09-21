# fastxgemm-n3r23s5t6

Snapshot: 21 September 2026. Repository research results; not a live MIPLIB leaderboard.

## Current result

- Cohort: original112
- Status: Accepted feasible; open
- Primal: 153
- Dual / certificate: 90
- Global conclusion: Not established
- Evidence: See the stated numerical tolerances and source audits.
- Project primal update vs MIPLIB v36: False (published_reproduction_not_project_update)
- Dual improvement vs historical COPT 10h: True

Strict interval `[90,153]`; LB is our proof, UB is excluded from our primal count; global optimum open



## Evidence and provenance

[Instance evidence](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/instances/fastxgemm-n3r23s5t6/README.md) · [Complete campaign ledger](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b63b89634917ccde2f9e7dc7aefe1583a3eb55e8/results/catalogue.json)

The full campaign contains 132 instances: 112 original cases and 20 subsequent evaluation cases.
The subsequent cohort uses post-hoc best valid bounds from separate skill runs; numerical bounds
and independently certified bounds are distinct. Genus g31 closures accept residuals below 1e-10.

## Download scope

The downloadable research bundle is the unchanged 18 September archive. This summary and the current catalogue supersede its historical counts and genus policy.

Archive SHA-256: `398905c9939c5c5224f272b97560b65925307acb9b8e349eae8f199a2bd453a2`
