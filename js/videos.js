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
function videoHTML(topic){
  const v = VIDEOS[topic]; if(!v) return '';
  const de = v.de||[], ru = v.ru||[];
  if(!de.length && !ru.length) return '';
  let h = `<div class="video-box"><div class="video-head">🎬 ${t('videos')}</div>`;
  de.forEach(x=>{ h += `<a class="vid-link" href="${x[1]}" target="_blank" rel="noopener">🇩🇪 ▶ ${esc(x[0])}</a>`; });
  ru.forEach(x=>{ h += `<a class="vid-link" href="${x[1]}" target="_blank" rel="noopener">🇷🇺 ▶ ${esc(x[0])}</a>`; });
  return h + '</div>';
}
