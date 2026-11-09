/* İKO oyunları ve etkileşimli rehber (oyun sürümü 1.0). Veri: IKO_CONTENT.games[lang], IKO_CONTENT.gassets.
   Süre baskısı yok, hak tüketilmez, yanlışta açıklama + yeniden deneme. Ses kendiliğinden başlamaz.
   İlerleme yalnız kullanıcı izin verirse bu cihazda (localStorage) tutulur; silinebilir. Ad, fotoğraf, konum istenmez. */
(function () {
'use strict';
const C = window.IKO_CONTENT, A = C.gassets;
const G = {
tr:{games:'Oyunlar',list:'İKO ile altı oyun',listLead:'Her oyunun 7–9 ve 10–12 yaş için iki ayrı görevi var. Süre yok; yanlış cevapta açıklama okur ve yeniden denersin.',
 level:'Yaş düzeyi',l07:'7–9 yaş',l10:'10–12 yaş',play:'Oyna',step:'Adım {i} / {n}',hint:'İpucu',next:'Devam',check:'Kontrol et',restart:'Baştan başla',
 goal:'Öğrenme amacı',module:'İlgili modül',cards:'Basılabilir görev kartları (ekransız oyun)',
 ok:'Doğru!',bad:'Bu seçim uygun değil.',why:'Neden',tryAgain:'Yeniden dene; hakkın azalmaz.',predict:'Tahminin kaydedildi.',
 missing:'Uygun bir seçenek daha var; bir daha bak.',recheck:'Seçimin değişti. Görev yeniden açıldı; bitirmek için “Kontrol et” düğmesine bas.',found:'{a} / {n} bulundu',placed:'{a} / {n} kart yerleşti',select:'Seçili kart',binKeys:'Kartı seç, sonra kutuya tıkla ya da {k} tuşuna bas.',
 done:'Görev tamamlandı',learned:'Ne öğrendik?',real:'Gerçek hayatta dene',badge:'Görev tamamlandı rozeti',badgeNote:'Rozet yalnız görevin bittiğini gösterir; öğrenmenin kanıtı değildir.',
 otherLevel:'Diğer yaş düzeyini oyna',back:'← Oyunlar',sample:'ÖRNEK VERİ',
 iko:{menu:'İKO’ya sor',task:'Görevi anlat',hint:'İpucu ver',real:'Gerçek hayatta dene',read:'Sesli oku',noVoice:'Bu cihazda seslendirme yok; metin ekranda.',close:'Kapat',
  idle:'Hazır olduğunda seçimini yap. Acele yok.',startPre:'Görev:',right:'Güzel!',wrong:'Hmm, bir daha düşünelim.'},
 sound:'Oyun sesleri',soundOn:'açık',soundOff:'kapalı',soundAlt:{ok:'Ses: kısa, yükselen iki nota (doğru).',bad:'Ses: tek, yumuşak alçak nota (yeniden dene).',done:'Ses: üç notalık kısa melodi (görev tamamlandı).'},
 still:'İKO hareketsiz',
 progress:'İlerleme',saveOpt:'İlerlememi yalnız bu cihazda kaydet',saveNote:'Kayıt yalnız bu tarayıcıda tutulur; sunucuya gönderilmez. Ad, fotoğraf veya konum istenmez.',clear:'Kaydı sil',cleared:'Bu cihazdaki kayıt silindi.',doneMark:'Tamamlandı',
 screen:'Ekran yalnız görüntü ve ses verir. Dokunma, koklama ve tatma gerçek malzemeyle, izinle ve isteğe bağlı yapılır.',
 anim:'Temsilî animasyon',describe:'Harita betimlemesi'},
en:{games:'Games',list:'Six games with İKO',listLead:'Each game has two different tasks for ages 7–9 and 10–12. There is no time limit; if you answer wrongly, you read why and try again.',
 level:'Age level',l07:'Ages 7–9',l10:'Ages 10–12',play:'Play',step:'Step {i} of {n}',hint:'Hint',next:'Next',check:'Check',restart:'Start again',
 goal:'Learning goal',module:'Related module',cards:'Printable task cards (screen-free game)',
 ok:'Correct!',bad:'This choice does not fit.',why:'Why',tryAgain:'Try again; you do not lose anything.',predict:'Your prediction is recorded.',
 missing:'There is one more suitable option; look again.',recheck:'Your selection changed. The task is open again; press “Check” to finish.',found:'{a} of {n} found',placed:'{a} of {n} cards placed',select:'Selected card',binKeys:'Choose a card, then click a box or press {k}.',
 done:'Task completed',learned:'What did we learn?',real:'Try it in real life',badge:'Task completed badge',badgeNote:'The badge only shows that the task was finished; it is not proof of learning.',
 otherLevel:'Play the other age level',back:'← Games',sample:'SAMPLE DATA',
 iko:{menu:'Ask İKO',task:'Explain the task',hint:'Give a hint',real:'Try it in real life',read:'Read aloud',noVoice:'This device has no speech voice; the text is on screen.',close:'Close',
  idle:'Make your choice when you are ready. No rush.',startPre:'Task:',right:'Well done!',wrong:'Hmm, let us think again.'},
 sound:'Game sounds',soundOn:'on',soundOff:'off',soundAlt:{ok:'Sound: two short rising notes (correct).',bad:'Sound: one soft low note (try again).',done:'Sound: a short three-note tune (task completed).'},
 still:'Still İKO',
 progress:'Progress',saveOpt:'Save my progress on this device only',saveNote:'Stored only in this browser; never sent to a server. No name, photo or location is requested.',clear:'Delete record',cleared:'The record on this device was deleted.',doneMark:'Completed',
 screen:'A screen only gives images and sound. Touching, smelling and tasting are done with real materials, with permission and only if you want.',
 anim:'Illustrative animation',describe:'Map description'},
fr:{games:'Jeux',list:'Six jeux avec İKO',listLead:'Chaque jeu propose deux tâches différentes pour les 7–9 ans et les 10–12 ans. Pas de limite de temps ; en cas d’erreur, tu lis pourquoi et tu réessaies.',
 level:'Niveau d’âge',l07:'7–9 ans',l10:'10–12 ans',play:'Jouer',step:'Étape {i} sur {n}',hint:'Indice',next:'Suivant',check:'Vérifier',restart:'Recommencer',
 goal:'Objectif d’apprentissage',module:'Module associé',cards:'Cartes de tâches imprimables (jeu sans écran)',
 ok:'Bravo !',bad:'Ce choix ne convient pas.',why:'Pourquoi',tryAgain:'Réessaie ; tu ne perds rien.',predict:'Ta prédiction est notée.',
 missing:'Il reste une option adaptée ; regarde encore.',recheck:'Ta sélection a changé. La tâche est rouverte ; appuie sur « Vérifier » pour terminer.',found:'{a} sur {n} trouvés',placed:'{a} cartes placées sur {n}',select:'Carte choisie',binKeys:'Choisis une carte, puis clique sur une boîte ou appuie sur {k}.',
 done:'Tâche terminée',learned:'Qu’avons-nous appris ?',real:'Essaie dans la vie réelle',badge:'Badge de tâche terminée',badgeNote:'Le badge montre seulement que la tâche est finie ; ce n’est pas une preuve d’apprentissage.',
 otherLevel:'Jouer l’autre niveau d’âge',back:'← Jeux',sample:'DONNÉES D’EXEMPLE',
 iko:{menu:'Demander à İKO',task:'Expliquer la tâche',hint:'Donner un indice',real:'Essayer dans la vie réelle',read:'Lire à voix haute',noVoice:'Cet appareil n’a pas de voix de synthèse ; le texte est à l’écran.',close:'Fermer',
  idle:'Fais ton choix quand tu es prêt. Rien ne presse.',startPre:'Tâche :',right:'Bien joué !',wrong:'Hmm, réfléchissons encore.'},
 sound:'Sons du jeu',soundOn:'activés',soundOff:'désactivés',soundAlt:{ok:'Son : deux notes courtes montantes (correct).',bad:'Son : une note grave et douce (réessaie).',done:'Son : un court air de trois notes (tâche terminée).'},
 still:'İKO immobile',
 progress:'Progression',saveOpt:'Enregistrer ma progression sur cet appareil uniquement',saveNote:'Stocké seulement dans ce navigateur ; jamais envoyé à un serveur. Aucun nom, photo ni lieu n’est demandé.',clear:'Effacer l’enregistrement',cleared:'L’enregistrement sur cet appareil a été effacé.',doneMark:'Terminé',
 screen:'Un écran ne donne qu’images et sons. Toucher, sentir et goûter se font avec du vrai matériel, avec autorisation et seulement si on le souhaite.',
 anim:'Animation illustrative',describe:'Description de la carte'}};
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k]);
const $ = (s, r=document) => r.querySelector(s);
const store = { get(k){ try{return localStorage.getItem(k);}catch(e){return null;} }, set(k,v){ try{localStorage.setItem(k,v);}catch(e){} }, del(k){ try{localStorage.removeItem(k);}catch(e){} } };
let lang = () => document.documentElement.lang || 'tr';
const g = () => G[lang()];
const games = () => C.games[lang()].games;
const game = id => games().find(x => x.id === id);

