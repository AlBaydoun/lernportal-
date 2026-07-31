/* ============ Lernportal core app ============ */
const LS_KEY = 'lernportal_v1';
const ALL_TESTS = [...TESTS_MATH, ...TESTS_GERMAN, ...TESTS_ENGLISH, ...TESTS_OTHER, ...TESTS_INFO, ...LEVEL_TESTS];
const SUBJECT_ORDER = ['math','german','english','info','sach','bio','geo'];
const SUBJECT_ICON = {math:'🔢',german:'📖',english:'🇬🇧',info:'💻',sach:'🔬',bio:'🌿',geo:'🌍'};
const MAX_ATTEMPTS = 2;

/* ---------- state ---------- */
function enc(s){ return btoa(unescape(encodeURIComponent(s))); }
function dec(s){ return decodeURIComponent(escape(atob(s))); }
function defaultState(){
  return { lang:'de', results:[], attempts:{}, extra:{}, adminPw:enc('lise2026'), adj:[], days:{} };
}
let S;
try { S = JSON.parse(dec(localStorage.getItem(LS_KEY))); if(!S || !S.results) S = defaultState(); }
catch(e){ S = defaultState(); }
if(!S.days) S.days = {};
if(!S.levels) S.levels = {};
if(!S.mode) S.mode = 'map';
function save(){ try{ localStorage.setItem(LS_KEY, enc(JSON.stringify(S))); }catch(e){} }
LANG = S.lang || 'de';

/* ---------- daily practice-time tracking ----------
   Counts a 10 s tick whenever the page is visible AND the user was active
   within the last 60 s. Stored per local calendar day → resets automatically
   at midnight; history stays for the admin daily log. */
function dayKeyOf(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function todayKey(){ return dayKeyOf(new Date()); }
let LAST_ACTIVITY = Date.now();
['click','keydown','pointerdown','pointermove','scroll','touchstart'].forEach(ev=>
  addEventListener(ev, ()=>{ LAST_ACTIVITY = Date.now(); }, {passive:true}));
setInterval(()=>{
  if(document.visibilityState==='visible' && Date.now()-LAST_ACTIVITY < 60000){
    const k = todayKey();
    S.days[k] = (S.days[k]||0) + 10;
    const keys = Object.keys(S.days);
    if(keys.length > 120) keys.sort().slice(0, keys.length-120).forEach(old=>delete S.days[old]);
    save();
    updateDayChip();
  }
}, 10000);
function updateDayChip(){
  const el = document.getElementById('dayVal');
  if(el) el.textContent = Math.floor((S.days[todayKey()]||0)/60);
  const chip = document.getElementById('dayChip');
  if(chip) chip.title = t('today');
}

/* ---------- helpers ---------- */
const $ = sel => document.querySelector(sel);
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function nl(s){ return esc(s).replace(/\n/g,'<br>'); }
function creditsFor(pct){ return pct>=90?30 : pct>=80?20 : pct>=70?15 : pct>=60?10 : pct>=50?5 : 0; }
function testById(id){ return ALL_TESTS.find(t=>t.id===id); }
function attemptsUsed(id){ return S.attempts[id]||0; }
function attemptsAllowed(id){ return MAX_ATTEMPTS + (S.extra[id]||0); }
function attemptsLeft(id){ return Math.max(0, attemptsAllowed(id) - attemptsUsed(id)); }
function bestPct(id){
  const r = S.results.filter(r=>r.testId===id);
  return r.length ? Math.max(...r.map(x=>x.pct)) : null;
}
function totalEarned(){
  const ids = [...new Set(S.results.map(r=>r.testId))];
  return ids.reduce((sum,id)=>sum+creditsFor(bestPct(id)||0), 0);
}
function balance(){ return totalEarned() + S.adj.reduce((s,a)=>s+a.min,0); }
function starsFor(pct){ return pct>=90?'⭐⭐⭐' : pct>=70?'⭐⭐' : pct>=50?'⭐' : '☆'; }
function updateChip(){ $('#creditVal').textContent = balance(); updateDayChip(); }

/* ---------- i18n render ---------- */
function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.lbtn').forEach(b=> b.classList.toggle('active', b.dataset.lang===LANG));
}
document.querySelectorAll('.lbtn').forEach(b=> b.addEventListener('click', ()=>{
  LANG = b.dataset.lang; S.lang = LANG; save(); applyLang(); rerender();
}));

