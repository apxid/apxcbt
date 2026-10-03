const $=id=>document.getElementById(id);
function params(action,payload={}){const p=new URLSearchParams({action,_:Date.now()});Object.entries(payload).forEach(([k,v])=>p.set(k,typeof v==='object'?JSON.stringify(v):String(v)));return p;}
let reqNo=0;
function api(action,payload={}){return new Promise((resolve,reject)=>{const API=window.CBT_CONFIG.GAS_WEB_APP_URL; if(!API||API.includes('PASTE_YOUR')) return reject(new Error('URL GAS belum diisi pada config.js.')); const q=params(action,payload); const cb='cbt_'+Date.now()+'_'+(++reqNo); let done=false; const script=document.createElement('script'); const timer=setTimeout(()=>finish(new Error('Server terlalu lama merespons.')),30000); function finish(err,data){if(done)return;done=true;clearTimeout(timer);script.remove();try{delete window[cb]}catch(e){} err?reject(err):resolve(data)} window[cb]=finish.bind(null,null); script.onerror=()=>finish(new Error('Tidak dapat menghubungi GAS.')); q.set('callback',cb); script.src=API+(API.includes('?')?'&':'?')+q.toString(); document.head.appendChild(script);});}
async function sha256(s){const b=new TextEncoder().encode(s);const h=await crypto.subtle.digest('SHA-256',b);return [...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,'0')).join('');}
function toast(msg){const x=$('toast');if(!x)return; x.textContent=msg;x.classList.add('show');clearTimeout(window.__tt);window.__tt=setTimeout(()=>x.classList.remove('show'),3000)}
function device(){return [navigator.userAgent,navigator.platform||'',innerWidth+'x'+innerHeight].join(' | ')}
function saveAuth(d){localStorage.setItem('cbt_admin_auth',JSON.stringify(d))}
function getAuth(){try{return JSON.parse(localStorage.getItem('cbt_admin_auth')||'null')}catch(e){return null}}
function logoutAuth(){localStorage.removeItem('cbt_admin_auth');location.reload()}
