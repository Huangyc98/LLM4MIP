(function () {
  'use strict';
  const {rows, stats} = window.FOCUSED_SKILL_DATA;
  const definitions = {
    primal: {title:'Primal-skill vs general AI and no-skill solver', key:'primal_outcome', note:'Lower P is better. Against general AI: 9 wins / 9 ties / 1 loss / 1 exclusion. Against no-skill solver: 16 / 1 / 2 / 1. General AI uses no dedicated skill; solver uses the best recorded bounds. Absolute tolerance: 1e-7. The outcome filter uses the general AI comparison.'},
    dual: {title:'Dual-skill vs general AI and no-skill solver', key:'dual_outcome', note:'Higher D is better. Against general AI: 17 wins / 1 tie / 2 losses. Against no-skill solver: 15 / 1 / 4. General AI uses no dedicated skill; solver uses the best recorded bounds. Numerical bounds retain their stated evidence levels. Absolute tolerance: 1e-7. The outcome filter uses the general AI comparison.'},
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
  function compact(raw) {
    if (raw === '' || raw == null) return 'No feasible solution';
    const n=Number(raw);
    if (!Number.isFinite(n)) return raw;
    return Math.abs(n)>=1e7 ? n.toExponential(5) : n.toLocaleString('en-US',{maximumSignificantDigits:9});
  }
  function badgeCell(outcome) {
    const td=cell('');const badge=document.createElement('span');
    badge.className='badge '+(outcome==='win'?'concluded':outcome==='loss'?'verified-open':'pending');
    badge.textContent={win:'Skill',loss:'Comparison',tie:'Within tolerance',NA:'Not recorded',excluded:'Excluded candidate'}[outcome]||outcome;
    td.append(badge);return td;
  }
  function boundsCell(p,d) {
    const td=cell('');
    for(const [label,value] of [['Primal',p],['Dual',d]]) {
      const line=document.createElement('div');line.textContent=label+' '+compact(value);line.title=value;td.append(line);
    }
    return td;
  }
  function render() {
    const selected=activeTab;

    const def=definitions[selected];
    document.querySelector('#focused-title').textContent=def.title;
    document.querySelector('#focused-note').textContent=def.note;
    const chart=document.querySelector('#focused-chart');chart.replaceChildren();
    const groups=(selected==='primal'||selected==='dual')?
      [['vs general AI','ai_'+selected+'_skill_outcome'],['vs no-skill solver','solver_'+selected+'_skill_outcome']]:[['',def.key]];
    for(const [group,statKey] of groups) {
      if(group){const heading=document.createElement('h4');heading.textContent=group;chart.append(heading);}
    for(const [key,label] of Object.entries(labels)) {
      const n=stats[statKey][key]||0;if(!n)continue;
      const row=document.createElement('div');row.className='bar-row';
      row.innerHTML=`<span class="bar-label">${label}</span><div class="bar-track"><div class="bar-fill" style="width:${n/20*100}%;background:${colors[key]}"></div></div><span class="bar-value">${n}</span>`;
      chart.append(row);
    }
    }
    const headers= selected==='primal'?['Instance','Primal-skill P','General AI P','No-skill solver P','vs general AI','vs no-skill solver','Evidence / method']:
      selected==='dual'?['Instance','Dual-skill D','General AI D','No-skill solver D','vs general AI','vs no-skill solver','Evidence / method']:
      ['Instance','Batch','Better primal bound','Better dual bound','Smaller relative gap','Skill bounds','Comparison bounds','Gap','Skill method'];
    const head=document.querySelector('#focused-head');head.replaceChildren();
    headers.forEach(x=>{const th=document.createElement('th');th.textContent=x;head.append(th);});
    const body=document.querySelector('#focused-body');body.replaceChildren();
    const visible=rows.filter(r=>(filter.value==='all'||r[def.key]===filter.value)&&[r.instance,r.primal_method,r.dual_method].join(' ').toLowerCase().includes(search.value.trim().toLowerCase()));
    for(const r of visible) {
      const tr=document.createElement('tr');const name=cell(r.instance);name.className='instance-name';tr.append(name);
      if(selected==='primal')tr.append(cell(r.primal_skill_primal),cell(r.no_skill_primal),cell(r.solver_primal||'No feasible solution'),badgeCell(r.ai_primal_skill_outcome),badgeCell(r.solver_primal_skill_outcome),cell((r.primal_outcome==='excluded'?'Excluded: below independently proved optimum; not a valid improvement. ':r.primal_evidence+'; row tolerance '+r.primal_row_tolerance+', integrality tolerance '+r.primal_integrality_tolerance+'. ')+r.primal_method));
      else if(selected==='dual')tr.append(cell(r.dual_gurobi_strongest),cell(r.no_skill_dual),cell(r.solver_dual),badgeCell(r.ai_dual_skill_outcome),badgeCell(r.solver_dual_skill_outcome),cell(r.dual_evidence+'; '+r.dual_method));
      else {
        const prefix=selected==='gap'?'ai':'solver';
        const feasibilityWin=selected==='solver' && r.solver_feasibility_win;
        const bp=selected==='gap'?r.no_skill_primal:r.solver_primal;
        const bd=selected==='gap'?r.no_skill_dual:r.solver_dual;
        const baseline=selected==='gap'?r.baseline_gap:r.solver_gap;
        const reduction=selected==='gap'?r.gap_reduction_pp:r.solver_gap_reduction_pp;
        const gapCell=cell('');gapCell.className='gap-comparison-cell';
        const lines=[`Skill ${percent(r.gap)}`,`Comparison ${feasibilityWin?'No feasible solution':percent(baseline)}`,
          feasibilityWin?'Skill found a feasible solution':`Reduction ${Number(reduction).toFixed(4)} pp`];
        lines.forEach(text=>{const line=document.createElement('div');line.textContent=text;gapCell.append(line);});
        const method=cell('');method.className='finding';
        for(const [label,value] of [['Primal-skill',r.primal_method],['Dual-skill',r.dual_method]]) {
          const line=document.createElement('div');const strong=document.createElement('strong');strong.textContent=label+': ';line.append(strong,document.createTextNode(value));method.append(line);
        }
        if(r.excluded_primal_candidates!=='[]') {
          const note=document.createElement('small');note.textContent='Invalid primal candidate excluded; portfolio uses the exact feasible lift.';method.prepend(note);
        }
        tr.append(cell(r.batch),badgeCell(r[prefix+'_portfolio_primal_outcome']),badgeCell(r[prefix+'_portfolio_dual_outcome']),badgeCell(r[def.key]),boundsCell(r.selected_primal,r.selected_dual),boundsCell(bp,bd),gapCell,method);
      }
      body.append(tr);
    }
    document.querySelector('#focused-count').textContent=`Showing ${visible.length} of ${rows.length} paired instances`;
    document.querySelectorAll('[data-focused]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.focused===activeTab)));
  }
  document.querySelectorAll('[data-focused]').forEach(b=>b.addEventListener('click',()=>{activeTab=b.dataset.focused;filter.value='all';render();}));

  search.addEventListener('input',render);filter.addEventListener('change',render);render();
}());
