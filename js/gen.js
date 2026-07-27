/* ============ Generator helpers + SVG figures ============ */
function ri(a,b){ return a + Math.floor(Math.random()*(b-a+1)); }
function pick(arr){ return arr[ri(0,arr.length-1)]; }
function shuf(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=ri(0,i); [a[i],a[j]]=[a[j],a[i]];} return a; }
function fmt(n){ return n.toLocaleString('de-DE'); }
function euro(cents){ return (cents/100).toLocaleString('de-DE',{minimumFractionDigits:2}) + ' €'; }

/* ---- reusable question factories (math) ---- */
function qLongDiv(){
  const d = pick([4,5,6,7,8,9,12,13,14]);
  const q = ri(140,1350);
  const r = ri(0,d-1);
  const D = d*q+r;
  return {t:'div', q:`Rechne schriftlich:  ${fmt(D)} : ${d}`,
    tr:{ru:`Раздели в столбик: ${fmt(D)} : ${d}. Впиши результат и остаток.`,en:`Do the long division: ${fmt(D)} : ${d}. Enter result and remainder.`},
    a:{q:q,r:r}, h:'division', pts:2};
}
function qDivDigits(){
  const d = pick([4,5,6,7,8,9]);
  const q = ri(140,1350);
  const r = ri(0,d-1);
  const D = d*q+r;
  return {t:'num', q:`Überschlag: Wie viele Stellen hat das Ergebnis von ${fmt(D)} : ${d}?`,
    tr:{ru:`Прикидка: сколько ЦИФР в результате ${fmt(D)} : ${d}?`,en:`Estimate: how many DIGITS does the result of ${fmt(D)} : ${d} have?`},
    a:String(q).length, h:'divDigits', pts:1};
}
function qRemainder(){
  const d = pick([4,5,6,7,8,9,10,11]);
  const x = ri(45,260);
  return {t:'num', q:`Welcher Rest bleibt?  ${x} : ${d}  →  Rest?`,
    tr:{ru:`Какой остаток? ${x} : ${d} → остаток?`,en:`What is the remainder? ${x} : ${d} → remainder?`},
    a:x % d, h:'remainder', pts:1};
}
const WP_ITEMS = [
  {de:'Tablets', ru:'планшетов', en:'tablets', one:'Ein Tablet', unit:[150,420]},
  {de:'Fußbälle', ru:'футбольных мячей', en:'footballs', one:'Ein Fußball', unit:[15,45]},
  {de:'Bücher', ru:'книг', en:'books', one:'Ein Buch', unit:[8,24]},
  {de:'Stühle', ru:'стульев', en:'chairs', one:'Ein Stuhl', unit:[35,90]},
  {de:'Roller', ru:'самокатов', en:'scooters', one:'Ein Roller', unit:[60,180]},
  {de:'Spiele', ru:'настольных игр', en:'games', one:'Ein Spiel', unit:[12,40]},
];
const WP_BUYERS = ['Eine Schule','Ein Sportverein','Eine Bücherei','Ein Jugendzentrum','Eine Firma'];
function qWordDivSetup(){
  const item = pick(WP_ITEMS), buyer = pick(WP_BUYERS);
  const n = pick([12,15,16,18,20,24,25]);
  const p = ri(item.unit[0], item.unit[1]);
  const total = n*p;
  const ctx = `${buyer} kauft ${n} ${item.de} für insgesamt ${fmt(total)} €.`;
  const good = `${fmt(total)} : ${n}`;
  const opts = shuf([good, `${fmt(total)} · ${n}`, `${fmt(total)} + ${n}`, `${fmt(total)} − ${n}`]);
  return [
    {t:'mc', q:`${ctx}\nWelche Rechnung führt zum Preis für EIN Stück? (F wie Formel)`,
      tr:{ru:`${buyer} покупает ${n} ${item.ru} за ${fmt(total)} €. Какое действие даст цену ОДНОГО предмета?`,
          en:`A buyer purchases ${n} ${item.en} for ${fmt(total)} € in total. Which calculation gives the price of ONE item?`},
      opts:opts, a:opts.indexOf(good), h:'wordDiv', pts:1},
    {t:'num', q:`${ctx}\nWie viel kostet ein Stück? (L wie Lösung)`,
      tr:{ru:`Сколько стоит один предмет? (в €)`,en:`How much does one item cost? (in €)`},
      a:p, unit:'€', h:'wordDiv', pts:2}
  ];
}
const OFFER_PRODUCTS = [['Reis','рис','rice'],['Müsli','мюсли','muesli'],['Kakao','какао','cocoa'],['Nudeln','макароны','pasta'],['Gummibärchen','мармеладные мишки','gummy bears']];
function qCompareOffers(){
  const prod = pick(OFFER_PRODUCTS);
  const g1 = pick([200,250,300,400]);
  const g2 = pick([500,600]);
  const c1 = 2*ri(20,37);             // even cents per 100 g → all prices come out in whole cents
  let c2 = c1 + pick([-8,-6,-4,4,6,8]);
  const p1 = c1*g1/100, p2 = c2*g2/100;
  const cheaper = c1 < c2 ? 'Angebot A' : 'Angebot B';
  const ctx = `Angebot A: ${g1} g ${prod[0]} für ${euro(p1)}\nAngebot B: ${g2} g ${prod[0]} für ${euro(p2)}`;
  return [
    {t:'num', q:`${ctx}\nRechne um: Wie viel CENT kosten 100 g bei Angebot A?`,
      tr:{ru:`Предложение A: ${g1} г (${prod[1]}) за ${euro(p1)}; B: ${g2} г за ${euro(p2)}. Сколько ЦЕНТОВ стоят 100 г в предложении A?`,
          en:`Offer A: ${g1} g (${prod[2]}) for ${euro(p1)}; B: ${g2} g for ${euro(p2)}. How many CENTS do 100 g cost in offer A?`},
      a:c1, unit:'Cent', h:'compare', pts:1},
    {t:'num', q:`${ctx}\nWie viel CENT kosten 100 g bei Angebot B?`,
      tr:{ru:`Сколько ЦЕНТОВ стоят 100 г в предложении B?`,en:`How many CENTS do 100 g cost in offer B?`},
      a:c2, unit:'Cent', h:'compare', pts:1},
    {t:'mc', q:`${ctx}\nWelches Angebot ist günstiger?`,
      tr:{ru:`Какое предложение выгоднее?`,en:`Which offer is cheaper?`},
      opts:['Angebot A','Angebot B'], a: cheaper==='Angebot A'?0:1, noshuffle:true, h:'compare', pts:1}
  ];
}
const QUAD_POOL = [
  ['Jedes Quadrat ist auch ein Rechteck.', true, 'Каждый квадрат – это и прямоугольник.', 'Every square is also a rectangle.'],
  ['Jedes Rechteck ist ein Quadrat.', false, 'Каждый прямоугольник – это квадрат.', 'Every rectangle is a square.'],
  ['Gegenüberliegende Seiten eines Parallelogramms sind gleich lang.', true, 'Противоположные стороны параллелограмма равны.', 'Opposite sides of a parallelogram are equal.'],
  ['Ein Quadrat hat genau zwei rechte Winkel.', false, 'У квадрата ровно два прямых угла.', 'A square has exactly two right angles.'],
  ['Ein Rechteck hat vier rechte Winkel.', true, 'У прямоугольника четыре прямых угла.', 'A rectangle has four right angles.'],
  ['In einem Parallelogramm sind alle Winkel immer rechte Winkel.', false, 'В параллелограмме все углы всегда прямые.', 'In a parallelogram all angles are always right angles.'],
  ['Gegenüberliegende Seiten eines Rechtecks sind parallel.', true, 'Противоположные стороны прямоугольника параллельны.', 'Opposite sides of a rectangle are parallel.'],
  ['Alle Seiten eines Quadrats sind gleich lang.', true, 'Все стороны квадрата равны.', 'All sides of a square are equal.'],
  ['Jedes Parallelogramm ist ein Rechteck.', false, 'Каждый параллелограмм – прямоугольник.', 'Every parallelogram is a rectangle.'],
  ['Ein Rechteck hat zwei Paare paralleler Seiten.', true, 'У прямоугольника две пары параллельных сторон.', 'A rectangle has two pairs of parallel sides.'],
  ['Jedes Quadrat ist ein Parallelogramm.', true, 'Каждый квадрат – параллелограмм.', 'Every square is a parallelogram.'],
  ['Ein Quadrat kann längere und kürzere Seiten haben.', false, 'У квадрата могут быть длинные и короткие стороны.', 'A square can have longer and shorter sides.'],
];
function qQuadStatements(n){
  return shuf(QUAD_POOL).slice(0,n).map(s => ({
    t:'tf', q:`Richtig oder falsch?\n„${s[0]}"`,
    tr:{ru:`Верно или неверно? «${s[2]}»`,en:`True or false? "${s[3]}"`},
    a:s[1], h:'quadri', pts:1
  }));
}
function qMultWritten(){
  const a = ri(120,980), b = ri(12,89);
  return {t:'num', q:`Rechne schriftlich:  ${fmt(a)} · ${b}`,
    tr:{ru:`Умножь в столбик: ${fmt(a)} · ${b}`,en:`Written multiplication: ${fmt(a)} · ${b}`},
    a:a*b, h:'multWritten', pts:2};
}
function qAddBig(){
  const a = ri(12000,880000), b = ri(9000,110000);
  return {t:'num', q:`Rechne schriftlich:  ${fmt(a)} + ${fmt(b)}`,
    tr:{ru:`Сложи в столбик: ${fmt(a)} + ${fmt(b)}`,en:`Column addition: ${fmt(a)} + ${fmt(b)}`},
    a:a+b, h:'addSub', pts:1};
}
function qSubBig(){
  const a = ri(50000,950000); const b = ri(8000, a-1000);
  return {t:'num', q:`Rechne schriftlich:  ${fmt(a)} − ${fmt(b)}`,
    tr:{ru:`Вычти в столбик: ${fmt(a)} − ${fmt(b)}`,en:`Column subtraction: ${fmt(a)} − ${fmt(b)}`},
    a:a-b, h:'addSub', pts:1};
}
function qMissing(){
  const a = ri(1200,45000), c = a + ri(500,30000);
  return {t:'num', q:`Welche Zahl fehlt?  ${fmt(a)} + ▢ = ${fmt(c)}`,
    tr:{ru:`Какое число пропущено? ${fmt(a)} + ▢ = ${fmt(c)}`,en:`Which number is missing? ${fmt(a)} + ▢ = ${fmt(c)}`},
    a:c-a, h:'addSub', pts:1};
}
function qRound(){
  const to = pick([10,100,1000,10000]);
  const names = {10:'Zehner',100:'Hunderter',1000:'Tausender',10000:'Zehntausender'};
  const namesRu = {10:'десятков',100:'сотен',1000:'тысяч',10000:'десятков тысяч'};
  let n = ri(1500, 970000);
  if(n % to === 0) n += ri(1,9);
  return {t:'num', q:`Runde auf ${names[to]}:  ${fmt(n)} ≈ ?`,
    tr:{ru:`Округли до ${namesRu[to]}: ${fmt(n)} ≈ ?`,en:`Round to the nearest ${to}: ${fmt(n)} ≈ ?`},
    a:Math.round(n/to)*to, h:'rounding', pts:1};
}
function qPlace(){
  const stellen = [['Einer',1,'единиц','ones'],['Zehner',10,'десятков','tens'],['Hunderter',100,'сотен','hundreds'],['Tausender',1000,'тысяч','thousands'],['Zehntausender',10000,'десятков тысяч','ten-thousands']];
  const s = pick(stellen);
  const n = ri(12345, 987654);
  const digit = Math.floor(n / s[1]) % 10;
  return {t:'num', q:`Welche Ziffer steht in der Zahl ${fmt(n)} an der ${s[0]}-Stelle?`,
    tr:{ru:`Какая цифра стоит в числе ${fmt(n)} в разряде ${s[2]}?`,en:`Which digit of ${fmt(n)} is in the ${s[3]} place?`},
    a:digit, h:'placeValue', pts:1};
}
function qCompareNums(){
  let a = ri(1000,990000), b = ri(1000,990000);
  if(a===b) b++;
  const sign = a<b ? '<' : '>';
  return {t:'mc', q:`Welches Zeichen passt?  ${fmt(a)} ▢ ${fmt(b)}`,
    tr:{ru:`Какой знак подходит? ${fmt(a)} ▢ ${fmt(b)}`,en:`Which sign fits? ${fmt(a)} ▢ ${fmt(b)}`},
    opts:['<','>','='], a: sign==='<'?0:1, noshuffle:true, h:'compareNum', pts:1};
}
function qUnit(){
  const kinds = [
    ()=>{const v=ri(2,19);return [`${v} km = ▢ m`,v*1000,'m',`${v} км = ▢ м`,`${v} km = ▢ m`];},
    ()=>{const v=ri(2,9)*1000;return [`${fmt(v)} m = ▢ km`,v/1000,'km',`${fmt(v)} м = ▢ км`,`${fmt(v)} m = ▢ km`];},
    ()=>{const v=ri(2,25);return [`${v} m = ▢ cm`,v*100,'cm',`${v} м = ▢ см`,`${v} m = ▢ cm`];},
    ()=>{const v=ri(3,45);return [`${v} cm = ▢ mm`,v*10,'mm',`${v} см = ▢ мм`,`${v} cm = ▢ mm`];},
    ()=>{const v=ri(2,15);return [`${v} kg = ▢ g`,v*1000,'g',`${v} кг = ▢ г`,`${v} kg = ▢ g`];},
    ()=>{const v=ri(2,9);return [`${v} t = ▢ kg`,v*1000,'kg',`${v} т = ▢ кг`,`${v} t = ▢ kg`];},
    ()=>{const v=ri(2,18);return [`${v} € = ▢ Cent`,v*100,'Cent',`${v} € = ▢ центов`,`${v} € = ▢ cents`];},
    ()=>{const v=ri(2,8);return [`${v} h = ▢ min`,v*60,'min',`${v} ч = ▢ мин`,`${v} h = ▢ min`];},
    ()=>{const v=ri(2,9);return [`${v} min = ▢ s`,v*60,'s',`${v} мин = ▢ с`,`${v} min = ▢ s`];},
  ];
  const k = pick(kinds)();
  return {t:'num', q:`Rechne um:  ${k[0]}`, tr:{ru:`Переведи: ${k[3]}`,en:`Convert: ${k[4]}`}, a:k[1], unit:k[2], h:'units', pts:1};
}
function qDuration(){
  const h1 = ri(7,15), m1 = pick([0,10,15,20,30,40,45,50]);
  const durH = ri(1,3), durM = pick([0,10,15,20,30,45]);
  let h2 = h1+durH, m2 = m1+durM;
  if(m2>=60){m2-=60;h2++;}
  const total = durH*60+durM;
  const p = n => String(n).padStart(2,'0');
  return {t:'num', q:`Ein Film beginnt um ${h1}:${p(m1)} Uhr und endet um ${h2}:${p(m2)} Uhr.\nWie viele MINUTEN dauert er?`,
    tr:{ru:`Фильм начинается в ${h1}:${p(m1)} и заканчивается в ${h2}:${p(m2)}. Сколько МИНУТ он длится?`,
        en:`A film starts at ${h1}:${p(m1)} and ends at ${h2}:${p(m2)}. How many MINUTES does it last?`},
    a:total, unit:'min', h:'timeCalc', pts:2};
}
function qPerimeter(){
  const a = ri(3,15), b = ri(3,15);
  return {t:'num', q:`Ein Rechteck hat die Seiten a = ${a} cm und b = ${b} cm.\nBerechne den UMFANG.`,
    tr:{ru:`Прямоугольник со сторонами a = ${a} см и b = ${b} см. Найди ПЕРИМЕТР.`,en:`A rectangle has sides a = ${a} cm and b = ${b} cm. Find the PERIMETER.`},
    a:2*(a+b), unit:'cm', h:'periArea', pts:1, svg: svgRect(a,b)};
}
function qArea(){
  const a = ri(3,12), b = ri(3,12);
  return {t:'num', q:`Ein Rechteck hat die Seiten a = ${a} cm und b = ${b} cm.\nBerechne den FLÄCHENINHALT.`,
    tr:{ru:`Прямоугольник со сторонами a = ${a} см и b = ${b} см. Найди ПЛОЩАДЬ.`,en:`A rectangle has sides a = ${a} cm and b = ${b} cm. Find the AREA.`},
    a:a*b, unit:'cm²', h:'periArea', pts:1, svg: svgRect(a,b)};
}
function qOrderOps(){
  const kinds = [
    ()=>{const a=ri(2,9),b=ri(2,9),c=ri(2,20);return [`${c} + ${a} · ${b}`, c+a*b];},
    ()=>{const a=ri(2,9),b=ri(2,9),c=ri(40,90);return [`${c} − ${a} · ${b}`, c-a*b];},
    ()=>{const a=ri(2,9),b=ri(2,9),c=ri(2,15);return [`${a} · ${b} + ${c}`, a*b+c];},
    ()=>{const a=ri(2,9),b=ri(12,48),d=pick([2,3,4,6]);const bb=b-b%d;return [`${a} + ${bb} : ${d}`, a+bb/d];},
    ()=>{const a=ri(2,6),b=ri(2,6),c=ri(2,9);return [`(${a} + ${b}) · ${c}`, (a+b)*c];},
  ];
  const k = pick(kinds)();
  return {t:'num', q:`Rechne (Punkt vor Strich!):  ${k[0]} = ?`,
    tr:{ru:`Посчитай (сначала · и : !): ${k[0]} = ?`,en:`Calculate (multiplication first!): ${k[0]} = ?`},
    a:k[1], h:'orderOps', pts:1};
}
function qDivisible(){
  const rules = [
    ()=>{const n=ri(30,400)*3;return [n,3,true];},
    ()=>{let n=ri(100,999);while(n%3===0)n++;return [n,3,false];},
    ()=>{const n=ri(20,190)*5;return [n,5,true];},
    ()=>{let n=ri(100,999);while(n%5===0)n++;return [n,5,false];},
    ()=>{const n=ri(60,480)*2;return [n,2,true];},
    ()=>{let n=ri(101,999);if(n%2===0)n++;return [n,2,false];},
    ()=>{const n=ri(11,95)*9;return [n,9,true];},
    ()=>{let n=ri(100,999);while(n%9===0)n++;return [n,9,false];},
  ];
  const k = pick(rules)();
  return {t:'tf', q:`Richtig oder falsch?\n„Die Zahl ${fmt(k[0])} ist durch ${k[1]} teilbar."`,
    tr:{ru:`Верно или неверно? «Число ${fmt(k[0])} делится на ${k[1]}».`,en:`True or false? "${fmt(k[0])} is divisible by ${k[1]}."`},
    a:k[2], h:'divisibility', pts:1};
}
function qMental(){
  const kinds = [
    ()=>{const a=ri(3,9),b=ri(3,9);return [`${a} · ${b}`,a*b];},
    ()=>{const a=ri(3,9),b=ri(3,9);return [`${a*b} : ${a}`,b];},
    ()=>{const a=ri(15,85),b=ri(15,85);return [`${a} + ${b}`,a+b];},
    ()=>{const a=ri(45,99),b=ri(12,40);return [`${a} − ${b}`,a-b];},
    ()=>{const a=ri(3,9);return [`${a} · 100`,a*100];},
    ()=>{const a=ri(12,96),h=pick([2,3,4]);const aa=a-a%h;return [`${aa} : ${h}`,aa/h];},
    ()=>{const a=ri(120,980),b=pick([10,100]);const r=Math.floor(a/10)*10;return [`${r} · ${b}`,r*b];},
    ()=>{const a=ri(6,12),b=ri(6,12);return [`${a} · ${b}`,a*b];},
  ];
  const k = pick(kinds)();
  return {t:'num', q:`Kopfrechnen:  ${k[0]} = ?`, tr:{ru:`Устный счёт: ${k[0]} = ?`,en:`Mental maths: ${k[0]} = ?`}, a:k[1], h:'mental', pts:1};
}
function qTwoStep(){
  const kinds = [
    ()=>{ const n=ri(3,6), p=ri(4,9), start=ri(40,90);
      return [`Lena hat ${start} €. Sie kauft ${n} Hefte für je ${p} €.\nWie viel Geld bleibt übrig?`,
        start-n*p,'€',
        `У Лены ${start} €. Она покупает ${n} тетради по ${p} €. Сколько денег останется?`,
        `Lena has ${start} €. She buys ${n} notebooks for ${p} € each. How much money is left?`]; },
    ()=>{ const k=ri(22,29), m=ri(3,5), extra=ri(5,15);
      return [`In einer Klasse sind ${k} Kinder. Jedes Kind bekommt ${m} Stifte. Der Lehrer kauft außerdem ${extra} Ersatzstifte.\nWie viele Stifte sind es insgesamt?`,
        k*m+extra,'Stifte',
        `В классе ${k} детей. Каждый получает ${m} карандаша. Учитель покупает ещё ${extra} запасных. Сколько всего карандашей?`,
        `A class has ${k} children. Each gets ${m} pencils. The teacher buys ${extra} spare ones. How many pencils in total?`]; },
    ()=>{ const rows=ri(6,12), seats=ri(8,14), sold=ri(20,50);
      const total=rows*seats;
      return [`Im Kino gibt es ${rows} Reihen mit je ${seats} Plätzen. ${sold} Karten sind schon verkauft.\nWie viele Plätze sind noch frei?`,
        total-sold,'Plätze',
        `В кинотеатре ${rows} рядов по ${seats} мест. ${sold} билетов уже продано. Сколько мест свободно?`,
        `A cinema has ${rows} rows of ${seats} seats. ${sold} tickets are sold. How many seats are free?`]; },
    ()=>{ const bags=ri(4,8), per=ri(6,12), eat=ri(3,9);
      return [`Papa kauft ${bags} Tüten mit je ${per} Brötchen. Die Familie isst ${eat} Brötchen.\nWie viele Brötchen bleiben übrig?`,
        bags*per-eat,'Brötchen',
        `Папа покупает ${bags} пакетов по ${per} булочек. Семья съедает ${eat}. Сколько булочек осталось?`,
        `Dad buys ${bags} bags of ${per} rolls each. The family eats ${eat}. How many rolls are left?`]; },
  ];
  const k = pick(kinds)();
  return {t:'num', q:k[0], tr:{ru:k[3],en:k[4]}, a:k[1], unit:k[2], h:'wordProblem', pts:2};
}