/* ---------- durum ---------- */
const S = { id:null, age:'07_09', i:0, st:{}, guide:{state:'start', text:''}, menu:false, sound:false, done:false };
function resetStep(){ S.st = { placed:{}, tries:{}, sel:null, picked:[], found:{}, fb:null, complete:false }; }

/* ---------- ses (WebAudio ile üretilir; kendiliğinden başlamaz) ---------- */
let ac = null;
function beep(kind){
  if (!S.sound) return;
  try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); } catch(e){ return; }
  const notes = {ok:[523,659], bad:[220], done:[523,659,784]}[kind];
  notes.forEach((f, k) => { const o = ac.createOscillator(), gn = ac.createGain(); o.frequency.value = f; o.type = 'sine';
    gn.gain.setValueAtTime(0.0001, ac.currentTime + k*0.14); gn.gain.exponentialRampToValueAtTime(0.15, ac.currentTime + k*0.14 + 0.02);
    gn.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + k*0.14 + 0.13); o.connect(gn).connect(ac.destination); o.start(ac.currentTime + k*0.14); o.stop(ac.currentTime + k*0.14 + 0.15); });
  window.IKO_SOUND_LOG = (window.IKO_SOUND_LOG || []).concat(kind);
}
function speak(text){
  if (!('speechSynthesis' in window) || !speechSynthesis.getVoices) { return false; }
  try { const u = new SpeechSynthesisUtterance(text); u.lang = {tr:'tr-TR',en:'en-GB',fr:'fr-FR'}[lang()]; speechSynthesis.cancel(); speechSynthesis.speak(u); return true; } catch(e){ return false; }
}

