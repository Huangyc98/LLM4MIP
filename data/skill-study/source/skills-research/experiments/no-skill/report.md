# MIPLIB 20例结果汇总与证据报告

编制日期：2026-09-13（Asia/Shanghai）。这是已完成实验的历史结果汇编，没有启动新的求解、复用其他实验臂结果或重启通知任务。公开比较值采用各次实验冻结的访问记录，不冒充2026-09-13实时世界纪录核查。

## 1. 核心结论

20例均已有最终结果和原始空间可行解验证记录，均保持开放。本次汇总采用前四批16例的已封存结果，以及刚完成的干净Batch5四例；旧Batch5失败/待发布状态不作为四例最终结果，也不将重复实验累加计数。

| 统计口径 | 例数 | 说明 |
| --- | ---: | --- |
| 低于实验时记录公开primal的已验证新解 | 2 | graphdraw-grafo2、r4l4-02-tree-bounds-50 |
| 额外改进严格接受参考，但未低于公开headline | 1 | shipsched；与上述2例不重叠 |
| 本实验搜索产生的最终可行点 | 7 | 含上述3例、cdma、seqsolve1、stockholm、sandon；不等于7项新纪录 |
| 外部复验、模式补全或公开水平保留 | 13 | 不归为新的GPT离散设计贡献 |
| 具有原始空间可行性检查的最终点 | 20 | 前16例为1e-7数值门槛；新Batch5四例另有完整精确有理复验 |
| 原始问题全局最优证明 | 0 | 固定变量重放或固定整数连续完成的OPTIMAL不计 |
| 当前官方数值dual已知 | 0 | 无法核定新增世界dual纪录，不能把未知基线写成0 |
| 新Batch5非平凡精确有效下界证据 | 3 | seq4250、stockholm16、sandon4737730；不等于公开dual纪录 |

若“primal更好的有几个”指比记录的公开headline更好，答案是2；若还包括比经过严格验证的公开参考更好，则是3。optimal为0。

记录的每例有效研究时间为90.003–107.520分钟，合计1862.153492实例分钟（约31.036实例小时）。这是四例并行情况下的逐例时间之和，不是现实墙钟总用时，也不是CPU线程小时。本报告不把未记录的闲置等待补进有效时间。

## 2. 来源、配置与可比性

- 前四批：[原实验清单](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/manifest.md)；[16行结果表](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/summary.interim.csv)；逐例最终报告与原始检查输出。根总报告仍有Batch5待完成标记，仅作历史说明，不能直接当作20例最终报告。
- Batch5：[干净实验最终报告](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/report.md)；[四行结果表](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/summary.csv)；逐例final_record和精确原始MPS检查。
- 共同计算主机：euler4，wyc，数据盘/data1；双路Intel Xeon Platinum8358，64物理核/128逻辑线程，约503GiB RAM，Ubuntu20.04.6；默认Seed=20260911。ger的一次预注册多样化运行改为20260912，有事前台账，不称所有运行种子完全一致。

| 项目 | Batch1–4 | 干净Batch5 |
| --- | --- | --- |
| 主搜索 | Gurobi CLI13.0.1 | gurobipy/Gurobi13.0.2 |
| 独立模型/向量核验 | gurobipy13.0.2 | 原始读取、独立求和及十进制有理检查 |
| 每实例搜索线程 | 16 | 8 |
| SoftMemLimit实际参数值 | 96 | 32 |
| 研究窗口 | 原清单90–150分钟 | 按冲突约束交集90–120分钟 |
| 搜索/接受容差 | 搜索逐日志；候选严格门槛1e-7 | 搜索1e-7；验证LP/recourse1e-9并有日志理由 |
| 起点 | 部分原始针对性试验使用已验证公开解/公开模式 | 仅使用本轮基线产生的已检查起点；外部support110未用于搜索 |
| Codex设置 | 原清单gpt-5.6-sol / ultra | 用户界面确认5.6Sol / Ultra，非运行时独立识别 |