/* ---------- routing ---------- */
let VIEW = {name:'home', grade:4};
let SES = null;   // current test session
function rerender(){
  if(VIEW.name==='home') renderHome();
  else if(VIEW.name==='test') renderQuestion();
  else if(VIEW.name==='result') renderResult(VIEW.res);
  else if(VIEW.name==='admin') renderAdmin();
}
function goHome(){ VIEW={name:'home', grade:VIEW.grade||4}; SES=null; renderHome(); }

/* ---------- HOME ---------- */
function setMode(m){ S.mode = m; save(); renderHome(); }
function renderHome(){
  updateChip(); applyLang();
  const mode = S.mode || 'map';
  let html = `<div class="hero"><h1>${t('heroTitle')}</h1><p>${t('heroSub')}</p></div>
  <div class="grade-tabs">
    <button class="gtab ${mode==='map'?'active':''}" onclick="setMode('map')">${t('mode_map')}</button>
    <button class="gtab ${mode==='training'?'active':''}" onclick="setMode('training')">${t('mode_training')}</button>
  </div>`;
  html += (mode==='map') ? renderMap() : renderTraining();
  $('#app').innerHTML = html;
  if(mode==='map' && allLevelsDone() && !S.champShown){ S.champShown = true; save(); confettiBurst(); }
  window.scrollTo(0,0);
}

/* ---------- adventure map ---------- */
function levelBest(id){ return S.levels[id]||0; }
function levelPassed(i){ return levelBest(LEVELS[i].id) >= LEVEL_PASS; }
function levelState(i){
  if(levelPassed(i)) return 'done';
  return (i===0 || levelPassed(i-1)) ? 'current' : 'locked';
}
function allLevelsDone(){ return LEVELS.every((_,i)=>levelPassed(i)); }
function renderMap(){
  const done = LEVELS.filter((_,i)=>levelPassed(i)).length;
  let html = `<div class="map-head">
    <h2>${t('yourPath')}</h2>
    <div class="pbar map-pbar"><div style="width:${done/LEVELS.length*100}%"></div></div>
    <p class="map-progress">${done} / ${LEVELS.length} ${t('levelsDone')} · ${t('passInfo')}</p>
    ${allLevelsDone()?`<div class="champ-banner">${t('championTitle')}<br><small>${t('championSub')}</small></div>`:''}
  </div><div class="map-wrap">`;
  const offsets = [0,-78,0,78];
  let lastTier = null;
  LEVELS.forEach((L,i)=>{
    if(L.tier!==lastTier){ lastTier = L.tier; html += `<div class="tier-banner tb-${L.tier}">${t('tier_'+L.tier)}</div>`; }
    const st = levelState(i), best = levelBest(L.id);
    const inner = st==='done' ? '✓' : (L.final ? '👑' : (i+1));
    html += `<div class="lvl-row" style="transform:translateX(${offsets[i%4]}px)">
      <div class="lvl-cell">
        <button class="lvl-node ${st} ${L.final?'final':''}" onclick="startLevel(${i})">
          ${st==='locked' ? '🔒' : inner}
        </button>
        <div class="lvl-label">${t('levelWord')} ${i+1}${st==='done'?`<br><span class="lvl-stars">${starsFor(best)}</span>`:''}</div>
      </div></div>`;
  });
  return html + '</div>';
}
function startLevel(i){
  const L = LEVELS[i];
  if(levelState(i)==='locked'){
    showModal(`<button class="close-x" onclick="closeModal()">✕</button>
      <span class="locked-emoji">🔒</span><h3 style="text-align:center">${t('levelWord')} ${i+1}</h3>
      <p style="text-align:center;font-weight:700;line-height:1.6">${t('lockedLevel')}</p>
      <div style="text-align:center;margin-top:16px"><button class="btn primary" onclick="closeModal()">${t('ok')}</button></div>`);
    return;
  }
  const avail = L.pool.filter(id=> testById(id) && attemptsLeft(id)>0);
  if(!avail.length){
    showModal(`<button class="close-x" onclick="closeModal()">✕</button>
      <span class="locked-emoji">🔒</span><h3 style="text-align:center">${t('lockedTitle')}</h3>
      <p style="text-align:center;font-weight:700;line-height:1.6">${t('noAttempts')}</p>
      <div style="text-align:center;margin-top:16px"><button class="btn primary" onclick="closeModal()">${t('ok')}</button></div>`);
    return;
  }
  startTest(pick(avail), L.id);
}

