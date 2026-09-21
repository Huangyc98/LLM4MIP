# 原模型验收与“更快”的测量

## 1. 两条验收路径不能混淆

**构造/修复**：固定整数选择，放开连续 recourse 或明确指定的其它离散变量，重新优化；得到的是一个新向量。它不能证明原输入向量可行。

**检查给定向量**：重读最终落盘的 `.sol`，解释所有缺项，所有变量固定为提交值；检查 untouched original model。求解器固定点复查之外，用不同代码路径做直接行回代。对普通 MPS 可复用 MIPLIB GMP checker；有 indicator/SOS 等扩展时必须用支持其语义的 checker，不能静默略过。

逐项记录：

- 模型文件、解文件、checker版本/源码和 SHA-256；压缩文件 hash 和解压内容 hash 不混用；
- 不允许 NaN/Infinity、重复变量、未知变量、错误格式；稀疏未出现变量是否补0由文件约定决定；
- 上下界、integer/binary/semi-integer/SOS 等适用域；ordinary、ranged、indicator 等全部原约束；
- objective sense、constant、原始十进制系数与最终向量重算目标；
- 最大行/变量界/整数违约，容差与检查算术；
- 对 candidate 列出搜索状态和对该具体向量的独立验收状态。

修复后重新检查；不能简单把 near-integer 四舍五入就宣称可行。gmut-76-50 的更低点取整后仍有明显流量违约。标准 checker 有容差时，`passed` 仅支持对应容差的可行性。

有限精度 Decimal 算出零并不自动等同于完全有理证明：若运算可能舍入，说明 precision 和误差处理；要求数学零容差时使用 Fraction、整数缩放、区间包围或足够的可证明精度。原始有理系统的可行点不一定能精确写成有限小数，也不能随意 truncate 分数。