旧清单将SoftMemLimit96标为“GiB”，该标签与求解器参数单位不一致：官方定义GB=10^9字节。这里保留原清单原文归属，但按日志参数解释为96GB；Batch5为32GB。两者都是软限制，不是操作系统硬内存上限。[Gurobi参数定义](https://docs.gurobi.com/projects/optimizer/en/current/reference/parameters.html#softmemlimit)（本次汇总核对日期2026-09-13）。

因此本报告是跨运行证据汇编，不是相同版本、资源、预算和热启动条件下的单一统一20例对照试验。不能从最终gap或单次针对性试验效果直接推断算法因果优越性。

## 3. 20例总览

全部为最小化。P为最终通过门槛的原始空间primal；D为可计原始问题的最强数值全局下界，不是精确分支树证明。gap=100×|P−D|/|P|。负目标或很弱的下界可使gap超过100%，不裁剪。表内gap/时间仅为显示舍入，P和D保留源表精度。

| 批次 | 实例 | 已验证P | 数值全局D | gap(%) | 有效分钟 | 结果来源 |
| ---: | --- | ---: | ---: | ---: | ---: | --- |
| 1 | [graphdraw-grafo2](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/graphdraw-grafo2/final_report.md) | 68609.5 | 36415.8465747 | 46.923026 | 90.003 | 新生成；公开primal改进 |
| 1 | [polygonpack4-10](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/polygonpack4-10/final_report.md) | -53594508.70758318 | -93676649.5393 | 74.787775 | 95.025 | 外部离散模式连续补全 |
| 1 | [scpm1](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/scpm1/reports/final_report.md) | 537 | 415 | 22.718808 | 95.633 | 外部解复验 |
| 1 | [ger50-17-trans-dfn-3t](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/ger50-17-trans-dfn-3t/final_report.md) | 3969.433399999997 | 3917.155362335 | 1.317015 | 95.003 | 外部离散模式连续补全 |
| 2 | [eva1aprime6x6opt](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/eva1aprime6x6opt/final_report.md) | -18.100995280293148 | -239.4227696265 | 1222.705000 | 107.520 | 外部离散模式连续补全 |
| 2 | [cmflsp60-36-2-6](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/cmflsp60-36-2-6/final_report.md) | 73891245.64760005 | 73188341.59842 | 0.951268 | 91.004 | 外部离散模式连续补全 |
| 2 | [r4l4-02-tree-bounds-50](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/r4l4-02-tree-bounds-50/reports/final_report.md) | 499110528 | 480648435.4129 | 3.698999 | 90.008 | 新生成；公开primal改进 |
| 2 | [sct1](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/sct1/reports/final_report.md) | -187.52764944960393 | -200.2450490980 | 6.781613 | 94.339 | 外部离散模式连续补全 |
| 3 | [shipsched](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/shipsched/reports/final_report.md) | 111919.9869111547 | 81014.60455187 | 27.613819 | 91.023 | 新生成；仅严格参考改进 |
| 3 | [rocII-8-11](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/rocII-8-11/reports/final_report.md) | -8.739844934961763 | -11.8377922287 | 35.446250 | 92.478 | 外部离散模式连续补全 |
| 3 | [ns1856153](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/ns1856153/reports/final_report.md) | 34.16347439886857 | 0.003362513402564 | 99.990158 | 93.660 | 外部离散模式连续补全 |
| 3 | [dc1l](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/dc1l/reports/final_report.md) | 1758647.6800999984 | 1749186.534225 | 0.537978 | 90.021 | 外部解复验 |
| 4 | [neos-5221106-oparau](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/neos-5221106-oparau/reports/final_report.md) | 52.669999994631496 | 0.0 | 100.000000 | 90.060 | 公开水平解保留 |
| 4 | [zeil](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/zeil/reports/final_report.md) | 1081.3585000000078 | 815.3797428765 | 24.596723 | 90.165 | 公开水平解保留 |
| 4 | [cdma](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/cdma/reports/final_report.md) | -22966095679999980 | -31763448000000000 | 38.305825 | 90.023 | 新生成；非公开改进 |
| 4 | [ns1456591](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/ns1456591/reports/final_report.md) | 988.1412834399998 | 473.415027263 | 52.090350 | 90.022 | 外部ID2复验 |
| 5 | [seqsolve1](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/seqsolve1/final_report.md) | 4279 | 4272 | 0.163590 | 93.670 | 新生成；非公开改进 |
| 5 | [stockholm](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/stockholm/final_report.md) | 129 | 106 | 17.829457 | 99.823 | 新生成；非公开改进 |
| 5 | [supportcase22](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/supportcase22/final_report.md) | 110 | 1.4000000000000001 | 98.727273 | 92.353 | 外部解精确复验 |
| 5 | [neos-3682128-sandon](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/neos-3682128-sandon/final_report.md) | 34666770 | 21672926.242906883 | 37.482130 | 90.322 | 独立再发现公开值 |

新Batch5精确下界单列：seqsolve1=4250，stockholm=16，supportcase22=0，sandon=4737730。它们一般弱于表内数值界，但有不同的数学证据等级，不能混为一谈。

## 4. 逐例结果、测试方向及失败经验

### Batch1 — graphdraw-grafo2

记录的官方primal：`68613.49999999868`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_graphdraw-grafo2.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。图绘制节点布置：203455 行、9258 列。2211 个成对选择行和191620 个三角一致性行使节点相对位置强耦合。

先做原始模型基线，再做 MIPFocus=1/RINS 邻域搜索和对称性/下界阶段。新解68609.5 比记录的公开68613.49999999868 低约4；不是把公开解复验误算成新贡献。后续证明阶段未提高最强下界，保留基线36415.8465747。

最终P=`68609.5`，数值D=`36415.8465747`，gap约46.923026%；记录有效时间90.003000分钟，源表solver时间90.003000分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/graphdraw-grafo2/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/graphdraw-grafo2/verification/primal/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：以该新解为统一起点，比较多实体位置邻域；对称性策略必须用相同预算、起点和多个种子复测。

### Batch1 — polygonpack4-10

记录的官方primal：`-53594508.70758325`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_polygonpack4-10.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。不规则多边形装箱：65935 行、20537 列，只有20 个连续坐标，其余为有界整数选择变量；坐标列耦合广、目标尺度大。

公开最新序列化解在两行超过1e-7，最大约9.57e-7。保留其整数模式并重新计算连续坐标后得到严格可行解，仍归属外部模式补全。四个原始模型方向未产生新公开 primal，最终下界仍远离 primal。

最终P=`-53594508.70758318`，数值D=`-93676649.5393`，gap约74.787775%；记录有效时间95.024500分钟，源表solver时间95.024500分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/polygonpack4-10/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/polygonpack4-10/verification/tailored_numeric_bound/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：先改善原始空间数值表达与坐标完成的可靠性，再研究多边形联合位置/旋转邻域；变换模型须保存等价映射。

### Batch1 — scpm1

记录的官方primal：`537 live page; 540.0 v36 (preserved conflict)`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_scpm1.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。加权集合覆盖：5000 行、500000 个有效二进制变量、6250000 个单位非零项；成本1–100。

实时页面537 与v36 状态文件540 冲突，公开537 复验通过，不能将540→537 算成本次改进。成本1 子模型界418 只适用于限制模型，明确不计为原问题 dual；最强可计原始模型界415。中断运行保留为失败/过程证据，不用于提高全局界。

最终P=`537`，数值D=`415`，gap约22.718808%；记录有效时间95.633300分钟，源表solver时间83.529600分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/scpm1/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/scpm1/verification/original_primal_resume_537/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：测试保留覆盖可行性的多列交换及完整成本空间的定价/覆盖割；不要把成本1 限制模型当作松弛。

### Batch1 — ger50-17-trans-dfn-3t

记录的官方primal：`3969.4334`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_ger50-17-trans-dfn-3t.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。多层网络设计链路流模型：499 行、22414 列，4352 个连续流和18062 个整数设计变量。

公开流向量有39 行超过1e-7，最大约6.72e-7。固定外部整数设计并重新计算流得到严格可行解，未生成新设计。网络割及证明方向均未超过基线下界3917.155362335。

最终P=`3969.433399999997`，数值D=`3917.155362335`，gap约1.317015%；记录有效时间95.002700分钟，源表solver时间83.529600分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/ger50-17-trans-dfn-3t/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch1/ger50-17-trans-dfn-3t/verification/repaired_external_pattern/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：在完整设计空间测试容量割与设计变量联合邻域，优先保留可复验的多商品流完成流程。

### Batch2 — eva1aprime6x6opt

记录的官方primal：`-18.101469789649965 headline; official exact field -18.100995 (preserved conflict)`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_eva1aprime6x6opt.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。周期负热膨胀框架拓扑设计：34872 行、3514 列，836 个离散变量、2678 个连续变量。

公开 headline -18.101469789649965 与其 exact 字段约-18.100995 冲突；headline 向量四行违规，最大约5.28e-6。两份求解器候选也未过严格门槛。最终值是公开ID5 的零离散距离连续补全，不是新拓扑。

最终P=`-18.100995280293148`，数值D=`-239.4227696265`，gap约1222.705000%；记录有效时间107.520000分钟，源表solver时间91.001700分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/eva1aprime6x6opt/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/eva1aprime6x6opt/verification/tailored_primal_repaired/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：分析刚度/位移约束的数值尺度与结构化拓扑邻域；先确保每个候选在原始模型上可严格复验。

### Batch2 — cmflsp60-36-2-6

记录的官方primal：`73891245.38458699`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_cmflsp60-36-2-6.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。有容量多家族批量计划：6388 行、42192 列；39960 个连续流、2160 个物料期设置和72 个家族期变量。

公开ID3 接近可行，但15 个Balance 行仍违规，最大约9.80e-7。固定外部设置模式、重新计算流得到73891245.64760005，比名义headline 约差0.263，因此不计 primal 改进。设施/流割阶段得到原始模型下界73188341.59842。

最终P=`73891245.64760005`，数值D=`73188341.59842`，gap约0.951268%；记录有效时间91.003800分钟，源表solver时间91.003800分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/cmflsp60-36-2-6/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/cmflsp60-36-2-6/verification/tailored_proof/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：围绕跨期设置设计 fix-and-optimize，并测试有明确原始有效性证明的容量/家族聚合割。

### Batch2 — r4l4-02-tree-bounds-50

记录的官方primal：`499132179.0015595`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_r4l4-02-tree-bounds-50.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。周期事件调度PESP：4768 行、11468 列。1932 个节点、4768 条边，循环秩2837，与非固定偏移变量数一致。

公开小数向量轻微超容差，声明的表示规范化得到已验证参考499132179。原始模型针对性试验阶段生成499110528，严格改进21651；也优于记录headline499132179.0015595。下界较基线479399658.1474 提高到480648435.4129。个例Markdown 四舍五入成480648435.413，本报告以原始终止日志/解析JSON 的.4129 为准，并保留这一显示精度差异。

最终P=`499110528`，数值D=`480648435.4129`，gap约3.698999%；记录有效时间90.007800分钟，源表solver时间90.007800分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/r4l4-02-tree-bounds-50/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/r4l4-02-tree-bounds-50/verification/tailored_bound_3000s_strict/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：根据循环空间构造PESP 有效割和循环邻域；目前未闭合约3.699% 的gap。

### Batch2 — sct1

记录的官方primal：`-187.527650839031`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_sct1.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。Siemens 印制电路板装配线平衡：12154 行、22886 列；大量双项蕴含/链接行并伴随强对称性。

公开及基线序列化的小残差未过严格门槛，最终是公开离散模式规范化后的连续补全。配对Symmetry=2/0 试验中前者下界-200.2450490980 优于后者-200.4868246922，但单次配对不足以声称普遍性能优势。

最终P=`-187.52764944960393`，数值D=`-200.2450490980`，gap约6.781613%；记录有效时间94.339300分钟，源表solver时间90.004200分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/sct1/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch2/sct1/verification/public_id2_repaired/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：用匹配起点与多种子重测对称性处理，并结合装配结构构造有效不等式。

### Batch3 — shipsched

记录的官方primal：`111919.8337342348 (public decimal vector fails strict 1e-7 integrality gate)`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_shipsched.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。基尔运河船舶调度：45554 行、13594 列，10549 个离散先后/路线变量和3045 个连续时间变量。

公开headline111919.8337342348 的整数误差约7.5337e-7，未过本实验门槛。严格接受的ID5 为111920，针对性试验新解111919.9869111547 改进0.0130888453，并改变59 个离散值；这是真实严格参考改进，但不低于headline，不能算公开纪录。候选有小于门槛的整数偏差，数值检查通过不等于精确整数可行证明。

最终P=`111919.9869111547`，数值D=`81014.60455187`，gap约27.613819%；记录有效时间91.022686分钟，源表solver时间90.007452分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/shipsched/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/shipsched/verification/tailored_primal/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：测试运河局部先后关系邻域，同时在固定离散模式下完成时间变量；明确分开严格参考与名义headline。

### Batch3 — rocII-8-11

记录的官方primal：`-8.739845350261154 (public decimal vector fails strict 1e-7 row gate)`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_rocII-8-11.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。有界信任舆论/竞选控制：42374 行、18390 列，18106 个整数变量和284 个连续状态变量。

公开ID2 有21 行超过1e-7，最大约1.1812e-6。保留其全部整数值重算连续轨迹得到严格外部派生解。原始模型证明阶段的数值下界提高到-11.8377922287，但仍未闭合。

最终P=`-8.739844934961763`，数值D=`-11.8377922287`，gap约35.446250%；记录有效时间92.478002分钟，源表solver时间91.022140分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/rocII-8-11/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/rocII-8-11/verification/tailored_proof/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：在阈值附近优先研究数值稳健轨迹完成与结构割，再测试真正改变整数控制模式的邻域。

### Batch3 — ns1856153

记录的官方primal：`34.16346179965939 (public decimal vector fails strict 1e-7 row gate)`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_ns1856153.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。35407 行、11998 列，只有42 个连续变量。完整矩阵/属性检查认证5551 个变量互换对，涉及约92.5321% 的变量。

公开34.16346179965939 在32 行未过严格门槛，最大约8.0752e-7。固定其整数模式重算42 个连续变量后取得34.16347439886857。Symmetry=2/MIPFocus=3 将数值界从0.003063714160373 提至0.003362513402564，改进很小，不构成求解成功。

最终P=`34.16347439886857`，数值D=`0.003362513402564`，gap约99.990158%；记录有效时间93.659822分钟，源表solver时间90.393667分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/ns1856153/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/ns1856153/verification/external_integer_pattern_completion_strict/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：在已认证的对称群基础上研究对称性破除与代表选择，同时保留原始问题等价性证据。

### Batch3 — dc1l

记录的官方primal：`1758647.6801`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_dc1l.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。1653 行、37297 列，35638 个有效二进制变量；整体高度对称而耦合，并非独立小组件。

公开水平primal 已严格复现。基线、邻域与对称性证明阶段未生成更好公开primal，但得到1749186.534225 的最强原始模型下界，gap 约0.538%，仍非最优。

最终P=`1758647.6800999984`，数值D=`1749186.534225`，gap约0.537978%；记录有效时间90.021029分钟，源表solver时间90.004129分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/dc1l/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch3/dc1l/verification/final_best/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：固定统一已验证起点开展对称性/割的匹配预算复测，并优先审计接近闭合时的原始数值证据。

### Batch4 — neos-5221106-oparau

记录的官方primal：`52.67 (strict public ID3 recomputation 52.66999999999962)`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_neos-5221106-oparau.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。13897 行、25445 列；25120 个二进制编码变量与325 个非负连续变量，四个大块和主耦合行。

公开ID3 严格复验后用于对称性/割针对性试验。最终P 与公开重算值仅差约5.37e-9，小于1e-7 比较门槛，不算新primal。最强原始数值下界仍为0，gap100%。

最终P=`52.669999994631496`，数值D=`0.0`，gap约100.000000%；记录有效时间90.060219分钟，源表solver时间90.024608分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/neos-5221106-oparau/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/neos-5221106-oparau/verification/final_treatment_strict/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：优先建立非平凡原始有效下界；针对主耦合块研究可审计的分解松弛，而非重复通用参数试验。

### Batch4 — zeil

记录的官方primal：`1081.358500000008`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_zeil.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。德国铁路时刻表微调与用电峰值控制：81558 行、70116 列；42 列车的时刻表块链接秒级功率与72 个15分钟平均行。

公开水平P 已复验，针对性试验/公开差约2.27e-13，不是新贡献。MIPFocus=3 将原始数值下界814.2526823245 提到815.3797428765，属于本轮内部下界改进而非已核实公开dual纪录。

最终P=`1081.3585000000078`，数值D=`815.3797428765`，gap约24.596723%；记录有效时间90.165281分钟，源表solver时间90.013692分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/zeil/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/zeil/verification/final_treatment_strict/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：围绕列车时间位移与功率峰值窗口测试结构化邻域及有原始有效性证明的聚合割。

### Batch4 — cdma

记录的官方primal：`-2.4778479031200824e16`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_cdma.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。3G 无线复用：9095 行、7891 列，4235 个二进制、3656 个连续变量；目标与系数尺度很大。

两个公开整数模式完成均失败，针对性试验未用公开热启动。针对性试验产生新向量，但其目标差于公开值，故仅算新生成可行点。原始解头与直接目标重算差4 个绝对单位；追加规范化只改头部，7891 个赋值全不变，才通过严格检查。保留更强基线下界-31763448000000000。

最终P=`-22966095679999980`，数值D=`-31763448000000000`，gap约38.305825%；记录有效时间90.023087分钟，源表solver时间89.924996分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/cdma/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/cdma/verification/final_treatment_header_normalized_strict/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：先进行目标累计与高尺度约束的稳健审计，再研究数值表达或等价缩放；所有回映必须保持原始空间赋值证据。

### Batch4 — ns1456591

记录的官方primal：`988.1405440676191 headline ID3; strict accepted fallback ID2 988.1412834399998`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_ns1456591.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。1997 行、8399 列：8000 个二进制、19 个其他整数、380 个连续变量，20 重块角分配/基数模式。

headline ID3=988.1405440676191 的最大行/整数违规约8.275705929428057e-7，超过1e-7，故被拒。“拒绝”仅指该向量未达实验检查门槛，不代表模型不可行，也不等于公开作者结论错误。严格ID2=988.1412834399998 是回退参考，针对性试验没有改进；最强下界473.415027263 来自基线。

最终P=`988.1412834399998`，数值D=`473.415027263`，gap约52.090350%；记录有效时间90.021578分钟，源表solver时间90.002654分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/ns1456591/reports/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/ns1456591/verification/public_id2_strict/verification.json)。核验等级：原始空间1e-7数值检查 + 固定向量可行性重放；非全模型精确有理证明。

