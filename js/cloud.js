/* ============ CLOUD SYNC ============
   Stores the whole portal state in a Supabase table so any device shows the
   same progress. The payload is AES-GCM encrypted in the browser, so the
   storage provider only ever sees ciphertext.

   Table (created once, SQL is in the admin panel):
     create table progress (id text primary key, payload text, updated_at timestamptz default now());
*/
const CLOUD_TABLE = 'progress';
let CLOUD_BUSY = false, CLOUD_LAST = 0, CLOUD_DIRTY = false, CLOUD_STATE = 'off', CLOUD_MSG = '';

function cloudCfg(){
  // config baked into the site (cloud-config.js) wins, otherwise the one entered in admin
  const baked = (typeof CLOUD_CONFIG !== 'undefined' && CLOUD_CONFIG && CLOUD_CONFIG.url) ? CLOUD_CONFIG : null;
  return baked || (ROOT && ROOT.cloud) || null;
}
function cloudOn(){ const c = cloudCfg(); return !!(c && c.url && c.key && c.row); }

/* ---------- encryption ---------- */
async function aesKey(pass){
  const enc = new TextEncoder();
  const base = await crypto.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    {name:'PBKDF2', salt:enc.encode('lernportal-salt-v1'), iterations:60000, hash:'SHA-256'},
    base, {name:'AES-GCM', length:256}, false, ['encrypt','decrypt']);
}
async function encryptPayload(obj, pass){
  const key = await aesKey(pass);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new TextEncoder().encode(JSON.stringify(obj));
  const buf = await crypto.subtle.encrypt({name:'AES-GCM', iv}, key, data);
  const all = new Uint8Array(iv.length + buf.byteLength);
  all.set(iv, 0); all.set(new Uint8Array(buf), iv.length);
  let s=''; all.forEach(b=>s+=String.fromCharCode(b));
  return btoa(s);
}
async function decryptPayload(b64, pass){
  const key = await aesKey(pass);
  const raw = atob(b64);
  const all = new Uint8Array(raw.length);
  for(let i=0;i<raw.length;i++) all[i]=raw.charCodeAt(i);
  const iv = all.slice(0,12), body = all.slice(12);
  const buf = await crypto.subtle.decrypt({name:'AES-GCM', iv}, key, body);
  return JSON.parse(new TextDecoder().decode(buf));
}

/* ---------- merge: never lose progress from either device ---------- */
function mergeProgress(a, b){
  a = a || blankProgress(); b = b || blankProgress();
  const out = blankProgress();
  // results: union by id
  const seen = {};
  (a.results||[]).concat(b.results||[]).forEach(r=>{ if(r && r.id!=null) seen[r.id] = r; });
  out.results = Object.values(seen).sort((x,y)=>x.id-y.id);
  // counters: take the higher value
  const maxMap = (x={},y={})=>{ const o={}; new Set([...Object.keys(x),...Object.keys(y)]).forEach(k=>o[k]=Math.max(x[k]||0, y[k]||0)); return o; };
  out.attempts = maxMap(a.attempts, b.attempts);
  out.extra    = maxMap(a.extra, b.extra);
  out.days     = maxMap(a.days, b.days);
  out.levels   = maxMap(a.levels, b.levels);
  out.lessonsSeen = Object.assign({}, a.lessonsSeen||{}, b.lessonsSeen||{});
  // adjustments: union, de-duplicated
  const key = x=>[x.day,x.date,x.min,x.note].join('|');
  const adj = {}; (a.adj||[]).concat(b.adj||[]).forEach(x=>{ adj[key(x)] = x; });
  out.adj = Object.values(adj);
  out.mode = b.mode || a.mode || 'training';
  return out;
}
function mergeRoot(local, remote){
  if(!remote || !remote.users) return local;
  const out = JSON.parse(JSON.stringify(local));
  Object.entries(remote.users).forEach(([id,ru])=>{
    if(!out.users[id]) out.users[id] = {name:ru.name, pw:ru.pw, created:ru.created, data:blankProgress()};
    out.users[id].data = mergeProgress(out.users[id].data, ru.data);
    if(!out.users[id].pw && ru.pw) out.users[id].pw = ru.pw;
  });
  if(remote.adminPw && !local.adminPw) out.adminPw = remote.adminPw;
  return out;
}

