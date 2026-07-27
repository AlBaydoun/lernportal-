/* ============ Admin panel (password protected) ============ */
let ADMIN_OK = false;
let ATAB = 'results';

function adminGate(){
  if(ADMIN_OK){ VIEW={name:'admin'}; renderAdmin(); return; }
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>🔐 ${t('adminLogin')}</h3>
    <input type="password" id="pwInp" class="pw-inp" placeholder="${t('password')}" onkeydown="if(event.key==='Enter')tryLogin()">
    <div id="pwErr" style="color:var(--red);font-weight:800"></div>
    <button class="btn primary" onclick="tryLogin()">${t('login')}</button>`);
  setTimeout(()=>{ const i=$('#pwInp'); if(i) i.focus(); },80);
}
function tryLogin(){
  const v = $('#pwInp').value;
  if(enc(v)===S.adminPw){ ADMIN_OK=true; closeModal(); VIEW={name:'admin'}; renderAdmin(); }
  else $('#pwErr').textContent = t('wrongPw');
}
function adminLogout(){ ADMIN_OK=false; goHome(); }

function renderAdmin(){
  updateChip();
  const tabs = [['results',t('tab_results')],['attempts',t('tab_attempts')],['credits',t('tab_credits')],['solutions',t('tab_solutions')],['settings',t('tab_settings')]];
  let html = `<button class="back-link" onclick="goHome()">${t('backHome')}</button>
  <div class="admin-wrap">
    <h2 style="color:var(--purple-d);margin-bottom:12px">🛠️ ${t('adminPanel')}</h2>
    <div class="admin-tabs">${tabs.map(x=>`<button class="atab ${ATAB===x[0]?'active':''}" onclick="ATAB='${x[0]}';renderAdmin()">${x[1]}</button>`).join('')}
      <button class="atab" style="margin-left:auto;background:#ffe3e6;color:var(--red)" onclick="adminLogout()">🚪 ${t('logout')}</button>
    </div>
    <div class="admin-section">`;
  if(ATAB==='results') html += adminResults();
  else if(ATAB==='attempts') html += adminAttempts();
  else if(ATAB==='credits') html += adminCredits();
  else if(ATAB==='solutions') html += adminSolutions();
  else if(ATAB==='settings') html += adminSettings();
  html += `</div></div>`;
  $('#app').innerHTML = html;
  window.scrollTo(0,0);
}

/* ---- results tab ---- */
function adminResults(){
  if(!S.results.length) return `<p style="font-weight:700;color:#888">${t('noResults')}</p>`;
  const rows = [...S.results].reverse().map(r=>{
    const cls = r.pct>=80?'g': r.pct>=50?'o':'r';
    return `<tr class="clickable" onclick="showResultDetail(${r.id})">
      <td>${esc(r.date)}</td><td>${esc(r.testTitle)}</td>
      <td><span class="pill ${cls}">${r.pct}%</span> ${r.pts}/${r.max}</td>
      <td>#${r.attempt}</td><td>${fmtTime(r.durationSec)}</td><td>💡${r.helpUsed}</td>
      <td>🪙${creditsFor(r.pct)}</td></tr>`;
  }).join('');
  return `<h3>${t('tab_results')}</h3>
  <div style="overflow-x:auto"><table class="res-table">
    <tr><th>${t('date')}</th><th>${t('test')}</th><th>${t('score')}</th><th>${t('attempt')}</th><th>${t('duration')}</th><th>${t('helpUsed')}</th><th>🪙</th></tr>
    ${rows}</table></div>
  <p class="hint">👆 ${t('detail')}</p>`;
}
function showResultDetail(id){
  const r = S.results.find(x=>x.id===id);
  if(!r) return;
  const qs = r.details.map((d,i)=>{
    const ok = d.pts===d.max;
    return `<div class="sol-q">
      <b>${t('q_short')}${i+1} (${d.pts}/${d.max})</b> — ${nl(d.q)}<br>
      <span class="sol-given ${ok?'':'wrong'}">${ok?'✔':'✘'} ${t('givenAnswer')}: ${esc(d.given)}</span><br>
      <span class="sol-a">🔑 ${t('correctAnswer')}: ${esc(d.correct)}</span>
    </div>`;
  }).join('');
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>${esc(r.testTitle)} — ${r.pct}% (${r.date})</h3>${qs}`);
}

/* ---- attempts tab ---- */
function adminAttempts(){
  const rows = ALL_TESTS.map(test=>{
    const used = attemptsUsed(test.id), allowed = attemptsAllowed(test.id);
    if(!used && !S.extra[test.id]) {
      return `<div class="att-row"><span>${test.icon} ${esc(test.title.de)} <small style="color:#aaa">(Kl. ${test.grade})</small></span>
        <span><small style="color:#aaa">0/${allowed}</small>
        <button class="mini-btn" onclick="grantAttempt('${test.id}')">${t('extraGrant')}</button></span></div>`;
    }
    return `<div class="att-row"><span>${test.icon} <b>${esc(test.title.de)}</b> <small style="color:#aaa">(Kl. ${test.grade})</small></span>
      <span><b>${used}/${allowed}</b> ${t('attemptsUsed')}
      <button class="mini-btn" onclick="grantAttempt('${test.id}')">${t('extraGrant')}</button>
      <button class="mini-btn gray" onclick="resetAttempts('${test.id}')">${t('resetAttempts')}</button></span></div>`;
  }).join('');
  return `<h3>${t('tab_attempts')}</h3>${rows}`;
}
function grantAttempt(id){ S.extra[id]=(S.extra[id]||0)+1; save(); renderAdmin(); }
function resetAttempts(id){ delete S.attempts[id]; delete S.extra[id]; save(); renderAdmin(); }