来源：[仓库22项验证协议](https://github.com/Huangyc98/MIPLIB_openproblem/blob/b329d3812c5acf51733e0e9f7baabdda7b1008d2/docs/comparisons/miplib-v36-primal-copt-validation-20260908/README.md)。其 GMP 使用线性/目标 `1e-5`、整数 `1e-4`；COPT 用 `1e-9`。这两类通过不等于22份数学零误差证书。

## 2. 目标比较与严格改善阈值

令方向 `s=+1` 为 minimization，`s=-1` 为 maximization，改善量为 `s*(z_old-z_new)`，必须为正。相对改善使用 `improvement/max(1,abs(z_old))`，不要除以负数。

无已知有限 baseline：报告 `first_feasible` 和首次可行时间，不报告无限改善百分比。普通连续优化的显著改善阈值可用事先约定的绝对/相对标准，但要与验证误差分开。判断微小差值时，对旧解新解使用同一个原始系数重算；报告 interval 时要保证区间严格分离。

如果证明目标或某个最优代表位于 `a+g Z`，更好目标可选相邻格点；未证明不能因数据看着整数就设 `UB-1`。liu 的“最优可取偶数”足以把更优可行性搜索缩到1080；并不是说每个非最小连续布局的边长都必须为偶数。

分类是两个独立轴：

- **结果类型**：first_feasible / discrete_improvement / recourse_improvement / numerical_polish / repair_only / no_improvement。
- **来源**：project_construction / solver_generated / transferred / external / external_derived / reproduction。

相同 integer pattern 的 recourse 大幅改善仍可能很有价值；不要把所有相同模式改进一概归成无意义 polishing。sing17 的具体幅度和历史记录才支持该标注。

## 3. 持久 ledger 的最小字段

每条 experiment 保存：`run_id, seed, backend/version, model/start hashes, method, hypothesis, scope, cutoff, free/fixed variables, anchor, start_s, wall_s, workers, status, candidate, next_action`。

`run_manifest.json` 另存求解器选择链：顶层记录 `requested_backend, preferred_backend, backend_selection_order, selected_backend/version`；`backend_probe` 是数组，每个被探测或跳过的后端各有一个对象，至少包含 API/命令路径、许可证结果、模型特性、读入/短测试结果、探测耗时和 `fallback_reason`。跳过或失败的后端也保留原因；默认 COPT 成功时其 `fallback_reason` 明确为 `not_applicable`，不要留空。换后端后，每条 experiment 仍记录实际使用的 backend/version。

`scope` 应能恢复实际邻域，例如：中心解sha、period `[7,9]`、哪些开采状态固定、最终 pit 是否固定。只写 `radius=3` 不够。记录 stopped/incomplete/closed；没有新候选的完整失败也要入账。

`candidate.audit` 应来自真实 checker 输出，不由模型自行填“通过”。摘要工具只是聚合记录，不能建立真实可行性。其简化输入是：

```json
{"type":"meta","instance":"example","model_sha256":"64位实际模型SHA256","sense":"min","baseline":"100","min_improvement":"0.001"}
```

之后每行一个 experiment，例如（哈希字段必须替换成实际64位十六进制）：

```json
{
  "type":"experiment", "run_id":"window-01", "method":"coupled-window",
  "start_s":"60", "wall_s":"40", "workers":2, "status":"TIME_LIMIT",
  "scope":{"center_sha256":"actual hash", "free_periods":[7,8,9], "outside_fixed":true},
  "candidate":{
    "objective":"98.5", "verified_at_s":"99", "category":"discrete_improvement",
    "solution_sha256":"64位实际解SHA256",
    "audit":{
      "passed":true, "all_original_constraints_checked":true,
      "model_sha256":"64位实际模型SHA256", "solution_sha256":"64位实际解SHA256",
      "recomputed_objective":"98.5", "grade":"numerical",
      "row_tolerance":"1e-9", "integrality_tolerance":"1e-9",
      "report":"validation/window-01.json"
    }
  }
}
```

保存 JSONL 时每个对象压成一行。`candidate` 没有则省略。`verified_at_s` 是自任务起点的验收完成时间，须落在对应 experiment 的 start/end 内，wall 包含验证。可用 grade：`exact_rational`、`decimal_zero`、`numerical`。工具不打开 audit.report，也不校验真实文件哈希或约束；其输出必须配合原验证文件使用。

小于预设 `min_improvement` 的数值改善仍会保留在 best trajectory；只是不触发达到阈值的首次 baseline improvement。若多次小改善累积达到阈值，应正确计算从 baseline 的累积变化。

## 4. 如何验证“更快”

仓库历史是异质研究记录，算法、种子、CPU、start和预算不统一。不能从22/112或23/112推出GPT成功率，更不能把某缩减模型188秒与另一全流程10小时简单相除称加速。

建议后续对照：

1. 同一个原模型、相同可访问初始解、相同硬件与线程、相同预算、相同验收标准。比较 skill policy 本身时锁定相同 solver/version；若一方发生 COPT→Gurobi/cuOPT 回退，则将其报告为完整系统比较或单独的 fallback 因素，不能把差异全部归因于 skill。若允许外部检索/预计算，双方允许，并把成本单列；不可泄漏目标更优答案到 baseline 侧不允许的 skill 侧。
2. 分别比较 cold baseline、相同 start 的 solver baseline、skill policy；这样区分“种子变强”与“搜索策略变快”。
3. 主要比较整个相同预算内的 best-primal 轨迹与预算结束时最终 best；同时记录首个验证可行解、首个严格改进和预设改善阈值的时间。首次改善只是一项测量，不是停止条件；双方取得首次改善后都继续到共同总预算或有效终止条件。
4. 无成功运行按预算截尾保留，不从时间平均中删除。报告成功数、全部实例分布和时间曲线；不只报告成功案例均值。
5. 记录读取、结构分析、GPT tokens/API、构造、求解、lift、验证及人工准备时间；算子 wall×workers 仅是分配量估计，不是实际CPU用时。并发 wall 不相加。
6. 按底层实例家族划分训练/调试与测试，nj和FHNW A/B不得跨集合造成同源泄漏；多seed检验稳定性。
7. 做消融：去掉 sibling、去掉结构邻域、去掉kick、去掉持久负记录，比较 verified primal 而非仅 solver打印值。

本 skill 的工具测试只验证检索与记账正确性，不是上述优化性能试验。
