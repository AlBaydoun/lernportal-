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
  if(pwHash(v)===ROOT.adminPw){ ADMIN_OK=true; closeModal(); VIEW={name:'admin'};
    document.getElementById('topbar').style.display=''; renderAdmin(); }
  else $('#pwErr').textContent = t('wrongPw');
}
function adminLogout(){ ADMIN_OK=false; if(LOGGED_IN) goHome(); else renderLogin(); }

function renderAdmin(){
  updateChip();
  const tabs = [['users',t('tab_users')],['progress',t('tab_progress')],['days',t('tab_days')],['results',t('tab_results')],['attempts',t('tab_attempts')],['credits',t('tab_gadget')],['solutions',t('tab_solutions')],['settings',t('tab_settings')]];
  let html = `<button class="back-link" onclick="goHome()">${t('backHome')}</button>
  <div class="admin-wrap">
    <h2 style="color:var(--purple-d);margin-bottom:12px">🛠️ ${t('adminPanel')}</h2>
    <div class="admin-tabs">${tabs.map(x=>`<button class="atab ${ATAB===x[0]?'active':''}" onclick="ATAB='${x[0]}';renderAdmin()">${x[1]}</button>`).join('')}
      <button class="atab" style="margin-left:auto;background:#ffe3e6;color:var(--red)" onclick="adminLogout()">🚪 ${t('logout')}</button>
    </div>
    <div class="admin-section">`;
  if(ATAB==='users') html += adminUsers();
  else if(ATAB==='progress') html += adminProgress();
  else if(ATAB==='days') html += adminDays();
  else if(ATAB==='results') html += adminResults();
  else if(ATAB==='attempts') html += adminAttempts();
  else if(ATAB==='credits') html += adminCredits();
  else if(ATAB==='solutions') html += adminSolutions();
  else if(ATAB==='settings') html += adminSettings();
  html += `</div></div>`;
  $('#app').innerHTML = html;
  window.scrollTo(0,0);
}

