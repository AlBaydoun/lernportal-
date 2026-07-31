/* ============ LEVEL MODE: level-only tests + the adventure map ============ */
function qMentalEasy(){
  const kinds=[
    ()=>{const a=ri(2,10),b=ri(2,10);return [`${a} + ${b}`,a+b];},
    ()=>{const a=ri(8,20),b=ri(2,7);return [`${a} − ${b}`,a-b];},
    ()=>{const a=ri(2,5),b=ri(2,9);return [`${a} · ${b}`,a*b];},
    ()=>{const a=ri(2,10);return [`${a} + ${a}  (verdoppeln!)`,2*a];},
    ()=>{const a=ri(1,9);return [`10 + ${a}`,10+a];},
    ()=>{const a=ri(2,10);return [`${2*a} : 2  (halbieren!)`,a];},
    ()=>{const a=ri(2,9);return [`${a} · 10`,a*10];},
  ];
  const k=pick(kinds)();
  return {t:'num', q:`Kopfrechnen:  ${k[0]} = ?`, tr:{ru:`Устный счёт: ${k[0]} = ?`,en:`Mental maths: ${k[0]} = ?`}, a:k[1], h:'mental', pts:1};
}

const LEVEL_TESTS = [
{ id:'lv-easy-1', grade:4, subject:'math', icon:'🌱', genTest:true, levelOnly:true,
  title:{de:'Warm-up: Zahlen-Zauber',ru:'Разминка: магия чисел',en:'Warm-up: Number Magic'},
  desc:{de:'Leichte Kopfrechen-Aufgaben zum Aufwärmen',ru:'Лёгкие примеры для разминки',en:'Easy mental maths to warm up'},
  gen(){ const qs=[]; for(let i=0;i<10;i++) qs.push(qMentalEasy()); return qs; } },

{ id:'lv-easy-2', grade:4, subject:'german', icon:'🌱', levelOnly:true,
  title:{de:'Warm-up: Wörter-Start',ru:'Разминка: первые слова',en:'Warm-up: Word Start'},
  desc:{de:'Leichte Deutsch-Aufgaben zum Einstieg',ru:'Лёгкие задания по немецкому',en:'Easy German tasks to get going'},
  qs:[
    {t:'mc', q:'Welches Wort ist ein Nomen (Namenwort)?', tr:{ru:'Какое слово – существительное?',en:'Which word is a noun?'}, opts:['Hund','laufen','schnell'], a:0, h:'wortarten', pts:1},
    {t:'mc', q:'Welches Wort ist ein Verb (Tunwort)?', tr:{ru:'Какое слово – глагол?',en:'Which word is a verb?'}, opts:['singen','Blume','rot'], a:0, h:'wortarten', pts:1},
    {t:'text', q:'Bilde die Mehrzahl: der Hund → die ...', tr:{ru:'Множественное число: der Hund → die ...',en:'Plural: der Hund → die ...'}, a:['hunde'], h:'nomen', pts:1},
    {t:'mc', q:'Wie heißt der richtige Artikel? „___ Ball"', tr:{ru:'Правильный артикль: „___ Ball"',en:'Correct article: "___ Ball"'}, opts:['der','die','das'], a:0, h:'nomen', pts:1},
    {t:'tf', q:'Richtig oder falsch?\n„Jeder Satz beginnt mit einem großen Buchstaben."', tr:{ru:'Верно ли: каждое предложение начинается с большой буквы?',en:'True or false: every sentence starts with a capital letter?'}, a:true, h:'grossklein', pts:1},
    {t:'mc', q:'Was gehört ans Ende einer Frage?', tr:{ru:'Что ставится в конце вопроса?',en:'What ends a question?'}, opts:['? (Fragezeichen)','. (Punkt)','! (Ausrufezeichen)'], a:0, h:'satzarten', pts:1},
    {t:'text', q:'Wie heißt das Gegenteil von „kalt"?', tr:{ru:'Антоним слова „kalt"?',en:'Opposite of "kalt"?'}, a:['warm','heiß','heiss'], h:'adjektive', pts:1},
    {t:'mc', q:'Welches Wort schreibt man GROSS?', tr:{ru:'Какое слово пишется с большой буквы?',en:'Which word is capitalised?'}, opts:['schule (die Schule)','rennen','grün'], a:0, h:'grossklein', pts:1},
  ]},

{ id:'lv-champ-1', grade:5, subject:'math', icon:'🔥', genTest:true, levelOnly:true,
  title:{de:'Champion-Prüfung: Mathematik',ru:'Чемпионский экзамен: математика',en:'Champion Exam: Maths'},
  desc:{de:'Die härteste Mathe-Prüfung – zeig, was du kannst!',ru:'Самый сложный экзамен по математике!',en:'The toughest maths exam – show your skills!'},
  gen(){ return [qLongDiv(),qLongDiv(),qMultWritten(),qOrderOps(),qOrderOps(),
    ...qCompareOffers(), qPerimeter(),qArea(),qDivisible(),qDivisible(),qTwoStep(),qDuration(),qChange()]; } },

{ id:'lv-champ-final', grade:5, subject:'math', icon:'👑', genTest:true, levelOnly:true,
  title:{de:'DAS GROSSE FINALE',ru:'БОЛЬШОЙ ФИНАЛ',en:'THE GRAND FINALE'},
  desc:{de:'Alle Fächer, alle Themen – der Weg zum Champion!',ru:'Все предметы, все темы – путь к чемпиону!',en:'All subjects, all topics – the road to champion!'},
  gen(){ return [
    qLongDiv(), qMultWritten(), qRound(), qOrderOps(), qTwoStep(), qPerimeter(),
    {t:'mc', q:'„Wir haben gewonnen!"\nIn welcher Zeitform steht der Satz?', tr:{ru:'В каком времени стоит предложение?',en:'Which tense is the sentence in?'}, opts:['Perfekt','Präsens','Präteritum','Futur I'], a:0, h:'zeiten', pts:1},
    {t:'mc', q:'„Ich danke dem Champion."\nIn welchem Fall steht „dem Champion"?', tr:{ru:'В каком падеже стоит „dem Champion"?',en:'Which case is "dem Champion" in?'}, opts:['Dativ','Akkusativ','Nominativ','Genitiv'], a:0, h:'faelle', pts:1},
    {t:'mc', q:'Wie schreibt man richtig?\n„Das ___ macht mich stark."', tr:{ru:'Как правильно: „Das ___ macht mich stark."?',en:'Which is correct: "Das ___ macht mich stark."?'}, opts:['Üben','üben'], a:0, h:'grossklein', pts:1},
    {t:'mc', q:'She ___ football every Saturday.', tr:{ru:'Выбери: She ___ football every Saturday.',en:'Choose: She ___ football every Saturday.'}, opts:['plays','play','playing'], a:0, h:'engSimplePres', pts:1},
    {t:'mc', q:'___ you swim? – Yes, I ___!', tr:{ru:'Выбери: ___ you swim? – Yes, I ___!',en:'Choose: ___ you swim? – Yes, I ___!'}, opts:['Can / can','Do / can','Can / do'], a:0, h:'engCan', pts:1},
    {t:'mc', q:'Wie heißt die Landeshauptstadt von Nordrhein-Westfalen?', tr:{ru:'Столица земли Северный Рейн-Вестфалия?',en:'What is the state capital of NRW?'}, opts:['Düsseldorf','Köln','Paderborn'], a:0, h:'geoGermany', pts:1},
    {t:'mc', q:'Was ist ein Algorithmus?', tr:{ru:'Что такое алгоритм?',en:'What is an algorithm?'}, opts:['eine Schritt-für-Schritt-Anleitung','ein Passwort','ein Computerspiel'], a:0, h:'infoScratch', pts:1},
    {t:'mc', q:'Womit säugen Säugetiere ihre Jungen?', tr:{ru:'Чем млекопитающие кормят детёнышей?',en:'What do mammals feed their young with?'}, opts:['mit Milch','mit Insekten','mit Körnern'], a:0, h:'bioMammal', pts:1},
  ]; } },
];

