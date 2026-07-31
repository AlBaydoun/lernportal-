/* ============ Klasse 1–3: Generatoren + Tests ============ */
function qAdd10(){
  const a=ri(1,9); const b=ri(1,10-a);
  return {t:'num', q:`Rechne:  ${a} + ${b} = ?`, tr:{ru:`Посчитай: ${a} + ${b}`,en:`Calculate: ${a} + ${b}`}, a:a+b, h:'zr10', pts:1};
}
function qSub10(){
  const a=ri(2,10); const b=ri(1,a);
  return {t:'num', q:`Rechne:  ${a} − ${b} = ?`, tr:{ru:`Посчитай: ${a} − ${b}`,en:`Calculate: ${a} − ${b}`}, a:a-b, h:'zr10', pts:1};
}
function qSplit10(){
  const n=pick([6,7,8,9,10]); const a=ri(1,n-1);
  return {t:'num', q:`Ergänze:  ${a} + ▢ = ${n}`, tr:{ru:`Дополни: ${a} + ▢ = ${n}`,en:`Fill in: ${a} + ▢ = ${n}`}, a:n-a, h:'zr10', pts:1};
}
function qNeighbour(){
  const n=ri(2,99);
  return Math.random()<0.5
    ? {t:'num', q:`Welche Zahl kommt VOR der ${n}?`, tr:{ru:`Какое число стоит ПЕРЕД ${n}?`,en:`Which number comes BEFORE ${n}?`}, a:n-1, h:'zr100', pts:1}
    : {t:'num', q:`Welche Zahl kommt NACH der ${n}?`, tr:{ru:`Какое число стоит ПОСЛЕ ${n}?`,en:`Which number comes AFTER ${n}?`}, a:n+1, h:'zr100', pts:1};
}
function qBridge(){
  const a=ri(5,9); const b=ri(11-a,9);
  return {t:'num', q:`Rechne über den Zehner:  ${a} + ${b} = ?`, tr:{ru:`Переход через десяток: ${a} + ${b}`,en:`Bridging ten: ${a} + ${b}`}, a:a+b, h:'plusminus', pts:1};
}
function qBridgeSub(){
  const r=ri(11,19); const b=ri(r-9,9);
  return {t:'num', q:`Rechne über den Zehner:  ${r} − ${b} = ?`, tr:{ru:`Переход через десяток: ${r} − ${b}`,en:`Bridging ten: ${r} − ${b}`}, a:r-b, h:'plusminus', pts:1};
}
function qAdd100(){
  const a=ri(11,89), b=ri(5,99-a);
  return {t:'num', q:`Rechne:  ${a} + ${b} = ?`, tr:{ru:`Посчитай: ${a} + ${b}`,en:`Calculate: ${a} + ${b}`}, a:a+b, h:'zr100', pts:1};
}
function qSub100(){
  const a=ri(30,99), b=ri(5,a-1);
  return {t:'num', q:`Rechne:  ${a} − ${b} = ?`, tr:{ru:`Посчитай: ${a} − ${b}`,en:`Calculate: ${a} − ${b}`}, a:a-b, h:'zr100', pts:1};
}
function qTimes(){
  const a=ri(2,10), b=ri(2,10);
  return {t:'num', q:`Rechne:  ${a} · ${b} = ?`, tr:{ru:`Посчитай: ${a} · ${b}`,en:`Calculate: ${a} · ${b}`}, a:a*b, h:'einmaleins', pts:1};
}
function qTimesDiv(){
  const a=ri(2,10), b=ri(2,10);
  return {t:'num', q:`Rechne:  ${a*b} : ${a} = ?`, tr:{ru:`Посчитай: ${a*b} : ${a}`,en:`Calculate: ${a*b} : ${a}`}, a:b, h:'einmaleins', pts:1};
}
function qTimesMissing(){
  const a=ri(2,10), b=ri(2,10);
  return {t:'num', q:`Ergänze:  ${a} · ▢ = ${a*b}`, tr:{ru:`Дополни: ${a} · ▢ = ${a*b}`,en:`Fill in: ${a} · ▢ = ${a*b}`}, a:b, h:'einmaleins', pts:1};
}
function qClockRead(){
  const h=ri(1,12), m=pick([0,15,30,45]);
  const p=n=>String(n).padStart(2,'0');
  const good=`${h}:${p(m)}`;
  const wrongs=[`${h===12?1:h+1}:${p(m)}`, `${h}:${p((m+15)%60)}`, `${h}:${p((m+30)%60)}`];
  const m2=mcSet(good, wrongs, n=>`${(h+n)%12+1}:${p(m)}`);
  return {t:'mc', q:'Welche Uhrzeit zeigt die Uhr?', tr:{ru:'Какое время показывают часы?',en:'What time does the clock show?'},
    opts:m2.opts, a:m2.a, noshuffle:true, h:'uhrLesen', pts:1, svg:svgClock(h,m)};
}
function qMoneyCount(){
  const c=ri(1,9)*10 + pick([0,5]);
  const eur=ri(1,9);
  const total=eur*100+c;
  return {t:'num', q:`Wie viel Geld ist das zusammen?\n${eur} € und ${c} Cent = ▢ Cent`,
    tr:{ru:`Сколько это всего? ${eur} € и ${c} центов = ▢ центов`,en:`How much is that? ${eur} € and ${c} cents = ▢ cents`},
    a:total, unit:'Cent', h:'geldZaehlen', pts:1};
}
function qMoneyBack(){
  const price=ri(120,480); const pay=500;
  return {t:'num', q:`Du kaufst etwas für ${euro(price)} und bezahlst mit 5 €.\nWie viel Rückgeld bekommst du? (in €)`,
    tr:{ru:`Покупка за ${euro(price)}, платишь 5 €. Сколько сдачи? (в €)`,en:`You buy something for ${euro(price)} and pay 5 €. How much change? (in €)`},
    a:(pay-price)/100, unit:'€', h:'geldZaehlen', pts:2};
}