/* ---------- SVG figures ---------- */
function svgRect(a,b){
  const w = Math.min(300, a*22), h = Math.min(190, b*22);
  return `<svg viewBox="0 0 ${w+80} ${h+60}" width="${Math.min(340,w+80)}" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="20" width="${w}" height="${h}" fill="#dfe6ff" stroke="#4834d4" stroke-width="3" rx="2"/>
  <path d="M 40 20 h 14 v 14 h -14 Z M ${40+w} 20 h -14 v 14 h 14 Z M 40 ${20+h} h 14 v -14 h -14 Z M ${40+w} ${20+h} h -14 v -14 h 14 Z" fill="none" stroke="#eb3b5a" stroke-width="2"/>
  <text x="${40+w/2}" y="${h+52}" text-anchor="middle" font-size="16" font-weight="bold" fill="#2d3436">a = ${a} cm</text>
  <text x="18" y="${20+h/2}" text-anchor="middle" font-size="16" font-weight="bold" fill="#2d3436" transform="rotate(-90 18 ${20+h/2})">b = ${b} cm</text>
</svg>`;
}
function svgParallelLines(){
  return `<svg viewBox="0 0 360 190" width="330" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="45" x2="330" y2="45" stroke="#4834d4" stroke-width="4"/>
  <line x1="20" y1="115" x2="330" y2="115" stroke="#4834d4" stroke-width="4"/>
  <line x1="60" y1="160" x2="290" y2="15" stroke="#eb3b5a" stroke-width="4"/>
  <line x1="200" y1="10" x2="200" y2="175" stroke="#20bf6b" stroke-width="4"/>
  <text x="335" y="50" font-size="17" font-weight="bold" fill="#4834d4">g</text>
  <text x="335" y="120" font-size="17" font-weight="bold" fill="#4834d4">h</text>
  <text x="292" y="14" font-size="17" font-weight="bold" fill="#eb3b5a">k</text>
  <text x="205" y="22" font-size="17" font-weight="bold" fill="#20bf6b">m</text>
  <rect x="200" y="31" width="14" height="14" fill="none" stroke="#20bf6b" stroke-width="2"/>
</svg>`;
}
function svgGridPoints(pts){
  const cell = 34, ox = 40, oy = 210, W = 9, H = 6;
  let s = `<svg viewBox="0 0 ${ox+W*cell+20} ${oy+40}" width="360" xmlns="http://www.w3.org/2000/svg">`;
  for(let x=0;x<=W;x++) s += `<line x1="${ox+x*cell}" y1="${oy-H*cell}" x2="${ox+x*cell}" y2="${oy}" stroke="#ccc" stroke-width="1"/>`;
  for(let y=0;y<=H;y++) s += `<line x1="${ox}" y1="${oy-y*cell}" x2="${ox+W*cell}" y2="${oy-y*cell}" stroke="#ccc" stroke-width="1"/>`;
  s += `<line x1="${ox}" y1="${oy}" x2="${ox+W*cell+12}" y2="${oy}" stroke="#2d3436" stroke-width="2.5"/>`;
  s += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy-H*cell-12}" stroke="#2d3436" stroke-width="2.5"/>`;
  s += `<text x="${ox+W*cell+8}" y="${oy+18}" font-size="14" font-weight="bold">x</text>`;
  s += `<text x="${ox-22}" y="${oy-H*cell-2}" font-size="14" font-weight="bold">y</text>`;
  for(let x=1;x<=W;x++) s += `<text x="${ox+x*cell}" y="${oy+18}" font-size="12" text-anchor="middle">${x}</text>`;
  for(let y=1;y<=H;y++) s += `<text x="${ox-14}" y="${oy-y*cell+4}" font-size="12" text-anchor="middle">${y}</text>`;
  s += `<text x="${ox-14}" y="${oy+18}" font-size="12" text-anchor="middle">0</text>`;
  const colors = ['#eb3b5a','#20bf6b','#4834d4','#f39c12'];
  pts.forEach((p,i)=>{
    s += `<circle cx="${ox+p.x*cell}" cy="${oy-p.y*cell}" r="6" fill="${colors[i%4]}"/>`;
    s += `<text x="${ox+p.x*cell+9}" y="${oy-p.y*cell-7}" font-size="15" font-weight="bold" fill="${colors[i%4]}">${p.n}</text>`;
  });
  return s + '</svg>';
}
function svgBarChart(){
  const data = [['Hund',6,'#eb3b5a'],['Katze',8,'#4834d4'],['Hamster',3,'#f39c12'],['Fisch',5,'#20bf6b'],['Vogel',2,'#0fb9b1']];
  const bw = 46, gap = 22, ox = 46, oy = 220, scale = 20;
  let s = `<svg viewBox="0 0 420 265" width="380" xmlns="http://www.w3.org/2000/svg">
  <text x="210" y="20" text-anchor="middle" font-size="15" font-weight="bold">Haustiere in der Klasse 5a</text>`;
  for(let y=0;y<=8;y+=2){
    s += `<line x1="${ox}" y1="${oy-y*scale}" x2="400" y2="${oy-y*scale}" stroke="#ddd"/>`;
    s += `<text x="${ox-10}" y="${oy-y*scale+4}" font-size="12" text-anchor="end">${y}</text>`;
  }
  data.forEach((d,i)=>{
    const x = ox+14+i*(bw+gap);
    s += `<rect x="${x}" y="${oy-d[1]*scale}" width="${bw}" height="${d[1]*scale}" fill="${d[2]}" rx="5"/>`;
    s += `<text x="${x+bw/2}" y="${oy+18}" font-size="12.5" text-anchor="middle" font-weight="bold">${d[0]}</text>`;
  });
  s += `<line x1="${ox}" y1="${oy}" x2="400" y2="${oy}" stroke="#2d3436" stroke-width="2"/>`;
  return s + '</svg>';
}
function svgClock(h,m){
  const cx=70,cy=70,r=62;
  const ah=((h%12)+m/60)*30-90, am=m*6-90;
  const rad=d=>d*Math.PI/180;
  let s=`<svg viewBox="0 0 140 140" width="150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#fffbe8" stroke="#4834d4" stroke-width="4"/>`;
  for(let i=1;i<=12;i++){
    const a=rad(i*30-90);
    s+=`<text x="${cx+Math.cos(a)*(r-13)}" y="${cy+Math.sin(a)*(r-13)+5}" font-size="13" font-weight="bold" text-anchor="middle">${i}</text>`;
  }
  s+=`<line x1="${cx}" y1="${cy}" x2="${cx+Math.cos(rad(ah))*32}" y2="${cy+Math.sin(rad(ah))*32}" stroke="#2d3436" stroke-width="5" stroke-linecap="round"/>`;
  s+=`<line x1="${cx}" y1="${cy}" x2="${cx+Math.cos(rad(am))*48}" y2="${cy+Math.sin(rad(am))*48}" stroke="#eb3b5a" stroke-width="3.5" stroke-linecap="round"/>`;
  s+=`<circle cx="${cx}" cy="${cy}" r="4" fill="#2d3436"/>`;
  return s+'</svg>';
}