/* ---- The adventure map: 31 levels from Starter to Champion ----
   Each level draws ONE random test from its pool (only tests with attempts left). */
const LEVELS = [
  // ⭐ Starter
  {id:'L1',  tier:'starter', pool:['lv-easy-1']},
  {id:'L2',  tier:'starter', pool:['m4-blitz','m4-rest']},
  {id:'L3',  tier:'starter', pool:['e4-first','e4-family']},
  {id:'L4',  tier:'starter', pool:['lv-easy-2','d4-wortarten','d4-recht1']},
  {id:'L5',  tier:'starter', pool:['m4-round','s4-zeit']},
  // 🥉 Kämpfer
  {id:'L6',  tier:'bronze', pool:['m4-addsub','m4-units']},
  {id:'L7',  tier:'bronze', pool:['d4-zeiten','d4-nomen','d4-verben']},
  {id:'L8',  tier:'bronze', pool:['m4-mult','m4-time']},
  {id:'L9',  tier:'bronze', pool:['e4-school','e4-food','e4-year']},
  {id:'L10', tier:'bronze', pool:['d4-recht2','d4-adjektive','d4-rede']},
  {id:'L11', tier:'bronze', pool:['m4-div','m4-money']},
  // 🥈 Könner
  {id:'L12', tier:'silver', pool:['d4-faelle','d4-satz']},
  {id:'L13', tier:'silver', pool:['m4-word','m4-geo']},
  {id:'L14', tier:'silver', pool:['d4-lesen','d4-lesen2']},
  {id:'L15', tier:'silver', pool:['s4-deutschland','s4-wasser','s4-strom','s4-verkehr','s4-koerper']},
  {id:'L16', tier:'silver', pool:['m4-mix-a','m4-mix-b']},
  {id:'L17', tier:'silver', pool:['m4-lzk-a','m4-lzk-b','m4-lzk-c']},
  // 🥇 Profi
  {id:'L18', tier:'gold', pool:['m5-big','m5-teiler']},
  {id:'L19', tier:'gold', pool:['e5-tobe','e5-have','e5-vocab']},
  {id:'L20', tier:'gold', pool:['d5-wortarten','d5-woerter','d5-diktat']},
  {id:'L21', tier:'gold', pool:['m5-coord','m5-data','m5-area']},
  {id:'L22', tier:'gold', pool:['i5-computer','i5-internet','i5-scratch','i5-daten']},
  {id:'L23', tier:'gold', pool:['b5-hundkatze','b5-skelett','b5-wirbel','b5-ernaehrung','b5-voegel']},
  // 💎 Meister
  {id:'L24', tier:'master', pool:['m5-ops','m5-mental']},
  {id:'L25', tier:'master', pool:['d5-zeiten','d5-satzglieder','d5-recht']},
  {id:'L26', tier:'master', pool:['e5-simple','e5-questions','e5-can','e5-time']},
  {id:'L27', tier:'master', pool:['g5-welt','g5-deutschland','g5-karte','g5-europa']},
  {id:'L28', tier:'master', pool:['d5-lesen','d5-lesen2','d5-mix','e5-reading']},
  // 👑 Champion
  {id:'L29', tier:'champ', pool:['m5-ka1','m5-ka2','m5-word']},
  {id:'L30', tier:'champ', pool:['lv-champ-1']},
  {id:'L31', tier:'champ', pool:['lv-champ-final'], final:true},
];
const LEVEL_PASS = 60;