const TESTS_G1_3 = [
/* ---------------- KLASSE 1 ---------------- */
{ id:'m1-zr10', grade:1, subject:'math', icon:'🐣', genTest:true,
  title:{de:'Zahlen bis 10',ru:'Числа до 10',en:'Numbers up to 10'},
  desc:{de:'Plus und Minus mit kleinen Zahlen',ru:'Плюс и минус с малыми числами',en:'Plus and minus with small numbers'},
  gen(){ return [qAdd10(),qAdd10(),qAdd10(),qSub10(),qSub10(),qSub10(),qSplit10(),qSplit10(),qSplit10(),
    {t:'mc', q:'Welches Zeichen passt?  7 ▢ 4', tr:{ru:'Какой знак подходит? 7 ▢ 4',en:'Which sign fits? 7 ▢ 4'}, opts:['>','<','='], a:0, noshuffle:true, h:'zr10', pts:1}]; } },

{ id:'d1-lesen', grade:1, subject:'german', icon:'🔤',
  title:{de:'Buchstaben & Silben',ru:'Буквы и слоги',en:'Letters & Syllables'},
  desc:{de:'Erste Schritte beim Lesen',ru:'Первые шаги в чтении',en:'First steps in reading'},
  qs:[
    {t:'num', q:'Wie viele Silben hat das Wort „Banane"?\n(Ba-na-ne)', tr:{ru:'Сколько слогов в слове „Banane"?',en:'How many syllables in "Banane"?'}, a:3, h:'lesenStart', pts:1},
    {t:'num', q:'Wie viele Silben hat das Wort „Apfel"?', tr:{ru:'Сколько слогов в слове „Apfel"?',en:'How many syllables in "Apfel"?'}, a:2, h:'lesenStart', pts:1},
    {t:'num', q:'Wie viele Silben hat das Wort „Ball"?', tr:{ru:'Сколько слогов в слове „Ball"?',en:'How many syllables in "Ball"?'}, a:1, h:'lesenStart', pts:1},
    {t:'mc', q:'Welcher Buchstabe ist ein VOKAL (Selbstlaut)?', tr:{ru:'Какая буква – гласная?',en:'Which letter is a vowel?'}, opts:['a','b','k','t'], a:0, h:'lesenStart', pts:1},
    {t:'mc', q:'Welches Wort beginnt mit dem Laut „M"?', tr:{ru:'Какое слово начинается со звука «М»?',en:'Which word starts with the sound "M"?'}, opts:['Maus','Haus','Baum'], a:0, h:'lesenStart', pts:1},
    {t:'mc', q:'Wie heißt das Buchstabenteam in „Schule"?', tr:{ru:'Какое буквосочетание в слове „Schule"?',en:'Which letter team is in "Schule"?'}, opts:['Sch','ch','ei'], a:0, h:'lesenStart', pts:1},
    {t:'mc', q:'Welches Wort hat den Doppellaut „ei"?', tr:{ru:'В каком слове есть „ei"?',en:'Which word has "ei"?'}, opts:['Eis','Uhr','Ofen'], a:0, h:'lesenStart', pts:1},
    {t:'mc', q:'Wie schreibt man Nomen (Dinge) im Deutschen?', tr:{ru:'Как пишут существительные в немецком?',en:'How are German nouns written?'}, opts:['immer groß','immer klein','mal so, mal so'], a:0, h:'schreibenStart', pts:1},
  ]},

/* ---------------- KLASSE 2 ---------------- */
{ id:'m2-zr100', grade:2, subject:'math', icon:'💯', genTest:true,
  title:{de:'Zahlen bis 100',ru:'Числа до 100',en:'Numbers up to 100'},
  desc:{de:'Rechnen im großen Zahlenraum',ru:'Счёт до 100',en:'Working up to 100'},
  gen(){ return [qAdd100(),qAdd100(),qSub100(),qSub100(),qNeighbour(),qNeighbour(),qBridge(),qBridge(),qBridgeSub(),qBridgeSub()]; } },

{ id:'m2-uhr', grade:2, subject:'math', icon:'🕐', genTest:true,
  title:{de:'Die Uhr lesen',ru:'Учимся читать часы',en:'Reading the Clock'},
  desc:{de:'Volle, halbe und Viertelstunden',ru:'Часы, полчаса и четверти',en:'Full, half and quarter hours'},
  gen(){ return [qClockRead(),qClockRead(),qClockRead(),qClockRead(),
    {t:'num', q:'Wie viele Minuten hat eine Stunde?', tr:{ru:'Сколько минут в часе?',en:'How many minutes in an hour?'}, a:60, h:'uhrLesen', pts:1},
    {t:'num', q:'Wie viele Minuten hat eine halbe Stunde?', tr:{ru:'Сколько минут в получасе?',en:'How many minutes in half an hour?'}, a:30, h:'uhrLesen', pts:1},
    {t:'mc', q:'Was bedeutet „halb 4" auf Deutsch?', tr:{ru:'Что значит «halb 4» по-немецки?',en:'What does German "halb 4" mean?'}, opts:['3:30','4:30','4:00'], a:0, h:'uhrLesen', pts:1},
    {t:'num', q:'Wie viele Stunden hat ein Tag?', tr:{ru:'Сколько часов в сутках?',en:'How many hours in a day?'}, a:24, h:'uhrLesen', pts:1}]; } },

{ id:'m2-formen', grade:2, subject:'math', icon:'🔺',
  title:{de:'Formen & Körper',ru:'Фигуры и тела',en:'Shapes & Solids'},
  desc:{de:'Kreis, Dreieck, Würfel und Co.',ru:'Круг, треугольник, куб и другие',en:'Circle, triangle, cube and more'},
  qs:[
    {t:'num', q:'Wie viele Ecken hat ein Dreieck?', tr:{ru:'Сколько углов у треугольника?',en:'How many corners has a triangle?'}, a:3, h:'geoFormen', pts:1},
    {t:'num', q:'Wie viele Seiten hat ein Quadrat?', tr:{ru:'Сколько сторон у квадрата?',en:'How many sides has a square?'}, a:4, h:'geoFormen', pts:1},
    {t:'num', q:'Wie viele Flächen hat ein Würfel?', tr:{ru:'Сколько граней у куба?',en:'How many faces has a cube?'}, a:6, h:'geoFormen', pts:1},
    {t:'num', q:'Wie viele Ecken hat ein Würfel?', tr:{ru:'Сколько вершин у куба?',en:'How many corners has a cube?'}, a:8, h:'geoFormen', pts:1},
    {t:'mc', q:'Welche Form hat KEINE Ecken?', tr:{ru:'У какой фигуры нет углов?',en:'Which shape has no corners?'}, opts:['Kreis','Dreieck','Quadrat'], a:0, h:'geoFormen', pts:1},
    {t:'mc', q:'Welcher Körper rollt am besten?', tr:{ru:'Какое тело лучше всего катится?',en:'Which solid rolls best?'}, opts:['Kugel','Würfel','Pyramide'], a:0, h:'geoFormen', pts:1},
    {t:'mc', q:'Ein Rechteck hat ...', tr:{ru:'У прямоугольника ...',en:'A rectangle has ...'}, opts:['2 lange und 2 kurze Seiten','4 gleich lange Seiten','3 Seiten'], a:0, h:'geoFormen', pts:1},
    {t:'match', q:'Verbinde Körper und Beispiel:', tr:{ru:'Соедини тело и пример:',en:'Match solid and example:'},
      pairs:[['Kugel','Fußball'],['Würfel','Spielwürfel'],['Zylinder','Dose'],['Kegel','Eistüte']], h:'geoFormen', pts:4},
  ]},

/* ---------------- KLASSE 3 ---------------- */
{ id:'m3-einmaleins', grade:3, subject:'math', icon:'✖️', genTest:true,
  title:{de:'Das kleine Einmaleins',ru:'Таблица умножения',en:'Times Tables'},
  desc:{de:'Alle Reihen von 1 bis 10',ru:'Все ряды от 1 до 10',en:'All rows from 1 to 10'},
  gen(){ return [qTimes(),qTimes(),qTimes(),qTimes(),qTimesDiv(),qTimesDiv(),qTimesDiv(),qTimesMissing(),qTimesMissing(),
    {t:'mc', q:'Welche Aufgabe hat dasselbe Ergebnis wie 6 · 4?', tr:{ru:'Какой пример даёт тот же ответ, что 6 · 4?',en:'Which task gives the same result as 6 · 4?'}, opts:['4 · 6','6 + 4','24 · 1'], a:0, h:'einmaleins', pts:1}]; } },

{ id:'m3-geld', grade:3, subject:'math', icon:'💶', genTest:true,
  title:{de:'Mit Geld rechnen',ru:'Считаем деньги',en:'Working with Money'},
  desc:{de:'Euro, Cent und Rückgeld',ru:'Евро, центы и сдача',en:'Euro, cents and change'},
  gen(){ return [qMoneyCount(),qMoneyCount(),qMoneyBack(),qMoneyBack(),
    {t:'num', q:'Wie viele Cent sind 1 €?', tr:{ru:'Сколько центов в 1 €?',en:'How many cents are 1 €?'}, a:100, unit:'Cent', h:'geldZaehlen', pts:1},
    {t:'num', q:'Wie viele Cent sind 2,50 €?', tr:{ru:'Сколько центов в 2,50 €?',en:'How many cents are 2.50 €?'}, a:250, unit:'Cent', h:'geldZaehlen', pts:1},
    {t:'mc', q:'Welche Münze gibt es NICHT?', tr:{ru:'Какой монеты НЕ существует?',en:'Which coin does NOT exist?'}, opts:['3 Cent','20 Cent','50 Cent'], a:0, h:'geldZaehlen', pts:1},
    {t:'num', q:'Du hast 2 € und bekommst 3,50 € dazu. Wie viel hast du? (in €)', tr:{ru:'У тебя 2 €, добавили 3,50 €. Сколько всего? (в €)',en:'You have 2 € and get 3.50 € more. How much now? (in €)'}, a:5.5, unit:'€', h:'geldZaehlen', pts:1}]; } },

{ id:'m3-mix', grade:3, subject:'math', icon:'🎈', genTest:true,
  title:{de:'Mathe-Mix Klasse 3',ru:'Микс по математике 3 класс',en:'Maths Mix Grade 3'},
  desc:{de:'Alles gemischt: rechnen, Uhr, Geld',ru:'Всё вместе: счёт, часы, деньги',en:'All mixed: calculating, clock, money'},
  gen(){ const pool=[qAdd100,qSub100,qTimes,qTimesDiv,qBridge,qMoneyCount,qClockRead,qNeighbour];
    const qs=[]; for(let i=0;i<10;i++) qs.push(pick(pool)()); return qs; } },

{ id:'d3-schreiben', grade:3, subject:'german', icon:'✏️',
  title:{de:'Richtig schreiben',ru:'Пишем правильно',en:'Writing Correctly'},
  desc:{de:'Großschreibung, Satzzeichen, Silben',ru:'Заглавные буквы, знаки, слоги',en:'Capitals, punctuation, syllables'},
  qs:[
    {t:'mc', q:'Wie schreibt man Nomen?', tr:{ru:'Как пишут существительные?',en:'How are nouns written?'}, opts:['groß: der Hund','klein: der hund'], a:0, noshuffle:true, h:'schreibenStart', pts:1},
    {t:'mc', q:'Welches Satzzeichen kommt ans Ende einer Frage?', tr:{ru:'Какой знак в конце вопроса?',en:'Which mark ends a question?'}, opts:['?','.','!'], a:0, noshuffle:true, h:'satzarten', pts:1},
    {t:'mc', q:'Welcher Satz ist RICHTIG geschrieben?', tr:{ru:'Какое предложение написано правильно?',en:'Which sentence is correct?'}, opts:['Der Hund bellt laut.','der Hund bellt laut','Der hund bellt laut.'], a:0, h:'schreibenStart', pts:1},
    {t:'num', q:'Wie viele Silben hat „Schmetterling"?', tr:{ru:'Сколько слогов в „Schmetterling"?',en:'How many syllables in "Schmetterling"?'}, a:3, h:'lesenStart', pts:1},
    {t:'mc', q:'Wie trennt man „Blumen" richtig?', tr:{ru:'Как правильно перенести „Blumen"?',en:'How do you split "Blumen"?'}, opts:['Blu-men','Bl-umen','Blum-en'], a:0, h:'lesenStart', pts:1},
    {t:'mc', q:'Wie schreibt man richtig?', tr:{ru:'Как правильно?',en:'Which is correct?'}, opts:['Fahrrad','Farrad','Faarrad'], a:0, h:'rechtIE', pts:1},
    {t:'mc', q:'Welches Wort ist ein Nomen?', tr:{ru:'Какое слово – существительное?',en:'Which word is a noun?'}, opts:['Tisch','laufen','schnell'], a:0, h:'wortarten', pts:1},
    {t:'mc', q:'Womit beginnt jeder Satz?', tr:{ru:'С чего начинается каждое предложение?',en:'How does every sentence start?'}, opts:['mit einem großen Buchstaben','mit einem kleinen Buchstaben','mit einer Zahl'], a:0, h:'schreibenStart', pts:1},
  ]},
];
