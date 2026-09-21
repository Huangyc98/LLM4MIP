# `mip-primal-improve`：20 个 MIPLIB 实例实验交接

本目录保存 `mip-primal-improve` skill 的 20 实例受控 primal 搜索实验。它面向后续 AI：可以据此恢复实验流程、核查每个结论，并与 general skill、dual skill 的结果做同口径比较。

## 先确认版本边界

本实验使用的是 2026-09-14 冻结的 skill。仓库当前发布的是实验结束后更新的 COPT-first 版本，两者不能混用。

| 对象 | `SKILL.md` SHA-256 | 含义 |
|---|---|---|
| 实验冻结版本 | `1bab6d94a097dcb4f0506a4b03120aee57fa9c829ca7250ed066fd7782feb341` | 实际产生本次 20 实例结果的 skill |
| 当前发布版本 | `ae0b7e8b8c3578ce06d7158f05e3535c1321e097c916295632281f707a470753` | 实验后改成 COPT-first 的版本 |

冻结版本位于 [`sources/skill-used/`](sources/skill-used/)，当前版本位于 [`skills/mip-primal-improve/`](../../../skills/mip-primal-improve/)。当前 skill 的默认顺序是：先探测 COPT；COPT 缺失、许可证不可用或无法保持模型语义时，再寻找 Gurobi、适用条件下的 cuOPT，以及其他兼容后端。这个修改发生在实验之后，不能追溯为本实验的一部分。

本实验实际主要在 Euler4 使用 Gurobi 13.0.2。Altman 的 COPT 8.0.4 通过了四并发小模型能力测试，并作为公开模型来源和可选替代后端；它没有成为最终 20 实例实验的主后端。因此本实验既不是 COPT-first 实验，也不是 COPT/Gurobi A/B 测试。

## 固定协议

- 实验 ID：`mip_primal_skill20_20260914T2328CST`
- 原始 prompt SHA-256：`849e3886025a907c05b6b29fd9cc58e7b2cb0947ab16365997163024098311ff`
- 实例数：20
- 每实例预算：150 分钟
- 检查点：30、60、90、120、150 分钟
- 调度：5 个固定 batch，每批 4 个实例；批次之间设证据完整性 barrier
- 最大并发：4 个不同实例
- 基础种子：20260911；各 phase 的实际种子和参数保存在完整运行清单中
- Euler4 每实例资源：12 个 CPU slot，Gurobi `SoftMemLimit=80` decimal GB；声明的全局上限为 48 slots、320 GiB
- 显著改善阈值：方向性改善严格大于 `max(1e-6, 1e-9 × max(1, |verified baseline|))`
- 数据隔离：禁止读取其他 skill 实验的 prompt、脚本、日志、解、报告和目标实例内部研究；skill 的目标案例查询被关闭

`SoftMemLimit=80` 表示 80×10^9 bytes，约 74.51 GiB。部分 worker 另有 80 GiB `RLIMIT_AS`；这些限制都不是聚合 RSS 的硬保证。

## 完整实验流程

每个实例都遵循同一外层流程：

1. 冻结原始 MPS、SHA-256、目标方向、公开 headline、可独立验证的 baseline、预算和随机种子。
2. 生成结构卡，识别真实离散决策、可补全变量、耦合约束和已有解。
3. 独立验证公开或已有解；公开 headline 与实际可验证向量分开记录。
4. 执行受限 primal baseline，再根据结构和停滞信号组合使用 incumbent transfer、Gurobi primal/NoRel/RINS、固定整数后的连续 recourse、结构化 LNS、local branching、联合 destroy-and-repair、compact reformulation、确定性 lifting、解池重组和有界 kick。
5. 每个候选都必须序列化回原变量空间，并在 untouched original model 上独立检查。solver incumbent、rounded hint 或受限模型最优解在完成验证前不能更新 best。
6. 每次改善后继续搜索；第一次改善只是里程碑。current、best、失败范围和恢复状态分别保存。
7. 在 30/60/90/120/150 分钟写入当时已验证的 incumbent；到 150 分钟停止候选搜索并完成预算内验证。
8. 一批四个实例全部形成终态证据后才进入下一批。
9. 最后聚合轨迹、验证结果、方法、资源记录和协议偏差。失败、无改善和基础设施异常都保留在 20 个实例的分母中。

多数 `run_manifest.json` 中的 `checkpoint_schedule[].status` 仍保留旧的 `not_reached` 占位值，即使对应 trajectory 检查点已经存在。检查点完成状态应以 `primal_trajectory.csv` 和 `summary.csv` 为准，不能从该占位字段推导。`ger50-17-trans-dfn-3t` 有两条不同的 30 分钟观测，机器表按原行保留，不去重。

## 验证口径

20 个最终结果的主等级均为 `numerical`。

主验证器对实际落盘的原变量解，以 `1e-6` 检查变量域、bounds、integrality、普通及 ranged rows、适用的扩展约束、目标方向与常数，并用 all-variable-fix 模型复核。GMP 只提供额外任意精度数值证据：线性行和目标容差 `1e-5`，整数容差 `1e-4`。

这些检查不等于零容差精确可行性，也不构成全局最优性证明。`scpm1` 的原报告标签是 `numerical+GMP explicit tolerances`，仍然不能写成 exact。受限邻域的 `OPTIMAL`、`CUTOFF` 或 `INFEASIBLE` 只关闭其明确声明的局部范围。

## 结果

20/20 个实例形成终态记录，5 个 batch barrier 全部完成，最终没有遗留 owned process。

