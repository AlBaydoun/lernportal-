/* ============ MATH TESTS – Klasse 4 & 5 (generated: fresh numbers each attempt) ============ */
const TESTS_MATH = [

/* ---------- KLASSE 4 – Lernzielkontrollen (full 7-task structure) ---------- */
...['A','B','C'].map(v => ({
  id:'m4-lzk-'+v.toLowerCase(), grade:4, subject:'math', icon:'📝', genTest:true,
  title:{de:'Lernzielkontrolle '+v,ru:'Контрольная работа '+v,en:'Class Test '+v},
  desc:{de:'Die große Mathe-Arbeit: Division, Sachaufgaben, Angebote, Reste, Geometrie',
        ru:'Большая контрольная: деление, задачи, сравнение цен, остатки, геометрия',
        en:'The big maths test: division, word problems, offers, remainders, geometry'},
  gen(){
    const qs = [];
    // Aufgabe 1: schriftliche Division + Stellen
    qs.push(qLongDiv(), qLongDiv(), qLongDiv());
    qs.push(qDivDigits());
    // Aufgabe 2: Sachaufgabe (F + L)
    qs.push(...qWordDivSetup());
    // Aufgabe 3: Angebote vergleichen
    qs.push(...qCompareOffers());
    // Aufgabe 4: Reste
    qs.push(qRemainder(), qRemainder(), qRemainder(), qRemainder());
    // Aufgabe 5: Geometrie – parallel/senkrecht am Bild
    qs.push({t:'mc', q:'Schau auf die Zeichnung: Welche Aussage über die Geraden g und h ist richtig?',
      tr:{ru:'Посмотри на рисунок: какое утверждение о прямых g и h верно?',en:'Look at the drawing: which statement about lines g and h is correct?'},
      opts:['g und h sind parallel (g ∥ h)','g und h sind senkrecht (g ⊥ h)','g und h schneiden sich'],
      a:0, noshuffle:true, h:'geoLines', pts:1, svg:svgParallelLines()});
    qs.push({t:'mc', q:'Die grüne Gerade m schneidet die Gerade g im rechten Winkel. Wie schreibt man das?',
      tr:{ru:'Зелёная прямая m пересекает g под прямым углом. Как это записать?',en:'Green line m crosses g at a right angle. How do you write that?'},
      opts:['m ⊥ g','m ∥ g','m = g'], a:0, noshuffle:true, h:'geoLines', pts:1, svg:svgParallelLines()});
    // Aufgabe 6: Aussagen prüfen
    qs.push(...qQuadStatements(4));
    // Aufgabe 7: Rechteck (Umfang statt Zeichnung + Eigenschaften)
    qs.push(qPerimeter());
    qs.push({t:'num', q:'Wie viele rechte Winkel musst du in einem Rechteck markieren?',
      tr:{ru:'Сколько прямых углов нужно отметить в прямоугольнике?',en:'How many right angles do you mark in a rectangle?'},
      a:4, h:'quadri', pts:1});
    return qs;
  }
})),

/* ---------- KLASSE 4 – Themen-Tests ---------- */
{ id:'m4-div', grade:4, subject:'math', icon:'➗', genTest:true,
  title:{de:'Schriftliche Division – Training',ru:'Деление в столбик – тренировка',en:'Long Division – Training'},
  desc:{de:'6 Divisionen mit Rest + Stellen-Überschlag',ru:'6 делений с остатком + прикидка',en:'6 divisions with remainder + digit estimate'},
  gen(){ return [qLongDiv(),qLongDiv(),qLongDiv(),qLongDiv(),qLongDiv(),qLongDiv(),qDivDigits(),qDivDigits()]; } },

{ id:'m4-mult', grade:4, subject:'math', icon:'✖️', genTest:true,
  title:{de:'Schriftliche Multiplikation',ru:'Умножение в столбик',en:'Written Multiplication'},
  desc:{de:'Große Zahlen malnehmen wie ein Profi',ru:'Умножай большие числа как профи',en:'Multiply big numbers like a pro'},
  gen(){ return [qMultWritten(),qMultWritten(),qMultWritten(),qMultWritten(),qMultWritten(),
    {t:'mc', q:'Überschlag: 397 · 21 ist ungefähr ...', tr:{ru:'Прикидка: 397 · 21 – это примерно ...',en:'Estimate: 397 · 21 is about ...'},
     opts:['8.000','800','80.000','4.000'], a:0, h:'multWritten', pts:1}]; } },

{ id:'m4-addsub', grade:4, subject:'math', icon:'➕', genTest:true,
  title:{de:'Plus und Minus bis 1 Million',ru:'Плюс и минус до миллиона',en:'Add & Subtract to 1 Million'},
  desc:{de:'Schriftlich addieren, subtrahieren, fehlende Zahlen',ru:'Сложение, вычитание, пропущенные числа',en:'Column adding, subtracting, missing numbers'},
  gen(){ return [qAddBig(),qAddBig(),qSubBig(),qSubBig(),qMissing(),qMissing(),qAddBig(),qSubBig()]; } },

{ id:'m4-round', grade:4, subject:'math', icon:'🎯', genTest:true,
  title:{de:'Runden & Stellenwerte',ru:'Округление и разряды',en:'Rounding & Place Value'},
  desc:{de:'Runden, Stellenwerttafel, Zahlen vergleichen',ru:'Округление, разряды, сравнение чисел',en:'Rounding, place values, comparing numbers'},
  gen(){ return [qRound(),qRound(),qRound(),qPlace(),qPlace(),qPlace(),qCompareNums(),qCompareNums()]; } },

{ id:'m4-units', grade:4, subject:'math', icon:'📏', genTest:true,
  title:{de:'Größen & Einheiten',ru:'Величины и единицы',en:'Units & Measures'},
  desc:{de:'km, m, cm, kg, g, €, Cent, Stunden, Minuten',ru:'км, м, см, кг, г, €, центы, часы, минуты',en:'km, m, cm, kg, g, €, cents, hours, minutes'},
  gen(){ return [qUnit(),qUnit(),qUnit(),qUnit(),qUnit(),qUnit(),qUnit(),qUnit()]; } },

{ id:'m4-time', grade:4, subject:'math', icon:'🕐', genTest:true,
  title:{de:'Uhrzeiten & Zeitspannen',ru:'Время и промежутки',en:'Time & Durations'},
  desc:{de:'Uhr lesen und Zeitspannen berechnen',ru:'Чтение часов и вычисление времени',en:'Reading clocks and calculating durations'},
  gen(){
    const clocks = [];
    for(let i=0;i<3;i++){
      const h = ri(1,12), m = pick([0,15,30,45]);
      const p = n=>String(n).padStart(2,'0');
      const good = `${h}:${p(m)}`;
      const wrongs = shuf([`${h===12?1:h+1}:${p(m)}`, `${h}:${p((m+15)%60)}`, `${(h+10)%12+1}:${p((m+30)%60)}`]).slice(0,3);
      const opts = shuf([good, ...wrongs]);
      clocks.push({t:'mc', q:'Welche Uhrzeit zeigt die Uhr?', tr:{ru:'Какое время показывают часы?',en:'What time does the clock show?'},
        opts:opts, a:opts.indexOf(good), noshuffle:true, h:'timeCalc', pts:1, svg:svgClock(h,m)});
    }
    return [...clocks, qDuration(), qDuration(), qUnit(), qUnit()];
  } },

{ id:'m4-geo', grade:4, subject:'math', icon:'📐', genTest:true,
  title:{de:'Geometrie-Werkstatt',ru:'Мастерская геометрии',en:'Geometry Workshop'},
  desc:{de:'Parallel, senkrecht, Vierecke, Umfang',ru:'Параллельно, перпендикулярно, четырёхугольники, периметр',en:'Parallel, perpendicular, quadrilaterals, perimeter'},
  gen(){
    return [
      {t:'mc', q:'Zwei Geraden treffen sich nie und haben überall den gleichen Abstand. Sie sind ...',
        tr:{ru:'Две прямые никогда не пересекаются и везде на одинаковом расстоянии. Они ...',en:'Two lines never meet and keep the same distance. They are ...'},
        opts:['parallel','senkrecht','gleich lang'], a:0, noshuffle:true, h:'geoLines', pts:1},
      {t:'mc', q:'Schau auf das Bild: Die Gerade m steht auf der Geraden g ...',
        tr:{ru:'Посмотри на рисунок: прямая m относительно прямой g ...',en:'Look at the picture: line m stands on line g ...'},
        opts:['senkrecht (⊥)','parallel (∥)','schief'], a:0, noshuffle:true, h:'geoLines', pts:1, svg:svgParallelLines()},
      {t:'mc', q:'Welcher Buchstabe hat eine senkrechte Symmetrieachse?',
        tr:{ru:'У какой буквы есть вертикальная ось симметрии?',en:'Which letter has a vertical line of symmetry?'},
        opts:['A','F','L','P'], a:0, h:'geoLines', pts:1},
      ...qQuadStatements(4),
      qPerimeter(), qPerimeter(),
      {t:'num', q:'Ein Quadrat hat die Seitenlänge 7 cm. Berechne den Umfang.',
        tr:{ru:'Квадрат со стороной 7 см. Найди периметр.',en:'A square has sides of 7 cm. Find the perimeter.'},
        a:28, unit:'cm', h:'periArea', pts:1},
    ];
  } },

{ id:'m4-word', grade:4, subject:'math', icon:'🛒', genTest:true,
  title:{de:'Sachaufgaben-Mix',ru:'Микс текстовых задач',en:'Word Problem Mix'},
  desc:{de:'Knifflige Textaufgaben mit 1 und 2 Schritten',ru:'Задачи в 1 и 2 действия',en:'Tricky 1- and 2-step word problems'},
  gen(){ return [...qWordDivSetup(), qTwoStep(), qTwoStep(), qTwoStep(), ...qCompareOffers()]; } },

{ id:'m4-blitz', grade:4, subject:'math', icon:'⚡', genTest:true,
  title:{de:'Kopfrechnen-Blitz',ru:'Молниеносный устный счёт',en:'Mental Maths Blitz'},
  desc:{de:'12 schnelle Aufgaben – Einmaleins & Co.',ru:'12 быстрых примеров – таблица умножения и не только',en:'12 quick tasks – times tables & more'},
  gen(){ const qs=[]; for(let i=0;i<12;i++) qs.push(qMental()); return qs; } },

{ id:'m4-rest', grade:4, subject:'math', icon:'🍪', genTest:true,
  title:{de:'Reste-Detektiv',ru:'Детектив остатков',en:'Remainder Detective'},
  desc:{de:'8 Reste-Aufgaben wie in der Klassenarbeit',ru:'8 заданий на остаток как в контрольной',en:'8 remainder tasks like in the class test'},
  gen(){ const qs=[]; for(let i=0;i<8;i++) qs.push(qRemainder()); return qs; } },

/* ---------- KLASSE 5 (Realschule NRW) ---------- */
{ id:'m5-big', grade:5, subject:'math', icon:'🔢', genTest:true,
  title:{de:'Große Zahlen & Stellenwert',ru:'Большие числа и разряды',en:'Big Numbers & Place Value'},
  desc:{de:'Bis zur Million und darüber hinaus!',ru:'До миллиона и дальше!',en:'Up to a million and beyond!'},
  gen(){
    return [qPlace(),qPlace(),qRound(),qRound(),qCompareNums(),qCompareNums(),
      {t:'num', q:'Schreibe als Zahl: dreihunderttausendfünfhundert',
        tr:{ru:'Запиши цифрами: триста тысяч пятьсот',en:'Write as a number: three hundred thousand five hundred'},
        a:300500, h:'placeValue', pts:1},
      {t:'num', q:'Welche Zahl ist um 1.000 größer als 299.500?',
        tr:{ru:'Какое число на 1.000 больше, чем 299.500?',en:'Which number is 1,000 more than 299,500?'},
        a:300500, h:'placeValue', pts:1},
      qMissing()];
  } },

{ id:'m5-ops', grade:5, subject:'math', icon:'🧮', genTest:true,
  title:{de:'Rechnen & Rechengesetze',ru:'Вычисления и законы',en:'Calculation & Number Laws'},
  desc:{de:'Punkt vor Strich, Klammern, schriftliche Verfahren',ru:'Порядок действий, скобки, столбик',en:'Order of operations, brackets, written methods'},
  gen(){
    return [qOrderOps(),qOrderOps(),qOrderOps(),qOrderOps(),qMultWritten(),qLongDiv(),qAddBig(),qSubBig()];
  } },

{ id:'m5-teiler', grade:5, subject:'math', icon:'🔍', genTest:true,
  title:{de:'Teiler & Teilbarkeit',ru:'Делители и делимость',en:'Divisors & Divisibility'},
  desc:{de:'Teilbarkeitsregeln für 2, 3, 5, 9, 10',ru:'Признаки делимости на 2, 3, 5, 9, 10',en:'Divisibility rules for 2, 3, 5, 9, 10'},
  gen(){
    return [qDivisible(),qDivisible(),qDivisible(),qDivisible(),qDivisible(),qDivisible(),
      {t:'mc', q:'Welche Zahl ist ein Teiler von 24?', tr:{ru:'Какое число – делитель 24?',en:'Which number is a divisor of 24?'},
        opts:['8','5','7','9'], a:0, h:'divisibility', pts:1},
      {t:'mc', q:'Welche Zahl ist ein Vielfaches von 6?', tr:{ru:'Какое число кратно 6?',en:'Which number is a multiple of 6?'},
        opts:['42','32','26','62'], a:0, h:'divisibility', pts:1}];
  } },

{ id:'m5-coord', grade:5, subject:'math', icon:'🗺️', genTest:true,
  title:{de:'Koordinatensystem',ru:'Система координат',en:'Coordinate System'},
  desc:{de:'Punkte lesen wie eine Schatzkarte',ru:'Читаем точки как карту сокровищ',en:'Reading points like a treasure map'},
  gen(){
    const qs = [];
    const names = ['A','B','C','D'];
    const pts = names.map(n => ({n, x:ri(1,8), y:ri(1,5)}));
    const img = svgGridPoints(pts);
    pts.slice(0,3).forEach(p=>{
      const good = `(${p.x} | ${p.y})`;
      const opts = shuf([good, `(${p.y} | ${p.x})`, `(${p.x+1} | ${p.y})`, `(${p.x} | ${p.y===1?p.y+1:p.y-1})`]);
      qs.push({t:'mc', q:`Welche Koordinaten hat der Punkt ${p.n}?`,
        tr:{ru:`Какие координаты у точки ${p.n}?`,en:`What are the coordinates of point ${p.n}?`},
        opts:opts, a:opts.indexOf(good), noshuffle:true, h:'coords', pts:1, svg:img});
    });
    qs.push({t:'mc', q:'Bei (3 | 5): Was bedeutet die erste Zahl?',
      tr:{ru:'В записи (3 | 5): что означает первое число?',en:'In (3 | 5): what does the first number mean?'},
      opts:['3 Schritte nach rechts (x-Achse)','3 Schritte nach oben (y-Achse)','Der Punkt heißt Nummer 3'],
      a:0, h:'coords', pts:1});
    qs.push(...qQuadStatements(2));
    return qs;
  } },

{ id:'m5-area', grade:5, subject:'math', icon:'📦', genTest:true,
  title:{de:'Umfang & Flächeninhalt',ru:'Периметр и площадь',en:'Perimeter & Area'},
  desc:{de:'Rechtecke und Quadrate berechnen',ru:'Вычисляем прямоугольники и квадраты',en:'Calculating rectangles and squares'},
  gen(){
    const a = ri(4,12);
    return [qPerimeter(),qArea(),qPerimeter(),qArea(),
      {t:'num', q:`Ein Quadrat hat die Seitenlänge ${a} cm. Berechne den Flächeninhalt.`,
        tr:{ru:`Квадрат со стороной ${a} см. Найди площадь.`,en:`A square has sides of ${a} cm. Find the area.`},
        a:a*a, unit:'cm²', h:'periArea', pts:1},
      {t:'mc', q:'In welcher Einheit misst man einen Flächeninhalt?',
        tr:{ru:'В каких единицах измеряют площадь?',en:'Which unit measures area?'},
        opts:['cm²','cm','kg','Liter'], a:0, h:'periArea', pts:1},
      {t:'num', q:'Ein rechteckiger Garten ist 20 m lang und 15 m breit. Wie viel Meter Zaun braucht man für den Umfang?',
        tr:{ru:'Прямоугольный сад 20 м в длину и 15 м в ширину. Сколько метров забора нужно?',en:'A rectangular garden is 20 m long and 15 m wide. How many metres of fence are needed?'},
        a:70, unit:'m', h:'periArea', pts:2}];
  } },

{ id:'m5-data', grade:5, subject:'math', icon:'📊', genTest:true,
  title:{de:'Diagramme & Daten',ru:'Диаграммы и данные',en:'Charts & Data'},
  desc:{de:'Balkendiagramme lesen und auswerten',ru:'Читаем и анализируем диаграммы',en:'Reading and analysing bar charts'},
  gen(){
    const img = svgBarChart();
    return [
      {t:'mc', q:'Welches Haustier haben die meisten Kinder?', tr:{ru:'Какое домашнее животное у большинства детей?',en:'Which pet do most children have?'},
        opts:['Katze','Hund','Fisch','Hamster'], a:0, h:'diagram', pts:1, svg:img},
      {t:'num', q:'Wie viele Kinder haben einen Hund?', tr:{ru:'У скольких детей есть собака?',en:'How many children have a dog?'}, a:6, h:'diagram', pts:1, svg:img},
      {t:'num', q:'Wie viele Katzen und Fische sind es zusammen?', tr:{ru:'Сколько кошек и рыбок вместе?',en:'How many cats and fish together?'}, a:13, h:'diagram', pts:1, svg:img},
      {t:'num', q:'Wie viele Haustiere sind es insgesamt?', tr:{ru:'Сколько всего домашних животных?',en:'How many pets in total?'}, a:24, h:'diagram', pts:2, svg:img},
      {t:'num', q:'Wie viele Kinder mehr haben eine Katze als einen Hamster?', tr:{ru:'На сколько больше детей с кошкой, чем с хомяком?',en:'How many more children have a cat than a hamster?'}, a:5, h:'diagram', pts:1, svg:img},
      qUnit(), qUnit()];
  } },

{ id:'m5-word', grade:5, subject:'math', icon:'🧩', genTest:true,
  title:{de:'Sachaufgaben Klasse 5',ru:'Текстовые задачи 5 класс',en:'Word Problems Grade 5'},
  desc:{de:'Mehrschrittige Probleme knacken',ru:'Решаем задачи в несколько действий',en:'Cracking multi-step problems'},
  gen(){ return [qTwoStep(),qTwoStep(),qTwoStep(),...qWordDivSetup(),qDuration(),qOrderOps()]; } },

/* ---------- Erweiterung: mehr Mathe-Tests ---------- */
{ id:'m4-money', grade:4, subject:'math', icon:'💶', genTest:true,
  title:{de:'Geld & Rückgeld',ru:'Деньги и сдача',en:'Money & Change'},
  desc:{de:'Einkaufen, Preise addieren, Rückgeld berechnen',ru:'Покупки, сложение цен, расчёт сдачи',en:'Shopping, adding prices, calculating change'},
  gen(){ return [qChange(),qChange(),qChange(),qPriceSum(),qPriceSum(),
    {t:'num', q:'Rechne um:  7 € = ▢ Cent', tr:{ru:'Переведи: 7 € = ▢ центов',en:'Convert: 7 € = ▢ cents'}, a:700, unit:'Cent', h:'units', pts:1},
    {t:'num', q:'Rechne um:  350 Cent = ▢ €  (z. B. 3,50)', tr:{ru:'Переведи: 350 центов = ▢ € (напр. 3,50)',en:'Convert: 350 cents = ▢ €'}, a:3.5, unit:'€', h:'units', pts:1},
    qTwoStep()]; } },

{ id:'m4-mix-a', grade:4, subject:'math', icon:'🎡', genTest:true,
  title:{de:'Großer Mathe-Mix A',ru:'Большой микс A',en:'Big Maths Mix A'},
  desc:{de:'10 zufällige Aufgaben aus ALLEN Themen',ru:'10 случайных заданий из ВСЕХ тем',en:'10 random tasks from ALL topics'},
  gen(){ const pool=[qLongDiv,qMultWritten,qAddBig,qSubBig,qRound,qPlace,qUnit,qRemainder,qDuration,qTwoStep,qMental,qCompareNums,qChange];
    const qs=[]; for(let i=0;i<10;i++) qs.push(pick(pool)()); return qs; } },

{ id:'m4-mix-b', grade:4, subject:'math', icon:'🎠', genTest:true,
  title:{de:'Großer Mathe-Mix B',ru:'Большой микс B',en:'Big Maths Mix B'},
  desc:{de:'Noch einmal 10 Überraschungs-Aufgaben',ru:'Ещё 10 заданий-сюрпризов',en:'Another 10 surprise tasks'},
  gen(){ const pool=[qLongDiv,qMultWritten,qAddBig,qSubBig,qRound,qPlace,qUnit,qRemainder,qDuration,qTwoStep,qMental,qCompareNums,qPriceSum];
    const qs=[]; for(let i=0;i<10;i++) qs.push(pick(pool)()); return qs; } },

{ id:'m5-ka1', grade:5, subject:'math', icon:'📋', genTest:true,
  title:{de:'Klassenarbeit Nr. 1 (Kl. 5)',ru:'Контрольная № 1 (5 кл.)',en:'Class Test No. 1 (Gr. 5)'},
  desc:{de:'Große Zahlen, Rechnen, Größen – wie in der Schule',ru:'Большие числа, вычисления, величины – как в школе',en:'Big numbers, calculation, units – like at school'},
  gen(){ return [qPlace(),qRound(),qCompareNums(),qAddBig(),qSubBig(),qMultWritten(),qLongDiv(),qOrderOps(),qUnit(),qUnit(),qTwoStep()]; } },

{ id:'m5-ka2', grade:5, subject:'math', icon:'🗒️', genTest:true,
  title:{de:'Klassenarbeit Nr. 2 (Kl. 5)',ru:'Контрольная № 2 (5 кл.)',en:'Class Test No. 2 (Gr. 5)'},
  desc:{de:'Teilbarkeit, Geometrie, Sachaufgaben',ru:'Делимость, геометрия, задачи',en:'Divisibility, geometry, word problems'},
  gen(){ return [qDivisible(),qDivisible(),qDivisible(),qPerimeter(),qArea(),...qQuadStatements(3),qOrderOps(),qTwoStep(),qDuration()]; } },

{ id:'m5-mental', grade:5, subject:'math', icon:'🚀', genTest:true,
  title:{de:'Kopfrechnen-Raketen (Kl. 5)',ru:'Ракеты устного счёта (5 кл.)',en:'Mental Maths Rockets (Gr. 5)'},
  desc:{de:'12 schnelle Aufgaben mit größeren Zahlen',ru:'12 быстрых примеров с большими числами',en:'12 quick tasks with bigger numbers'},
  gen(){ const qs=[]; for(let i=0;i<12;i++) qs.push(qMental5()); return qs; } },
];