/* ---- users tab ---- */
function adminUsers(){
  const rows = Object.entries(ROOT.users).map(([id,u])=>{
    const d = u.data || {};
    const res = (d.results||[]).length;
    const avg = res ? Math.round(d.results.reduce((s,r)=>s+r.pct,0)/res) : null;
    const mins = Math.round(Object.values(d.days||{}).reduce((a,b)=>a+b,0)/60);
    const active = id===ROOT.activeUser;
    return `<div class="user-row ${active?'active':''}">
      <div class="ur-main"><span class="ub-ava">${esc((u.name||'?')[0].toUpperCase())}</span>
        <div><b>${esc(u.name)}</b>${active?` <span class="pill g">${t('activeUser')}</span>`:''}
        <br><small>📝 ${res} · 🎯 ${avg!==null?avg+'%':'–'} · ⏱ ${mins} ${t('min')} · 📅 ${esc(u.created||'')}</small></div></div>
      <div class="ur-btns">
        <button class="mini-btn" onclick="switchUser('${id}')">${t('switchTo')}</button>
        <button class="mini-btn gray" onclick="resetUserPw('${id}')">${t('newPw')}</button>
        <button class="mini-btn" style="background:var(--teal)" onclick="showSyncCode('${id}')">${t('syncCode')}</button>
        ${Object.keys(ROOT.users).length>1?`<button class="mini-btn" style="background:var(--red)" onclick="deleteUser('${id}')">🗑</button>`:''}
      </div></div>`;
  }).join('');
  return `<h3>${t('tab_users')}</h3>${rows}
  <h3 style="margin-top:20px">${t('newUser')}</h3>
  <div class="adj-form">
    <input type="text" id="nuName" placeholder="${t('userNameField')}" style="min-width:150px">
    <input type="text" id="nuPw" placeholder="${t('password')}" style="min-width:150px">
    <button class="mini-btn" onclick="addUser()">${t('add')}</button>
    <span id="nuMsg" style="color:var(--green);font-weight:800"></span>
  </div>
  <h3 style="margin-top:22px">${t('syncTitle')}</h3>
  <p class="hint">${t('syncHow')}</p>
  <div class="adj-form">
    <button class="mini-btn" onclick="showSyncCode(ROOT.activeUser)">📤 ${t('syncMake')}</button>
    <button class="mini-btn gray" onclick="importSyncPrompt()">📥 ${t('syncLoad')}</button>
  </div>`;
}
function switchUser(id){
  if(!ROOT.users[id]) return;
  ROOT.activeUser = id; S = userData(id); save();
  ATAB='users'; renderAdmin(); updateChip();
}
function addUser(){
  const name = ($('#nuName').value||'').trim();
  const pw = ($('#nuPw').value||'').trim();
  if(name.length<2 || pw.length<4){ $('#nuMsg').textContent='⚠️'; $('#nuMsg').style.color='var(--red)'; return; }
  let id = name.toLowerCase().replace(/[^a-z0-9]/g,'') || ('u'+Date.now());
  while(ROOT.users[id]) id += '1';
  ROOT.users[id] = { name, pw:pwHash(pw), created:new Date().toISOString().slice(0,10), data:blankProgress() };
  save(); renderAdmin();
}
function resetUserPw(id){
  const pw = prompt(t('newPw')+':');
  if(!pw || pw.trim().length<4) return;
  ROOT.users[id].pw = pwHash(pw.trim()); save();
  showModal(`<button class="close-x" onclick="closeModal()">✕</button><h3>✅ ${t('saved')}</h3>
    <p style="font-weight:700">${esc(ROOT.users[id].name)}: ${t('password')} → <b>${esc(pw.trim())}</b></p>`);
}
function deleteUser(id){
  if(Object.keys(ROOT.users).length<2) return;
  if(!confirm(t('delUserConfirm')+' '+ROOT.users[id].name+'?')) return;
  delete ROOT.users[id];
  if(ROOT.activeUser===id){ ROOT.activeUser=Object.keys(ROOT.users)[0]; S=userData(ROOT.activeUser); }
  save(); renderAdmin();
}
function showSyncCode(id){
  const u = ROOT.users[id];
  const payload = enc(JSON.stringify({n:u.name, p:u.pw, c:u.created, d:u.data}));
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>📤 ${t('syncCode')} – ${esc(u.name)}</h3>
    <p class="hint">${t('syncCopyHint')}</p>
    <textarea id="syncOut" class="sync-box" readonly>${payload}</textarea>
    <button class="btn primary" style="width:100%;margin-top:10px" onclick="copySync()">📋 ${t('copy')}</button>
    <div id="copyMsg" style="text-align:center;font-weight:800;color:var(--green);margin-top:6px"></div>`);
}
function copySync(){
  const ta = document.getElementById('syncOut');
  ta.select(); ta.setSelectionRange(0,999999);
  try{ document.execCommand('copy'); document.getElementById('copyMsg').textContent = t('copied'); }
  catch(e){ document.getElementById('copyMsg').textContent = '⚠️'; }
}
function importSyncPrompt(){
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>📥 ${t('syncLoad')}</h3>
    <p class="hint">${t('syncPasteHint')}</p>
    <textarea id="syncIn" class="sync-box" placeholder="..."></textarea>
    <button class="btn primary" style="width:100%;margin-top:10px" onclick="applySync()">${t('syncApply')}</button>
    <div id="syncMsg" style="text-align:center;font-weight:800;margin-top:6px"></div>`);
}
function applySync(){
  const raw = (document.getElementById('syncIn').value||'').trim();
  const msg = document.getElementById('syncMsg');
  try{
    const o = JSON.parse(dec(raw));
    if(!o || !o.n || !o.d) throw new Error('bad');
    let id = o.n.toLowerCase().replace(/[^a-z0-9]/g,'') || ('u'+Date.now());
    ROOT.users[id] = { name:o.n, pw:o.p, created:o.c||new Date().toISOString().slice(0,10), data:o.d };
    ROOT.activeUser = id; S = userData(id); save();
    msg.style.color='var(--green)'; msg.textContent = t('saved');
    setTimeout(()=>{ closeModal(); ATAB='users'; renderAdmin(); updateChip(); }, 700);
  }catch(e){ msg.style.color='var(--red)'; msg.textContent = t('syncBad'); }
}