- 逐实例墙钟和：`3000.00151331822077` 分钟
- meaningful-active 时间和：`2627.11802992026012` 分钟
- solver process 时间和：`2559.12273121935710` 分钟
- 预留 worker-seconds：`2160000.0`
- 产生 accepted improvement 的实例：6
- accepted improvement 总数：13
- 按预声明显著性与原报告归因口径的实质改善实例：4/20

这些数值是逐实例求和，不是并行实验的实际经过时间。`allocated_worker_seconds` 是资源预留量，不是实测 CPU 消耗。

`accepted_improvement_count` 是基于预声明 comparator、显著性与归因规则的解释字段，不能通过 trajectory 中 accepted 行数或目标值变化次数重新推导。例如 `r4l4-02-tree-bounds-50` 有更多 accepted rows，但只有 5 次被计入该字段。

| 实例 | 比较起点 | 最终 verified primal | 方向性改善 | accepted updates | 首次 / 最后改善 |
|---|---:|---:|---:|---:|---:|
| `graphdraw-grafo2` | 68613.49999999869 | 68590.5 | 22.999999998690328 | 3 | 25.535 / 61.180 min |
| `cmflsp60-36-2-6` | 73891245.38458703 | 73891245.26398355 | 0.12060348 | 1 | 130.553 / 130.553 min |
| `r4l4-02-tree-bounds-50` | official 499132179.0015595 | 499061405.0 | 70774.0015595 vs official | 5 | 26.209 / 147.751 min |
| `ns1856153` | 34.163461799659395 | 34.01697312588409 | 0.146488673775305 | 2 | 24.314 / 30.151 min |

`r4l4-02-tree-bounds-50` 没有可用的 independently verified initial baseline；它只能报告相对冻结官方值的改善，不能填入 verified-baseline 改善列。

其余需要单独解释的结果：

- `eva1aprime6x6opt`：1 次 accepted numerical-polish update，变化 `0.000001485198708`。
- `shipsched`：1 次 accepted numerical-polish update，变化 `0.00045377348`。
- `zeil`：约 `3.436e-10` 的数值变化，`accepted_improvement_count=0`。
- `cdma`：得到 first feasible，不属于已有 verified baseline 上的改善。
- `rocII-8-11`：external transfer，不属于本实验生成的改善。
- `ns1456591`：最终值数值上下降 `0.0002388874898`，但没有超过预声明的相对显著性阈值，分类为 `no_improvement`。

`polygonpack4-10`、`cmflsp60-36-2-6`、`ns1456591` 和 `sct1` 的最终残差或 integrality deviation 接近 `1e-6`。比较时必须保留实际残差与容差，不能只保留 pass/fail。

## 协议偏差和结论边界

对并发公平性最重要的偏差发生在 `scpm1`：采样证据显示 duplicate controller/native search 有约 35.2 秒重叠。不同实例的最大并发仍为 4，但有一个采样帧中的候选/搜索进程总数达到 5。该偏差必须随结果保留。

其余偏差主要涉及认证中断、parser/setup 失败、controller 恢复、license 环境、日志别名、只读传输和 cap 后元数据。无有效 native child 的失败、被动等待和只读整理均未计入 meaningful-active 时间。机器可读摘要见 [`protocol-deviations.jsonl`](protocol-deviations.jsonl)，完整细节留在每个实例的 report、manifest 和原始 ledger。

本实验只研究 primal 可行解与 incumbent 改善。它没有安排独立 dual-bound campaign，也没有证明任何实例全局最优。不得从本结果推导 dual skill 无效、COPT/Gurobi 优劣或 skill 的普遍因果效果。

## 后续 AI 的读取顺序

1. 先读本文件和 [`COMPARISON_CONTRACT.md`](COMPARISON_CONTRACT.md)。
2. 读 [`experiment_manifest.json`](experiment_manifest.json) 确认实验、skill 和资源身份。
3. 用 [`instance_results.csv`](instance_results.csv)、[`trajectories.csv`](trajectories.csv)、[`validation_summary.csv`](validation_summary.csv) 和 [`methods.csv`](methods.csv) 做机器比较。
4. 需要保留原摘要词法值时读 [`results.jsonl`](results.jsonl)；需要核查原始结论时读 [`sources/summary.csv`](sources/summary.csv) 和 [`sources/report.md`](sources/report.md)。
5. 对单个实例，依次读 `instances/<name>/final_report.md`、`validation.json`、`primal_trajectory.csv`、`run_manifest.json`、`model_provenance.json` 和 `skill_audit.json`。
6. `instances/<name>/best.sol.gz` 是确定性压缩的最终原空间解。解压后的 SHA-256 必须等于 `validation.json` 和 [`artifact_manifest.jsonl`](artifact_manifest.jsonl) 中的 `source_sha256`。
7. 需要原始日志、模型、phase ledger 或 restart state 时，根据 artifact manifest 转到完整归档。

完整工作归档位于 Euler4：

```text
/data1/wyc/mip_primal_skill20_20260914T2328CST
```

当前 Windows transport mirror：

```text
D:\sufe\AI4MIP\reports\mip_primal_skill20_20260914T2328CST
```

本地快照统计为 29,868 个文件、4,210,303,507 bytes。Git 交接包仅保留约 4.8 MiB 的核心证据、机器表和压缩最终解；原始日志、MPS、解池与中间文件通过路径、大小和 SHA-256 索引定位。

实验目录中的 `report_zh.md` 没有放入本包，因为它实际属于 general/structure 实验 `controlled_miplib20_20260911_1451`。本 primal 实验的权威总报告是 [`sources/report.md`](sources/report.md)。
