/* ============ Generators for grades 6–10 (Realschule NRW) ============ */
function gcd(a,b){ return b ? gcd(b, a%b) : a; }
function frTxt(p,q){ const g=gcd(p,q); return (p/g)+'/'+(q/g); }
/* Build a 4-option MC list: unique, shuffled, and reports where the good one landed. */
function mcSet(good, wrongs, filler){
  const opts=[good];
  for(const w of wrongs){ if(opts.length<4 && !opts.includes(w)) opts.push(w); }
  let n=1;
  while(opts.length<4){ const f=filler(n++); if(!opts.includes(f)) opts.push(f); }
  const sh=shuf(opts);
  return {opts:sh, a:sh.indexOf(good)};
}

/* ---- Brüche (6) ---- */
function qFracSimplify(){
  const bases=[[1,2],[1,3],[2,3],[1,4],[3,4],[2,5],[3,5],[1,6],[5,6],[3,7]];
  const [p,q]=pick(bases); const k=ri(2,6);
  return {t:'text', q:`Kürze vollständig:  ${p*k}/${q*k} = ?`, tr:{ru:`Сократи полностью: ${p*k}/${q*k}`,en:`Simplify fully: ${p*k}/${q*k}`},
    a:[`${p}/${q}`], h:'frac', pts:1};
}
function qFracOf(){
  const q=pick([2,3,4,5,6,8]); const p=ri(1,q-1); const n=q*ri(2,9);
  return {t:'num', q:`Berechne:  ${p}/${q} von ${n} = ?`, tr:{ru:`Вычисли: ${p}/${q} от ${n}`,en:`Calculate: ${p}/${q} of ${n}`},
    a:n/q*p, h:'frac', pts:1};
}
function qFracAddSame(){
  const n=pick([5,6,7,8,9,10]); const a=ri(1,n-2), b=ri(1,n-a-1);
  const s=a+b, g=gcd(s,n);
  return {t:'text', q:`Rechne:  ${a}/${n} + ${b}/${n} = ?  (Ergebnis kürzen!)`, tr:{ru:`Вычисли: ${a}/${n} + ${b}/${n} (сократи!)`,en:`Calculate: ${a}/${n} + ${b}/${n} (simplify!)`},
    a:[frTxt(s,n), `${s}/${n}`], h:'fracOps', pts:1};
}
function qFracAddUnlike(){
  const pairs=[[2,4],[2,6],[3,6],[2,8],[4,8],[3,9],[2,10],[5,10],[4,12],[3,12]];
  const [n1,n2]=pick(pairs); const a=ri(1,n1-1), b=ri(1,n2-1);
  const L=n1*n2/gcd(n1,n2); const s=a*L/n1 + b*L/n2;
  return {t:'text', q:`Rechne:  ${a}/${n1} + ${b}/${n2} = ?  (kürzen!)`, tr:{ru:`Вычисли: ${a}/${n1} + ${b}/${n2} (сократи!)`,en:`Calculate: ${a}/${n1} + ${b}/${n2} (simplify!)`},
    a:[frTxt(s,L), `${s}/${L}`], h:'fracOps', pts:2};
}
function qFracMul(){
  const a=ri(1,4),b=ri(2,5),c=ri(1,4),d=ri(2,5);
  return {t:'text', q:`Rechne:  ${a}/${b} · ${c}/${d} = ?  (kürzen!)`, tr:{ru:`Вычисли: ${a}/${b} · ${c}/${d} (сократи!)`,en:`Calculate: ${a}/${b} · ${c}/${d} (simplify!)`},
    a:[frTxt(a*c,b*d), `${a*c}/${b*d}`], h:'fracOps', pts:1};
}
/* ---- Dezimalzahlen (6) ---- */
function qDecAdd(){
  const a=ri(150,4999), b=ri(80,2999);  // cents
  return {t:'num', q:`Rechne:  ${(a/100).toLocaleString('de-DE')} + ${(b/100).toLocaleString('de-DE')} = ?`,
    tr:{ru:`Вычисли: ${a/100} + ${b/100}`,en:`Calculate: ${a/100} + ${b/100}`}, a:(a+b)/100, h:'decimal', pts:1};
}
function qDecSub(){
  const a=ri(2000,9999); const b=ri(150,a-100);
  return {t:'num', q:`Rechne:  ${(a/100).toLocaleString('de-DE')} − ${(b/100).toLocaleString('de-DE')} = ?`,
    tr:{ru:`Вычисли: ${a/100} − ${b/100}`,en:`Calculate: ${a/100} − ${b/100}`}, a:(a-b)/100, h:'decimal', pts:1};
}
function qDecMul(){
  const a=ri(11,99), k=ri(2,9);  // a/10 × k
  return {t:'num', q:`Rechne:  ${(a/10).toLocaleString('de-DE')} · ${k} = ?`,
    tr:{ru:`Вычисли: ${a/10} · ${k}`,en:`Calculate: ${a/10} · ${k}`}, a:a*k/10, h:'decimal', pts:1};
}
function qDecShift(){
  const a=ri(11,999)/100; const f=pick([10,100]);
  return {t:'num', q:`Rechne:  ${a.toLocaleString('de-DE')} · ${f} = ?`,
    tr:{ru:`Вычисли: ${a} · ${f}`,en:`Calculate: ${a} · ${f}`}, a:Math.round(a*f*100)/100, h:'decimal', pts:1};
}
/* ---- Negative Zahlen (7) ---- */
function qNegAdd(){
  const a=ri(2,20), b=ri(2,20);
  const kinds=[[`(−${a}) + ${b}`, -a+b],[`${a} − ${a+b}`, -b],[`(−${a}) − ${b}`, -a-b],[`(−${a}) + (−${b})`, -a-b],[`−${a} + ${a+b}`, b]];
  const k=pick(kinds);
  return {t:'num', q:`Rechne:  ${k[0]} = ?`, tr:{ru:`Вычисли: ${k[0]}`,en:`Calculate: ${k[0]}`}, a:k[1], h:'negNum', pts:1};
}
function qNegMul(){
  const a=ri(2,9), b=ri(2,9);
  const kinds=[[`(−${a}) · ${b}`, -a*b],[`(−${a}) · (−${b})`, a*b],[`${a*b} : (−${a})`, -b],[`(−${a*b}) : (−${a})`, b]];
  const k=pick(kinds);
  return {t:'num', q:`Rechne:  ${k[0]} = ?`, tr:{ru:`Вычисли: ${k[0]}`,en:`Calculate: ${k[0]}`}, a:k[1], h:'negNum', pts:1};
}
/* ---- Prozent & Zinsen (7-9) ---- */
function qPercentOf(){
  const p=pick([5,10,20,25,50,75,15,30,40,60]); const g=20*ri(2,40);
  return {t:'num', q:`Berechne:  ${p} % von ${fmt(g)} € = ?`, tr:{ru:`Вычисли: ${p} % от ${fmt(g)} €`,en:`Calculate: ${p}% of ${fmt(g)} €`},
    a:g*p/100, unit:'€', h:'percent', pts:1};
}
function qPercentSatz(){
  const g=pick([50,100,200,400,500]); const p=pick([10,20,25,40,50,75]);
  return {t:'num', q:`${g*p/100} von ${g} – wie viel Prozent sind das?`, tr:{ru:`${g*p/100} из ${g} – сколько это процентов?`,en:`${g*p/100} out of ${g} – what percentage is that?`},
    a:p, unit:'%', h:'percent', pts:1};
}
function qRabatt(){
  const price=10*ri(4,30); const p=pick([10,20,25,50]);
  return {t:'num', q:`Ein Hoodie kostet ${price} €. Im Sale gibt es ${p} % Rabatt.\nWie viel kostet er jetzt?`,
    tr:{ru:`Худи стоит ${price} €. Скидка ${p} %. Сколько он стоит теперь?`,en:`A hoodie costs ${price} €. There is a ${p}% discount. What does it cost now?`},
    a:price*(100-p)/100, unit:'€', h:'percent', pts:2};
}
function qZins(){
  const k=100*ri(5,80); const p=pick([2,3,4,5]);
  return {t:'num', q:`Du legst ${fmt(k)} € für 1 Jahr zu ${p} % Zinsen an.\nWie viel Zinsen bekommst du?`,
    tr:{ru:`Ты кладёшь ${fmt(k)} € на 1 год под ${p} %. Сколько процентов (денег) ты получишь?`,en:`You invest ${fmt(k)} € for 1 year at ${p}% interest. How much interest do you get?`},
    a:k*p/100, unit:'€', h:'zins', pts:2};
}
function qDreisatz(){
  const n=pick([3,4,5,6]); const unit=ri(2,9); const m=pick([2,7,8,9,10].filter(x=>x!==n));
  const items=[['Hefte','тетради','notebooks'],['Brötchen','булочки','rolls'],['Sticker','наклейки','stickers'],['Äpfel','яблоки','apples']];
  const it=pick(items);
  return {t:'num', q:`${n} ${it[0]} kosten ${n*unit} €.\nWie viel kosten ${m} ${it[0]}?`,
    tr:{ru:`${n} ${it[1]} стоят ${n*unit} €. Сколько стоят ${m}?`,en:`${n} ${it[2]} cost ${n*unit} €. How much do ${m} cost?`},
    a:m*unit, unit:'€', h:'dreisatz', pts:2};
}
/* ---- Terme & Gleichungen (7-8) ---- */
function qTermSimplify(){
  const a=ri(2,9), b=ri(2,9), c=ri(1,Math.min(a+b-1,9));
  return {t:'text', q:`Fasse zusammen:  ${a}x + ${b}x − ${c}x = ?`, tr:{ru:`Упрости: ${a}x + ${b}x − ${c}x`,en:`Simplify: ${a}x + ${b}x − ${c}x`},
    a:[`${a+b-c}x`], h:'term', pts:1};
}
function qSolveLinear(){
  const x=ri(2,12), a=ri(2,9), b=ri(1,30);
  const kinds=[[`${a}x + ${b} = ${a*x+b}`, x],[`${a}x − ${b} = ${a*x-b}`, x],[`${a}x = ${a*x}`, x],[`x + ${b} = ${x+b}`, x]];
  const k=pick(kinds);
  return {t:'num', q:`Löse die Gleichung:  ${k[0]}\nx = ?`, tr:{ru:`Реши уравнение: ${k[0]}. x = ?`,en:`Solve: ${k[0]}. x = ?`}, a:k[1], h:'equation', pts:2};
}
function qExpand(){
  const a=ri(2,6), b=ri(1,9);
  const good=`${a}x + ${a*b}`;
  const m=mcSet(good, [`${a}x + ${b}`, `${a+b}x`, `${a}x + ${a+b}`], n=>`${a}x + ${a*b+n}`);
  return {t:'mc', q:`Löse die Klammer auf:  ${a} · (x + ${b}) = ?`, tr:{ru:`Раскрой скобки: ${a} · (x + ${b})`,en:`Expand: ${a} · (x + ${b})`},
    opts:m.opts, a:m.a, noshuffle:true, h:'term', pts:1};
}
function qBinom(){
  const a=ri(1,6);
  const good=`x² + ${2*a}x + ${a*a}`;
  const m=mcSet(good, [`x² + ${a*a}`, `x² + ${a}x + ${a*a}`, `x² + ${2*a}x + ${2*a}`], n=>`x² + ${2*a}x + ${a*a+n}`);
  return {t:'mc', q:`Binomische Formel:  (x + ${a})² = ?`, tr:{ru:`Формула сокращённого умножения: (x + ${a})²`,en:`Binomial: (x + ${a})²`},
    opts:m.opts, a:m.a, noshuffle:true, h:'term', pts:1};
}
function qLinFunc(){
  const m=ri(2,6), b=ri(-5,8), x=ri(2,8);
  const bs = b<0 ? `− ${-b}` : `+ ${b}`;
  return {t:'num', q:`Die Funktion lautet  y = ${m}x ${bs}.\nBerechne y für x = ${x}.`,
    tr:{ru:`Функция y = ${m}x ${bs}. Найди y при x = ${x}.`,en:`The function is y = ${m}x ${bs}. Find y for x = ${x}.`},
    a:m*x+b, h:'linfunc', pts:1};
}
function qLGS(){
  let x=ri(2,10), y=ri(1,x-1);
  const s=x+y, d=x-y;
  return {t:'num', q:`Löse das Gleichungssystem:\nx + y = ${s}\nx − y = ${d}\nx = ?`,
    tr:{ru:`Реши систему: x+y=${s}; x−y=${d}. x = ?`,en:`Solve the system: x+y=${s}; x−y=${d}. x = ?`},
    a:x, h:'lgs', pts:2};
}
function qMean(){
  const n=pick([4,5]); const mean=ri(5,20);
  let vals=[]; let sum=0;
  for(let i=0;i<n-1;i++){ const v=ri(Math.max(1,mean-8), mean+8); vals.push(v); sum+=v; }
  const last=mean*n-sum;
  if(last<0 || last>60) return qMean();
  vals.push(last);
  return {t:'num', q:`Berechne den Mittelwert (Durchschnitt):\n${shuf(vals).join(' · ')}`,
    tr:{ru:`Найди среднее значение: ${vals.join(', ')}`,en:`Find the mean: ${vals.join(', ')}`},
    a:mean, h:'stats', pts:2};
}
/* ---- Geometrie (6-10) ---- */
function qAngleTriangle(){
  const a=ri(25,85), b=ri(25,160-a);
  return {t:'num', q:`In einem Dreieck sind zwei Winkel bekannt: α = ${a}° und β = ${b}°.\nWie groß ist der dritte Winkel γ?\n(Winkelsumme im Dreieck: 180°)`,
    tr:{ru:`В треугольнике α = ${a}°, β = ${b}°. Найди третий угол γ. (Сумма углов 180°)`,en:`A triangle has α = ${a}° and β = ${b}°. Find the third angle γ. (Angle sum 180°)`},
    a:180-a-b, unit:'°', h:'angles', pts:1};
}
function qAngleType(){
  const kinds=[[ri(10,85),'spitzer Winkel'],[90,'rechter Winkel'],[ri(95,175),'stumpfer Winkel'],[180,'gestreckter Winkel']];
  const k=pick(kinds);
  const opts=['spitzer Winkel','rechter Winkel','stumpfer Winkel','gestreckter Winkel'];
  return {t:'mc', q:`Ein Winkel misst ${k[0]}°. Wie nennt man ihn?`, tr:{ru:`Угол равен ${k[0]}°. Как он называется?`,en:`An angle measures ${k[0]}°. What is it called?`},
    opts, a:opts.indexOf(k[1]), noshuffle:true, h:'angles', pts:1};
}
function qVolumeQuader(){
  const l=ri(2,10), b=ri(2,8), h=ri(2,6);
  return {t:'num', q:`Ein Quader ist ${l} cm lang, ${b} cm breit und ${h} cm hoch.\nBerechne das Volumen.  (V = l · b · h)`,
    tr:{ru:`Параллелепипед: ${l}×${b}×${h} см. Найди объём. (V = l·b·h)`,en:`A cuboid is ${l}×${b}×${h} cm. Find the volume. (V = l·b·h)`},
    a:l*b*h, unit:'cm³', h:'volume', pts:1};
}
function qPythagoras(){
  const triples=[[3,4,5],[6,8,10],[5,12,13],[9,12,15],[8,15,17],[12,16,20]];
  const [a,b,c]=pick(triples);
  if(Math.random()<0.6)
    return {t:'num', q:`Ein rechtwinkliges Dreieck hat die Katheten a = ${a} cm und b = ${b} cm.\nBerechne die Hypotenuse c.  (a² + b² = c²)`,
      tr:{ru:`Катеты a = ${a} см, b = ${b} см. Найди гипотенузу c. (a²+b²=c²)`,en:`Legs a = ${a} cm and b = ${b} cm. Find the hypotenuse c. (a²+b²=c²)`},
      a:c, unit:'cm', h:'pythagoras', pts:2};
  return {t:'num', q:`Ein rechtwinkliges Dreieck hat die Hypotenuse c = ${c} cm und die Kathete a = ${a} cm.\nBerechne die Kathete b.`,
    tr:{ru:`Гипотенуза c = ${c} см, катет a = ${a} см. Найди катет b.`,en:`Hypotenuse c = ${c} cm, leg a = ${a} cm. Find leg b.`},
    a:b, unit:'cm', h:'pythagoras', pts:2};
}
function qRoot(){
  const r=ri(2,20);
  return {t:'num', q:`Berechne:  √${r*r} = ?`, tr:{ru:`Вычисли: √${r*r}`,en:`Calculate: √${r*r}`}, a:r, h:'powroot', pts:1};
}
function qPower(){
  const kinds=[[2,ri(2,6)],[3,ri(2,4)],[5,2],[10,ri(2,4)],[4,ri(2,3)]];
  const [b,e]=pick(kinds);
  return {t:'num', q:`Berechne:  ${b}${'⁰¹²³⁴⁵⁶'[e]} = ?  (${b} hoch ${e})`, tr:{ru:`Вычисли: ${b} в степени ${e}`,en:`Calculate: ${b} to the power of ${e}`},
    a:Math.pow(b,e), h:'powroot', pts:1};
}
function qQuadEq(){
  const p=ri(1,6); let qq=ri(1,6); if(qq===p) qq=p+1;
  const good=`x₁ = ${p}, x₂ = ${qq}`;
  const m=mcSet(good, [`x₁ = −${p}, x₂ = −${qq}`, `x₁ = ${p+1}, x₂ = ${qq+1}`, `x = ${p+qq}`], n=>`x = ${p*qq+n}`);
  return {t:'mc', q:`Löse:  (x − ${p}) · (x − ${qq}) = 0`, tr:{ru:`Реши: (x − ${p})·(x − ${qq}) = 0`,en:`Solve: (x − ${p})·(x − ${qq}) = 0`},
    opts:m.opts, a:m.a, noshuffle:true, h:'quad', pts:2};
}
function qQuadSimple(){
  const r=ri(2,12);
  return {t:'num', q:`Löse:  x² = ${r*r}\nWie heißt die POSITIVE Lösung?`, tr:{ru:`Реши: x² = ${r*r}. Положительный корень?`,en:`Solve: x² = ${r*r}. The positive solution?`},
    a:r, h:'quad', pts:1};
}
function qCylinder(){
  const r=ri(2,5), h=ri(3,10);
  const v=Math.round(314*r*r*h)/100;
  return {t:'num', q:`Ein Zylinder hat den Radius r = ${r} cm und die Höhe h = ${h} cm.\nBerechne das Volumen mit π ≈ 3,14.  (V = π · r² · h)`,
    tr:{ru:`Цилиндр: r = ${r} см, h = ${h} см. Объём при π ≈ 3,14? (V=π·r²·h)`,en:`Cylinder: r = ${r} cm, h = ${h} cm. Volume with π ≈ 3.14? (V=π·r²·h)`},
    a:v, unit:'cm³', h:'volume', pts:2};
}
function qTrig(){
  const defs=[['sin','Gegenkathete / Hypotenuse'],['cos','Ankathete / Hypotenuse'],['tan','Gegenkathete / Ankathete']];
  const d=pick(defs);
  const opts=['Gegenkathete / Hypotenuse','Ankathete / Hypotenuse','Gegenkathete / Ankathete'];
  return {t:'mc', q:`Trigonometrie: Wie ist ${d[0]}(α) im rechtwinkligen Dreieck definiert?`,
    tr:{ru:`Тригонометрия: что такое ${d[0]}(α) в прямоугольном треугольнике?`,en:`Trigonometry: how is ${d[0]}(α) defined in a right triangle?`},
    opts, a:opts.indexOf(d[1]), noshuffle:true, h:'trig', pts:1};
}
function qProbSimple(){
  const total=pick([6,8,10,12]); const red=ri(1,total-1);
  const good=frTxt(red,total);
  const m=mcSet(good, [frTxt(total-red,total), `${red}/${total-red}`, frTxt(Math.min(red+1,total),total)],
    n=>`${red}/${total+n}`);
  return {t:'mc', q:`In einer Urne liegen ${total} Kugeln, davon sind ${red} rot.\nWie groß ist die Wahrscheinlichkeit, eine rote Kugel zu ziehen?`,
    tr:{ru:`В урне ${total} шаров, из них ${red} красных. Вероятность вытянуть красный?`,en:`An urn holds ${total} balls, ${red} are red. Probability of drawing red?`},
    opts:m.opts, a:m.a, noshuffle:true, h:'prob2', pts:1};
}
function qSpeed(){
  const t2=ri(2,5); const v=ri(30,110);
  return {t:'num', q:`Ein Auto fährt ${fmt(v*t2)} km in ${t2} Stunden.\nWie hoch ist die Durchschnittsgeschwindigkeit?  (v = s : t)`,
    tr:{ru:`Машина проезжает ${v*t2} км за ${t2} ч. Средняя скорость? (v = s : t)`,en:`A car drives ${v*t2} km in ${t2} hours. Average speed? (v = s : t)`},
    a:v, unit:'km/h', h:'speed', pts:2};
}
function qOhm(){
  const i=ri(2,6), r2=ri(10,60);
  return {t:'num', q:`Physik – Ohmsches Gesetz:  U = R · I\nR = ${r2} Ω, I = ${i} A. Berechne die Spannung U.`,
    tr:{ru:`Закон Ома: U = R·I. R = ${r2} Ом, I = ${i} А. Найди U.`,en:`Ohm's law: U = R·I. R = ${r2} Ω, I = ${i} A. Find U.`},
    a:r2*i, unit:'V', h:'phStrom', pts:2};
}
function qDensity(){
  const v=ri(2,10); const rho=pick([1,2,3,7,8,11]);
  return {t:'num', q:`Physik – Dichte:  ρ = m : V\nEin Körper hat das Volumen ${v} cm³ und die Masse ${rho*v} g.\nBerechne die Dichte.`,
    tr:{ru:`Плотность: ρ = m:V. V = ${v} см³, m = ${rho*v} г. Найди ρ.`,en:`Density: ρ = m:V. V = ${v} cm³, m = ${rho*v} g. Find ρ.`},
    a:rho, unit:'g/cm³', h:'phMech', pts:2};
}
/* ---- Englisch: irregular verbs & comparison ---- */
const IRREG = [
  ['go','went','gone','gehen'],['see','saw','seen','sehen'],['eat','ate','eaten','essen'],
  ['come','came','come','kommen'],['take','took','taken','nehmen'],['give','gave','given','geben'],
  ['write','wrote','written','schreiben'],['speak','spoke','spoken','sprechen'],['drink','drank','drunk','trinken'],
  ['swim','swam','swum','schwimmen'],['run','ran','run','laufen'],['buy','bought','bought','kaufen'],
  ['bring','brought','brought','bringen'],['think','thought','thought','denken'],['make','made','made','machen'],
  ['have','had','had','haben'],['do','did','done','tun'],['get','got','got','bekommen'],
  ['find','found','found','finden'],['read','read','read','lesen'],['sing','sang','sung','singen'],
  ['begin','began','begun','beginnen'],['fly','flew','flown','fliegen'],['know','knew','known','wissen'],
  ['break','broke','broken','zerbrechen'],['sleep','slept','slept','schlafen'],['win','won','won','gewinnen'],
  ['tell','told','told','erzählen'],['leave','left','left','verlassen'],['catch','caught','caught','fangen'],
];
function qIrregPast(){
  const v=pick(IRREG);
  return {t:'text', q:`Simple Past: Wie heißt die 2. Form von "${v[0]}" (${v[3]})?`,
    tr:{ru:`Simple Past: вторая форма глагола "${v[0]}" (${v[3]})?`,en:`Simple past of "${v[0]}"?`},
    a:[v[1]], h:'engIrregular', pts:1};
}
function qIrregPart(){
  const v=pick(IRREG);
  return {t:'text', q:`Past Participle: Wie heißt die 3. Form von "${v[0]}" (${v[3]})?\n(I have ...)`,
    tr:{ru:`Третья форма глагола "${v[0]}" (${v[3]})? (I have ...)`,en:`Past participle of "${v[0]}"? (I have ...)`},
    a:[v[2]], h:'engIrregular', pts:1};
}
const COMP_ADJ = [
  ['big','bigger','the biggest'],['small','smaller','the smallest'],['fast','faster','the fastest'],
  ['happy','happier','the happiest'],['easy','easier','the easiest'],['good','better','the best'],
  ['bad','worse','the worst'],['interesting','more interesting','the most interesting'],
  ['beautiful','more beautiful','the most beautiful'],['old','older','the oldest'],['nice','nicer','the nicest'],
];
function qCompAdj(){
  const a=pick(COMP_ADJ);
  if(Math.random()<0.5)
    return {t:'text', q:`Steigere: ${a[0]} → ? → ${a[2]}\n(Vergleichsform / comparative)`,
      tr:{ru:`Сравнительная степень: ${a[0]} → ? → ${a[2]}`,en:`Comparative: ${a[0]} → ? → ${a[2]}`},
      a:[a[1]], h:'engComp', pts:1};
  return {t:'text', q:`Steigere: ${a[0]} → ${a[1]} → the ...?\n(Höchstform / superlative, ohne "the" schreiben)`,
    tr:{ru:`Превосходная степень: ${a[0]} → ${a[1]} → the ...? (пиши без "the")`,en:`Superlative: ${a[0]} → ${a[1]} → the ...? (write without "the")`},
    a:[a[2].replace('the ','')], h:'engComp', pts:1};
}