/* ---------- ilerleme (isteğe bağlı, yalnız bu cihaz) ---------- */
const optedIn = () => store.get('iko-progress-optin') === '1';
function progress(){ try { return JSON.parse(store.get('iko-progress') || '{}'); } catch(e){ return {}; } }
function markDone(id, age){ if (!optedIn()) return; const p = progress(); p[id+':'+age] = 1; store.set('iko-progress', JSON.stringify(p)); }

/* ---------- İKO rehberi ---------- */
function stageSvg(state){
  const pose = A.base[state] || 'wave';
  return `<svg class="iko-stage st-${state}" viewBox="0 0 560 600" role="img" aria-label="İKO"><image class="pose" href="iko_${pose}_web.png" x="0" y="0" width="400" height="600" preserveAspectRatio="xMidYMax meet"/>${A.layers[state] || ''}</svg>`;
}
function guide(state, text){ S.guide = {state, text}; const el = $('#iko-guide'); if (el) renderGuide(el); }
function renderGuide(el){
  const t = g().iko, gm = game(S.id);
  el.innerHTML = `<button type="button" class="iko-btn" id="iko-btn" aria-haspopup="true" aria-expanded="${S.menu}" aria-label="${esc(t.menu)}">${stageSvg(S.guide.state)}</button>
   <div class="iko-say" aria-live="polite">${esc(S.guide.text)}</div>
   ${S.menu ? `<div class="iko-menu" role="menu"><button role="menuitem" data-iko="task">${esc(t.task)}</button><button role="menuitem" data-iko="hint">${esc(t.hint)}</button><button role="menuitem" data-iko="real">${esc(t.real)}</button><button role="menuitem" data-iko="read">🔈 ${esc(t.read)}</button><button role="menuitem" data-iko="close">${esc(t.close)}</button></div>` : ''}`;
}

