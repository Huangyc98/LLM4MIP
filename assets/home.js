(function () {
  "use strict";

  const campaign = window.CAMPAIGN_DATA;
  const views = {
    status: {
      title: `What happened across the ${campaign.instances} studied instances?`,
      note: "These categories partition the campaign. The 34 conclusions include 32 optimal and two infeasible results; two genus optima accept residuals below 1e-10. Official MIPLIB labels may differ.",
      mode: "stack", total: campaign.instances, items: campaign.statusItems
    },
    evidence: {
      title: `How were the ${campaign.closed} global conclusions verified?`,
      note: "Verification forms have different evidence strength. Tolerance-accepted genus closures are separate from exact certificates; verification does not assign discovery credit.",
      mode: "stack", total: campaign.closed, items: campaign.evidenceItems
    },
    skill: {
      title: "Dedicated primal and dual skills, compared by objective",
      note: "Against historical no-skill AI: primal has 9 wins, 9 ties, 1 loss and 1 excluded invalid candidate; dual has 17 wins, 1 tie and 2 losses. The combined gap uses best valid bounds after separate runs, with unequal resources.",
      mode: "bars", max: 20,
      items: [
        ["Primal-skill: better P", window.FOCUSED_SKILL_DATA.stats.primal_outcome.win, "#8c1515"],
        ["Primal-skill: tied P", window.FOCUSED_SKILL_DATA.stats.primal_outcome.tie, "#77736f"],
        ["Primal-skill: worse P", window.FOCUSED_SKILL_DATA.stats.primal_outcome.loss, "#006cb8"],
        ["Primal-skill: excluded candidate", 1, "#8A4F00"],
        ["Dual-skill: better D", window.FOCUSED_SKILL_DATA.stats.dual_outcome.win, "#8c1515"],
        ["Dual-skill: tied D", window.FOCUSED_SKILL_DATA.stats.dual_outcome.tie, "#77736f"],
        ["Dual-skill: worse D", window.FOCUSED_SKILL_DATA.stats.dual_outcome.loss, "#006cb8"],
        ["Combined: smaller gap vs AI", window.FOCUSED_SKILL_DATA.stats.gap_outcome.win, "#176b5b"]
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
