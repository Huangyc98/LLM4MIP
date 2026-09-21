---
name: mip-primal-improve
description: "Continuously improve and validate feasible solutions for hard MILP/MIPLIB instances throughout the available search budget using incumbent transfer, compact construction, recourse repair, and adaptive structural neighborhoods. Use for primal-bound improvement or stalled incumbent search; do not stop at the first improvement. Not for dual-bound-only research or proving optimality."
---

# 更快找到可验证的 MIP primal 解

优化的是**整个可用预算内的已验证 primal 轨迹与最终最优可行值**，同时争取尽早取得改进。第一次改进是中间里程碑，不是任务完成条件。GPT 负责识别决策结构、设计动作和实现映射；求解器、CP、DP、图算法负责具体搜索；独立 checker 决定能否更新 incumbent。不要把目标改成证明最优或提升 lower bound。

## Primal 优先的任务约定

- **默认持续优化 primal，完全不要求 dual 改进。** 每次找到更好的原模型可行解都只是阶段成果；没有 incumbent 时，先找到首个完整可行解，然后继续改善。不要求产生新 lower bound、缩小 primal-dual gap 或证明最优。
- 默认不为 dual-bound 研究、全局最优性证明或证明证书生成分配专项预算。primal 停滞时换构造、表示、邻域或种子，不自动转做 dual；只有用户另行要求才扩展目标。
- LP 松弛、reduced costs、局部求解器和结构 cuts 可以作为直接帮助候选构造、变量选择或修复的辅助工具；按对已验证 primal 的收益决定是否继续，不以 dual 数值改善替代成果。求解器内部自然更新 bound 无需禁用。
- 最终验收只要求原模型可行性和目标值确有改善；dual bound 与 gap 是可省略的附加信息。可行性验证不等同于最优性证明，仍须完成。

## 先做可复用的最小诊断

1. 固定原始模型、SHA-256、目标方向与常数、baseline 来源/日期、已知解和可用预算。同时保留公开 headline 与独立验证后的 baseline；二者可能不同。无解时先求可行，不与 `inf`、`=unkn=` 或 solver sentinel 做普通差值。
2. 查已有结果和负记录。对本仓库可运行 `python scripts/case_lookup.py --name INSTANCE`，只加载匹配的条目。该索引固定于 2026-09-14 的提交；继续实验前检查是否有更新。已证明同一原模型不可行或 incumbent 全局最优时先核对证据，停止无意义 primal 搜索。
3. 用可信原生解析器读取变量类型、行、目标支撑、indicator/SOS 等扩展结构。输出一页结构卡：**真实离散决策、可补全辅助变量、耦合约束、可用解、已关闭邻域**。不要把原 MPS 或巨大行签名全塞进上下文。变量名和 DEC 仅是线索；例如 tugela 的车辆列交错，dws012 的小 DEC 块可能没有私有变量。
4. 若需要，用一次短 baseline 区分：没有完整可行解、坏 integer pattern、连续 recourse 可修复、局部盆地困住、或原表示难以搜索。时间上限应包含读入、建模、lift 和验证开销，而不仅是 solver `TimeLimit`。不以同一参数轨迹重复运行充当不同方法。

## 依据当前证据选首条路线

| 信号 | 优先动作 | 本仓库依据 |
|---|---|---|
| 有兄弟模型、历史见证、相同底层数据 | 验证映射；迁移离散设计；在目标原模型补全/修复 | bley_xs1noM、dws012-02、CVRP、nj |
| 没有完整可行解 | 保持配额/连通/先序的结构构造；处理难块；组合后全局验证，再 warm-start | ns1905797、nj |
| 固定整数后只剩 LP/流/差分约束 | 修复连续 recourse，建立可靠 incumbent；记录是否只是数值 polishing | sing17；多个容差反例 |
| 大量辅助变量包围小型选择/次序核心 | 在核心上构造，确定性 lift；每个候选回原模型 | liu、FHNW、allcolor58、henty |
| 单点或小邻域已失败，存在资源/空间关联 | 多车辆、连续时间窗、几何边界、相关机组的联合 destroy-and-repair | tugela、rmine15、supportcase39 |
| 不同可行解有大块差异，单调下降停滞 | 差异邻域/recombination；保留 best，允许有界变差 kick 再下降 | nj；sing/gmut 的负记录 |
| 尚无可信结构路线 | 用已验证 start 跑有界 primal-focused baseline；与结构路线按同预算比较 | nag 的通用求解器成功 |

详细机制、公式及各路线的最小检查见 [search-playbook.md](references/search-playbook.md)。历史成败证据见 [casebook.md](references/casebook.md)。不要因为某案例成功就把它的窗口大小、编号模运算或参数强加给别的模型。

## 执行搜索闭环

