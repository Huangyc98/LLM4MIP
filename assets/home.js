(function () {
  "use strict";

  const views = {
    status: {
      title: "What happened across the 112 studied instances?",
      note: "These four categories partition the campaign. A resolved instance has established optimality or infeasibility evidence; official MIPLIB labels may not yet have changed.",
      mode: "stack",
      total: 112,
      items: [
        ["Certified optimality / infeasibility", 30, "#176b5b"],
        ["Verified feasible; open", 75, "#006cb8"],
        ["Pending strict verification", 3, "#8A4F00"],
        ["No feasible point found", 4, "#8c1515"]
      ]
    },
    evidence: {
      title: "How were the 30 optimality / infeasibility results verified?",
      note: "This classifies verification form, not credit. Portable replay after discovery is different from LLM-only discovery.",
      mode: "stack",
      total: 30,
      items: [
        ["Portable exact certificate", 18, "#8c1515"],
        ["Checked proof trace", 1, "#b1040e"],
        ["Exhaustive exact verification", 3, "#176b5b"],
        ["Published-theorem transfer", 3, "#620059"],
        ["Floating-point zero-gap verification", 3, "#006cb8"],
        ["Mixed computational evidence", 2, "#8A4F00"]
      ]
    },
    skill: {
      title: "How did the workflows compare on primal and dual bounds?",
      note: "Paired historical results on 20 instances. The comparison was nonrandomized and unequal-resource, so these are observed outcomes—not a causal effect estimate.",
      mode: "bars",
      max: 20,
      items: [
        ["Primal bound: skill better", 11, "#8c1515"],
        ["Primal bound: equal within 1e-7", 9, "#77736f"],
        ["Dual bound: skill better", 8, "#8c1515"],
        ["Dual bound: comparison better", 12, "#006cb8"],
        ["Relative gap: skill smaller", 9, "#8c1515"],
        ["Relative gap: comparison smaller", 11, "#006cb8"]
      ]
    }
  };

  const chart = document.querySelector("#overview-chart");
  const title = document.querySelector("#overview-title");
  const note = document.querySelector("#overview-note");
  const tableBody = document.querySelector("#overview-data tbody");
  const buttons = document.querySelectorAll("[data-overview]");
  if (!chart || !title || !note || !tableBody || !buttons.length) return;

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
      legend.className = `legend legend-${view.items.length}`;
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

    view.items.forEach(([label, value]) => {
      const row = document.createElement("tr");
      const metric = document.createElement("td");
      const result = document.createElement("td");
      metric.textContent = label;
      result.textContent = String(value);
      row.append(metric, result);
      tableBody.append(row);
    });

    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.overview === key)));
  }

  buttons.forEach(button => button.addEventListener("click", () => render(button.dataset.overview)));
  render("status");
}());
