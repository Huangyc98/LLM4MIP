(function () {
  "use strict";

  const views = {
    status: {
      title: "What happened across the 132 studied instances?",
      note: "These four categories partition the 132-instance benchmark. A resolved instance has a verified optimality or infeasibility result; official MIPLIB labels may not yet have changed.",
      mode: "stack",
      total: 132,
      items: [
        ["Certified optimality / infeasibility", 32, "#176b5b"],
        ["Verified feasible; open", 94, "#006cb8"],
        ["Numerically optimal up to 1e-10 tolerance", 2, "#8A4F00"],
        ["No feasible point found", 4, "#8c1515"]
      ]
    },
    evidence: {
      title: "How were the 34 optimality / infeasibility results verified?",
      note: "This classifies the basis of verification, not discovery credit. Portable replay after discovery is different from LLM-only discovery.",
      mode: "stack",
      total: 34,
      items: [
        ["Mathematically proven certificate", 20, "#8c1515", "Solver/LLM finds a primal bound. LLM proves a certificate mathematically"],
        ["Logic reasoning", 1, "#b1040e", "Solver/LLM finds a primal bound. LLM finds a certificate through LLM-based logic reasoning"],
        ["Enumeration", 3, "#176b5b", "Solver/LLM finds a primal bound. LLM finds a dual bound by enumeration"],
        ["Published-theorem transfer", 3, "#620059", "Solver/LLM finds a primal bound. LLM plugs instance data into a published theorem statement"],
        ["Floating-point zero-gap verification", 3, "#006cb8", "Solver finds a dual bound. LLM finds a matching primal solution"],
        ["Mixed computational verification", 2, "#8A4F00", "A combination of above methods"],
        ["Numerical closure at 1e-10 tolerance", 2, "#666666", "Residuals below the accepted tolerance"]
      ]
    },
    skill: {
      title: "How did the workflows compare on primal and dual bounds?",
      note: "Paired historical results on 20 instances. The comparison was nonrandomized and unequal-resource, so these are observed outcomes—not a causal effect estimate.",
      mode: "bars",
      max: 20,
      items: [
        ["Primal bound: skill better", 9, "#8c1515"],
        ["Primal bound: equal within 1e-7", 9, "#77736f"],
        ["Primal bound: comparison better", 1, "#006cb8"],
        ["Primal bound: excluded candidate", 1, "#8A4F00"],
        ["Dual bound: skill better", 17, "#8c1515"],
        ["Dual bound: comparison better", 2, "#006cb8"],
        ["Dual bound: equal within 1e-7", 1, "#77736f"],
        ["Relative gap: skill smaller", 18, "#8c1515"],
        ["Relative gap: comparison smaller", 2, "#006cb8"]
      ]
    }
  };

  const chart = document.querySelector("#overview-chart");
  const title = document.querySelector("#overview-title");
  const note = document.querySelector("#overview-note");
  const table = document.querySelector("#overview-data");
  const tableBody = document.querySelector("#overview-data tbody");
  const explanationHeading = document.querySelector("#overview-explanation-heading");
  const buttons = document.querySelectorAll("[data-overview]");
  if (!chart || !title || !note || !table || !tableBody || !explanationHeading || !buttons.length) return;

  function render(key) {
    const view = views[key];
    title.textContent = view.title;
    note.textContent = view.note;
    chart.replaceChildren();
    tableBody.replaceChildren();

    if (view.mode === "stack") {
      const stack = document.createElement("div");
      stack.className = "stack";
      stack.setAttribute("role", "img");
      stack.setAttribute("aria-label", view.items.map(item => `${item[0]}: ${item[1]}`).join("; "));
      const legend = document.createElement("div");
      legend.className = `legend legend-${view.items.length} compact-legend`;
      view.items.forEach(([label, value, color]) => {
        const segment = document.createElement("div");
        segment.className = "stack-segment";
        segment.style.width = `${(value / view.total) * 100}%`;
        segment.style.background = color;
        segment.textContent = value >= view.total * 0.08 ? String(value) : "";
        stack.append(segment);

        const item = document.createElement("div");
        item.className = "legend-item";
        item.innerHTML = `<span class="swatch" style="background:${color}"></span><span>${label}</span><strong>${value}</strong>`;
        legend.append(item);
      });
      chart.append(stack, legend);
    } else {
      const list = document.createElement("div");
      list.className = "bar-list";
      view.items.forEach(([label, value, color]) => {
        const row = document.createElement("div");
        row.className = "bar-row";
        row.innerHTML = `<span class="bar-label">${label}</span><div class="bar-track"><div class="bar-fill" style="width:${(value / view.max) * 100}%;background:${color}"></div></div><span class="bar-value">${value}</span>`;
        list.append(row);
      });
      chart.append(list);
    }

    const showExplanations = key === "evidence";
    explanationHeading.hidden = !showExplanations;
    table.classList.toggle("has-explanations", showExplanations);

    view.items.forEach(([label, value, , explanation]) => {
      const row = document.createElement("tr");
      const metric = document.createElement("th");
      const result = document.createElement("td");
      metric.scope = "row";
      metric.textContent = label;
      result.textContent = String(value);
      row.append(metric, result);
      if (showExplanations) {
        const detail = document.createElement("td");
        detail.className = "measure-explanation";
        detail.textContent = explanation;
        row.append(detail);
      }
      tableBody.append(row);
    });

    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.overview === key)));
  }

  buttons.forEach(button => button.addEventListener("click", () => render(button.dataset.overview)));
  render("status");
}());