/* ---------- transport ---------- */
async function cloudRequest(method, extra){
  const c = cloudCfg();
  const url = `${c.url.replace(/\/+$/,'')}/rest/v1/${CLOUD_TABLE}` + (extra||'');
  const headers = {
    'apikey': c.key,
    'Authorization': 'Bearer ' + c.key,
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates,return=representation'
  };
  return fetch(url, {method, headers, body: extra && extra.__body});
}
async function cloudPull(){
  const c = cloudCfg(); if(!cloudOn()) return null;
  const r = await fetch(`${c.url.replace(/\/+$/,'')}/rest/v1/${CLOUD_TABLE}?id=eq.${encodeURIComponent(c.row)}&select=payload,updated_at`,
    {headers:{apikey:c.key, Authorization:'Bearer '+c.key}, cache:'no-store'});
  if(!r.ok) throw new Error('HTTP '+r.status);
  const rows = await r.json();
  if(!rows.length) return null;
  return { root: await decryptPayload(rows[0].payload, c.pass || c.key), at: rows[0].updated_at };
}
async function cloudPush(root){
  const c = cloudCfg(); if(!cloudOn()) return;
  const payload = await encryptPayload(root, c.pass || c.key);
  const r = await fetch(`${c.url.replace(/\/+$/,'')}/rest/v1/${CLOUD_TABLE}`, {
    method:'POST',
    headers:{apikey:c.key, Authorization:'Bearer '+c.key, 'Content-Type':'application/json',
             Prefer:'resolution=merge-duplicates'},
    body: JSON.stringify({id:c.row, payload, updated_at:new Date().toISOString()})
  });
  if(!r.ok) throw new Error('HTTP '+r.status+' '+(await r.text()).slice(0,120));
}
/* pull → merge → push, so two devices can never overwrite each other */
async function cloudSync(reason){
  if(!cloudOn() || CLOUD_BUSY) return;
  CLOUD_BUSY = true; CLOUD_STATE='sync'; updateCloudBadge();
  try{
    let remote = null;
    try { remote = await cloudPull(); }
    catch(e){ if(!/HTTP 40[0-9]/.test(String(e.message))) throw e; }   // empty/blocked read must not stop the upload
    if(remote && remote.root && remote.root.users){
      const merged = mergeRoot(ROOT, remote.root);
      ROOT = merged;
      if(!ROOT.users[ROOT.activeUser]) ROOT.activeUser = Object.keys(ROOT.users)[0];
      S = userData(ROOT.activeUser);
      save();
    }
    await cloudPush(ROOT);
    CLOUD_LAST = Date.now(); CLOUD_DIRTY = false;
    CLOUD_STATE='ok'; CLOUD_MSG = new Date().toLocaleTimeString('de-DE');
    if(typeof rerender==='function' && VIEW && VIEW.name==='admin' && ATAB==='cloud') renderAdmin();
    else updateChip();
  }catch(e){
    CLOUD_STATE='err'; CLOUD_MSG = String(e.message||e).slice(0,120);
  }finally{
    CLOUD_BUSY = false; updateCloudBadge();
  }
}
function cloudTouch(){ CLOUD_DIRTY = true; }
function updateCloudBadge(){
  const el = document.getElementById('cloudBadge');
  if(!el) return;
  if(!cloudOn()){ el.style.display='none'; return; }
  el.style.display='';
  el.textContent = CLOUD_STATE==='sync' ? '☁️…' : CLOUD_STATE==='ok' ? '☁️✓' : CLOUD_STATE==='err' ? '☁️!' : '☁️';
  el.title = CLOUD_STATE==='err' ? CLOUD_MSG : (CLOUD_MSG ? t('lastSync')+': '+CLOUD_MSG : '');
}
/* background: sync when something changed, and when the tab becomes visible again */
setInterval(()=>{ if(CLOUD_DIRTY) cloudSync('auto'); }, 20000);
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='visible') cloudSync('focus'); });
window.addEventListener('online', ()=>cloudSync('online'));