后续建议（尚未执行）：研究主耦合/基数约束有效割及多块联合邻域；任何ID3 修复须单独计外部派生来源。

### Batch5 — seqsolve1

记录的官方primal：`4277`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_seqsolve1.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。242243 行、207665 列；矩阵支持337 人、498 个站点、5 个工作日，以及每日/每周最小激活逻辑。

原始基线与整个人周Partition 邻域产生并精确验证4279，未优于公开4277。最强数值界4272 来自基线；两种原始有效流/割证书均给精确4250，18 个结构选出的残余割未加强。历史提交README 的4275 独立保留，不冒充当前官方dual；本次界也未超过它。

最终P=`4279`，数值D=`4272`，gap约0.163590%；记录有效时间93.669796分钟，源表solver时间89.925443分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/seqsolve1/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/seqsolve1/verification/postsolve/candidate_0/decimal_check.json)。核验等级：完整原始MPS 十进制/有理精确可行性复验。

后续建议（尚未执行）：比较匹配起点/预算的多人、站点割感知邻域；残余限制模型界不能转成原问题全局界。

### Batch5 — stockholm

记录的官方primal：`120.9999950202855`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_stockholm.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。57346 行、20644 列；45 个潜势/网络块与962 个激活变量，矩阵支持Farkas 激活覆盖分离。