/* ---- progress dashboard ---- */
function dayStreak(){
  const days = new Set([...Object.keys(S.days||{}).filter(k=>S.days[k]>=60), ...S.results.map(r=>resultDay(r))]);
  let streak = 0;
  const d = new Date();
  for(;;){
    const k = dayKeyOf(d);
    if(days.has(k)) streak++;
    else if(streak>0 || k!==todayKey()) break;      // today may still be empty
    d.setDate(d.getDate()-1);
    if(streak>400) break;
  }
  return streak;
}
function statBox(icon,val,label){
  return `<div class="stat-box"><div class="sb-ico">${icon}</div><div class="sb-val">${val}</div><div class="sb-lab">${label}</div></div>`;
}
function progressBarRow(label, done, total, extra){
  const pct = total ? Math.round(done/total*100) : 0;
  return `<div class="prog-row"><div class="pr-top"><span>${esc(label)}</span><span>${done}/${total}${extra?' · '+extra:''}</span></div>
    <div class="pr-bar"><div style="width:${pct}%"></div></div></div>`;
}
function adminProgress(){
  if(!S.results.length && !Object.keys(lessonsDone()).length)
    return `<h3>${t('progTitle')}</h3><p style="font-weight:700;color:#888">${t('progNone')}</p>`;
  const seen = Object.keys(lessonsDone()).length;
  const totalLessons = Object.keys(LESSONS).length;
  const doneTests = new Set(S.results.map(r=>r.testId)).size;
  const totalTests = ALL_TESTS.filter(x=>!x.levelOnly).length;
  const avg = S.results.length ? Math.round(S.results.reduce((s,r)=>s+r.pct,0)/S.results.length) : 0;
  const totalMin = Math.round(Object.values(S.days||{}).reduce((a,b)=>a+b,0)/60);
  const lvls = LEVELS.filter((_,i)=>levelPassed(i)).length;
  // per subject
  const subj = {};
  ALL_TESTS.filter(x=>!x.levelOnly).forEach(x=>{ (subj[x.subject]=subj[x.subject]||{tot:0,done:new Set(),pcts:[]}).tot++; });
  S.results.forEach(r=>{ const test=testById(r.testId); if(test&&subj[test.subject]){ subj[test.subject].done.add(r.testId); subj[test.subject].pcts.push(r.pct); } });
  const subjRows = SUBJECT_ORDER.filter(s=>subj[s]).map(s=>{
    const d=subj[s]; const a=d.pcts.length?Math.round(d.pcts.reduce((x,y)=>x+y,0)/d.pcts.length):null;
    return progressBarRow(SUBJECT_ICON[s]+' '+t('subj_'+s), d.done.size, d.tot, a!==null?('Ø '+a+'%'):'');
  }).join('');
  // per grade
  const gr = {};
  ALL_TESTS.filter(x=>!x.levelOnly).forEach(x=>{ (gr[x.grade]=gr[x.grade]||{tot:0,done:new Set()}).tot++; });
  S.results.forEach(r=>{ const test=testById(r.testId); if(test&&gr[test.grade]) gr[test.grade].done.add(r.testId); });
  const grRows = Object.keys(gr).sort((a,b)=>a-b).map(g=>progressBarRow(t('gradeShort')+' '+g, gr[g].done.size, gr[g].tot)).join('');
  // last 14 days sparkline
  const days=[]; const d=new Date();
  for(let i=13;i>=0;i--){ const dd=new Date(d); dd.setDate(d.getDate()-i); days.push(dayKeyOf(dd)); }
  const bars = days.map(k=>{
    const m = gadgetMinutesFor(k);
    const h = Math.max(3, Math.round(m/DAILY_CAP*70));
    return `<div class="spark-col" title="${fmtDayLabel(k)}: ${m} Min">
      <div class="spark-bar" style="height:${h}px;background:${m>=60?'var(--green)':m>0?'var(--orange)':'#ddd'}"></div>
      <span>${k.slice(8)}</span></div>`;
  }).join('');
  // strengths / weaknesses by lesson topic
  const topic = {};
  S.results.forEach(r=>(r.details||[]).forEach(dt=>{
    if(!dt.h || !LESSONS[dt.h]) return;
    const o = topic[dt.h] = topic[dt.h] || {got:0,max:0};
    o.got += dt.pts; o.max += dt.max;
  }));
  const rated = Object.entries(topic).filter(([,o])=>o.max>=3)
    .map(([k,o])=>({k, pct:Math.round(o.got/o.max*100), max:o.max}));
  const strong = rated.filter(x=>x.pct>=80).sort((a,b)=>b.pct-a.pct).slice(0,6);
  const weak = rated.filter(x=>x.pct<70).sort((a,b)=>a.pct-b.pct).slice(0,6);
  return `<h3>${t('progTitle')}</h3>
  <div class="stat-grid">
    ${statBox('🎓', seen+'/'+totalLessons, t('progLessons'))}
    ${statBox('📝', doneTests+'/'+totalTests, t('progTests'))}
    ${statBox('🎯', avg+'%', t('progAvg'))}
    ${statBox('🔥', dayStreak(), t('progStreak'))}
    ${statBox('⏱', totalMin+' '+t('min'), t('progTime'))}
    ${statBox('🗺️', lvls+'/'+LEVELS.length, t('progLevels'))}
  </div>
  <h3 style="margin-top:20px">${t('progLast14')}</h3>
  <div class="sparkline">${bars}</div>
  <h3 style="margin-top:20px">${t('progBySubject')}</h3>${subjRows}
  <h3 style="margin-top:20px">${t('progByGrade')}</h3>${grRows}
  ${strong.length?`<h3 style="margin-top:20px">${t('progStrong')}</h3>
    ${strong.map(x=>`<div class="att-row"><span>${esc(lessonTitle(x.k))}</span><span class="pill g">${x.pct}%</span></div>`).join('')}`:''}
  ${weak.length?`<h3 style="margin-top:20px">${t('progWeak')}</h3>
    ${weak.map(x=>`<div class="att-row"><span>${esc(lessonTitle(x.k))}</span><span class="pill ${x.pct<50?'r':'o'}">${x.pct}%</span></div>`).join('')}`:''}`;
}

