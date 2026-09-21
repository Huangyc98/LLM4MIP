(function () {
  'use strict';
  const {rows, stats} = window.FOCUSED_SKILL_DATA;
  const definitions = {
    primal: {title:'Primal vs primal-skill', key:'primal_outcome', note:'Lower P is better. 9 wins, 9 ties, 1 loss; one invalid candidate excluded. The raw historical table counted 10 wins. Absolute comparison tolerance: 1e-7.'},
    dual: {title:'Dual vs dual-skill', key:'dual_outcome', note:'Higher D is better. Strongest Gurobi / independently certified bounds: 17 wins, 1 tie, 2 losses versus the no-skill AI. Numerical and independent certificates are shown separately. Absolute tolerance: 1e-7.'},
    gap: {title:'Primal-skill + dual-skill vs no-skill AI', key:'gap_outcome', note:'Post-hoc best valid bounds: 18 smaller gaps and 2 larger gaps; mean reduction 15.8079 percentage points over 20 pairs. Gurobi and independent certificates only.'},
    solver: {title:'Primal-skill + dual-skill vs solver', key:'solver_gap_outcome', note:'Solver uses the lowest valid primal and highest valid dual across the recorded solver runs. Skill wins 16 (15 smaller gaps + 1 feasible solution where neither solver recorded one), ties 1 and loses 3. Mean reduction: 18.9091 percentage points over 19 finite-gap pairs. Historical budgets and solver configurations differ.'}
  };
  const labels={win:'Skill better',tie:'Tie',loss:'Baseline better',excluded:'Excluded candidate',NA:'Unavailable'};
  const colors={win:'#8c1515',tie:'#77736f',loss:'#006cb8',excluded:'#8A4F00',NA:'#8A4F00'};
  let activeTab='gap';

  const search=document.querySelector('#focused-search');
  const filter=document.querySelector('#focused-filter');
  function cell(text) {const td=document.createElement('td');td.textContent=text;return td;}
  function percent(value) {const n=Number(value);return value && Number.isFinite(n)?(n*100).toFixed(4)+'%':'Unavailable';}
  function render() {
    const selected=activeTab;

    const def=definitions[selected];
    document.querySelector('#focused-title').textContent=def.title;
    document.querySelector('#focused-note').textContent=def.note;
    const chart=document.querySelector('#focused-chart');chart.replaceChildren();
    for(const [key,label] of Object.entries(labels)) {
      const n=stats[def.key][key]||0;if(!n)continue;
      const row=document.createElement('div');row.className='bar-row';
      row.innerHTML=`<span class="bar-label">${label}</span><div class="bar-track"><div class="bar-fill" style="width:${n/20*100}%;background:${colors[key]}"></div></div><span class="bar-value">${n}</span>`;
      chart.append(row);
    }
    const headers= selected==='primal'?['Instance','Primal (no skill)','Primal-skill P','Outcome','Evidence / method']:
      selected==='dual'?['Instance','Dual (no skill)','Dual-skill D','Independent certified D','Outcome','Evidence / method']:
      ['Instance','Baseline gap','Combined gap','Outcome','Selected P / D and sources'];
    const head=document.querySelector('#focused-head');head.replaceChildren();
    headers.forEach(x=>{const th=document.createElement('th');th.textContent=x;head.append(th);});
    const body=document.querySelector('#focused-body');body.replaceChildren();
    const visible=rows.filter(r=>(filter.value==='all'||r[def.key]===filter.value)&&[r.instance,r.primal_method,r.dual_method].join(' ').toLowerCase().includes(search.value.trim().toLowerCase()));
    for(const r of visible) {
      const tr=document.createElement('tr');tr.append(cell(r.instance));
      if(selected==='primal')tr.append(cell(r.no_skill_primal),cell(r.primal_skill_primal),cell(labels[r.primal_outcome]),cell((r.primal_outcome==='excluded'?'Excluded: below independently proved optimum; not a valid improvement. ':r.primal_evidence+'; row tolerance '+r.primal_row_tolerance+', integrality tolerance '+r.primal_integrality_tolerance+'. ')+r.primal_method));
      else if(selected==='dual')tr.append(cell(r.no_skill_dual),cell(r.dual_gurobi_strongest),cell(r.dual_independent_certified),cell(labels[r.dual_outcome]),cell(r.dual_evidence+'; '+r.dual_method));
      else {
        const feasibilityWin = selected !== 'gap' && r[selected+'_feasibility_win'];
        const baseline = selected==='gap'?r.baseline_gap:r[selected+'_gap'];
        const baselineLabel = feasibilityWin ? (selected==='copt' && r.copt_result==='abort' ? 'No feasible solution recorded (COPT aborted at 0.1 s)' : 'No feasible solution recorded') : percent(baseline);
        tr.append(cell(baselineLabel),cell(percent(r.gap)),cell(feasibilityWin?'Skill better — found a feasible solution':labels[r[def.key]]),cell(`P = ${r.selected_primal} (${r.primal_source}); D = ${r.selected_dual} (${r.dual_source})`));
      }
      body.append(tr);
    }
    document.querySelector('#focused-count').textContent=`Showing ${visible.length} of ${rows.length} instances`;
    document.querySelectorAll('[data-focused]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.focused===activeTab)));
  }
  document.querySelectorAll('[data-focused]').forEach(b=>b.addEventListener('click',()=>{activeTab=b.dataset.focused;filter.value='all';render();}));

  search.addEventListener('input',render);filter.addEventListener('change',render);render();
}());