406 个精确Farkas cover、所有oracle 快照和实际增广模型均独立审计。16 个互不相交cover 给精确下界16。新搜索点129 经固定离散连续完成与有理恢复，原始MPS 精确可行；数值界105→106。均未超过公开primal约121，且106 不是精确树证明。

最终P=`129`，数值D=`106`，gap约17.829457%；记录有效时间99.822958分钟，源表solver时间86.299587分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/stockholm/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/stockholm/verification/final_rational_recovery/decimal_check.json)。核验等级：完整原始MPS 十进制/有理精确可行性复验。

后续建议（尚未执行）：增强全局cover 组合与可验证原始LP 对偶证书；以匹配起点试验多块联合激活邻域。

### Batch5 — supportcase22

记录的官方primal：`110`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_supportcase22.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。260602 行、7129 个二进制变量；三比特奇偶结构、OR 活动辅助变量及大量守卫约束。

完整真值/分支证明支持180 个OR 割与232400 个16→1 守卫收紧；实际增广模型与原始变量/目标/行身份全部审计。搜索没有生成可行解，最终110 是Taylor Solver 公开解的精确复验，且未用于热启动。数值界0.8→1.4，精确可计下界仍0。

最终P=`110`，数值D=`1.4000000000000001`，gap约98.727273%；记录有效时间92.352976分钟，源表solver时间89.611527分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/supportcase22/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/supportcase22/external/public110_native_header_retry/decimal_check.json)。核验等级：完整原始MPS 十进制/有理精确可行性复验。

