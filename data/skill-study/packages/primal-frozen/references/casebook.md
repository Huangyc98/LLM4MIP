# 成功机制与没有改进的对照案例

所有仓库链接固定于 `b329d3812c5acf51733e0e9f7baabdda7b1008d2`，读取日期 2026-09-14。这里的“为什么可复用”是机制分析，不等同于对原 GPT 决策动机或因果加速的证明。时间是历史记录，不是本次复现。

## 统计先对齐

- 总体为固定 2026-09-04 open 集合中的 112 题；另一个目录 `rmine14` 是历史校准，不在分母。
- 9 月 8 日验证包是 22 个给定向量：18 个数值改进（含 sing17）+4 个首次有限解。它验证可行性/目标，不验证新颖性或全局最优。
- 最新项目 primal 表是 **23 项**：增加 `dws012-02` 后变成 **19+4**。旧“22/22”不能外推成新 23 项的统一复验。
- `sing17` 的约 `2.47e-11` 相对变化属于数值 polishing。另有三个 fastxgemm 外部或外部派生向量优于旧公开记录，但仓库明确不计入项目 primal 贡献。
- 其余 86 题是“未列该项目 primal 表”，包括已知解最优性证明、严格修复、局部结果和未解决可行性，不能直接当成失败的 primal 算法试验。
- nj 三模型共享底层分区；FHNW pair A/B 共享底层排程数据。逐 formulation 数量不能当作独立样本量。

来源：[最新 README 结果表](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/README.md)、[旧 22 项验证报告](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/docs/comparisons/miplib-v36-primal-copt-validation-20260908/README.md)。

## 所有 23 个项目表实例的机制

| 实例 | 结果 | 改进产生的实际动作 | 对 GPT 的启发 / 归因边界 |
|---|---|---|---|
| allcolor58 | 258→42 | 从 allcolor10 公开构型出发，精确 residual 配置搜索；释放容量种类 | 固定容量达到 55/58 后停滞；允许容量变化才完成。外部种子+项目构造，不能仅归因于 parity 下界 |
| circ10-3 | 256→242 | 恢复 CIRC10 赛程编码，构造并验证 242 见证 | 利用原问题文献/构造和映射；不必从匿名 MPS 零开始 |
| bley_xs1noM | 3873690.77→3855895.86 | 兄弟解 identity-column 迁移，检查目标模型额外整数上界 | 先查数据族里的可用强解；迁移并非新的原生组合构造 |
| dws012-02 | 119893.31070966377→119443.31072434435 | 264 设计位置比较，只交换一个已选/未选位置，补全目标模型 recourse | 两个解均选 19，重合 18；其余操作决策仍须满足原行。395 DEC 小块并不能独立求解 |
| cvrpb-n45k5vrpi | 775→751 | 恢复 B-n45-k5 路线与原 indicator gadget，再 lift | 外部领域基准帮助找强种子；车数最优性论证与 primal 构造分开 |
| cvrpa-n64k9vrpi | 1617→1401 | 恢复 A-n64-k9 数据、构造路线、回填完整原向量 | 同上；原模型允许 free fleet，不能仅凭文件名断言固定九车 |
| fhnw-binschedule0 | 16088→15958 | 319319 变量→507-item interval-order；匹配/path cover 后构造 load | interval core 改变了搜索对象，lower-bound certificate 本身不生成完整解 |
| fhnw-binschedule1 | 55198→55158 | 约114万变量→773 items；colored matching 构造见证 | 除端点负载外仍须检查内部机器负载 |
| fhnw-schedule-paira200 | -19.2298568218154→-19.369961204645204 | job selection、有效冲突/能量强化和原模型排程 | 30 个 selected jobs；A/B 是同一数据集不同编码 |
| fhnw-schedule-pairb200 | -19.24094384259708→-19.3699612046452058100 | 对应 selection 与重构、原 Pair-B 全行验证 | 与 A200 共享解，不当作独立算法胜利 |
| fhnw-schedule-paira400 | -35.54680465280395→-36.27696674236886 | 安全 400-binary suffix master 与可行 schedule 重构 | 60 selected jobs；master 松弛需独立 lift |
| fhnw-schedule-pairb400 | -35.4584→-36.27696674236886 | 与 A400 对应的独立重构/交叉检查 | 早期 deadline 误读产生无效 cuts；有效 primal 可保留，错误 proof 必须撤销 |
| liu | 1083.984782 headline→1082 | 官方严格 1084 layout→sequence-pair hint→CP-SAT | 尺寸偶数+差分系统证明最优可取偶数，直接搜索1082；460.253 s 是特定阶段耗时 |
| neos-3594536-henty | 401223→401092 | component balance/parity 缩减，spanning-forest 恢复自由流 | 缩减模型 188.34 s 闭合；这不是整个研究端到端时间 |
| rmine15 | -5018.819990999996→-5018.823005000000004879 | 三期 [7,9] 重排，34 矿块/35 bits 协同变化 | 小但真实离散改进；微小幅度不等于数值假象 |
| neos-5266653-tugela | 65505.2005752763→65257.573990387 | 联合车辆块 3/11/12，连续势差分修复 | 车辆列交错；不能按连续列切片选择块 |
| supportcase39 | -1085080.906934894→-1085083.856820570460 | 高斯边界 11×11 窗口，30 个控制变量联合调整 | 单点、双点、5/7/9 窗口都未改善；扩大语义窗口才成功 |
| nj1 | unknown→382.0606208032 | 人口均衡连通分区、recombination、kick+descent | 与 nj2/3 共用595标签分区；目标为先找到首个完整可行解再改善 |
| nj2 | unknown→382.0606208032 | 同一分区重构 root/flow 变量 | 不是第二次独立发现 |
| nj3 | unknown→382.0606208032 | 标签修复迁移，后续同源分区改进 | current 从383.6229暂退到389.6399再下降到382.0606；best不被坏kick覆盖 |
| ns1905797 | unknown→13.98258 | 重平衡4块分配，CP路线构造→完整start→COPT improvement | 15.03429→5秒阶段14.62129→120秒阶段13.98258；900秒续跑未再改善 |
| nag | 945→930 | 有界通用 COPT 求解 | 930来自2700秒run；不能编造结构方法解释所有成功 |
| sing17 | 36161699.37883251→36161699.3779386893546367410 | 固定同一整数模式，连续重优化 | 数值 polishing；不能标成新的离散模式 |