/* ---------- training mode (subject browser) ---------- */
function renderTraining(){
  const grade = VIEW.grade || 4;
  let html = `<div class="grade-tabs sub">
    <button class="gtab ${grade===4?'active':''}" onclick="VIEW.grade=4;renderHome()">🎒 ${t('grade4')}</button>
    <button class="gtab ${grade===5?'active':''}" onclick="VIEW.grade=5;renderHome()">🚀 ${t('grade5')}</button>
    <button class="gtab ${grade===0?'active':''}" onclick="VIEW.grade=0;renderHome()">✨ ${t('allGrades')}</button>
  </div>`;
  for(const subj of SUBJECT_ORDER){
    const tests = ALL_TESTS.filter(x=> x.subject===subj && !x.levelOnly && (grade===0 || x.grade===grade));
    if(!tests.length) continue;
    html += `<div class="subject-block">
      <div class="subject-head"><span class="s-ico">${SUBJECT_ICON[subj]}</span><h2>${t('subj_'+subj)}</h2>
      <span class="cnt">${tests.length} ${t('tests')}</span></div><div class="tests-grid">`;
    for(const test of tests){
      const left = attemptsLeft(test.id), best = bestPct(test.id);
      const locked = left<=0;
      html += `<div class="tcard"><div class="tcard-in" onclick="startTest('${test.id}')">
        ${test.genTest ? `<div class="gen-badge">🎲 ${t('newTest')}</div>`:''}
        <div class="big-ico">${test.icon}</div>
        <h3>${esc(test.title[LANG]||test.title.de)}</h3>
        <div class="desc">${esc(test.desc[LANG]||test.desc.de)}</div>
        <div class="tcard-meta">
          <span class="stars">${best!==null ? starsFor(best) : ''}</span>
          <span class="att-badge ${locked?'locked':''}">${locked ? '🔒 '+t('locked') : left+' × '+t('attemptsLeft')}</span>
        </div>
        ${best!==null ? `<div class="best-line">${t('best')}: ${best}%</div>`:''}
        <button class="exp-btn" onclick="event.stopPropagation();openTopicInfo('${test.id}')">${t('explanation')} &amp; 🎬</button>
      </div></div>`;
    }
    html += `</div></div>`;
  }
  return html;
}

/* ---------- TEST ---------- */
function startTest(id, levelId){
  const test = testById(id);
  if(!test) return;
  if(attemptsLeft(id)<=0){
    showModal(`<button class="close-x" onclick="closeModal()">✕</button>
      <span class="locked-emoji">🔒</span><h3 style="text-align:center">${t('lockedTitle')}</h3>
      <p style="text-align:center;font-weight:700;line-height:1.6">${t('noAttempts')}</p>
      <div style="text-align:center;margin-top:16px"><button class="btn primary" onclick="closeModal()">${t('ok')}</button></div>`);
    return;
  }
  const qs = test.genTest ? test.gen() : JSON.parse(JSON.stringify(test.qs));
  qs.forEach(q=>{                       // shuffle MC options so the right answer isn't always "A"
    if(q.t==='mc' && !q.noshuffle){
      const perm = shuf(q.opts.map((_,i)=>i));
      q.opts = perm.map(i=>q.opts[i]);
      q.a = perm.indexOf(q.a);
    }
  });
  S.attempts[id] = attemptsUsed(id)+1; save();
  SES = { test, qs, idx:0, answers:new Array(qs.length).fill(null), checked:new Array(qs.length).fill(null),
          helpUsed:0, started:Date.now(), showTr:false, levelId: levelId||null };
  VIEW = {name:'test'};
  renderQuestion();
}