后续建议（尚未执行）：基于奇偶传播与活动变量开展结构化可行性搜索；任何SAT/PB 或简化模型必须证明等价或松弛方向。

### Batch5 — neos-3682128-sandon

记录的官方primal：`34666767.4743958`。当前官方数值dual：未公布/未知。[官方实例页](https://miplib.zib.de/instance_details_neos-3682128-sandon.html)（采用原实验冻结访问记录，不代表本次重新核查实时页面）。14920 行、7880 个整数变量：7870 个0/1 变量、5 个零目标hub 变量及5 个带成本WIP 变量。

五个矩阵链接hub 邻域/赋值优先级独立重获34666770，没有公开热启动。比浮点headline34666767.4743958 大，不能制造“5 单位新改进”。原始LP 权重与统一缩放证书因无界列不利残差被拒；最终原始行精确锚定修复通过，结合5 单位目标格点得精确4737730。最强数值界21672926.242906883 仍来自基线。

最终P=`34666770`，数值D=`21672926.242906883`，gap约37.482130%；记录有效时间90.321657分钟，源表solver时间89.980971分钟。停止原因：已完成计划阶段、达到研究下限，测试方向未取得原问题全局闭合；仍开放。

证据：[个例最终报告](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/neos-3682128-sandon/final_report.md)；[最终点原始空间检查](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/neos-3682128-sandon/verification/postsolve/candidate_0/decimal_check.json)。核验等级：完整原始MPS 十进制/有理精确可行性复验。

后续建议（尚未执行）：研究更强原始有效LP/组合证书与跨hub 邻域；保留无界列的精确约化成本检查，勿从不合法Pi 推dual。

## 5. 证据等级与不计入的结果

- 前16例均有完整赋值、所有原始边界/整数性/线性行及目标重算的1e-7检查，并有固定向量原始模型可行性重放。小于容差的残差仍可能非零，不能说20例都“精确有理可行”。例如shipsched的整数距离约5.94e-8虽通过门槛，仍不是整数精确等式。
- 新Batch5四例的最终点有独立十进制MPS/Fraction检查，原始界限、整数性和每行均精确满足；精确可行性仅证明primal有效，不证明全局最优。
- Gurobi正常结束的原始模型TIME_LIMIT下界有可追溯数值证据，不将NUMERIC、错误、中断/未完成或无界残差错误的证书升级为证明。增广模型界还须检查所有新割原始有效性及实际模型身份。
- scpm成本1限制界418、seq限制邻域界、固定离散完成的OPTIMAL、固定向量重放的OPTIMAL均不转成原问题dual/optimal。
- 非法/未达严格门槛的公开serialization保留为负证据；重新完成公开模式仍归属外部。公开作者成果、重新发现和新生成改进分开计数。
- 目标头部规范化不改变模型或赋值。cdma的4单位头部修正不构成4单位新搜索改进；sandon浮点值到5单位格点的规范化也不构成新primal纪录。

## 6. 控制偏差、复现限制及跨例经验

历史偏差详见[不可省略的协议偏差台账](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/meta/protocol_deviations.md)。本汇总保留以下限制，不能宣称整个20例严格无偏差：

1. Batch3曾短暂出现第五个验证求解进程：rocII一次约0.133249秒；shipsched两次合计约0.052451秒。验证进程请求16线程、实际日志为1线程；请求总容量曾达80线程，违反原并发控制。它们未搜索生成新候选/dual，也不计有效时间，但违规事实不因此消失。
2. Batch3进行中曾用不足2秒重读已完成Batch1–2证据做完整性检查。按保守的“实例分析也计活跃”口径触碰了四例以上；不计时间、不产生新解，后续完整性核验推迟到当前批结束。
3. 预求解日期选项/空marker错误、SHA转录错误及cdma两次失败关闭均保留；不据此修改原算法或选择性抹除失败。cdma第一次完整失败阶段权威时间0.775999577秒，不能再叠加旧台账约0.52秒的内部估计。
4. 旧Batch4两份早期可变gate脚本字节版本未独立保留；台账hash链及当前最后引用可验，但不声称能重建所有历史脚本字节。新Batch5早期manifest重试覆盖了失败快照；初始基线驱动未在启动时取SHA，归档为本轮创建补丁重建版本。这些审计缺口已在原报告中公开。
5. 源表时间精度与solver_minutes口径不同，不能把合计解释为严格统一的“全部优化调用时间”。例如ns1856153记录主要正式搜索，而另一些记录包括验证；scpm源表solver=83.5296分钟未完整反映受限/中断调用，汇总不将其当作完整算力消耗。eva源表有效107.52分钟包含记录的非求解工作，单用正式搜索仍有91.0017分钟；ger有效95.0027分钟包含台账声明的480+180秒非重叠分析/验证。汇总采用既有台账，不倒填未测量时间；约31.036实例小时是记录口径的总和。
6. 每个方向是单实例、有限预算试验；seed固定不使并行MIP必然逐位可重复，分配预算/热启动与共享主机造成混杂。不将一轮失败泛化为“该算法无效”。
7. oparau、zeil的封存JSON曾误标best_primal_experiment_generated_label=true，后续[oparau来源更正](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/neos-5221106-oparau/reports/provenance_correction.json)和[zeil来源更正](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/batch4/zeil/reports/provenance_correction.json)将其更正为false。新贡献统计按更正后的来源及1e-7比较门槛，不按旧单字段直接计数。另有r4早期非fail-fast目录命令曝露主目录文件名/元数据但未读其他结果，原台账保留该事件。

跨例最明显的经验是：公开小数解的微小行残差、整数误差与目标头部不一致会改变严格可计结果；先做完整原始空间复验再比较数值。仅重算连续变量能复现多个外部离散模式，但不是新设计。矩阵验证后的循环、覆盖、网络、对称性和Boolean结构能产生有理由的实验方向；它们未在本次预算内带来全局闭合。数值界与精确证书之间仍有明显差距，需优先增强可独立复验的原始有效证据。

## 7. 证据导航、数据完整性与哈希

本次只读汇总通过[聚合数值/模型身份检查](D:/sufe/AI4MIP/reports/miplib20_aggregate_20260913/aggregation_audit.json)及独立标准库CSV/Decimal核对。前16原始哈希字段指.mps.gz字节，新Batch5指解压.mps字节；格式不同不代表模型被修改。元数据中的两类SHA必须明确区分，四个Batch5原始内容与旧公开下载内容一致。

既有镜像证据：[Batch3镜像证明](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/meta/batch3_mirror_attestation.json)；[Batch4镜像证明](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/meta/batch4_mirror_attestation.json)；[Batch5最终交付哈希清单](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/final_delivery_manifest.json)。它们是各自封存时点的证明，本次没有重新声明整棵历史文件树都已全面重新求解或逐字节重验。

| 实例 | 校验对象类型 | 本次匹配的原始SHA-256 |
| --- | --- | --- |
| graphdraw-grafo2 | compressed .mps.gz bytes | `a5528a5b80f4405206449e26933e69eb5c2465bceff303a5086a572b80bdbfed` |
| polygonpack4-10 | compressed .mps.gz bytes | `c77946405fd9fc1a53aa56dec82a1dcdef9932248c15ecc17e1ea05d49ab0969` |
| scpm1 | compressed .mps.gz bytes | `fef145329bf9dd25fd9ff59a51816c044adf41ae627a23ab8c93eeb31cffed41` |
| ger50-17-trans-dfn-3t | compressed .mps.gz bytes | `fd05921bf1e954a9123a8d686f1610c00f03f700235910962220b1f3b8d20704` |
| eva1aprime6x6opt | compressed .mps.gz bytes | `32ac7ea0015a16edc5058a6c6c2c9e8d79262b170888fc806304aaa2a51e0161` |
| cmflsp60-36-2-6 | compressed .mps.gz bytes | `ce7f3600260baaf5e8cea531d616e212723875003366014af17d8802d2909da4` |
| r4l4-02-tree-bounds-50 | compressed .mps.gz bytes | `f6dedac412b6d9e9c6ee4ad0a91c92c27027d031efcd25a62dc4a26eb39d33f3` |
| sct1 | compressed .mps.gz bytes | `49423b96c7a5f3c64590ec8f283d0111e4a7730348693e5c1f53df09542fb7a2` |
| shipsched | compressed .mps.gz bytes | `152d733821a90eae633bef181fe0e0907dc23e6a8afa8413bc98c22cc115b9f1` |
| rocII-8-11 | compressed .mps.gz bytes | `8d0f3e5aacd9ceec0e0c2618d96ba00ad87803b457adaac4542b4393af5155b1` |
| ns1856153 | compressed .mps.gz bytes | `f52ae202906c0df1bcc804b679c647cff2e62607c2b78301dff8b5d9f51a13b4` |
| dc1l | compressed .mps.gz bytes | `49d40810273a4948b8b56be538b46575b566afa2f133094a4a687f05ab7604f5` |
| neos-5221106-oparau | compressed .mps.gz bytes | `788ac2b03e5a11b39b58e616663ed598cc9523e64ff195c7c8d038e3b4459d2d` |
| zeil | compressed .mps.gz bytes | `0a841d40523d10b0b66ebd2b3ad2a24baba5a351148b6bdf77685669a513bebe` |
| cdma | compressed .mps.gz bytes | `84775da3b8e919cd5363bbe3f2a170a126b379f1f2d9cdf4b7ac70bbb93384fb` |
| ns1456591 | compressed .mps.gz bytes | `acc4972ca3c3f59ab052d7b39ca1ded34d5a685f82e0a64a95dc317839594ccf` |
| seqsolve1 | decompressed .mps bytes | `3a5b3c7a8a168ee2999013f233bd1df0a0937c2cf811bbe886d607e8123318d6` |
| stockholm | decompressed .mps bytes | `20790418ce711a9fcd3b2eae5dca34d232f6831a84830165172d01077593c23e` |
| supportcase22 | decompressed .mps bytes | `92be5f19939945c6efa5dd5c1f2ea7bca2625c1b90d0127ef2a14e2bafb81e7b` |
| neos-3682128-sandon | decompressed .mps bytes | `44935d053c0df7a6cbd28db175f324bbdfb5fa88cf0edd6d09ffc1b14bacb9b9` |

源结果表SHA-256（本次读取前后均未改变）：

- [summary.interim.csv](D:/sufe/AI4MIP/miplib20_controlled_20260911T1453CST/summary.interim.csv)：`9fa44e9ef31602d9c3d456b6ded606b6efd806a6c6c11567b4fc32229dd34346`。
- [summary.csv](D:/sufe/AI4MIP/batch5_clean_20260913T0052CST/summary.csv)：`2dfcce4b5b5cdb0a8e77c251655dac9aa0cdc766c52ff11601cf7fbff2e882cd`。

逐例最终报告和实际检查文件的路径/本次SHA-256记录于[独立汇总验证记录](D:/sufe/AI4MIP/reports/miplib20_aggregate_20260913/report_validation.json)。脚本仅读取现有证据并生成本报告，没有导入或调用Gurobi/COPT。

公开原始资料的每例官方详情直达链接在逐例段落中；下载URL模板为`https://miplib.zib.de/WebData/instances/<instance>.mps.gz`。具体URL、冻结访问日期、原始源码/文献来源及作用在20份逐例最终报告与background/source清单中。应用解释继承有来源的原记录，不用实例名称猜测代替矩阵事实。

## 8. 本次汇总实际读取的SKILL.md审计

表格技能用于只读CSV分析、保持原始观察/来源不变、区分缺失dual与0，并独立复算gap和聚合口径。没有创建/编辑/导出新工作簿，也未为了审计去读取其他skill。历史实验自己的skill审计留在各自报告，不冒充本次读入。

- 绝对路径：`C:/Users/user/.codex/plugins/cache/openai-primary-runtime/spreadsheets/26.909.12148/skills/spreadsheets/SKILL.md`
- SHA-256：`8815ade7bd0544d1c03deefd2627c9b0ba888ddf24d13a2d0bb3490f0c5505be`