逐题来源与原目标字段保存在 [instances.json](instances.json)。上述表的比较基线固定为 v36，不能冒充实时排行榜。

## 关键原始证据入口

- [allcolor58 构造过程](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/allcolor58/reports/objective-42-certificate.md)：固定容量53秒到55店、flex约40秒到58店；这些时间来自日志文件时间区间，未含前期研究。
- [dws012-02 完整报告](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/dws012-02/reports/final_report.md)：先否定伪分解，再 sibling design transplant；完整研究72分42秒。
- [ns1905797 构造和 warm-start](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/ns1905797/README.md)：从块分配失衡到完整可行点；混用块解时违反 R0054 的候选被拒绝。
- [rmine15 三期窗口](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/rmine15/README.md)、[supportcase39 边界窗口](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/supportcase39/README.md)、[tugela 联合车辆源码](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/neos-5266653-tugela/experiments/copt_interleaved_block_lns.py)。
- [liu 各表示与格结构](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/liu/README.md)、[henty quotient/lift](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/neos-3594536-henty/README.md)。
- [nj3 最新局部范围与迁移](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/nj3/README.md)：21 pair、39 anchored triples、67 anchored quads 已有局部关闭；下一步不能重复这些固定 scope。
- [nag 逐次运行](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/instances/nag/final_report.md)、[FHNW 家族日志分析](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/docs/fhnw-schedule-pair-results-and-log-analysis-2026-09-08.zh.md)。

## 从未改善案例学到的边界

| 情况 | 实例证据 | skill 的动作 |
|---|---|---|
| 小交换已充分探索 | t1722 连通≤5、comp12 bit≤10、sorrell 至少需13删14加 | 读取 scope；更换/增大真实动作，避免重复已覆盖半径 |
| 单块可优化，全局仍卡住 | sing5/11/17、cmflsp、bab3 | 联合共享资源相关块；局部块关闭不代表全局可分 |
| 分解标签误导 | dws012-02 的395小块全是linking vars | 用私有变量与耦合行核对分解，不能按 DEC 开始独立子问题 |
| nominal improvement 被审计否定 | bley、gmut-76-50、polygonpack、minutedispatchstrategy | 整数归一化+recourse+原模型重算后再判断 |
| relaxed/partial solution 看起来很好 | supportcase30 987/1024；datt256 470/480 | 保存 near-feasible，继续修复；不作为 primal bound |
| 更强 lower bound 并不产生新解 | graph40、scpl/scpk/scpj、genus、mining | primal 任务中只把 bound 当目标提示，不默认展开长证明 |
| 解已是最优或模型不可行 | graph40 已匹配既有解；fhnw-binpack/pythago infeasible | 经核对后退出无意义搜索；仍可借鉴结构但不能计作新primal |
| 接口/分析占掉搜索时间 | allcolor 早期大量 extractor 修补和巨型输出 | 持久记录反例；紧凑画像后尽快做实际构造，不堆分析日志 |

已有 [milp-structure-research](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/skills/milp-structure-research/SKILL.md) 覆盖更广的结构/dual/proof 研究；本 skill 复用其证据纪律，新增以 verified-primal 时间、构造种子、warm-start、适应性邻域与停止/记忆为中心的路由。