/* ---- daily log tab ---- */
function fmtDayLabel(k){
  const [y,m,d] = k.split('-');
  return `${d}.${m}.${y}`;
}
function dayResults(k){ return S.results.filter(r=>resultDay(r)===k); }
function topicLabel(k){
  const h = HELP[k]; if(!h) return k;
  let l = (h[LANG]||h.de).split('\n')[0];
  l = l.replace(/^[^\p{L}\p{N}]+/u,'');   // strip leading emoji/symbols
  l = l.split('–')[0].split('—')[0];      // cut trailing "– so geht's" parts
  l = l.replace(/[::]\s*$/,'').trim();
  return l || k;
}
function adminDays(){
  const keys = new Set(Object.keys(S.days||{}));
  S.results.forEach(r=>keys.add(resultDay(r)));
  const days = [...keys].sort().reverse();
  if(!days.length) return `<h3>${t('tab_days')}</h3><p style="font-weight:700;color:#888">${t('noDays')}</p>`;
  const rows = days.map(k=>{
    const rs = dayResults(k);
    const mins = Math.round((S.days[k]||0)/60);
    const avg = rs.length ? Math.round(rs.reduce((s,r)=>s+r.pct,0)/rs.length) : null;
    const cls = avg===null?'':(avg>=80?'g':avg>=50?'o':'r');
    return `<tr class="clickable" onclick="showDayDetail('${k}')">
      <td><b>${fmtDayLabel(k)}</b></td>
      <td>⏱ ${mins} ${t('min')}</td>
      <td>📝 ${rs.length}</td>
      <td>${avg!==null?`<span class="pill ${cls}">Ø ${avg}%</span>`:'–'}</td>
      <td>💡 ${rs.reduce((s,r)=>s+(r.helpUsed||0),0)}</td></tr>`;
  }).join('');
  return `<h3>${t('tab_days')}</h3>
  <p class="hint">${t('dayResetNote')}</p>
  <div style="overflow-x:auto"><table class="res-table">
    <tr><th>${t('date')}</th><th>${t('workTime')}</th><th>${t('testsDone')}</th><th>${t('avgScore')}</th><th>${t('helpUsed')}</th></tr>
    ${rows}</table></div>
  <p class="hint">👆 ${t('conclusion')}</p>`;
}
function showDayDetail(k){
  const rs = dayResults(k);
  const mins = Math.round((S.days[k]||0)/60);
  // list of tests taken
  const testLines = rs.length ? rs.map(r=>{
    const cls = r.pct>=80?'g':r.pct>=50?'o':'r';
    const test = testById(r.testId);
    return `<div class="att-row"><span>${test?test.icon+' ':''}<b>${esc(r.testTitle)}</b>
      <small style="color:#aaa">(${t('attemptShort')} ${r.attempt} · ⏱ ${fmtTime(r.durationSec)} · 💡${r.helpUsed})</small></span>
      <span class="pill ${cls}">${r.pct}%</span></div>`;
  }).join('') : `<p style="font-weight:700;color:#888">${t('noTestsDay')}</p>`;
  // wins
  const wins = rs.filter(r=>r.pct>=80).map(r=>esc(r.testTitle)).join(', ');
  // weak topics: lost points per help-topic across all details of the day
  const lost = {};
  rs.forEach(r=>(r.details||[]).forEach(d=>{
    if(d.h && d.pts < d.max) lost[d.h] = (lost[d.h]||0) + (d.max - d.pts);
  }));
  const weak = Object.entries(lost).sort((a,b)=>b[1]-a[1]).slice(0,4);
  const weakHtml = weak.length
    ? weak.map(([topic,pts])=>`<div class="att-row"><span>${esc(topicLabel(topic))}</span><span class="pill r">−${pts} P.</span></div>`).join('')
    : `<p style="font-weight:700;color:var(--green)">${t('allGood')}</p>`;
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>📅 ${fmtDayLabel(k)} — ${t('conclusion')}</h3>
    <p style="font-weight:800;font-size:1.1rem">⏱ ${t('workTime')}: ${mins} ${t('min')}</p>
    <h3 style="margin-top:14px">📝 ${t('testsDone')} (${rs.length})</h3>${testLines}
    <h3 style="margin-top:14px">${t('wins')}</h3>
    <p style="font-weight:700">${wins || t('noWins')}</p>
    <h3 style="margin-top:14px">${t('weakTopics')}</h3>${weakHtml}`);
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
  const last7 = [...new Set([...Object.keys(S.days||{}), ...S.results.map(r=>resultDay(r))])].sort().reverse().slice(0,7);
  return `<h3>${t('tab_gadget')}</h3>
  <p>${t('earnedToday')}: <span class="balance-big">${gadgetToday()} / ${DAILY_CAP} ${t('min')}</span></p>
  <p class="hint">${t('dailyRules')}</p>
  ${last7.length?`<div style="overflow-x:auto"><table class="res-table">
    <tr><th>${t('date')}</th><th>🎮 ${t('gadgetToday')}</th><th>${t('testsDone')}</th></tr>
    ${last7.map(k=>`<tr><td>${fmtDayLabel(k)}</td><td><b>${gadgetMinutesFor(k)} ${t('min')}</b></td><td>${dayResults(k).length}</td></tr>`).join('')}
  </table></div>`:''}
  <h3 style="margin-top:18px">${t('tab_credits')}</h3>
  <p style="font-weight:700;color:#666">${t('totalEarned')} (${t('allGrades')}): ${totalEarned()} ${t('min')} · ${t('balance')}: ${balance()} ${t('min')}</p>
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
  S.adj.push({date:new Date().toLocaleString('de-DE',{dateStyle:'short',timeStyle:'short'}), day:todayKey(), min, note:$('#adjNote').value.trim()});
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
  ROOT.adminPw = pwHash(v); save();
  $('#pwSaved').textContent = t('saved');
}
function exportData(){
  const blob = new Blob([JSON.stringify(ROOT,null,2)],{type:'application/json'});
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
    if(d && d.users){ ROOT = d; }                       // new multi-user backup
    else if(d && d.results){ ROOT = defaultRoot(); ROOT.users.timur.data = d; }   // old backup
    else throw new Error('bad');
    if(!ROOT.users[ROOT.activeUser]) ROOT.activeUser = Object.keys(ROOT.users)[0];
    S = userData(ROOT.activeUser); save(); LANG=ROOT.lang||'de'; applyLang(); renderAdmin(); updateChip();
  }catch(e){ alert('Import error'); } };
  rd.readAsText(f);
}
function resetAllData(){
  if(!confirm(t('resetConfirm'))) return;
  S.results=[]; S.attempts={}; S.extra={}; S.adj=[]; S.days={}; S.levels={}; S.lessonsSeen={};
  save(); renderAdmin(); updateChip();
}
