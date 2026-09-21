# Primal-skill and dual-skill comparison

Source: Huangyc98/MIPLIB_openproblem, branch organize/complete-results-20260921,
commit b63b89634917ccde2f9e7dc7aefe1583a3eb55e8.

The source-manifest.json in the evidence package records source paths and SHA-256 hashes. Original tables and study reports are copied unchanged. The focused CSV is a derived view, not a renamed experiment.

- Primal baseline: no_skill_primal. Treatment: primal_skill_primal. Absolute tolerance 1e-7. The raw tally is 10/9/1. ns1456591 is excluded because its selected numerical candidate falls below the independently proved optimum, leaving 9 wins, 9 ties, 1 loss, 1 exclusion.
- Dual baseline: no_skill_dual. Treatment: dual_gurobi_strongest. Absolute tolerance 1e-7. Outcome 17/1/2. Independent certified values remain a separate column.
- Gap: select portfolio=primal_dual and backend_scope=gurobi_only. No terminal COPT replays. Gap=(P-D)/max(1,abs(P),abs(D)); verdict tolerance 1e-9 fraction. Invalid candidates are excluded; selected values and source labels are preserved.
- AI baseline gap: original no-skill AI, not a direct solver. Outcome 18/0/2 over 20; mean reduction 15.8078929903 percentage points.
- Direct Gurobi 150-minute gap: outcome 17/1/2 over 20 cases (16 gap wins + 1 feasibility win); mean reduction 19.2762286534 percentage points. The case without a solver primal counts as a skill feasibility win; the mean uses only 19 finite-gap pairs.

Primal/dual runs were independent, with different historical budgets and resources from the no-skill AI. The combined result is a post-hoc portfolio, not an online same-budget speedup. Witnesses retain original acceptance tolerances; no new solver runs or uniform revalidation were performed here.

Frozen experimental packages and later current packages are separately named. The experiment did not use the later COPT-first primal skill. Original reports retain historical labels and references; this page does not reattribute their results.

Rebuild in LLM4MIP: python scripts/build_skill_data.py (Python standard library, no network or solver). The evidence archive contains source data, skill packages, manifest, builder and license; full large models and complete remote logs are not embedded.

Updated outcome policy: a recorded solver run with no primal loses to a valid skill feasible solution. Historical COPT has 19 wins / 0 ties / 1 loss: 16 gap wins plus 3 feasibility wins (neos-5221106-oparau, supportcase22, cdma). The cdma COPT run aborted after 0.1 seconds; no completed 10h performance claim is made for it. Mean COPT gap reduction is computed on 17 finite pairs only. The source tables remain unchanged; derived outcome columns implement this policy. Historical COPT lacks complete version/hardware/model-hash metadata and is a cross-solver reference.

Unified solver table: for each instance take minimum finite primal and maximum finite dual across direct Gurobi 150 min and historical COPT 10h. Recompute normalized gap using these selected bounds. This is an oracle post-hoc bound portfolio, not a single observed solver run. Result: 16 wins (15 smaller finite gaps + 1 feasibility win), 1 tie, 3 losses. The finite 19 pairs average 18.9091179350 percentage points gap reduction. Both solver inputs, selected bounds and source labels remain in the derived CSV/JSON; the page shows a single solver category.