/* ---- credits tab ---- */
function adminCredits(){
  const adjRows = [...S.adj].reverse().map(a=>
    `<tr><td>${esc(a.date)}</td><td style="font-weight:800;color:${a.min<0?'var(--red)':'var(--green)'}">${a.min>0?'+':''}${a.min} ${t('min')}</td><td>${esc(a.note||'')}</td></tr>`).join('');
  return `<h3>${t('tab_credits')}</h3>
  <p>${t('balance')}: <span class="balance-big">${balance()} ${t('min')}</span></p>
  <p style="font-weight:700;color:#666">${t('totalEarned')}: ${totalEarned()} ${t('min')}</p>
  <p class="hint">${t('creditRules')}</p>
  <h3 style="margin-top:18px">${t('adjustments')}</h3>
  <div class="adj-form">
    <input type="number" id="adjMin" placeholder="${t('minutes')}" style="width:130px">
    <input type="text" id="adjNote" placeholder="${t('note')}" style="flex:1;min-width:160px">
    <button class="mini-btn" onclick="addAdj()">${t('add')}</button>
  </div>
  ${adjRows?`<div style="overflow-x:auto"><table class="res-table"><tr><th>${t('date')}</th><th>${t('min')}</th><th>${t('note')}</th></tr>${adjRows}</table></div>`:''}`;
}
function addAdj(){
  const min = parseInt($('#adjMin').value,10);
  if(isNaN(min)||min===0) return;
  S.adj.push({date:new Date().toLocaleString('de-DE',{dateStyle:'short',timeStyle:'short'}), min, note:$('#adjNote').value.trim()});
  save(); renderAdmin();
}

/* ---- solutions tab ---- */
let SOL_TEST = null, SOL_SAMPLE = null;
function adminSolutions(){
  const opts = ALL_TESTS.map(x=>`<option value="${x.id}" ${SOL_TEST===x.id?'selected':''}>Kl. ${x.grade} · ${esc(x.title.de)}</option>`).join('');
  let body = '';
  if(SOL_TEST){
    const test = testById(SOL_TEST);
    let qs;
    if(test.genTest){
      if(!SOL_SAMPLE) SOL_SAMPLE = test.gen();
      qs = SOL_SAMPLE;
      body += `<p class="hint">${t('genNote')}</p>
        <p><b>🎲 ${t('sampleVersion')}</b> <button class="mini-btn" onclick="SOL_SAMPLE=null;renderAdmin()">${t('regenerate')}</button></p>`;
    } else qs = test.qs;
    body += qs.map((q,i)=>{
      let sol='';
      if(q.t==='num') sol = String(q.a)+(q.unit?' '+q.unit:'');
      else if(q.t==='text') sol = q.a.join(' / ');
      else if(q.t==='div') sol = `${t('result_q')}: ${q.a.q} · ${t('remainder')}: ${q.a.r}`;
      else if(q.t==='mc') sol = q.opts[q.a];
      else if(q.t==='tf') sol = q.a ? t('trueW') : t('falseW');
      else if(q.t==='match') sol = q.pairs.map(p=>`${p[0]} → ${p[1]}`).join(' · ');
      return `<div class="sol-q"><b>${t('q_short')}${i+1}</b> — ${nl(q.q)}<br><span class="sol-a">🔑 ${esc(sol)}</span></div>`;
    }).join('');
  }
  return `<h3>${t('tab_solutions')}</h3>
  <select class="sel-test" onchange="SOL_TEST=this.value;SOL_SAMPLE=null;renderAdmin()">
    <option value="">– ${t('chooseTest')} –</option>${opts}</select>
  <div style="margin-top:14px">${body}</div>`;
}

/* ---- settings tab ---- */
function adminSettings(){
  return `<h3>${t('tab_settings')}</h3>
  <div class="adj-form">
    <input type="password" id="newPw" placeholder="${t('newPw')}" style="min-width:200px">
    <button class="mini-btn" onclick="changePw()">${t('changePw')}</button>
    <span id="pwSaved" style="color:var(--green);font-weight:800"></span>
  </div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
    <button class="btn ghost" onclick="exportData()">${t('exportData')}</button>
    <label class="btn ghost" style="cursor:pointer">${t('importData')}<input type="file" accept=".json" style="display:none" onchange="importData(this)"></label>
    <button class="btn warn" onclick="resetAllData()">${t('resetAll')}</button>
  </div>`;
}
function changePw(){
  const v = $('#newPw').value.trim();
  if(v.length<3) return;
  S.adminPw = enc(v); save();
  $('#pwSaved').textContent = t('saved');
}
function exportData(){
  const blob = new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'lernportal-backup-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
}
function importData(inp){
  const f = inp.files[0]; if(!f) return;
  const rd = new FileReader();
  rd.onload = ()=>{ try{
    const d = JSON.parse(rd.result);
    if(d && d.results){ S = d; save(); LANG=S.lang||'de'; applyLang(); renderAdmin(); }
  }catch(e){ alert('Import error'); } };
  rd.readAsText(f);
}
function resetAllData(){
  if(!confirm(t('resetConfirm'))) return;
  const pw = S.adminPw;
  S = defaultState(); S.adminPw = pw; save();
  renderAdmin(); updateChip();
}
