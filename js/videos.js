/* ============ Video library: ONLY verified, exact lesson videos (DE + RU) ============
   Topics without an exact matching video have no entry — no generic search links. */
const VIDEOS = {
division:{
  de:[['Schriftliches Dividieren – Lehrerschmidt (Klasse 4)','https://www.youtube.com/watch?v=vKkSKYdDqmc'],
      ['Schriftliches Dividieren mit Rest – Lehrerschmidt','https://www.youtube.com/watch?v=H63IJopwHNY'],
      ['Division mit zweistelligem Divisor – Lehrerschmidt','https://www.youtube.com/watch?v=x0M3WFmBwi4']],
  ru:[['Деление в столбик за 4 минуты','https://www.youtube.com/watch?v=e136C1dGMmE'],
      ['Как научиться делить в столбик?','https://www.youtube.com/watch?v=QnfMp5AlXFU']]},
remainder:{
  de:[['Schriftliches Dividieren mit Rest – Lehrerschmidt','https://www.youtube.com/watch?v=H63IJopwHNY']],
  ru:[['Деление с остатком – Инфоурок (3 класс)','https://www.youtube.com/watch?v=aS2U1cuxCFE'],
      ['Деление с остатком + проверка (видеоурок)','https://www.youtube.com/watch?v=--l0jn5NZnQ']]},
multWritten:{
  de:[['Schriftliches Multiplizieren – Lehrerschmidt (Klasse 4)','https://www.youtube.com/watch?v=QxIyeis2pyo'],
      ['Schriftliches Multiplizieren (Malrechnen) – Lehrerschmidt','https://www.youtube.com/watch?v=DoLiVjAXu8c']],
  ru:[['Умножение столбиком – как научиться?','https://www.youtube.com/watch?v=Vgriyx7WIhs'],
      ['Умножение двузначных чисел в столбик','https://www.youtube.com/watch?v=juLRpqv0bOE']]},
rounding:{
  de:[['Große Zahlen RUNDEN – auf Hunderter, Tausender, Zehntausender','https://www.youtube.com/watch?v=q8Euh7L2aKY'],
      ['Zahlen RUNDEN – Grundschule','https://www.youtube.com/watch?v=tso5PmLw5yI']],
  ru:[['Округление чисел – Математика 4 класс','https://www.youtube.com/watch?v=EQ-VS4sqno4'],
      ['Округление чисел (видеоурок, 4 класс)','https://www.youtube.com/watch?v=kfKJH_oP7PE']]},
placeValue:{
  ru:[['Нумерация многозначных чисел – 4 класс','https://www.youtube.com/watch?v=7b_eC_lWPAI'],
      ['Чтение многозначных чисел – видеоурок 4 класс','https://www.youtube.com/watch?v=fWBCCwi16io']]},
units:{
  de:[['Maßeinheiten umrechnen: km, m, dm, cm, mm – Lehrerschmidt','https://www.youtube.com/watch?v=iRh4wA6TVy4'],
      ['Längenmaße umwandeln – Lehrerschmidt','https://www.youtube.com/watch?v=yGTVvJcATzE'],
      ['Rechnen mit Längen (Meter & Zentimeter) – Lehrerschmidt Grundschule','https://www.youtube.com/watch?v=AelU1Y3yPEs']]},
periArea:{
  de:[['Rechteck: Beschriftung, Flächeninhalt & Umfang – Lehrerschmidt','https://www.youtube.com/watch?v=nFPjJ58MGc0'],
      ['Rechteck: Flächeninhalt und Umfang berechnen – Lehrerschmidt','https://www.youtube.com/watch?v=aWWf6E9-jmQ'],
      ['Quadrat: Flächeninhalt und Umfang – Lehrerschmidt','https://www.youtube.com/watch?v=XjAU_PGOa8w']],
  ru:[['Периметр и площадь прямоугольника (4–5 класс)','https://www.youtube.com/watch?v=C1z5Dh_rt00'],
      ['Периметр и площадь квадрата и прямоугольника','https://www.youtube.com/watch?v=Dm08lZuZsro']]},
coords:{
  de:[['Koordinatensystem: Punkte ablesen (mit Übung) – Lehrerschmidt','https://www.youtube.com/watch?v=KzPknP4c01c'],
      ['Koordinatensystem: Punkte eintragen (mit Übung) – Lehrerschmidt','https://www.youtube.com/watch?v=3tSlaffcQ2I']]},
divisibility:{
  de:[['Teilbarkeitsregeln – Lehrerschmidt','https://www.youtube.com/watch?v=COe6sDmcFEo'],
      ['Teilbarkeit durch 3 und 9 (Quersummenregel)','https://www.youtube.com/watch?v=cvQTynzQvm0']]},
orderOps:{
  de:[['Punkt- vor Strichrechnung – Lehrerschmidt','https://www.youtube.com/watch?v=zEvWRs6BWos'],
      ['Punktrechnung vor Strichrechnung – Lehrerschmidt','https://www.youtube.com/watch?v=qijx1YYqfjw']]},
wortarten:{
  de:[['Die Wortarten – Überblick (Deutsch 3./4. Klasse)','https://www.youtube.com/watch?v=BvZIWweX6ww']]},
zeiten:{
  de:[['Zeitformen Deutsch: Erklärung','https://www.youtube.com/watch?v=Dv117U2d3NY'],
      ['Übersicht Zeitformen – Schülerhilfe Lernvideo','https://www.youtube.com/watch?v=AGUJAk4hDcE']]},
faelle:{
  de:[['Die 4 Fälle des Nomens (Grundschule, Klasse 4)','https://www.youtube.com/watch?v=GLnOzKAamAI'],
      ['Die vier Fälle einfach erklärt (Klasse 5/6)','https://www.youtube.com/watch?v=dy6vCGVTDCM']],
  ru:[['Падежи в немецком – простое объяснение (Akkusativ/Dativ)','https://www.youtube.com/watch?v=g54-GsrccOc'],
      ['Немецкие падежи – самое простое объяснение','https://www.youtube.com/watch?v=tHB_e9dxgE0']]},
satzglieder:{
  de:[['Satzglieder bestimmen – Klasse 4','https://www.youtube.com/watch?v=lNGMmUAo-Wo'],
      ['Satzglieder bestimmen (Erklärvideo, 3./4. Klasse)','https://www.youtube.com/watch?v=0uWiHYMsXzo'],
      ['Satzglieder: das Objekt (Dativ- & Akkusativobjekt)','https://www.youtube.com/watch?v=H6TwTB8VR8A']]},
engHave:{
  de:[['HAVE GOT or HAS GOT – Erklärung + Übungen (Englisch Klasse 5)','https://www.youtube.com/watch?v=lJH-NhQA_3A'],
      ['have got – haben, besitzen einfach erklärt','https://www.youtube.com/watch?v=KFpWI73pSV0']]},
engSimplePres:{
  de:[['Simple Present – einfach erklärt','https://www.youtube.com/watch?v=etQnHiespSM'],
      ['Simple Present – Englisch 5. Klasse','https://www.youtube.com/watch?v=bnvhwHPHuw4']],
  ru:[['Present Simple – всё проще, чем вы думаете!','https://www.youtube.com/watch?v=6Qd1xAikoQc']]},
engQuestions:{
  de:[['Simple Present: Fragen mit Fragewörtern – Englisch Klasse 5','https://www.youtube.com/watch?v=bp5VybyVZMI']]},
sachWater:{
  de:[['Wasserkreislauf – Lehrerschmidt (Sachunterricht)','https://www.youtube.com/watch?v=Ke5UTHkbXiU'],
      ['Der Wasserkreislauf – Erklärvideo für die Grundschule','https://www.youtube.com/watch?v=JhhlBfE37Zk'],
      ['Paxi – Der Wasserkreislauf (für Kinder)','https://www.youtube.com/watch?v=i-GXTHFpUQ0']]},
infoScratch:{
  de:[['Scratch Einführung – Tutorial für den Einstieg','https://www.youtube.com/watch?v=TWi9F1DiWJc'],
      ['Scratch #01 – Einführung für Anfänger','https://www.youtube.com/watch?v=O-CNjHsYE20']],
  ru:[['Scratch. Урок 1.2 – Первый скрипт (для детей)','https://www.youtube.com/watch?v=4z3lJnDlHoM']]},
};
/* ---- grades 6–10 ---- */
Object.assign(VIDEOS, {
frac:{ de:[['Brüche erweitern & kürzen – Lehrerschmidt','https://www.youtube.com/watch?v=GpTK8NbM_m0'],
           ['Brüche kürzen – Lehrerschmidt','https://www.youtube.com/watch?v=PCwQxk1nM7k']]},
fracOps:{ de:[['Brüche addieren – gleicher Nenner – Lehrerschmidt','https://www.youtube.com/watch?v=1CixUUzrk4Q'],
              ['Brüche addieren – unterschiedliche Nenner – Lehrerschmidt','https://www.youtube.com/watch?v=ZJapyjjAW8Q'],
              ['Brüche multiplizieren (mit Kürzen) – Lehrerschmidt','https://www.youtube.com/watch?v=LA3VrJBGyNE']]},
negNum:{ de:[['Natürliche und negative Zahlen – Lehrerschmidt','https://www.youtube.com/watch?v=44ANi3KvL7I'],
             ['Negative Zahlen am Zahlenstrahl – Lehrerschmidt','https://www.youtube.com/watch?v=zRWwa7XZJLo'],
             ['Rationale Zahlen subtrahieren – Lehrerschmidt','https://www.youtube.com/watch?v=6OAbTKruL84'],
             ['Rationale Zahlen dividieren – Lehrerschmidt','https://www.youtube.com/watch?v=9t6niouU4BQ']]},
percent:{ de:[['Prozentrechnung – das Formeldreieck – Lehrerschmidt','https://www.youtube.com/watch?v=amSw62SFKDI'],
              ['Prozentwert berechnen – Lehrerschmidt','https://www.youtube.com/watch?v=STRLNoknUl4'],
              ['Prozentsatz berechnen – Lehrerschmidt','https://www.youtube.com/watch?v=YdBcJa8-81s'],
              ['Grundwert berechnen – Lehrerschmidt','https://www.youtube.com/watch?v=MoWWJPpMCBA']]},
dreisatz:{ de:[['Dreisatz einfach erklärt – Lehrerschmidt','https://www.youtube.com/watch?v=ELKsWSoQUjo'],
               ['Dreisatz – Grundwert berechnen – Lehrerschmidt','https://www.youtube.com/watch?v=K04wnXsmzOE'],
               ['Einfacher Dreisatz – Lehrerschmidt','https://www.youtube.com/watch?v=IXCWLXdv6YQ']]},
zins:{ de:[['Dreisatz und Zins – Wiederholung 9. Klasse – Lehrerschmidt','https://www.youtube.com/watch?v=JR2HlPuir6s'],
           ['Prozentfaktor – schnelles Prozentrechnen – Lehrerschmidt','https://www.youtube.com/watch?v=NFeiNmg3J98']]},
equation:{ de:[['x ausrechnen – einfache Gleichungen lösen – Lehrerschmidt','https://www.youtube.com/watch?v=isudBsbEAhQ'],
               ['Äquivalenzumformung – Lehrerschmidt','https://www.youtube.com/watch?v=G5XxS2OFsJU']]},
lgs:{ de:[['Gleichsetzungsverfahren – lineare Gleichungssysteme – Lehrerschmidt','https://www.youtube.com/watch?v=JemB5gL2aC8']]},
pythagoras:{ de:[['Satz des Pythagoras – einfache Einführung – Lehrerschmidt','https://www.youtube.com/watch?v=akgYT4Ol3CE'],
                 ['Hypotenuse berechnen – Lehrerschmidt','https://www.youtube.com/watch?v=2SmXe2BkCgU'],
                 ['Kathete berechnen – Lehrerschmidt','https://www.youtube.com/watch?v=66LCWQlzM_g'],
                 ['Das Dreieck richtig beschriften – Lehrerschmidt','https://www.youtube.com/watch?v=KKRIIWx6vFg']]},
aktivPassiv:{ de:[['Aktiv und Passiv – alle Zeitformen (Klasse 7/8)','https://www.youtube.com/watch?v=AzLPMCaQokI'],
                  ['Aktiv und Passiv einfach erklärt','https://www.youtube.com/watch?v=_fIR2kirOLg']]},
konjunktiv:{ de:[['Konjunktiv einfach erklärt – musstewissen Deutsch','https://www.youtube.com/watch?v=N_faVcrB5zw']]},
engPast:{ de:[['Das simple past – einfach erklärt','https://www.youtube.com/watch?v=BdZAjRlt8kI'],
              ['Simple Past – Bildung und Übungen','https://www.youtube.com/watch?v=Jdn5Aps8WxQ'],
              ['simple past: Das musst du wissen! – Duden Learnattack','https://www.youtube.com/watch?v=Ok85P4jTKW4']]},
engPerfect:{ de:[['Present Perfect einfach erklärt (auf Deutsch)','https://www.youtube.com/watch?v=ecMsE-mq9Q8'],
                 ['Present Perfect – Bildung und Übungen','https://www.youtube.com/watch?v=e2kqFl3FAbA'],
                 ['Simple Past oder Present Perfect? – einfach erklärt','https://www.youtube.com/watch?v=BHLeWyrkGk8']]},
});
function ytIdOf(url){ const m = url.match(/[?&]v=([\w-]+)/); return m ? m[1] : null; }
function videoHTML(topic){
  const res = (typeof videosForLesson==='function') ? videosForLesson(topic) : (VIDEOS[topic] ? {key:topic, v:VIDEOS[topic], alias:false} : null);
  if(!res) return '';
  const {key, v, alias} = res;
  const de = v.de||[], ru = v.ru||[];
  let h = `<div class="video-box"><div class="video-head">🎬 ${t('videos')}</div>`;
  if(alias) h += `<div class="vid-alias">${t('relatedVideo')}</div>`;
  de.forEach((x,i)=>{ h += `<button class="vid-link" onclick="playVideo('${key}','de',${i})">🇩🇪 ▶ ${esc(x[0])}</button>`; });
  ru.forEach((x,i)=>{ h += `<button class="vid-link" onclick="playVideo('${key}','ru',${i})">🇷🇺 ▶ ${esc(x[0])}</button>`; });
  return h + '</div>';
}
/* Plays inside the site only – deliberately no link out to YouTube. */
function playVideo(topic, lang, i){
  const entry = (VIDEOS[topic]||{})[lang]?.[i]; if(!entry) return;
  const [title, url] = entry;
  const id = ytIdOf(url);
  if(!id) return;
  showModal(`<button class="close-x" onclick="closeModal()">✕</button>
    <h3>🎬 ${esc(title)}</h3>
    <div class="player-16x9"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
      title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>
    <p class="hint" style="margin-top:10px">${t('videoHint')}</p>`, 'video');
}