每个 pilot 先写：`观察 → 动作 → 保持哪些不变量 → 放开什么变量 → 如何补全 → 验证方式 → 换路条件`。

- **有可行解就尽快喂给后端。** 完整解先审计，再 warm-start；部分 hints 只用于搜索，不能作为验证。结构构造与通用求解器可以交替，不必二选一。
- **优先释放语义决策而非任意 bits。** 例如一条路线、一个矿块的开采时刻、一个构件类别。保留相关 coupling rows，通常让连续 recourse 自由；零目标成本变量也可能控制可行性，不能自动全部固定。
- **改变表示或邻域，而不只换随机种子。** 小邻域快速无改进时增大/连接 destroy；大邻域一直无可行候选时缩小并保留构造不变量。对多个有效算子，用“验证后收益、完整耗时、可行率、结构多样性”分配后续预算，保留少量探索预算。这是待校准的策略，不是已证明的最佳配比。
- **记住局部排除的精确范围。** 记录中心解哈希、free set、固定变量、anchor、cutoff、是否完整终止。只有同中心同约束的已覆盖范围才能跳过；新 incumbent 通常使旧邻域结论失效。`TIME_LIMIT/UNKNOWN` 不等于该邻域不可行。
- **分别保存 current 与 best。** kick/tabu 允许 current 暂时更差；best 只由通过验证的更优原模型解替换。对相同整数签名去重，除非这次明确在重做连续 recourse。
- **每次改善后继续下一轮。** 验证并保存新的 best，更新 warm-start、搜索中心和目标 cutoff，重新评估受中心变化影响的邻域记录，然后继续搜索。阶段汇报不结束任务；保留有价值的历史解用于重组和多起点，不能只因已有一次改善就交付终止。

## 持续搜索与终止条件

- 外层循环持续到用户给定的总时间/计算预算耗尽、用户明确要求停止，或已有可靠的全局证据证明无法进一步改善。若只是一个 pilot、一个种子或一个邻域用完预算，切换或续跑下一轮，不结束整个任务。
- 一段时间没有改进、局部最优、某个 cutoff 搜索超时、完成预设数量的算子，都只触发换路。它们不等于全局无法改善；不因此转向 dual 研究或自行提前停止。
- 若用户未给总预算，先按有界批次滚动推进并在进展中询问总预算；自行设定的单批时限不是用户的总时限，不得用它在首次改善后结束任务。持续搜索不代表授权无限费用或新的后台自动化。
- 发生运行环境/资源阻塞时保存 best 和完整恢复状态，明确报告阻塞；不声称优化已完成。系统中断也应留下可继续的状态，不把首次成果当成结束依据。
- 预算内预留最终落盘和验证成本；终止时报告最终 best、改善轨迹、总耗时及具体停止原因。除非用户明确改为“只找一个更好的解”，不得采用 first-improvement 即停止的任务策略。

## 验收是 incumbent 更新的门槛

按 [validation-and-measurement.md](references/validation-and-measurement.md) 重读**实际落盘解文件**，在 untouched original model 检查所有变量域、普通行、激活 indicator/SOS 等、目标方向与常数。拒绝 NaN/Inf、重复或未知变量。稀疏缺项是否为零要由格式约定决定。

`integer-fix + recourse optimize` 是生成新解；`all-variable-fix` 是检查原候选，两者分开。MIP start 被接受不表示原向量已经通过检查。数值可行、精确有理可行和有限精度 Decimal-zero 分开报告；不把固定子问题 `OPTIMAL` 写成原问题最优。

输出应区分：`first_feasible`、`strict_improvement`、`recourse_improvement`、`numerical_polish`、`repair_only`、`reproduction/transfer`、`no_improvement`。出处与数值改进是两个维度；同一底层解迁移到三个 formulation 是三个有效向量，不是三次独立发现。

## 持久记录与交付

保存 `best.sol`、`validation.json`、`run_manifest.json`、`experiments.jsonl` 和可重放命令。最小状态记下 incumbent/模型哈希、目标、整数签名、当前路线、最近失败与下一动作，确保上下文压缩后不重复旧工作。

可用 `python scripts/summarize_runs.py experiments.jsonl` 汇总**已记录验证结果**的 primal 轨迹；它不替代 MPS checker。格式见测量参考。最终直接报告旧值→新值、改进归因、完整用时、验证等级和局限，附解/验证路径。

## 证据边界

本 skill 源于 112 题逐题 README/结果记录调查和关键案例报告/源码复盘。最新表为 19 个数值改进（含 sing17 polishing）+4 个首次有限解；旧 22 项验证批次另存。完整逐题索引见 [instances.md](references/instances.md)，机器索引见 [instances.json](references/instances.json)。这不是随机对照试验，没有证明本 skill 能普遍加速；按相同输入、start、硬件与预算进行后续 A/B 验证。