function renderQuestion(){
  const {test, qs, idx} = SES;
  const q = qs[idx];
  const total = qs.length;
  const secs = Math.floor((Date.now()-SES.started)/1000);
  let html = `<div class="player">
    <div class="player-head">
      <h2>${test.icon} ${esc(test.title[LANG]||test.title.de)}</h2>
      <span class="timer" id="timer">⏱ ${fmtTime(secs)}</span>
    </div>
    <div class="pbar"><div style="width:${(idx)/total*100}%"></div></div>
    <div class="qcount">${t('question')} ${idx+1} ${t('of')} ${total}</div>`;
  if(test.reading){
    html += `<div class="reading-box"><h3>📖 ${esc(test.reading.title)}</h3>${nl(test.reading.text)}</div>`;
  }
  const chk = SES.checked[idx];
  html += `<div class="qcard">
    <div class="qtext">${nl(q.q)}</div>
    ${q.svg ? `<div class="qsvg">${q.svg}</div>` : ''}
    <div id="transBox"></div>
    <div class="ans-area" id="ansArea">${answerHTML(q)}</div>
    <div id="fbArea">${chk ? fbBanner(chk) : ''}</div>
    <div class="q-tools">
      <button class="tool-btn help-btn" onclick="openHelp('${q.h||''}')">💡 ${t('help')}</button>
      ${q.tr ? `<button class="tool-btn tr-btn" onclick="toggleTr()">🌐 ${t('translate')}</button>` : ''}
    </div>
  </div>
  <div class="nav-row">
    <button class="btn ghost" onclick="prevQ()" ${idx===0?'disabled':''}>${t('back')}</button>
    ${!chk
      ? `<button class="btn primary" onclick="checkAnswer()">${t('check')}</button>`
      : (idx<total-1
          ? `<button class="btn primary" onclick="nextQ()">${t('next')}</button>`
          : `<button class="btn green" onclick="finishTest()">${t('submit')}</button>`)}
  </div>
  <div style="text-align:center"><button class="back-link" onclick="cancelTest()">✕ ${t('cancelTest')}</button></div>
  </div>`;
  $('#app').innerHTML = html;
  restoreAnswer(q, SES.answers[idx]);
  if(chk) lockAnswers();
  if(SES.showTr) toggleTr(true);
  window.scrollTo(0,0);
  startTimer();
}
function fbBanner(chk){
  if(chk.pts===chk.max) return `<div class="fb-banner ok">${t('fbRight')}</div>`;
  if(chk.pts>0) return `<div class="fb-banner half">${t('fbPartial')} ${chk.pts}/${chk.max}</div>`;
  return `<div class="fb-banner bad">${t('fbWrong')}</div>`;
}
function lockAnswers(){
  const area = $('#ansArea'); if(!area) return;
  area.classList.add('locked');
  area.querySelectorAll('input,select,button').forEach(el=>{ el.disabled = true; });
}
function checkAnswer(){
  const q = SES.qs[SES.idx];
  const given = collectAnswer();
  if(given===null){
    $('#fbArea').innerHTML = `<div class="fb-banner empty">${t('fbEmpty')}</div>`;
    return;
  }
  SES.answers[SES.idx] = given;
  const g = gradeQ(q, given);
  SES.checked[SES.idx] = {pts:g.pts, max:g.max};
  renderQuestion();
}
let timerInt = null;
function startTimer(){
  clearInterval(timerInt);
  timerInt = setInterval(()=>{
    const el = $('#timer');
    if(!el || !SES){ clearInterval(timerInt); return; }
    el.textContent = '⏱ ' + fmtTime(Math.floor((Date.now()-SES.started)/1000));
  }, 1000);
}
function fmtTime(s){ return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }

function answerHTML(q){
  if(q.t==='num') return `<div class="inp-row"><input class="num-inp" id="inpNum" type="text" inputmode="decimal" placeholder="?"> ${q.unit?`<span class="unit">${esc(q.unit)}</span>`:''}</div>`;
  if(q.t==='text') return `<input class="txt-inp" id="inpTxt" type="text" placeholder="${t('yourAnswer')} ...">`;
  if(q.t==='div') return `
    <div class="inp-row"><label>${t('result_q')}:</label><input class="num-inp" id="inpQ" type="text" inputmode="numeric" placeholder="?"></div>
    <div class="inp-row"><label>${t('remainder')}:</label><input class="num-inp" id="inpR" type="text" inputmode="numeric" placeholder="?"></div>`;
  if(q.t==='mc'){
    const letters = 'ABCDEF';
    return `<div class="opt-list">${q.opts.map((o,i)=>
      `<button class="opt" data-i="${i}" onclick="selOpt(this)"><span class="letter">${letters[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>`;
  }
  if(q.t==='tf') return `<div class="tf-row">
    <button class="tf-btn true" data-v="true" onclick="selTF(this)">${t('trueW')}</button>
    <button class="tf-btn false" data-v="false" onclick="selTF(this)">${t('falseW')}</button></div>`;
  if(q.t==='match'){
    const rights = shuf(q.pairs.map(p=>p[1]));
    return q.pairs.map((p,i)=>`<div class="match-row"><span class="ml">${esc(p[0])}</span> ➜
      <select data-i="${i}" class="match-sel"><option value="">${t('choose')}</option>
      ${rights.map(r=>`<option value="${esc(r)}">${esc(r)}</option>`).join('')}</select></div>`).join('');
  }
  return '';
}
function selOpt(btn){ document.querySelectorAll('.opt').forEach(o=>o.classList.remove('sel')); btn.classList.add('sel'); }
function selTF(btn){ document.querySelectorAll('.tf-btn').forEach(o=>o.classList.remove('sel')); btn.classList.add('sel'); }

function collectAnswer(){
  const q = SES.qs[SES.idx];
  if(q.t==='num'){ const v=$('#inpNum').value.trim(); return v===''?null:v; }
  if(q.t==='text'){ const v=$('#inpTxt').value.trim(); return v===''?null:v; }
  if(q.t==='div'){
    const a=$('#inpQ').value.trim(), b=$('#inpR').value.trim();
    return (a===''&&b==='')?null:{q:a,r:b};
  }
  if(q.t==='mc'){ const sel=$('.opt.sel'); return sel?Number(sel.dataset.i):null; }
  if(q.t==='tf'){ const sel=$('.tf-btn.sel'); return sel?(sel.dataset.v==='true'):null; }
  if(q.t==='match'){
    const sels=[...document.querySelectorAll('.match-sel')].map(s=>s.value);
    return sels.every(v=>v==='')?null:sels;
  }
  return null;
}
function restoreAnswer(q, saved){
  if(saved===null||saved===undefined) return;
  if(q.t==='num') $('#inpNum').value=saved;
  else if(q.t==='text') $('#inpTxt').value=saved;
  else if(q.t==='div'){ $('#inpQ').value=saved.q; $('#inpR').value=saved.r; }
  else if(q.t==='mc'){ const b=document.querySelector(`.opt[data-i="${saved}"]`); if(b) b.classList.add('sel'); }
  else if(q.t==='tf'){ const b=document.querySelector(`.tf-btn[data-v="${saved}"]`); if(b) b.classList.add('sel'); }
  else if(q.t==='match'){ document.querySelectorAll('.match-sel').forEach((s,i)=>{ s.value=saved[i]||''; }); }
}
function nextQ(){ if(!SES.checked[SES.idx]) SES.answers[SES.idx]=collectAnswer(); SES.showTr=false; SES.idx++; renderQuestion(); }
function prevQ(){ if(!SES.checked[SES.idx]) SES.answers[SES.idx]=collectAnswer(); SES.showTr=false; SES.idx--; renderQuestion(); }
function cancelTest(){ if(confirm(t('confirmSubmit'))) { clearInterval(timerInt); goHome(); } }

function toggleTr(force){
  const q = SES.qs[SES.idx];
  const box = $('#transBox');
  if(!q.tr || !box) return;
  const show = force===true ? true : box.innerHTML==='';
  SES.showTr = show;
  box.innerHTML = show ? `<div class="trans-box">
    <div class="tr-line">🇷🇺 ${esc(q.tr.ru||'')}</div>
    <div class="tr-line">🇬🇧 ${esc(q.tr.en||'')}</div></div>` : '';
}
function openHelp(key){
  SES && SES.helpUsed++;
  const body = key && HELP[key] ? helpText(key) : '';
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>💡 ${t('help')}</h3>
    <div class="help-body">${nl(body)}</div>
    ${videoHTML(key)}
    <p class="hint" style="margin-top:12px">${t('helpUsedNote')}</p>`);
}

/* ---------- section explanation + videos ---------- */
const TOPIC_CACHE = {};
function topicsFor(test){
  if(TOPIC_CACHE[test.id]) return TOPIC_CACHE[test.id];
  const qs = test.genTest ? test.gen() : test.qs;
  const seen = [];
  qs.forEach(q=>{ if(q.h && !seen.includes(q.h)) seen.push(q.h); });
  TOPIC_CACHE[test.id] = seen;
  return seen;
}
function openTopicInfo(testId){
  const test = testById(testId); if(!test) return;
  const topics = topicsFor(test);
  const body = topics.map(k=>`
    <div class="topic-block">
      <div class="help-body">${nl(helpText(k))}</div>
      ${videoHTML(k)}
    </div>`).join('');
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>${test.icon} ${esc(test.title[LANG]||test.title.de)} — ${t('expTitle')}</h3>${body}`);
}

/* ---------- grading ---------- */
function normNum(v){
  if(typeof v!=='string') v=String(v);
  v = v.trim().replace(/\s/g,'');
  if(/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(v)) v = v.replace(/\./g,'').replace(',','.');  // 4.320 or 4.320,5 → thousands dots
  else v = v.replace(',','.');                                                        // 3,5 or 3.5 → decimal
  const n = parseFloat(v);
  return isNaN(n)?null:n;
}
function normTxt(v){ return String(v).trim().toLowerCase().replace(/\s+/g,' ').replace(/[.!]$/,''); }
function gradeQ(q, given){
  let pts=0, max=q.pts||1, givenDisp='—', correctDisp='';
  if(q.t==='num'){
    correctDisp = String(q.a)+(q.unit?' '+q.unit:'');
    if(given!==null){ givenDisp=String(given); if(normNum(given)===q.a) pts=max; }
  } else if(q.t==='text'){
    correctDisp = q.a[0];
    if(given!==null){ givenDisp=String(given); if(q.a.map(normTxt).includes(normTxt(given))) pts=max; }
  } else if(q.t==='div'){
    correctDisp = `${t('result_q')}: ${q.a.q}, ${t('remainder')}: ${q.a.r}`;
    if(given!==null){
      givenDisp = `${t('result_q')}: ${given.q||'—'}, ${t('remainder')}: ${given.r||'—'}`;
      if(normNum(given.q)===q.a.q) pts++;
      if(normNum(given.r)===q.a.r) pts++;
    }
  } else if(q.t==='mc'){
    correctDisp = q.opts[q.a];
    if(given!==null){ givenDisp=q.opts[given]; if(given===q.a) pts=max; }
  } else if(q.t==='tf'){
    correctDisp = q.a ? t('trueW') : t('falseW');
    if(given!==null){ givenDisp = given?t('trueW'):t('falseW'); if(given===q.a) pts=max; }
  } else if(q.t==='match'){
    correctDisp = q.pairs.map(p=>`${p[0]} → ${p[1]}`).join(' · ');
    if(given!==null){
      givenDisp = q.pairs.map((p,i)=>`${p[0]} → ${given[i]||'—'}`).join(' · ');
      q.pairs.forEach((p,i)=>{ if(given[i]===p[1]) pts++; });
    }
  }
  return {pts, max, givenDisp, correctDisp};
}

function finishTest(){
  const firstUnchecked = SES.checked.findIndex(c=>c===null);
  if(firstUnchecked !== -1){ SES.idx = firstUnchecked; renderQuestion(); return; }
  clearInterval(timerInt);
  const details = SES.qs.map((q,i)=>{
    const g = gradeQ(q, SES.answers[i]);
    return { q:q.q, given:g.givenDisp, correct:g.correctDisp, pts:g.pts, max:g.max, h:q.h||null };
  });
  const pts = details.reduce((s,d)=>s+d.pts,0);
  const max = details.reduce((s,d)=>s+d.max,0);
  const pct = Math.round(pts/max*100);
  const res = {
    id: Date.now(), testId: SES.test.id, day: todayKey(),
    testTitle: SES.test.title.de,
    date: new Date().toLocaleString('de-DE',{dateStyle:'short',timeStyle:'short'}),
    pct, pts, max,
    durationSec: Math.floor((Date.now()-SES.started)/1000),
    helpUsed: SES.helpUsed,
    attempt: attemptsUsed(SES.test.id),
    level: SES.levelId,
    details
  };
  if(SES.levelId && pct > (S.levels[SES.levelId]||0)) S.levels[SES.levelId] = pct;
  S.results.push(res); save();
  SES = null;
  VIEW = {name:'result', res};
  renderResult(res);
  if(pct>=80) confettiBurst();
}

/* ---------- RESULT ---------- */
function renderResult(res){
  updateChip();
  const color = res.pct>=80?'linear-gradient(135deg,#26de81,#20bf6b)': res.pct>=50?'linear-gradient(135deg,#fdcb6e,#e17055)':'linear-gradient(135deg,#fc5c65,#eb3b5a)';
  const msg = res.pct>=95?t('perfect') : res.pct>=80?t('great') : res.pct>=60?t('good') : res.pct>=50?t('okay') : t('tryagain');
  const credits = creditsFor(res.pct);
  const left = attemptsLeft(res.testId);
  const dots = res.details.map((d,i)=>{
    const cls = d.pts===d.max?'ok': d.pts>0?'half':'bad';
    return `<div class="qdot ${cls}" title="${t('q_short')}${i+1}">${i+1}</div>`;
  }).join('');
  const lvlBanner = res.level
    ? (res.pct>=LEVEL_PASS
        ? `<div class="fb-banner ok" style="display:inline-block">${t('levelDone')}</div>`
        : `<div class="fb-banner half" style="display:inline-block">${t('levelFail')}</div>`)
    : '';
  $('#app').innerHTML = `<div class="result-wrap">
    <h1 style="color:#fff;text-shadow:0 3px 12px rgba(76,60,180,.45)">${t('resultTitle')}</h1>
    <div class="score-circle" style="background:${color}"><b>${res.pct}%</b><span>${res.pts} / ${res.max} ${t('points')}</span></div>
    <div class="big-stars">${starsFor(res.pct)}</div>
    ${lvlBanner}
    <div><span class="credit-earn"><span class="coin">🪙</span> +${credits} ${t('min')} ${t('earned')}</span></div>
    <p class="res-note">${msg}</p>
    <div class="qdots">${dots}</div>
    <p class="res-note" style="font-size:.8rem">⏱ ${fmtTime(res.durationSec)} · 💡 ${res.helpUsed}× ${t('helpUsed')}</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:14px">
      <button class="btn ghost" onclick="goHome()">${res.level ? t('backToMap') : t('home')}</button>
      ${left>0 && !(res.level && res.pct>=LEVEL_PASS)
        ? `<button class="btn primary" onclick="startTest('${res.testId}'${res.level?`,'${res.level}'`:''})">${t('retry')} (${left})</button>`
        : ''}
      ${left<=0 && res.pct<LEVEL_PASS ? `<span class="att-badge locked" style="align-self:center">🔒 ${t('noAttempts')}</span>`:''}
    </div>
  </div>`;
  window.scrollTo(0,0);
}

/* ---------- modal ---------- */
function showModal(html, cls){
  const box = $('#modalBox');
  box.className = 'modal' + (cls ? ' '+cls : '');
  box.innerHTML = html;
  $('#modalWrap').classList.remove('hidden');
}
function closeModal(){
  $('#modalWrap').classList.add('hidden');
  $('#modalBox').innerHTML = '';   // stops any playing video
}
$('#modalWrap').addEventListener('click', e=>{ if(e.target.id==='modalWrap') closeModal(); });

/* ---------- confetti ---------- */
function confettiBurst(){
  const cv = $('#confetti'); const ctx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = ['#6c5ce7','#fd79a8','#ff9f43','#20bf6b','#45aaf2','#fed330'];
  const parts = Array.from({length:160},()=>({
    x:Math.random()*cv.width, y:-20-Math.random()*cv.height*0.5,
    vx:(Math.random()-0.5)*3, vy:2+Math.random()*4,
    s:5+Math.random()*7, c:colors[ri(0,colors.length-1)], r:Math.random()*Math.PI
  }));
  let frames = 0;
  (function tick(){
    ctx.clearRect(0,0,cv.width,cv.height);
    parts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.r+=0.08;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r);
      ctx.fillStyle=p.c; ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s); ctx.restore();
    });
    if(++frames<210) requestAnimationFrame(tick);
    else ctx.clearRect(0,0,cv.width,cv.height);
  })();
}

/* ---------- boot ---------- */
$('#adminBtn').addEventListener('click', ()=>adminGate());
applyLang();
renderHome();