/* ---------- sayfalar ---------- */
function pageList(){
  const p = progress();
  return `<h1>${esc(g().list)}</h1><p class="lead">${esc(g().listLead)}</p><div class="grid gl">` + games().map(x =>
   `<div class="card gcard-l" style="--gc:${x.color}"><div class="gl-art">${A.art[(x.levels['07_09'].steps[0].items||[])[0]?.art] || A.art[x.levels['07_09'].steps[0].art] || ''}</div>
    <h3>${esc(x.title)}</h3><p class="muted">${esc(x.goal)}</p>
    <div class="gl-btns"><a class="btn" href="#/play/${x.id}/07_09">${esc(g().l07)}</a><a class="btn" href="#/play/${x.id}/10_12">${esc(g().l10)}</a></div>
    <p class="muted small">${['07_09','10_12'].filter(a=>p[x.id+':'+a]).map(a=>'✓ '+esc(g().doneMark)+' ('+esc(a==='07_09'?g().l07:g().l10)+')').join(' · ')}</p></div>`).join('') + `</div>` + progressBox();
}
function progressBox(){
  return `<div class="card prog"><h3>${esc(g().progress)}</h3><label><input type="checkbox" id="opt-save" ${optedIn()?'checked':''}> ${esc(g().saveOpt)}</label>
   <p class="muted small">${esc(g().saveNote)}</p><button class="btn sec" data-clear="1">${esc(g().clear)}</button><span id="clear-msg" class="muted small" aria-live="polite"></span></div>`;
}
function steps(){ return game(S.id).levels[S.age].steps; }
function step(){ return steps()[S.i]; }
function pagePlay(route){
  const id = route[1], age = route[2] === '10_12' ? '10_12' : '07_09', gm = game(id);
  if (!gm) return `<a href="#/games">${esc(g().back)}</a>`;
  if (S.id !== id || S.age !== age) { S.id = id; S.age = age; S.i = 0; S.done = false; S.menu = false; resetStep(); S.guide = {state:'start', text: g().iko.startPre + ' ' + gm.levels[age].intro}; S.lang = lang(); }
  if (S.lang !== lang()) {   // dil değişti: adım ve ilerleme korunur, rehber ve geri bildirim yeni dile geçer
    S.lang = lang(); const s0 = steps()[S.i];
    if (S.st.fb) { const f = S.st.fb; let why = '';
      if (s0.type === 'sort' && f.ref) why = (s0.items.find(x=>x.id===f.ref)||{}).why; if (s0.type === 'choice' && f.ref) why = (s0.options.find(x=>x.id===f.ref)||{}).why;
      if (s0.type === 'spot' && f.ref) why = (s0.spots.find(x=>x.id===f.ref)||{}).why; S.st.fb = Object.assign({}, f, {why: why || ''}); }
    S.guide = {state: S.guide.state, text: S.done ? gm.learned + ' ' + g().real + ': ' + gm.real : (S.i === 0 && S.guide.state === 'start' ? g().iko.startPre + ' ' + gm.levels[age].intro : (s0.hint && S.guide.state === 'hint' ? s0.hint : g().iko.idle))};
  }
  const files = C.files, card = files['gamecards:' + id + ':' + lang()], mid = gm.modules[age];
  const head = `<a href="#/games">${esc(g().back)}</a><div class="ghead" style="--gc:${gm.color}"><h1>${esc(gm.title)}</h1>
   <div class="filters" role="group" aria-label="${esc(g().level)}">${['07_09','10_12'].map(a=>`<a href="#/play/${id}/${a}" ${a===age?'aria-current="true"':''}>${esc(a==='07_09'?g().l07:g().l10)}</a>`).join('')}</div>
   <details class="goal"><summary>${esc(g().goal)}</summary><p>${esc(gm.goal)}</p></details>
   <div class="glinks"><a href="#/module/${mid}">${esc(g().module)}: ${esc(mid)}</a>${card ? ` · <a href="${esc(card.href)}" download data-file="gamecards:${id}:${lang()}">${esc(g().cards)} (PDF)</a>` : ''}</div>
   <div class="gtools"><button type="button" class="btn sec small" data-sound="1" aria-pressed="${S.sound}">${esc(g().sound)}: ${esc(S.sound?g().soundOn:g().soundOff)}</button>
    <label class="small"><input type="checkbox" data-still="1" ${document.body.classList.contains('iko-static')?'checked':''}> ${esc(g().still)}</label></div></div>`;
  const body = S.done ? doneHtml(gm) : stepHtml(gm);
  return head + `<div class="play" style="--gc:${gm.color}"><aside class="guide" id="iko-guide"></aside><section class="stage-area" id="stage-area">${body}</section></div>`;
}
function dataTable(d){
  if (!d) return '';
  return `<div class="gdata"><span class="sample">${esc(d.label)}</span><div class="tbl-wrap"><table><thead><tr>${d.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${d.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
}
function fbHtml(){
  const f = S.st.fb; if (!f) return '';
  if (f.kind === 'recheck') return `<div class="feedback info" tabindex="-1"><div class="head">↺ ${esc(g().recheck)}</div></div>`;
  const cls = f.kind === 'ok' ? 'ok' : (f.kind === 'pred' ? 'ok' : 'bad');
  const head = {ok:g().ok, pred:g().predict, bad:g().bad, miss:g().missing}[f.kind];
  return `<div class="feedback ${cls}" tabindex="-1"><div class="head">${f.kind==='bad'||f.kind==='miss'?'✗':'✓'} ${esc(head)}</div>${f.why?`<p><b>${esc(g().why)}:</b> ${esc(f.why)}</p>`:''}${(f.kind==='bad'||f.kind==='miss')?`<p>${esc(g().tryAgain)}</p>`:''}${S.sound&&f.snd?`<p class="muted small">${esc(g().soundAlt[f.snd])}</p>`:''}</div>`;
}
function stepHtml(gm){
  const s = step(), n = steps().length, st = S.st;
  let h = `<p class="progress">${esc(fmt(g().step,{i:S.i+1,n}))}</p>` + (s.prompt ? `<h2 class="prompt">${esc(s.prompt)}</h2>` : '') + dataTable(s.data);
  if (s.art) h += `<div class="gart">${A.art[s.art] || ''}</div>`;
  if (s.type === 'sort') {
    const keys = s.bins.map((_,k)=>k+1).join('–');
    h += `<p class="muted small">${esc(fmt(g().binKeys,{k:keys}))}</p><div class="deck">` + s.items.filter(it=>!st.placed[it.id]).map(it =>
      `<button type="button" class="gcard ${st.hint===it.id?'hl':''}" draggable="true" data-item="${it.id}" aria-pressed="${st.sel===it.id}">${it.art?`<span class="ia">${A.art[it.art]||''}</span>`:''}<span>${esc(it.text)}${it.alt?`<span class="alt">${esc(it.alt)}</span>`:''}</span></button>`).join('') + '</div>';
    h += `<div class="bins" style="grid-template-columns:repeat(${Math.min(s.bins.length,4)},1fr)">` + s.bins.map((b,k) =>
      `<div class="bin" data-bin="${b.id}"><button type="button" class="bin-btn" data-bin="${b.id}"><span class="bi">${A.art[b.icon]||''}</span><kbd>${k+1}</kbd> ${esc(b.label)}</button>` +
      s.items.filter(it=>st.placed[it.id]===b.id).map(it=>`<div class="placed">✓ ${esc(it.text)}</div>`).join('') + '</div>').join('') + '</div>';
    h += `<p class="progress">${esc(fmt(g().placed,{a:Object.keys(st.placed).length,n:s.items.length}))}</p>`;
  } else if (s.type === 'choice') {
    h += `<div class="opts ${s.multi?'multi':''}" role="${s.multi?'group':'radiogroup'}">` + s.options.map(o => {
      const on = st.picked.includes(o.id), tried = st.tries[o.id];
      return `<button type="button" class="opt ${on?'on':''} ${tried==='bad'?'tried':''}" data-opt="${o.id}" ${s.multi?`aria-pressed="${on}"`:`role="radio" aria-checked="${on}"`}>${o.art?`<span class="ia">${A.art[o.art]||''}</span>`:''}<span>${s.multi?(on?'☑ ':'☐ '):''}${esc(o.text)}</span></button>`; }).join('') + '</div>';
    if (s.multi && !st.complete) h += `<button type="button" class="btn" data-checkmulti="1">${esc(g().check)}</button>`;
  } else if (s.type === 'spot') {
    h += `<details class="describe"><summary>${esc(g().describe)}</summary><p>${esc(s.describe||'')}</p></details><div class="mapwrap">${A.yard}` + s.spots.map((p,k) =>
      `<button type="button" class="spot ${st.found[p.id]?'found':''} ${st.tries[p.id]==='bad'?'tried':''} ${st.hint===p.id?'hl':''}" data-spot="${p.id}" style="left:${p.x/440*100}%;top:${p.y/240*100}%" aria-label="${esc(p.label)}" aria-pressed="${!!st.found[p.id]}"><span>${k+1}</span></button>`).join('') + '</div>';
    h += `<ol class="spotlist">${s.spots.map((p,k)=>`<li>${k+1}. ${esc(p.label)}${st.found[p.id]?' ✓':''}</li>`).join('')}</ol>`;
    h += `<p class="progress">${esc(fmt(g().found,{a:Object.keys(st.found).length,n:s.need}))}</p>`;
  } else if (s.type === 'info') {
    h += `<figure class="ganim"><span class="sample">${esc(g().anim)}</span>${A[s.anim] || ''}<figcaption>${esc(s.text)}</figcaption></figure>`;
    st.complete = true;
  }
  h += `<div id="gfb" aria-live="polite">${fbHtml()}</div><div class="gnav"><button type="button" class="btn sec" data-ghint="1">💡 ${esc(g().hint)}</button>`
     + `<button type="button" class="btn" data-gnext="1" ${st.complete?'':'disabled aria-disabled="true"'}>${esc(g().next)} →</button><button type="button" class="btn sec" data-grestart="1">↺ ${esc(g().restart)}</button></div>`;
  if (gm.id === 'sense_quest') h += `<p class="info small">${esc(g().screen)}</p>`;
  return h;
}
function doneHtml(gm){
  const other = S.age === '07_09' ? '10_12' : '07_09';
  return `<div class="gdone"><h2>🎉 ${esc(g().done)}</h2><div class="badge" role="img" aria-label="${esc(g().badge)}">★ ${esc(gm.title)} · ${esc(S.age==='07_09'?g().l07:g().l10)}</div>
   <p class="muted small">${esc(g().badgeNote)}</p><h3>${esc(g().learned)}</h3><p>${esc(gm.learned)}</p><div class="real"><h3>🌱 ${esc(g().real)}</h3><p>${esc(gm.real)}</p></div>
   <div class="gnav"><button type="button" class="btn" data-grestart="1">↺ ${esc(g().restart)}</button><a class="btn sec" href="#/play/${gm.id}/${other}">${esc(g().otherLevel)}</a><a class="btn sec" href="#/games">${esc(g().back)}</a></div></div>${progressBox()}`;
}
function rerender(focusSel){
  const gm = game(S.id); const sa = $('#stage-area'); if (!sa) return;
  sa.innerHTML = S.done ? doneHtml(gm) : stepHtml(gm);
  renderGuide($('#iko-guide'));
  if (focusSel) { const el = $(focusSel); if (el) el.focus(); }
}

/* ---------- etkileşim ---------- */
function feedback(kind, why, snd, ref){ S.st.fb = {kind, why, snd, ref}; if (snd) beep(snd); }
function sortPlace(itemId, bin){
  const s = step(), it = s.items.find(x=>x.id===itemId); if (!it || S.st.placed[itemId]) return;
  S.st.sel = null; S.st.hint = null;
  if (it.ans.includes(bin)) { S.st.placed[itemId] = bin; feedback('ok', it.why, 'ok', itemId); guide('check', g().iko.right + ' ' + it.why); }
  else { S.st.tries[itemId] = 'bad'; feedback('bad', it.why, 'bad', itemId); guide('retry', g().iko.wrong + ' ' + s.hint); }
  if (Object.keys(S.st.placed).length === s.items.length) S.st.complete = true;
  rerender(S.st.complete ? '[data-gnext]' : '.deck .gcard');
}
function choose(optId){
  const s = step(), o = s.options.find(x=>x.id===optId); if (!o || S.st.complete && !s.multi) return;
  if (s.multi) {
    const p = S.st.picked; S.st.picked = p.includes(optId) ? p.filter(x=>x!==optId) : p.concat(optId);
    if (S.st.complete) {            // doğrulamadan sonra seçim değişti: tamamlanma geçersiz, yeniden kontrol gerekir
      S.st.complete = false; S.st.fb = {kind:'recheck', why:'', snd:null, ref:null}; guide('thinking', g().recheck);
    } else S.st.fb = null;
    rerender(`[data-opt="${optId}"]`); return;
  }
  S.st.picked = [optId];
  if (o.ok === null) { feedback('pred', o.why, 'ok', optId); S.st.complete = true; guide('notebook', o.why); }
  else if (o.ok) { feedback('ok', o.why, 'ok', optId); S.st.complete = true; guide('check', g().iko.right + ' ' + o.why); }
  else { S.st.tries[optId] = 'bad'; feedback('bad', o.why, 'bad', optId); guide('retry', g().iko.wrong + ' ' + s.hint); }
  rerender(S.st.complete ? '[data-gnext]' : `[data-opt="${optId}"]`);
}
function checkMulti(){
  const s = step(), p = S.st.picked;
  const wrong = s.options.filter(o => p.includes(o.id) && o.ok === false);
  const missing = s.options.filter(o => o.ok === true && !p.includes(o.id));
  if (wrong.length) { wrong.forEach(o => S.st.tries[o.id] = 'bad'); feedback('bad', wrong.map(o=>o.text+': '+o.why).join(' '), 'bad'); guide('retry', g().iko.wrong + ' ' + s.hint); }
  else if (missing.length) { feedback('miss', s.hint, 'bad'); guide('thinking', g().missing); }
  else { feedback('ok', s.options.filter(o=>o.ok).map(o=>o.text+': '+o.why).join(' '), 'ok'); S.st.complete = true; guide('check', g().iko.right); }
  rerender(S.st.complete ? '[data-gnext]' : '[data-checkmulti]');
}
function spotPick(id){
  const s = step(), sp = s.spots.find(x=>x.id===id); if (!sp || S.st.found[id]) return;
  S.st.hint = null;
  if (sp.ok) { S.st.found[id] = 1; feedback('ok', sp.why, 'ok', id); guide('notebook', g().iko.right + ' ' + sp.why); }
  else { S.st.tries[id] = 'bad'; feedback('bad', sp.why, 'bad', id); guide('retry', g().iko.wrong + ' ' + s.hint); }
  if (Object.keys(S.st.found).length >= s.need) S.st.complete = true;
  rerender(S.st.complete ? '[data-gnext]' : `[data-spot="${id}"]`);
}
function hint(){
  const s = step();
  if (s.type === 'sort') S.st.hint = (s.items.find(it => !S.st.placed[it.id]) || {}).id;
  if (s.type === 'spot') S.st.hint = (s.spots.find(p => p.ok && !S.st.found[p.id]) || {}).id;
  guide('hint', s.hint || ''); rerender(); const hl = $('.hl') || $('.gdata') || $('.prompt'); if (hl) { hl.classList.add('hint-target'); }
}
function next(){
  if (!S.st.complete) return;
  if (S.i < steps().length - 1) { S.i++; resetStep(); const s = step(); guide(s.type==='spot'?'notebook':(s.type==='info'?'listening':'idle'), s.type==='info'? s.text : g().iko.idle); }
  else { S.done = true; markDone(S.id, S.age); beep('done'); const gm = game(S.id); guide('celebrate', gm.learned + ' ' + g().real + ': ' + gm.real); }
  rerender('.prompt, .gdone h2'); window.scrollTo(0, 0);
}
function restart(){ S.i = 0; S.done = false; resetStep(); const gm = game(S.id); guide('start', g().iko.startPre + ' ' + gm.levels[S.age].intro); rerender('.prompt'); }

document.addEventListener('click', e => {
  if (!document.querySelector('.play, .gl')) return;
  const t = e.target;
  if (t.closest('#iko-btn')) { S.menu = !S.menu; renderGuide($('#iko-guide')); $('#iko-btn').focus(); return; }
  const im = t.closest('[data-iko]');
  if (im) { const gm = game(S.id), k = im.dataset.iko;
    if (k === 'task') guide('asking', gm.levels[S.age].intro + (step() && !S.done ? ' ' + (step().prompt || '') : ''));
    if (k === 'hint') { S.menu = false; hint(); return; }
    if (k === 'real') guide('listening', gm.real);
    if (k === 'read') { if (!speak(S.guide.text)) guide(S.guide.state, S.guide.text + ' (' + g().iko.noVoice + ')'); }
    if (k === 'close') S.menu = false;
    renderGuide($('#iko-guide')); return; }
  const it = t.closest('.deck .gcard'); if (it) { S.st.sel = S.st.sel === it.dataset.item ? null : it.dataset.item; rerender(`[data-item="${it.dataset.item}"]`); return; }
  const bin = t.closest('.bin-btn'); if (bin && S.st.sel) { sortPlace(S.st.sel, bin.dataset.bin); return; }
  const op = t.closest('[data-opt]'); if (op) { choose(op.dataset.opt); return; }
  if (t.closest('[data-checkmulti]')) { checkMulti(); return; }
  const sp = t.closest('[data-spot]'); if (sp) { spotPick(sp.dataset.spot); return; }
  if (t.closest('[data-ghint]')) { hint(); return; }
  if (t.closest('[data-gnext]')) { next(); return; }
  if (t.closest('[data-grestart]')) { restart(); return; }
  if (t.closest('[data-sound]')) { S.sound = !S.sound; window.IKO_APP_RENDER(); return; }
  if (t.closest('[data-clear]')) { store.del('iko-progress'); store.del('iko-progress-optin'); const m = $('#clear-msg'); window.IKO_APP_RENDER(); const m2 = $('#clear-msg'); if (m2) m2.textContent = g().cleared; return; }
});
document.addEventListener('change', e => {
  if (e.target.id === 'opt-save') { if (e.target.checked) store.set('iko-progress-optin', '1'); else { store.del('iko-progress-optin'); } }
  if (e.target.dataset && e.target.dataset.still) { document.body.classList.toggle('iko-static', e.target.checked); }
});
document.addEventListener('keydown', e => {
  if (!document.querySelector('.play') || S.done) return;
  const s = step(); if (!s) return;
  if (s.type === 'sort' && S.st.sel) { const n = parseInt(e.key, 10); if (n >= 1 && n <= s.bins.length) { e.preventDefault(); sortPlace(S.st.sel, s.bins[n-1].id); } if (e.key === 'Escape') { S.st.sel = null; rerender(); } }
});
document.addEventListener('dragstart', e => { const c = e.target.closest && e.target.closest('.deck .gcard'); if (c) { e.dataTransfer.setData('text/plain', c.dataset.item); S.st.sel = c.dataset.item; } });
document.addEventListener('dragover', e => { const b = e.target.closest && e.target.closest('.play .bin'); if (b) { e.preventDefault(); b.classList.add('over'); } });
document.addEventListener('dragleave', e => { const b = e.target.closest && e.target.closest('.play .bin'); if (b) b.classList.remove('over'); });
document.addEventListener('drop', e => { const b = e.target.closest && e.target.closest('.play .bin'); if (b) { e.preventDefault(); sortPlace(e.dataTransfer.getData('text/plain') || S.st.sel, b.dataset.bin); } });

window.IKO_GAMES = { pageList, pagePlay, after(){ const el = $('#iko-guide'); if (el) renderGuide(el); }, state: S, labels: G };
})();
