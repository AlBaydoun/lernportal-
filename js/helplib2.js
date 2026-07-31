/* ============ Help texts for grades 6–10 (merged into HELP) ============ */
Object.assign(HELP, {
frac:{
de:`🍕 Brüche verstehen, kürzen, erweitern:
Ein Bruch hat einen ZÄHLER (oben) und einen NENNER (unten). Der Nenner sagt, in wie viele Teile geteilt wird.
• KÜRZEN: Zähler UND Nenner durch dieselbe Zahl teilen → 6/8 = 3/4 (beide :2). Vollständig kürzen = so weit wie möglich.
• ERWEITERN: Zähler UND Nenner mit derselben Zahl malnehmen → 1/2 = 3/6 (beide ·3).
• Bruchteil von einer Menge: erst durch den Nenner TEILEN, dann mit dem Zähler MALNEHMEN.
  3/4 von 20 → 20 : 4 = 5 → 5 · 3 = 15.`,
ru:`🍕 Дроби: сокращение и расширение:
У дроби есть ЧИСЛИТЕЛЬ (сверху) и ЗНАМЕНАТЕЛЬ (снизу).
• СОКРАЩЕНИЕ: делим числитель И знаменатель на одно число → 6/8 = 3/4.
• РАСШИРЕНИЕ: умножаем оба на одно число → 1/2 = 3/6.
• Часть от числа: сначала РАЗДЕЛИ на знаменатель, потом УМНОЖЬ на числитель.
  3/4 от 20 → 20 : 4 = 5 → 5 · 3 = 15.`,
en:`🍕 Fractions – simplify and expand:
A fraction has a NUMERATOR (top) and DENOMINATOR (bottom).
• SIMPLIFY: divide top AND bottom by the same number → 6/8 = 3/4.
• EXPAND: multiply top AND bottom by the same number → 1/2 = 3/6.
• Fraction of an amount: DIVIDE by the denominator, then MULTIPLY by the numerator.
  3/4 of 20 → 20 : 4 = 5 → 5 · 3 = 15.`},
fracOps:{
de:`➕ Mit Brüchen rechnen:
• GLEICHER Nenner: nur die Zähler addieren/subtrahieren, Nenner bleibt! 2/7 + 3/7 = 5/7.
• VERSCHIEDENE Nenner: zuerst auf den gleichen Nenner bringen (kleinstes gemeinsames Vielfaches), dann addieren.
  1/2 + 1/6 → 1/2 = 3/6 → 3/6 + 1/6 = 4/6 = 2/3.
• MULTIPLIZIEREN: Zähler · Zähler, Nenner · Nenner. 2/3 · 3/4 = 6/12 = 1/2.
• DIVIDIEREN: mit dem KEHRWERT malnehmen. 1/2 : 1/4 = 1/2 · 4/1 = 2.
❗ Ergebnis immer kürzen!`,
ru:`➕ Действия с дробями:
• ОДИНАКОВЫЙ знаменатель: складываем только числители: 2/7 + 3/7 = 5/7.
• РАЗНЫЕ знаменатели: сначала приведи к общему знаменателю, потом складывай.
  1/2 + 1/6 → 3/6 + 1/6 = 4/6 = 2/3.
• УМНОЖЕНИЕ: числитель·числитель, знаменатель·знаменатель.
• ДЕЛЕНИЕ: умножь на ПЕРЕВЁРНУТУЮ дробь. 1/2 : 1/4 = 1/2 · 4/1 = 2.
❗ Всегда сокращай ответ!`,
en:`➕ Calculating with fractions:
• SAME denominator: add/subtract only the numerators: 2/7 + 3/7 = 5/7.
• DIFFERENT denominators: find a common denominator first, then add.
• MULTIPLY: top · top, bottom · bottom.
• DIVIDE: multiply by the reciprocal. 1/2 : 1/4 = 1/2 · 4/1 = 2.
❗ Always simplify the result!`},
decimal:{
de:`🔢 Dezimalzahlen (Kommazahlen):
• ADDIEREN/SUBTRAHIEREN: Komma UNTER Komma schreiben, dann normal rechnen.
• MULTIPLIZIEREN: ohne Komma rechnen, dann so viele Nachkommastellen setzen wie beide Faktoren zusammen haben. 1,2 · 3 = 3,6.
• · 10 → Komma 1 Stelle nach RECHTS · 100 → 2 Stellen. : 10 → nach LINKS.
• Brüche ↔ Dezimal: 1/2 = 0,5 · 1/4 = 0,25 · 3/4 = 0,75 · 1/10 = 0,1.`,
ru:`🔢 Десятичные дроби:
• СЛОЖЕНИЕ/ВЫЧИТАНИЕ: запятая ПОД запятой, потом считаем как обычно.
• УМНОЖЕНИЕ: считай без запятой, потом отдели столько знаков, сколько у обоих множителей вместе. 1,2·3 = 3,6.
• ·10 → запятая на 1 знак ВПРАВО, ·100 → на 2. :10 → ВЛЕВО.
• Дроби ↔ десятичные: 1/2 = 0,5 · 1/4 = 0,25 · 3/4 = 0,75.`,
en:`🔢 Decimal numbers:
• ADD/SUBTRACT: line the decimal points up, then calculate normally.
• MULTIPLY: calculate without the point, then place as many decimals as both factors have together.
• ×10 → point moves 1 place RIGHT, ×100 → 2 places. ÷10 → LEFT.
• Fractions ↔ decimals: 1/2 = 0.5 · 1/4 = 0.25 · 3/4 = 0.75.`},
negNum:{
de:`➖ Negative Zahlen (rationale Zahlen):
Denke an den Zahlenstrahl: links vom 0 sind die negativen Zahlen.
• PLUS eine negative Zahl = nach links gehen: 5 + (−3) = 2.
• MINUS eine negative Zahl = nach rechts gehen: 5 − (−3) = 8.
VORZEICHENREGEL bei · und : —
• gleiche Vorzeichen → Ergebnis POSITIV: (−3)·(−4) = 12
• verschiedene Vorzeichen → Ergebnis NEGATIV: (−3)·4 = −12
💡 Merke: Minus mal Minus gibt Plus!`,
ru:`➖ Отрицательные числа:
Представь числовую прямую: слева от 0 – отрицательные числа.
• ПЛЮС отрицательное = идём влево: 5 + (−3) = 2.
• МИНУС отрицательное = идём вправо: 5 − (−3) = 8.
ПРАВИЛО ЗНАКОВ при · и : —
• одинаковые знаки → ПЛЮС: (−3)·(−4) = 12
• разные знаки → МИНУС: (−3)·4 = −12
💡 Минус на минус даёт плюс!`,
en:`➖ Negative numbers:
Think of the number line: negatives are left of 0.
• PLUS a negative = move left: 5 + (−3) = 2.
• MINUS a negative = move right: 5 − (−3) = 8.
SIGN RULE for × and ÷ —
• same signs → POSITIVE: (−3)·(−4) = 12
• different signs → NEGATIVE: (−3)·4 = −12`},
percent:{
de:`💯 Prozentrechnung:
Prozent heißt „von hundert": 25 % = 25/100 = 0,25 = ein Viertel.
Die drei Größen: GRUNDWERT G (das Ganze) · PROZENTSATZ p % · PROZENTWERT W (der Anteil).
• W = G · p : 100   → 20 % von 80 € = 80 · 20 : 100 = 16 €
• p = W · 100 : G   → 16 von 80 = 16·100:80 = 20 %
• G = W · 100 : p
💡 Rabatt: erst den Rabatt ausrechnen, dann vom Preis ABZIEHEN (oder gleich mit (100−p) % rechnen).`,
ru:`💯 Проценты:
Процент = «сотая часть»: 25 % = 25/100 = 0,25.
Три величины: ЦЕЛОЕ G · ПРОЦЕНТ p % · ЧАСТЬ W.
• W = G · p : 100 → 20 % от 80 € = 16 €
• p = W · 100 : G → 16 из 80 = 20 %
• G = W · 100 : p
💡 Скидка: посчитай скидку и ВЫЧТИ из цены (или сразу умножь на (100−p) %).`,
en:`💯 Percentages:
Per cent means "out of a hundred": 25 % = 25/100 = 0.25.
Three quantities: BASE G · RATE p % · VALUE W.
• W = G · p ÷ 100 → 20 % of 80 € = 16 €
• p = W · 100 ÷ G · G = W · 100 ÷ p
💡 Discount: work out the discount, then SUBTRACT it from the price.`},
zins:{
de:`🏦 Zinsrechnung:
• KAPITAL K = das angelegte Geld · ZINSSATZ p % pro Jahr · ZINSEN Z = der Gewinn.
• Formel für 1 Jahr:  Z = K · p : 100
  Beispiel: 500 € zu 3 % → 500 · 3 : 100 = 15 € Zinsen.
• Für Monate: Z = K · p : 100 · (Monate : 12).
• Nach einem Jahr hast du K + Z auf dem Konto.`,
ru:`🏦 Проценты по вкладу:
• КАПИТАЛ K · СТАВКА p % в год · ПРОЦЕНТЫ Z (доход).
• Формула на 1 год: Z = K · p : 100
  Пример: 500 € под 3 % → 15 € процентов.
• На месяцы: Z = K · p : 100 · (месяцы : 12).`,
en:`🏦 Interest:
• CAPITAL K · RATE p % per year · INTEREST Z.
• For one year: Z = K · p ÷ 100. Example: 500 € at 3 % → 15 €.
• For months: Z = K · p ÷ 100 × (months ÷ 12).`},
dreisatz:{
de:`⚖️ Dreisatz (proportional):
Drei Schritte – deshalb „Dreisatz":
1. Gegeben: mehrere Teile kosten zusammen X.
2. Auf EINS runterrechnen (dividieren).
3. Auf die gesuchte Anzahl hochrechnen (multiplizieren).
Beispiel-Methode: 4 Hefte kosten 12 € → 1 Heft: 12 : 4 = 3 € → 7 Hefte: 3 · 7 = 21 €.
💡 Bei UMGEKEHRT proportional (mehr Arbeiter = weniger Zeit) wird im letzten Schritt DIVIDIERT statt multipliziert.`,
ru:`⚖️ Правило трёх (пропорция):
Три шага:
1. Известно: несколько предметов стоят X.
2. Считаем цену ОДНОГО (делим).
3. Умножаем на нужное количество.
Пример: 4 тетради = 12 € → 1 тетрадь = 3 € → 7 тетрадей = 21 €.
💡 При ОБРАТНОЙ пропорции (больше рабочих – меньше времени) в конце ДЕЛИМ.`,
en:`⚖️ Rule of three (proportion):
1. Given: several items cost X.
2. Work out ONE (divide).
3. Multiply up to the amount you need.
Example: 4 notebooks cost 12 € → 1 costs 3 € → 7 cost 21 €.`},
term:{
de:`🔤 Terme aufstellen und vereinfachen:
• Nur GLEICHE Variablen darf man zusammenfassen: 3x + 5x = 8x, aber 3x + 5y bleibt stehen.
• KLAMMER AUFLÖSEN (Distributivgesetz): a · (b + c) = a·b + a·c
  Beispiel: 3 · (x + 4) = 3x + 12.
• Minus vor der Klammer dreht ALLE Vorzeichen um: −(x − 3) = −x + 3.
BINOMISCHE FORMELN:
(a+b)² = a² + 2ab + b² · (a−b)² = a² − 2ab + b² · (a+b)(a−b) = a² − b²`,
ru:`🔤 Выражения (термы):
• Складывать можно только ОДИНАКОВЫЕ переменные: 3x + 5x = 8x.
• РАСКРЫТИЕ СКОБОК: a · (b + c) = a·b + a·c → 3·(x+4) = 3x+12.
• Минус перед скобкой меняет ВСЕ знаки: −(x − 3) = −x + 3.
ФОРМУЛЫ:
(a+b)² = a² + 2ab + b² · (a−b)² = a² − 2ab + b² · (a+b)(a−b) = a² − b²`,
en:`🔤 Terms and expressions:
• Only LIKE terms can be combined: 3x + 5x = 8x.
• EXPANDING: a · (b + c) = a·b + a·c → 3·(x+4) = 3x+12.
• A minus before a bracket flips ALL signs: −(x − 3) = −x + 3.
BINOMIALS: (a+b)² = a² + 2ab + b² · (a+b)(a−b) = a² − b²`},
equation:{
de:`⚖️ Gleichungen lösen:
Eine Gleichung ist eine Waage – was du LINKS machst, musst du auch RECHTS machen!
Ziel: x allein auf einer Seite.
1. Zahlen ohne x auf die andere Seite bringen (+ oder −).
2. Dann durch die Zahl vor dem x TEILEN.
Beispiel-Methode:  3x + 5 = 20  | −5
                   3x = 15      | :3
                   x = 5
💡 PROBE: Setze deine Lösung in die Gleichung ein – stimmt beides?`,
ru:`⚖️ Решение уравнений:
Уравнение – это весы: что делаешь СЛЕВА, делай и СПРАВА!
Цель: оставить x одного.
1. Перенеси числа без x в другую сторону (+ или −).
2. Раздели на число перед x.
Пример: 3x + 5 = 20 | −5 → 3x = 15 | :3 → x = 5
💡 ПРОВЕРКА: подставь ответ обратно в уравнение.`,
en:`⚖️ Solving equations:
An equation is a balance – what you do on the LEFT you must do on the RIGHT!
1. Move numbers without x to the other side (+ or −).
2. Divide by the number in front of x.
Example: 3x + 5 = 20 | −5 → 3x = 15 | ÷3 → x = 5
💡 CHECK: substitute your answer back in.`},
linfunc:{
de:`📈 Lineare Funktionen:  y = m · x + b
• b = y-ACHSENABSCHNITT: hier schneidet die Gerade die y-Achse (Startwert).
• m = STEIGUNG: wie viel y sich ändert, wenn x um 1 wächst.
  m positiv → Gerade steigt · m negativ → Gerade fällt.
• Punkt berechnen: x einsetzen und ausrechnen.
• Steigung aus zwei Punkten: m = (y₂ − y₁) : (x₂ − x₁).`,
ru:`📈 Линейная функция:  y = m·x + b
• b – точка пересечения с осью y (начальное значение).
• m – УГЛОВОЙ КОЭФФИЦИЕНТ: на сколько меняется y, когда x растёт на 1.
  m > 0 → прямая растёт; m < 0 → падает.
• Чтобы найти точку: подставь x и посчитай.
• По двум точкам: m = (y₂ − y₁) : (x₂ − x₁).`,
en:`📈 Linear functions:  y = m·x + b
• b = y-intercept (starting value).
• m = SLOPE: how much y changes when x grows by 1.
• To find a point: substitute x and calculate.
• Slope from two points: m = (y₂ − y₁) ÷ (x₂ − x₁).`},
lgs:{
de:`🔗 Lineare Gleichungssysteme (zwei Gleichungen, zwei Unbekannte):
Drei Verfahren:
• ADDITIONSVERFAHREN: Gleichungen addieren/subtrahieren, sodass eine Variable wegfällt.
  x + y = 10 und x − y = 4  → addieren: 2x = 14 → x = 7 → y = 3.
• EINSETZUNGSVERFAHREN: eine Gleichung nach x auflösen und in die andere einsetzen.
• GLEICHSETZUNGSVERFAHREN: beide nach y auflösen und gleichsetzen.
💡 Zum Schluss BEIDE Werte in beide Gleichungen einsetzen und prüfen.`,
ru:`🔗 Системы линейных уравнений:
Три способа:
• СЛОЖЕНИЕ/ВЫЧИТАНИЕ: складываем уравнения так, чтобы одна переменная исчезла.
  x + y = 10 и x − y = 4 → сложим: 2x = 14 → x = 7 → y = 3.
• ПОДСТАНОВКА: выражаем x и подставляем во второе.
• СРАВНЕНИЕ: выражаем y в обоих и приравниваем.`,
en:`🔗 Systems of linear equations:
• ELIMINATION: add/subtract the equations so one variable cancels.
  x + y = 10 and x − y = 4 → add: 2x = 14 → x = 7 → y = 3.
• SUBSTITUTION: solve one for x, put it into the other.
• COMPARISON: solve both for y and set them equal.`},
powroot:{
de:`⬆️ Potenzen und Wurzeln:
• POTENZ: 2⁴ = 2·2·2·2 = 16. Die kleine Zahl (Exponent) sagt, wie oft man multipliziert.
• Alles hoch 0 ist 1 · Alles hoch 1 bleibt gleich.
• QUADRATZAHLEN auswendig: 1,4,9,16,25,36,49,64,81,100,121,144,169,196,225.
• WURZEL ist die Umkehrung: √49 = 7, weil 7·7 = 49.
• Potenzgesetze: aᵐ · aⁿ = aᵐ⁺ⁿ · aᵐ : aⁿ = aᵐ⁻ⁿ`,
ru:`⬆️ Степени и корни:
• СТЕПЕНЬ: 2⁴ = 2·2·2·2 = 16.
• Любое число в степени 0 = 1.
• КВАДРАТЫ наизусть: 1,4,9,16,25,36,49,64,81,100,121,144,169,196,225.
• КОРЕНЬ – обратное действие: √49 = 7, потому что 7·7 = 49.
• Свойства: aᵐ · aⁿ = aᵐ⁺ⁿ`,
en:`⬆️ Powers and roots:
• POWER: 2⁴ = 2·2·2·2 = 16.
• Anything to the power 0 is 1.
• Learn the SQUARES: 1,4,9,16,25,36,49,64,81,100,121,144,169,196,225.
• A ROOT undoes a power: √49 = 7 because 7·7 = 49.`},
quad:{
de:`📐 Quadratische Gleichungen:
• Form: ax² + bx + c = 0. Die Lösungen heißen NULLSTELLEN.
• SATZ VOM NULLPRODUKT: Steht da (x − 3)·(x − 5) = 0, ist ein Faktor 0 →
  x₁ = 3 und x₂ = 5. (Einfach das Vorzeichen umdrehen!)
• Einfache Form x² = a → x = ±√a (zwei Lösungen!).
• p-q-Formel für x² + px + q = 0:  x = −p/2 ± √((p/2)² − q)
• Der Graph ist eine PARABEL.`,
ru:`📐 Квадратные уравнения:
• Вид: ax² + bx + c = 0, решения называют корнями.
• ПРОИЗВЕДЕНИЕ РАВНО НУЛЮ: если (x − 3)·(x − 5) = 0, то x₁ = 3, x₂ = 5.
• Простой вид x² = a → x = ±√a (два корня!).
• Формула для x² + px + q = 0: x = −p/2 ± √((p/2)² − q)
• График – ПАРАБОЛА.`,
en:`📐 Quadratic equations:
• Form: ax² + bx + c = 0; solutions are the roots.
• ZERO PRODUCT RULE: if (x − 3)·(x − 5) = 0 then x₁ = 3 and x₂ = 5.
• Simple form x² = a → x = ±√a (two solutions!).
• The graph is a PARABOLA.`},
angles:{
de:`📐 Winkel:
• SPITZER Winkel: kleiner als 90° · RECHTER: genau 90° · STUMPFER: zwischen 90° und 180° · GESTRECKTER: genau 180°.
• WINKELSUMME im Dreieck: immer 180°! → dritter Winkel = 180° − α − β.
• Im Viereck: 360°.
• SCHEITELWINKEL (gegenüber) sind gleich groß. NEBENWINKEL ergänzen sich zu 180°.`,
ru:`📐 Углы:
• ОСТРЫЙ: меньше 90° · ПРЯМОЙ: 90° · ТУПОЙ: 90°–180° · РАЗВЁРНУТЫЙ: 180°.
• СУММА УГЛОВ треугольника = 180°! → третий угол = 180° − α − β.
• В четырёхугольнике: 360°.
• Вертикальные углы равны, смежные дают 180°.`,
en:`📐 Angles:
• ACUTE: less than 90° · RIGHT: 90° · OBTUSE: 90°–180° · STRAIGHT: 180°.
• ANGLE SUM in a triangle: always 180° → third angle = 180° − α − β.
• In a quadrilateral: 360°.`},
volume:{
de:`📦 Körper: Volumen und Oberfläche:
• QUADER: V = l · b · h · Oberfläche O = 2·(l·b + l·h + b·h)
• WÜRFEL: V = a³ · O = 6 · a²
• ZYLINDER: V = π · r² · h (Grundfläche mal Höhe), π ≈ 3,14
• PRISMA allgemein: V = Grundfläche · Höhe
💡 Einheiten: Volumen in cm³ oder m³ · 1 Liter = 1.000 cm³ = 1 dm³.`,
ru:`📦 Объём и поверхность тел:
• ПАРАЛЛЕЛЕПИПЕД: V = l·b·h · S = 2·(lb + lh + bh)
• КУБ: V = a³ · S = 6a²
• ЦИЛИНДР: V = π·r²·h, π ≈ 3,14
• ПРИЗМА: V = площадь основания · высота
💡 1 литр = 1.000 см³ = 1 дм³.`,
en:`📦 Solids – volume and surface:
• CUBOID: V = l·w·h · Surface = 2·(lw + lh + wh)
• CUBE: V = a³ · Surface = 6a²
• CYLINDER: V = π·r²·h, π ≈ 3.14
• PRISM: V = base area × height
💡 1 litre = 1,000 cm³.`},
pythagoras:{
de:`📏 Satz des Pythagoras:  a² + b² = c²
Gilt NUR im rechtwinkligen Dreieck!
• c ist die HYPOTENUSE – die längste Seite, sie liegt dem rechten Winkel GEGENÜBER.
• a und b sind die KATHETEN (die beiden kurzen Seiten am rechten Winkel).
Hypotenuse suchen: c = √(a² + b²)
Kathete suchen:   a = √(c² − b²)
💡 Bekannte Tripel: 3-4-5 · 6-8-10 · 5-12-13 · 8-15-17.`,
ru:`📏 Теорема Пифагора:  a² + b² = c²
Только для ПРЯМОУГОЛЬНОГО треугольника!
• c – ГИПОТЕНУЗА, самая длинная сторона, напротив прямого угла.
• a и b – КАТЕТЫ.
Найти гипотенузу: c = √(a² + b²)
Найти катет: a = √(c² − b²)
💡 Тройки: 3-4-5 · 6-8-10 · 5-12-13.`,
en:`📏 Pythagoras' theorem: a² + b² = c²
Only in a RIGHT-ANGLED triangle!
• c is the HYPOTENUSE – longest side, opposite the right angle.
• a and b are the LEGS.
Hypotenuse: c = √(a² + b²) · Leg: a = √(c² − b²)
💡 Triples: 3-4-5 · 6-8-10 · 5-12-13.`},
trig:{
de:`📐 Trigonometrie im rechtwinkligen Dreieck:
Merkspruch: GAGA – HUNDE – HAHA! Also:
• sin(α) = GEGENkathete : HYpotenuse   (GA-HY)
• cos(α) = ANkathete : HYpotenuse      (AN-HY)
• tan(α) = GEGENkathete : ANkathete    (GA-AN)
Die GEGENkathete liegt dem Winkel gegenüber, die ANkathete liegt am Winkel an.
💡 Winkel gesucht? Nutze sin⁻¹, cos⁻¹, tan⁻¹ auf dem Taschenrechner.`,
ru:`📐 Тригонометрия в прямоугольном треугольнике:
• sin(α) = противолежащий катет : гипотенуза
• cos(α) = прилежащий катет : гипотенуза
• tan(α) = противолежащий : прилежащий
💡 Ищешь угол? Используй sin⁻¹, cos⁻¹, tan⁻¹ на калькуляторе.`,
en:`📐 Trigonometry in a right triangle:
• sin(α) = opposite ÷ hypotenuse
• cos(α) = adjacent ÷ hypotenuse
• tan(α) = opposite ÷ adjacent
💡 Looking for the angle? Use sin⁻¹, cos⁻¹, tan⁻¹.`},
stats:{
de:`📊 Statistik – die wichtigsten Werte:
• MITTELWERT (Durchschnitt): alle Werte addieren, durch die ANZAHL teilen.
• MEDIAN (Zentralwert): Werte der Größe nach ordnen, der mittlere Wert.
• MODUS: der Wert, der am HÄUFIGSTEN vorkommt.
• SPANNWEITE: größter Wert − kleinster Wert.
💡 Der Mittelwert reagiert stark auf Ausreißer, der Median kaum.`,
ru:`📊 Статистика:
• СРЕДНЕЕ: сложи все значения и раздели на КОЛИЧЕСТВО.
• МЕДИАНА: упорядочи значения, возьми среднее по позиции.
• МОДА: значение, которое встречается ЧАЩЕ всего.
• РАЗМАХ: наибольшее − наименьшее.`,
en:`📊 Statistics:
• MEAN: add all values, divide by how many.
• MEDIAN: order the values, take the middle one.
• MODE: the most frequent value.
• RANGE: largest − smallest.`},
prob2:{
de:`🎲 Wahrscheinlichkeit:
P = günstige Fälle : alle möglichen Fälle
• Beispiel: 3 rote von 12 Kugeln → P = 3/12 = 1/4 = 25 %.
• P liegt immer zwischen 0 (unmöglich) und 1 (sicher).
• Bei ZWEI Ereignissen nacheinander (Baumdiagramm): Wahrscheinlichkeiten entlang des Astes MULTIPLIZIEREN.
• Gegenwahrscheinlichkeit: P(nicht A) = 1 − P(A).`,
ru:`🎲 Вероятность:
P = благоприятные исходы : все исходы
• Пример: 3 красных из 12 → P = 3/12 = 1/4 = 25 %.
• P всегда от 0 (невозможно) до 1 (точно).
• Для двух событий подряд (дерево): вероятности вдоль ветви УМНОЖАЮТ.
• Противоположное событие: P(не A) = 1 − P(A).`,
en:`🎲 Probability:
P = favourable outcomes ÷ all outcomes
• Example: 3 red of 12 balls → P = 3/12 = 1/4 = 25 %.
• P is always between 0 and 1.
• Two events in a row (tree diagram): MULTIPLY along the branch.`},
speed:{
de:`🚗 Geschwindigkeit, Weg, Zeit:
• v = s : t (Geschwindigkeit = Weg durch Zeit) → Einheit km/h oder m/s
• s = v · t   ·   t = s : v
Beispiel-Methode: 240 km in 3 h → 240 : 3 = 80 km/h.
💡 Umrechnung: 1 m/s = 3,6 km/h.`,
ru:`🚗 Скорость, путь, время:
• v = s : t (скорость = путь : время), км/ч или м/с
• s = v · t · t = s : v
Пример: 240 км за 3 ч → 80 км/ч.
💡 1 м/с = 3,6 км/ч.`,
en:`🚗 Speed, distance, time:
• v = s ÷ t · s = v · t · t = s ÷ v
Example: 240 km in 3 h → 80 km/h.
💡 1 m/s = 3.6 km/h.`},
/* ---------- Deutsch 6–10 ---------- */
satzgefuege:{
de:`🔗 Haupt- und Nebensätze:
• HAUPTSATZ: kann allein stehen. Das gebeugte Verb steht an 2. Stelle.
• NEBENSATZ: kann NICHT allein stehen, beginnt mit einer Konjunktion (weil, dass, obwohl, wenn, als ...) und das Verb rutscht ans ENDE.
  „Ich bleibe zu Hause, WEIL ich krank BIN."
• Vor dem Nebensatz steht IMMER ein Komma!
• RELATIVSATZ: beginnt mit der, die, das, welcher – beschreibt ein Nomen näher.`,
ru:`🔗 Главные и придаточные предложения:
• ГЛАВНОЕ: может стоять само, глагол на 2-м месте.
• ПРИДАТОЧНОЕ: не стоит само, начинается с союза (weil, dass, obwohl, wenn) и глагол уходит в КОНЕЦ.
  „Ich bleibe zu Hause, WEIL ich krank BIN."
• Перед придаточным ВСЕГДА запятая!
• ОПРЕДЕЛИТЕЛЬНОЕ придаточное: der, die, das, welcher.`,
en:`🔗 Main and subordinate clauses (German):
• MAIN CLAUSE: stands alone, verb in 2nd position.
• SUBORDINATE CLAUSE: starts with a conjunction (weil, dass, obwohl, wenn) and the verb moves to the END.
• Always a comma before the subordinate clause!`},
aktivPassiv:{
de:`🔄 Aktiv und Passiv:
• AKTIV: Wer tut etwas? „Der Hund BEISST den Mann."
• PASSIV: Was passiert mit dem Objekt? Der Täter ist unwichtig: „Der Mann WIRD gebissen."
Bildung: werden + Partizip II.
• Präsens: wird gebaut · Präteritum: wurde gebaut · Perfekt: ist gebaut worden
💡 Umformen: Das Akkusativobjekt des Aktivsatzes wird zum Subjekt des Passivsatzes.`,
ru:`🔄 Активный и пассивный залог:
• АКТИВ: кто что делает: „Der Hund beißt den Mann."
• ПАССИВ: что происходит с объектом: „Der Mann wird gebissen."
Образование: werden + Partizip II.
• Präsens: wird gebaut · Präteritum: wurde gebaut · Perfekt: ist gebaut worden
💡 Дополнение в Akkusativ становится подлежащим в пассиве.`,
en:`🔄 Active and passive (German):
• ACTIVE: who does something: "Der Hund beißt den Mann."
• PASSIVE: what happens to the object: "Der Mann wird gebissen."
Formation: werden + past participle.`},
konjunktiv:{
de:`💭 Konjunktiv:
• KONJUNKTIV I: für die INDIREKTE REDE. „Er sagt, er SEI krank." (Man gibt wieder, was jemand sagt.)
• KONJUNKTIV II: für WÜNSCHE und IRREALES. „Wenn ich reich WÄRE, würde ich reisen."
  Bildung oft mit würde + Grundform: „Ich würde gerne kommen."
💡 Faustregel: Konjunktiv I = Zitat weitergeben · Konjunktiv II = Traum, Wunsch, Bedingung.`,
ru:`💭 Сослагательное наклонение (Konjunktiv):
• KONJUNKTIV I: для КОСВЕННОЙ речи: „Er sagt, er SEI krank."
• KONJUNKTIV II: для ЖЕЛАНИЙ и нереального: „Wenn ich reich WÄRE, würde ich reisen."
  Часто с würde + инфинитив.
💡 K I = передаём чужие слова · K II = мечта, условие.`,
en:`💭 German subjunctive:
• KONJUNKTIV I: reported speech: "Er sagt, er sei krank."
• KONJUNKTIV II: wishes and unreal situations: "Wenn ich reich wäre ..."
  Often formed with würde + infinitive.`},
textsorten:{
de:`📝 Textsorten erkennen und schreiben:
• BERICHT: sachlich, im Präteritum, beantwortet W-Fragen (Wer? Was? Wann? Wo? Wie? Warum?). Keine Meinung!
• ERZÄHLUNG: spannend, mit Höhepunkt, wörtlicher Rede und Adjektiven.
• BESCHREIBUNG: im Präsens, genau und geordnet (z. B. vom Großen zum Kleinen).
• INHALTSANGABE: im PRÄSENS, sachlich, nur das Wichtigste, kein Zitat-Nacherzählen.
• ARGUMENTATION/ERÖRTERUNG: These – Argument – Beispiel (Dreischritt!), am Ende ein Fazit.`,
ru:`📝 Типы текстов:
• BERICHT (отчёт): фактично, в Präteritum, отвечает на вопросы W (кто, что, когда, где, как, почему). Без мнения!
• ERZÄHLUNG (рассказ): захватывающе, с кульминацией.
• BESCHREIBUNG (описание): в настоящем времени, точно и по порядку.
• INHALTSANGABE (краткое содержание): в НАСТОЯЩЕМ времени, только главное.
• ERÖRTERUNG (сочинение-рассуждение): тезис – аргумент – пример, в конце вывод.`,
en:`📝 German text types:
• BERICHT (report): factual, past tense, answers who/what/when/where/how/why.
• ERZÄHLUNG (narrative): exciting, with a climax.
• BESCHREIBUNG: present tense, precise and ordered.
• INHALTSANGABE (summary): PRESENT tense, only the essentials.
• ERÖRTERUNG (argument): thesis – argument – example, then conclusion.`},
literatur:{
de:`📚 Literatur verstehen:
• LYRIK (Gedicht): Verse, Strophen, Reimschema (Paarreim aabb, Kreuzreim abab, umarmender Reim abba). METRUM = Betonungsmuster.
• EPIK: erzählende Texte – Kurzgeschichte, Roman, Novelle, Fabel.
• DRAMATIK: Theaterstück mit Akten, Szenen, Dialogen und Regieanweisungen.
STILMITTEL: Metapher (bildlich), Vergleich (mit „wie"), Personifikation (Dinge handeln wie Menschen), Alliteration (gleicher Anfangsbuchstabe), Hyperbel (Übertreibung).
• FABEL: Tiere handeln wie Menschen, am Ende steht eine Lehre (Moral).`,
ru:`📚 Литература:
• ЛИРИКА (стихи): строфы, рифма (aabb, abab, abba), ритм.
• ЭПИКА: рассказ, роман, новелла, басня.
• ДРАМА: пьеса с актами, сценами, диалогами.
СРЕДСТВА: метафора, сравнение (с „wie"), олицетворение, аллитерация, гипербола.
• БАСНЯ: животные ведут себя как люди, в конце – мораль.`,
en:`📚 Understanding literature:
• POETRY: verses, stanzas, rhyme schemes (aabb, abab, abba).
• PROSE: short story, novel, fable.
• DRAMA: acts, scenes, dialogue, stage directions.
DEVICES: metaphor, simile (with "wie"), personification, alliteration, hyperbole.
• FABLE: animals act like humans; it ends with a moral.`},
zeichen:{
de:`✏️ Zeichensetzung (Kommas) – die wichtigsten Regeln:
1. Aufzählungen: Äpfel, Birnen und Pflaumen (kein Komma vor und).
2. Vor Nebensätzen mit weil, dass, obwohl, wenn, als, damit ...
3. Bei Relativsätzen: „Das Buch, das ich lese, ist spannend."
4. Vor entgegensetzenden Konjunktionen: aber, sondern, doch, jedoch.
5. Bei Infinitivgruppen mit „um ... zu": „Ich lerne, um gute Noten zu bekommen."
6. Nach der wörtlichen Rede: „Ich komme", sagte er.`,
ru:`✏️ Запятые в немецком – главные правила:
1. Перечисления (перед und запятой нет).
2. Перед придаточными с weil, dass, obwohl, wenn, als.
3. В определительных придаточных.
4. Перед aber, sondern, doch, jedoch.
5. При обороте „um ... zu".
6. После прямой речи.`,
en:`✏️ German comma rules:
1. Lists (no comma before und).
2. Before subordinate clauses (weil, dass, obwohl, wenn).
3. Around relative clauses.
4. Before aber, sondern, doch.
5. With "um ... zu" infinitive groups.`},
/* ---------- Englisch 6–10 ---------- */
engPast:{
de:`🇬🇧 Simple Past (einfache Vergangenheit):
Für abgeschlossene Handlungen in der Vergangenheit (yesterday, last week, in 2020, ago).
• REGELMÄSSIG: Verb + ed → play → played, watch → watched.
  (Endung -e → nur +d · Konsonant+y → ied: study → studied)
• UNREGELMÄSSIG: 2. Spalte auswendig lernen! go → went, see → saw, eat → ate.
• Verneinung/Frage mit DID + Grundform: He didn't go. Did you see it?
❗ Nach did/didn't steht NIE die Vergangenheitsform!`,
ru:`🇬🇧 Simple Past (простое прошедшее):
Для законченных действий в прошлом (yesterday, last week, ago).
• ПРАВИЛЬНЫЕ: глагол + ed → played, watched (после согласной + y → ied: studied).
• НЕПРАВИЛЬНЫЕ: учи вторую форму! go → went, see → saw.
• Отрицание и вопрос через DID + начальная форма: He didn't go. Did you see it?
❗ После did/didn't прошедшая форма НЕ ставится!`,
en:`🇬🇧 Simple Past:
For finished actions in the past (yesterday, last week, ago).
• REGULAR: verb + ed → played, watched (consonant + y → ied: studied).
• IRREGULAR: learn the 2nd form! go → went, see → saw.
• Negatives/questions with DID + base form: He didn't go. Did you see it?`},
engPerfect:{
de:`🇬🇧 Present Perfect:  have/has + 3. Form (past participle)
Für Handlungen, die einen BEZUG ZUR GEGENWART haben:
• Ergebnis zählt jetzt: „I have lost my key." (= ich habe ihn immer noch nicht)
• Signalwörter: already, just, yet, ever, never, since, for.
• he/she/it → HAS: She has finished.
UNTERSCHIED zum Simple Past: Simple Past = Zeitpunkt VORBEI und genannt (yesterday!) · Present Perfect = Zeit noch offen oder Ergebnis wichtig.`,
ru:`🇬🇧 Present Perfect: have/has + 3-я форма
Для действий, СВЯЗАННЫХ с настоящим:
• Важен результат сейчас: „I have lost my key."
• Слова-сигналы: already, just, yet, ever, never, since, for.
• he/she/it → HAS.
ОТЛИЧИЕ от Simple Past: Simple Past – время названо и прошло (yesterday), Present Perfect – важен результат.`,
en:`🇬🇧 Present Perfect: have/has + past participle
For actions with a link to NOW:
• The result matters now: "I have lost my key."
• Signal words: already, just, yet, ever, never, since, for.
• he/she/it → HAS.`},
engProgressive:{
de:`🇬🇧 Present Progressive (Verlaufsform):  am/is/are + verb-ing
Für Handlungen, die GERADE JETZT passieren: „I am reading a book."
• Signalwörter: now, at the moment, look!, listen!
• Schreibweise: make → making (e fällt weg) · sit → sitting (Konsonant verdoppeln)
UNTERSCHIED: Simple Present = immer/regelmäßig (every day) · Present Progressive = genau jetzt.
Past Progressive: was/were + ing → „I was watching TV when he came."`,
ru:`🇬🇧 Present Progressive: am/is/are + verb-ing
Для действий ПРЯМО СЕЙЧАС: „I am reading a book."
• Сигналы: now, at the moment, look!, listen!
• Написание: make → making · sit → sitting.
ОТЛИЧИЕ: Simple Present – всегда/регулярно · Progressive – сейчас.
Past Progressive: was/were + ing.`,
en:`🇬🇧 Present Progressive: am/is/are + verb-ing
For what is happening RIGHT NOW: "I am reading a book."
• Signal words: now, at the moment, look!, listen!
• Spelling: make → making · sit → sitting.`},
engFuture:{
de:`🇬🇧 Zukunft im Englischen:
• WILL-FUTURE: spontane Entscheidungen, Vorhersagen, Versprechen. „I will help you."
• GOING-TO-FUTURE: geplante Absichten, sichtbare Anzeichen. „I am going to visit my aunt." (schon geplant)
• PRESENT PROGRESSIVE für feste Termine: „I am meeting Tom at 5."
💡 Faustregel: Plan schon vorher gefasst → going to. Gerade entschieden → will.`,
ru:`🇬🇧 Будущее время в английском:
• WILL: спонтанные решения, прогнозы, обещания. „I will help you."
• GOING TO: заранее запланированное. „I am going to visit my aunt."
• PRESENT PROGRESSIVE для назначенных встреч: „I am meeting Tom at 5."
💡 Планировал заранее → going to. Решил только что → will.`,
en:`🇬🇧 Talking about the future:
• WILL: spontaneous decisions, predictions, promises.
• GOING TO: plans and intentions, visible evidence.
• PRESENT PROGRESSIVE for fixed arrangements.`},
engIrregular:{
de:`🇬🇧 Unregelmäßige Verben – die 3 Formen:
Grundform – Simple Past – Past Participle
go – went – gone · see – saw – seen · eat – ate – eaten · take – took – taken
write – wrote – written · buy – bought – bought · think – thought – thought
💡 Lerntipp: immer ALLE DREI Formen zusammen laut sprechen, in kleinen Gruppen (5 Verben pro Tag).
Die 2. Form brauchst du fürs Simple Past, die 3. Form fürs Present Perfect (have + ...).`,
ru:`🇬🇧 Неправильные глаголы – 3 формы:
инфинитив – Simple Past – Participle
go – went – gone · see – saw – seen · take – took – taken · buy – bought – bought
💡 Учи ВСЕ ТРИ формы вслух, по 5 глаголов в день.
2-я форма нужна для Simple Past, 3-я – для Present Perfect.`,
en:`🇬🇧 Irregular verbs – the 3 forms:
base – simple past – past participle
go – went – gone · see – saw – seen · take – took – taken
💡 Learn all three forms aloud, five verbs a day.`},
engComp:{
de:`🇬🇧 Steigerung der Adjektive:
• KURZE Adjektive (1 Silbe): + er / + est → small – smaller – the smallest
  (Konsonant verdoppeln: big – bigger · y → ier: happy – happier)
• LANGE Adjektive (2+ Silben): more / most → interesting – more interesting – the most interesting
• UNREGELMÄSSIG: good – better – the best · bad – worse – the worst · much/many – more – the most
• Vergleich mit „als" = than: „She is taller THAN me."
• Gleichheit: as ... as → „as fast as".`,
ru:`🇬🇧 Степени сравнения прилагательных:
• КОРОТКИЕ (1 слог): + er / + est → small – smaller – the smallest (big – bigger, happy – happier)
• ДЛИННЫЕ: more / most → more interesting – the most interesting
• ИСКЛЮЧЕНИЯ: good – better – the best · bad – worse – the worst
• Сравнение с than: „She is taller THAN me."
• Равенство: as ... as.`,
en:`🇬🇧 Comparison of adjectives:
• SHORT adjectives: + er / + est → small – smaller – the smallest.
• LONG adjectives: more / most.
• IRREGULAR: good – better – best · bad – worse – worst.
• Compare with than; equality with as ... as.`},
engConditional:{
de:`🇬🇧 If-Sätze (Conditionals):
• TYP I (real, kann passieren): If + Simple Present, will + Grundform.
  „If it rains, I will stay at home."
• TYP II (unwahrscheinlich/Traum): If + Simple Past, would + Grundform.
  „If I had a million, I would buy a house."
• TYP III (Vergangenheit, nicht mehr änderbar): If + Past Perfect, would have + 3. Form.
❗ Im if-Teil steht NIE „will"!`,
ru:`🇬🇧 Условные предложения (if):
• ТИП I (реально): If + Present Simple, will + инфинитив.
• ТИП II (маловероятно/мечта): If + Past Simple, would + инфинитив.
• ТИП III (прошлое, изменить нельзя): If + Past Perfect, would have + 3-я форма.
❗ В части с if НИКОГДА не пишем „will"!`,
en:`🇬🇧 Conditional sentences:
• TYPE I (real): If + present simple, will + base form.
• TYPE II (unlikely): If + past simple, would + base form.
• TYPE III (past, unchangeable): If + past perfect, would have + participle.
❗ Never "will" in the if-clause!`},
engPassive:{
de:`🇬🇧 Passive Voice:  form of "be" + past participle
• Aktiv: „Shakespeare wrote Hamlet." → Passiv: „Hamlet WAS WRITTEN by Shakespeare."
• Present: is/are + 3. Form · Past: was/were + 3. Form · Present Perfect: has/have been + 3. Form
• Wer es getan hat, kommt mit BY (oft weggelassen, wenn unwichtig).
💡 Man nutzt Passiv, wenn die HANDLUNG wichtiger ist als der Täter (z. B. in Berichten).`,
ru:`🇬🇧 Пассивный залог: форма "be" + 3-я форма глагола
• Актив: „Shakespeare wrote Hamlet." → Пассив: „Hamlet was written by Shakespeare."
• Present: is/are + V3 · Past: was/were + V3 · Perfect: has been + V3
• Исполнитель – с BY (часто опускается).`,
en:`🇬🇧 Passive voice: form of "be" + past participle
• Active: "Shakespeare wrote Hamlet." → Passive: "Hamlet was written by Shakespeare."
• Present: is/are + V3 · Past: was/were + V3.`},
/* ---------- Physik / Chemie / Geschichte / Politik / Französisch ---------- */
phMech:{
de:`⚙️ Physik – Mechanik:
• MASSE (kg) ist die Materiemenge, GEWICHTSKRAFT (N) ist die Anziehung der Erde: F = m · g mit g ≈ 9,81 N/kg.
• DICHTE: ρ = m : V (Masse durch Volumen), z. B. Wasser 1 g/cm³. Was leichter als Wasser ist, schwimmt!
• GESCHWINDIGKEIT: v = s : t.
• KRAFT verformt oder verändert die Bewegung eines Körpers. Einheit: Newton (N).
• HEBEL: Kraft · Kraftarm = Last · Lastarm (Hebelgesetz).`,
ru:`⚙️ Физика – механика:
• МАССА (кг) – количество вещества, СИЛА ТЯЖЕСТИ (Н): F = m·g, g ≈ 9,81 Н/кг.
• ПЛОТНОСТЬ: ρ = m : V, вода 1 г/см³. Что легче воды – плавает!
• СКОРОСТЬ: v = s : t.
• СИЛА измеряется в ньютонах (Н).
• РЫЧАГ: сила · плечо = груз · плечо.`,
en:`⚙️ Physics – mechanics:
• MASS (kg) vs WEIGHT force (N): F = m · g, g ≈ 9.81 N/kg.
• DENSITY: ρ = m ÷ V; water is 1 g/cm³ – lighter things float!
• SPEED: v = s ÷ t.
• Force is measured in newtons (N).
• LEVER law: force × arm = load × arm.`},
phStrom:{
de:`⚡ Physik – Elektrizität:
• STROMSTÄRKE I in Ampere (A) · SPANNUNG U in Volt (V) · WIDERSTAND R in Ohm (Ω).
• OHMSCHES GESETZ:  U = R · I   (also I = U : R und R = U : I)
• REIHENSCHALTUNG: ein Weg – überall die gleiche Stromstärke, Spannungen addieren sich. Fällt eine Lampe aus, ist alles dunkel.
• PARALLELSCHALTUNG: mehrere Wege – überall gleiche Spannung, Ströme addieren sich.
• LEISTUNG: P = U · I (in Watt).`,
ru:`⚡ Физика – электричество:
• СИЛА ТОКА I в амперах (A) · НАПРЯЖЕНИЕ U в вольтах (V) · СОПРОТИВЛЕНИЕ R в омах (Ω).
• ЗАКОН ОМА: U = R · I (I = U:R, R = U:I)
• ПОСЛЕДОВАТЕЛЬНО: один путь, ток везде одинаков, напряжения складываются.
• ПАРАЛЛЕЛЬНО: напряжение одинаково, токи складываются.
• МОЩНОСТЬ: P = U · I (ватт).`,
en:`⚡ Physics – electricity:
• CURRENT I (A) · VOLTAGE U (V) · RESISTANCE R (Ω).
• OHM'S LAW: U = R · I.
• SERIES: one path, same current everywhere, voltages add.
• PARALLEL: same voltage, currents add.
• POWER: P = U · I (watts).`},
phOptik:{
de:`🔦 Physik – Optik und Wärme:
• Licht breitet sich GERADLINIG aus. REFLEXIONSGESETZ: Einfallswinkel = Ausfallswinkel.
• BRECHUNG: Beim Übergang in ein anderes Medium (Luft → Wasser) knickt der Lichtstrahl ab – deshalb sieht ein Stab im Wasser geknickt aus.
• Sammellinse bündelt Licht im BRENNPUNKT.
• TEMPERATUR misst man in °C, Wärme ist Energie. Stoffe DEHNEN sich bei Wärme AUS.
• Aggregatzustände: fest → flüssig (schmelzen) → gasförmig (verdampfen); umgekehrt: erstarren, kondensieren.`,
ru:`🔦 Физика – оптика и тепло:
• Свет распространяется ПРЯМОЛИНЕЙНО. Закон отражения: угол падения = углу отражения.
• ПРЕЛОМЛЕНИЕ: на границе сред (воздух → вода) луч преломляется.
• Собирающая линза собирает свет в ФОКУСЕ.
• ТЕМПЕРАТУРА в °C; при нагревании тела РАСШИРЯЮТСЯ.
• Состояния: плавление, испарение, конденсация, отвердевание.`,
en:`🔦 Physics – optics and heat:
• Light travels in STRAIGHT lines. Reflection: angle in = angle out.
• REFRACTION: light bends when entering water or glass.
• A converging lens focuses light at the FOCAL POINT.
• Materials EXPAND when heated.`},
chStoffe:{
de:`🧪 Chemie – Stoffe und Teilchen:
• REINSTOFF: nur eine Sorte Teilchen (Wasser, Eisen). GEMISCH: mehrere Stoffe zusammen (Luft, Salzwasser).
• TRENNVERFAHREN: Filtrieren (fest/flüssig), Eindampfen (gelöstes Salz), Destillieren (Flüssigkeiten mit verschiedenem Siedepunkt), Magnet (Eisen).
• TEILCHENMODELL: Alle Stoffe bestehen aus winzigen Teilchen. Fest = dicht geordnet, flüssig = beweglich, gasförmig = weit auseinander und schnell.
• Beim Erwärmen bewegen sich die Teilchen SCHNELLER.`,
ru:`🧪 Химия – вещества и частицы:
• ЧИСТОЕ ВЕЩЕСТВО: один вид частиц (вода, железо). СМЕСЬ: несколько веществ (воздух, солёная вода).
• РАЗДЕЛЕНИЕ: фильтрование, выпаривание, дистилляция, магнит.
• МОДЕЛЬ ЧАСТИЦ: твёрдое – частицы плотно, жидкое – подвижны, газ – далеко и быстро.
• При нагревании частицы движутся БЫСТРЕЕ.`,
en:`🧪 Chemistry – substances and particles:
• PURE SUBSTANCE vs MIXTURE (air, salt water).
• SEPARATION: filtering, evaporating, distilling, magnet.
• PARTICLE MODEL: solid = tightly ordered, liquid = mobile, gas = far apart and fast.`},
chAtom:{
de:`⚛️ Chemie – Atome und Reaktionen:
• ATOM: Kern (Protonen +, Neutronen neutral) und Hülle (Elektronen −).
• Die ORDNUNGSZAHL im Periodensystem = Anzahl der Protonen.
• ELEMENT: nur eine Atomsorte (O, H, Fe) · VERBINDUNG: mehrere Elemente chemisch verbunden (H₂O, CO₂).
• Bei einer CHEMISCHEN REAKTION entstehen NEUE Stoffe; Energie wird frei (exotherm) oder benötigt (endotherm).
• Wichtige Formeln: H₂O Wasser · CO₂ Kohlenstoffdioxid · O₂ Sauerstoff · NaCl Kochsalz.
• Verbrennung: Stoff + Sauerstoff → Oxid (+ Energie).`,
ru:`⚛️ Химия – атомы и реакции:
• АТОМ: ядро (протоны +, нейтроны) и оболочка (электроны −).
• Порядковый номер = число протонов.
• ЭЛЕМЕНТ – один вид атомов · СОЕДИНЕНИЕ – несколько элементов (H₂O, CO₂).
• В РЕАКЦИИ образуются НОВЫЕ вещества; энергия выделяется (экзо) или поглощается (эндо).
• Формулы: H₂O вода · CO₂ углекислый газ · O₂ кислород · NaCl соль.`,
en:`⚛️ Chemistry – atoms and reactions:
• ATOM: nucleus (protons +, neutrons) and shell (electrons −).
• Atomic number = number of protons.
• ELEMENT vs COMPOUND (H₂O, CO₂).
• A chemical reaction makes NEW substances; exothermic or endothermic.`},
gesAntike:{
de:`🏛️ Geschichte – Antike:
• ÄGYPTEN: Pharaonen, Pyramiden, Hieroglyphen, Nil als Lebensader.
• GRIECHENLAND: Stadtstaaten (Polis), Athen als Wiege der DEMOKRATIE (Volksherrschaft), Olympische Spiele ab 776 v. Chr., Philosophen (Sokrates, Platon).
• ROM: von der Republik (Senat) zum Kaiserreich (ab Augustus). Legionen, Straßen, Aquädukte, Latein.
• ZEITRECHNUNG: v. Chr. rückwärts zählen, n. Chr. vorwärts. Ein Jahrhundert = 100 Jahre.`,
ru:`🏛️ История – Древний мир:
• ЕГИПЕТ: фараоны, пирамиды, иероглифы, Нил.
• ГРЕЦИЯ: полисы, Афины – родина ДЕМОКРАТИИ, Олимпийские игры с 776 г. до н.э.
• РИМ: республика (сенат) → империя (Август). Легионы, дороги, акведуки, латынь.
• ЛЕТОСЧИСЛЕНИЕ: до н.э. считаем назад, н.э. – вперёд. Век = 100 лет.`,
en:`🏛️ History – antiquity:
• EGYPT: pharaohs, pyramids, hieroglyphs, the Nile.
• GREECE: city states, Athens and DEMOCRACY, Olympic Games from 776 BC.
• ROME: republic (senate) to empire (Augustus); legions, roads, aqueducts.
• Dating: BC counts backwards, AD forwards. A century = 100 years.`},
gesMittelalter:{
de:`🏰 Geschichte – Mittelalter:
• LEHNSWESEN: Der König gibt Land (Lehen) an Adlige, die ihm dafür Treue und Ritterdienst schulden.
• STÄNDE: Klerus (Geistliche) – Adel – Bauern (die meisten Menschen!). Der Stand war meist Schicksal von Geburt an.
• Die BURG war Wohnung und Schutzbau des Ritters. Die STADT machte frei: „Stadtluft macht frei" – Zünfte, Märkte, Handel.
• KLOSTER: Mönche beteten und arbeiteten („ora et labora"), schrieben Bücher ab.
• 1450: Gutenberg erfindet den BUCHDRUCK mit beweglichen Lettern – Wissen verbreitet sich rasend schnell.`,
ru:`🏰 История – Средневековье:
• ФЕОДАЛИЗМ: король даёт землю (лен) знати за верность и военную службу.
• СОСЛОВИЯ: духовенство – знать – крестьяне (большинство).
• ЗАМОК – дом и защита рыцаря. ГОРОД давал свободу: цехи, рынки, торговля.
• МОНАСТЫРЬ: монахи молились и работали, переписывали книги.
• 1450: Гутенберг изобрёл КНИГОПЕЧАТАНИЕ.`,
en:`🏰 History – Middle Ages:
• FEUDALISM: the king grants land to nobles for loyalty and knightly service.
• ESTATES: clergy – nobility – peasants (the majority).
• The CASTLE protected the knight; the TOWN brought freedom, guilds and trade.
• 1450: Gutenberg invents printing with movable type.`},
gesNeuzeit:{
de:`🚢 Geschichte – Neuzeit:
• ENTDECKUNGEN: 1492 Kolumbus erreicht Amerika; neue Weltbilder (Kopernikus: die Erde kreist um die Sonne).
• REFORMATION: 1517 Martin Luther und seine 95 Thesen → Spaltung der Kirche in katholisch und evangelisch.
• FRANZÖSISCHE REVOLUTION 1789: „Freiheit, Gleichheit, Brüderlichkeit" – Ende der absoluten Monarchie, Menschenrechte.
• INDUSTRIALISIERUNG (ab ca. 1800): Dampfmaschine, Fabriken, Eisenbahn; Arbeiter zogen in die Städte, soziale Frage entsteht.`,
ru:`🚢 История – Новое время:
• ОТКРЫТИЯ: 1492 Колумб достигает Америки; Коперник: Земля вращается вокруг Солнца.
• РЕФОРМАЦИЯ: 1517 Мартин Лютер, 95 тезисов → раскол церкви.
• ФРАНЦУЗСКАЯ РЕВОЛЮЦИЯ 1789: «Свобода, равенство, братство».
• ИНДУСТРИАЛИЗАЦИЯ (с ~1800): паровая машина, фабрики, железные дороги.`,
en:`🚢 History – modern era:
• 1492 Columbus reaches America; Copernicus: the earth orbits the sun.
• REFORMATION: 1517 Martin Luther's 95 theses split the church.
• FRENCH REVOLUTION 1789: liberty, equality, fraternity.
• INDUSTRIALISATION from about 1800: steam engines, factories, railways.`},
ges20:{
de:`🕰️ Geschichte – 20. Jahrhundert:
• 1. WELTKRIEG 1914–1918: Auslöser Attentat von Sarajevo; Ende: Versailler Vertrag.
• WEIMARER REPUBLIK 1919: erste deutsche Demokratie, geschwächt durch Krisen.
• 1933–1945 NATIONALSOZIALISMUS: Hitler zerstört die Demokratie, Diktatur, Verfolgung und Ermordung der Juden (HOLOCAUST), 2. Weltkrieg 1939–1945.
  → Aus dieser Zeit folgt unsere wichtigste Lehre: Menschenwürde und Demokratie schützen!
• 1949: Gründung von BRD und DDR · 1961 Mauerbau · 9. NOVEMBER 1989 MAUERFALL · 3. Oktober 1990 WIEDERVEREINIGUNG.`,
ru:`🕰️ История – XX век:
• 1-я МИРОВАЯ ВОЙНА 1914–1918: убийство в Сараево; Версальский договор.
• ВЕЙМАРСКАЯ РЕСПУБЛИКА 1919 – первая немецкая демократия.
• 1933–1945 НАЦИЗМ: диктатура Гитлера, ХОЛОКОСТ, 2-я мировая война 1939–1945.
  → Главный урок: защищать человеческое достоинство и демократию!
• 1949: ФРГ и ГДР · 1961 Берлинская стена · 9 НОЯБРЯ 1989 падение стены · 3 октября 1990 объединение.`,
en:`🕰️ History – 20th century:
• WORLD WAR I 1914–1918; Treaty of Versailles.
• Weimar Republic 1919: Germany's first democracy.
• 1933–1945 Nazi dictatorship, the HOLOCAUST, World War II 1939–1945.
• 1949 two German states · 1961 Berlin Wall · 9 Nov 1989 the Wall falls · 3 Oct 1990 reunification.`},
polDemokratie:{
de:`🗳️ Politik – Demokratie in Deutschland:
• GRUNDGESETZ (seit 1949) ist unsere Verfassung. Artikel 1: „Die Würde des Menschen ist unantastbar."
• GEWALTENTEILUNG: Legislative (Bundestag – macht Gesetze), Exekutive (Regierung – führt aus), Judikative (Gerichte – sprechen Recht).
• WAHLGRUNDSÄTZE: allgemein, unmittelbar, frei, gleich, geheim.
• Bundestag wird alle 4 Jahre gewählt; er wählt den BUNDESKANZLER. Der BUNDESPRÄSIDENT ist Staatsoberhaupt (repräsentativ).
• FÖDERALISMUS: Bund, 16 Länder und Gemeinden teilen sich Aufgaben.`,
ru:`🗳️ Политика – демократия в Германии:
• ОСНОВНОЙ ЗАКОН (с 1949). Статья 1: «Достоинство человека неприкосновенно».
• РАЗДЕЛЕНИЕ ВЛАСТЕЙ: законодательная (Бундестаг), исполнительная (правительство), судебная (суды).
• ПРИНЦИПЫ ВЫБОРОВ: всеобщие, прямые, свободные, равные, тайные.
• Бундестаг избирается на 4 года и выбирает КАНЦЛЕРА. Президент – глава государства.
• ФЕДЕРАЛИЗМ: федерация, 16 земель, общины.`,
en:`🗳️ Politics – democracy in Germany:
• The BASIC LAW (1949). Article 1: human dignity is inviolable.
• SEPARATION OF POWERS: parliament, government, courts.
• Election principles: general, direct, free, equal, secret.
• The Bundestag is elected every 4 years and elects the CHANCELLOR.`},
polWirtschaft:{
de:`💶 Politik/Wirtschaft – Grundlagen:
• ANGEBOT und NACHFRAGE bestimmen den Preis: viel Nachfrage + wenig Angebot = hoher Preis.
• SOZIALE MARKTWIRTSCHAFT: freier Markt PLUS sozialer Ausgleich (Sozialversicherungen, Mindestlohn).
• Die fünf Sozialversicherungen: Kranken-, Pflege-, Renten-, Arbeitslosen-, Unfallversicherung.
• STEUERN zahlen alle – davon werden Schulen, Straßen und Polizei bezahlt.
• EUROPÄISCHE UNION: 27 Länder, gemeinsamer Binnenmarkt, Euro als Währung in vielen Ländern, Europaparlament.`,
ru:`💶 Политика/экономика – основы:
• СПРОС и ПРЕДЛОЖЕНИЕ определяют цену.
• СОЦИАЛЬНАЯ РЫНОЧНАЯ ЭКОНОМИКА: свободный рынок + социальная защита.
• Пять видов соцстрахования: медицинское, по уходу, пенсионное, по безработице, от несчастных случаев.
• НАЛОГИ платят все – на них содержат школы, дороги, полицию.
• ЕВРОСОЮЗ: 27 стран, общий рынок, евро, Европарламент.`,
en:`💶 Politics/economics basics:
• SUPPLY and DEMAND set the price.
• SOCIAL MARKET ECONOMY: free market plus social security.
• Five social insurances: health, care, pension, unemployment, accident.
• TAXES pay for schools, roads and police.
• The EU: 27 countries, single market, the euro.`},
frBasics:{
de:`🇫🇷 Französisch – die ersten Schritte:
• Begrüßung: Bonjour (guten Tag) · Salut (hallo) · Au revoir (auf Wiedersehen) · Merci (danke) · S'il vous plaît (bitte).
• „Ich heiße ..." = Je m'appelle ... · „Wie geht's?" = Ça va ?
• ARTIKEL: le (männlich), la (weiblich), les (Plural); unbestimmt: un, une, des.
• ÊTRE (sein): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.
• AVOIR (haben): j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.
• Zahlen: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.`,
ru:`🇫🇷 Французский – первые шаги:
• Приветствия: Bonjour · Salut · Au revoir · Merci · S'il vous plaît.
• «Меня зовут…» = Je m'appelle … · «Как дела?» = Ça va ?
• АРТИКЛИ: le (м.р.), la (ж.р.), les (мн.ч.); неопределённые: un, une, des.
• ÊTRE (быть): je suis, tu es, il est, nous sommes, vous êtes, ils sont.
• AVOIR (иметь): j'ai, tu as, il a, nous avons, vous avez, ils ont.
• Числа: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.`,
en:`🇫🇷 French – first steps:
• Greetings: Bonjour · Salut · Au revoir · Merci · S'il vous plaît.
• "My name is ..." = Je m'appelle ...
• ARTICLES: le, la, les; indefinite: un, une, des.
• ÊTRE (to be): je suis, tu es, il est, nous sommes, vous êtes, ils sont.
• AVOIR (to have): j'ai, tu as, il a, nous avons, vous avez, ils ont.
• Numbers: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.`},
frVerbs:{
de:`🇫🇷 Französisch – Verben auf -er:
Die meisten Verben enden auf -er (parler = sprechen). So beugst du sie:
je parle · tu parles · il/elle parle · nous parlons · vous parlez · ils/elles parlent
💡 Merke: Man hört bei je/tu/il/ils fast keinen Unterschied – geschrieben sind sie aber verschieden!
• Verneinung mit ne ... pas: „Je ne parle pas français."
• Frage: Est-ce que tu parles français ? oder mit Betonung: Tu parles français ?`,
ru:`🇫🇷 Французский – глаголы на -er:
Большинство глаголов на -er (parler – говорить):
je parle · tu parles · il/elle parle · nous parlons · vous parlez · ils/elles parlent
💡 На слух формы je/tu/il/ils почти одинаковы, но пишутся по-разному!
• Отрицание: ne … pas → „Je ne parle pas français."
• Вопрос: Est-ce que tu parles français ?`,
en:`🇫🇷 French – regular -er verbs:
je parle · tu parles · il/elle parle · nous parlons · vous parlez · ils/elles parlent
• Negation with ne ... pas.
• Questions with Est-ce que ...?`},
bioZelle:{
de:`🔬 Biologie – Zellen und Fortpflanzung:
• Alle Lebewesen bestehen aus ZELLEN. Tierzelle: Zellkern, Zellplasma, Zellmembran. Pflanzenzelle zusätzlich: Zellwand, Chloroplasten (grün!), große Vakuole.
• Der ZELLKERN enthält die Erbinformation (DNA).
• FOTOSYNTHESE: Kohlenstoffdioxid + Wasser + LICHT → Traubenzucker + SAUERSTOFF. Pflanzen produzieren also unsere Atemluft!
• PUBERTÄT: Der Körper wird geschlechtsreif; Hormone steuern die Veränderungen.
• VERERBUNG: Merkmale werden über Gene weitergegeben (dominant/rezessiv).`,
ru:`🔬 Биология – клетки и размножение:
• Все живые существа состоят из КЛЕТОК. Растительная клетка дополнительно имеет клеточную стенку, хлоропласты, вакуоль.
• ЯДРО содержит наследственную информацию (ДНК).
• ФОТОСИНТЕЗ: углекислый газ + вода + СВЕТ → глюкоза + КИСЛОРОД.
• ПОЛОВОЕ СОЗРЕВАНИЕ: гормоны управляют изменениями тела.
• НАСЛЕДСТВЕННОСТЬ: признаки передаются генами (доминантные/рецессивные).`,
en:`🔬 Biology – cells and reproduction:
• All living things are made of CELLS; plant cells also have a cell wall, chloroplasts and a vacuole.
• The NUCLEUS holds the genetic information (DNA).
• PHOTOSYNTHESIS: carbon dioxide + water + LIGHT → sugar + OXYGEN.
• PUBERTY is controlled by hormones.
• INHERITANCE: genes, dominant and recessive traits.`},
bioOeko:{
de:`🌳 Biologie – Ökologie:
• ÖKOSYSTEM: Lebewesen + ihr Lebensraum (Wald, See, Wiese).
• NAHRUNGSKETTE: Produzent (Pflanze) → Konsument 1. Ordnung (Pflanzenfresser) → Konsument 2. Ordnung (Fleischfresser) → Destruenten (Bakterien, Pilze) bauen alles wieder ab.
• Pflanzen sind PRODUZENTEN, weil sie mit Fotosynthese selbst Nahrung herstellen.
• KREISLAUF: Nichts geht verloren – Stoffe werden immer wieder verwendet.
• KLIMAWANDEL: Zu viel CO₂ verstärkt den Treibhauseffekt → Erderwärmung. Schutz: Energie sparen, weniger fossile Brennstoffe, Wälder erhalten.`,
ru:`🌳 Биология – экология:
• ЭКОСИСТЕМА: живые существа + среда обитания.
• ПИЩЕВАЯ ЦЕПЬ: продуцент (растение) → травоядное → хищник → редуценты (бактерии, грибы).
• Растения – ПРОДУЦЕНТЫ: сами создают пищу при фотосинтезе.
• КРУГОВОРОТ веществ: ничего не исчезает.
• ИЗМЕНЕНИЕ КЛИМАТА: избыток CO₂ усиливает парниковый эффект.`,
en:`🌳 Biology – ecology:
• ECOSYSTEM: living things plus their habitat.
• FOOD CHAIN: producer → herbivore → carnivore → decomposers.
• Plants are PRODUCERS thanks to photosynthesis.
• CLIMATE CHANGE: too much CO₂ strengthens the greenhouse effect.`},
infoOffice:{
de:`🖥️ Informatik – Tabellen und Präsentationen:
• TABELLENKALKULATION (Excel/Calc): Zellen haben Adressen wie A1, B2. Eine Formel beginnt IMMER mit „=".
  =A1+B1 addiert · =SUMME(A1:A10) addiert einen Bereich · =MITTELWERT(A1:A10) berechnet den Durchschnitt.
• DIAGRAMME: Balken für Vergleiche, Linie für Verläufe, Kreis für Anteile.
• PRÄSENTATION: pro Folie nur wenig Text (Stichpunkte!), gut lesbare Schrift, Bilder statt Textwüsten, am Ende eine Zusammenfassung.
• Tastenkürzel: Strg+C kopieren · Strg+V einfügen · Strg+Z rückgängig · Strg+S speichern.`,
ru:`🖥️ Информатика – таблицы и презентации:
• ТАБЛИЦЫ (Excel/Calc): адреса ячеек A1, B2. Формула ВСЕГДА начинается с «=».
  =A1+B1 · =СУММ(A1:A10) · =СРЗНАЧ(A1:A10)
• ДИАГРАММЫ: столбики – сравнение, линия – динамика, круг – доли.
• ПРЕЗЕНТАЦИЯ: мало текста на слайде, крупный шрифт, картинки.
• Горячие клавиши: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S.`,
en:`🖥️ Computer science – spreadsheets and slides:
• SPREADSHEETS: cells like A1, B2; a formula always starts with "=".
  =A1+B1 · =SUM(A1:A10) · =AVERAGE(A1:A10)
• CHARTS: bars compare, lines show trends, pies show shares.
• SLIDES: little text, big font, images.
• Shortcuts: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S.`},
infoCode:{
de:`👨‍💻 Informatik – Programmieren (Python & Co.):
• VARIABLE: ein Behälter für Werte → alter = 11
• AUSGABE: print("Hallo") · EINGABE: name = input("Wie heißt du?")
• BEDINGUNG:  if punkte >= 60:  → dann ... sonst (else).
• SCHLEIFE: for i in range(4): wiederholt 4-mal (z. B. um ein Quadrat zu zeichnen).
• DATENTYPEN: Zahl (int), Kommazahl (float), Text (string), wahr/falsch (bool).
• Vor dem Programmieren: ALGORITHMUS überlegen (Schritte aufschreiben) – dann coden!`,
ru:`👨‍💻 Информатика – программирование (Python):
• ПЕРЕМЕННАЯ: контейнер для значения → alter = 11
• ВЫВОД: print("Привет") · ВВОД: name = input("Как тебя зовут?")
• УСЛОВИЕ: if punkte >= 60: … else: …
• ЦИКЛ: for i in range(4): повторяет 4 раза.
• ТИПЫ ДАННЫХ: int, float, string, bool.
• Сначала алгоритм – потом код!`,
en:`👨‍💻 Computer science – programming (Python):
• VARIABLE: a container for a value → age = 11
• OUTPUT: print("Hello") · INPUT: name = input("What's your name?")
• CONDITION: if points >= 60: ... else: ...
• LOOP: for i in range(4): repeats four times.
• DATA TYPES: int, float, string, bool.`},
geoKlima:{
de:`🌡️ Erdkunde – Klima und Zonen:
• WETTER = jetzt gerade · KLIMA = Durchschnitt über viele Jahre (mind. 30).
• KLIMAZONEN von Äquator zu den Polen: Tropen (heiß, feucht) → Subtropen (trocken, Wüsten) → gemäßigte Zone (Deutschland, vier Jahreszeiten) → polare Zone (kalt).
• Je weiter vom Äquator, desto KÄLTER. Je höher das Gebirge, desto kälter (ca. 1 °C pro 100 m).
• KLIMADIAGRAMM: Säulen = Niederschlag (mm), Linie = Temperatur (°C).
• TREIBHAUSEFFEKT: CO₂ hält Wärme in der Atmosphäre → Klimawandel.`,
ru:`🌡️ География – климат и зоны:
• ПОГОДА – сейчас · КЛИМАТ – среднее за много лет.
• КЛИМАТИЧЕСКИЕ ПОЯСА от экватора к полюсам: тропики → субтропики (пустыни) → умеренный (Германия) → полярный.
• Чем дальше от экватора и чем выше горы, тем ХОЛОДНЕЕ (~1 °C на 100 м).
• КЛИМАТОГРАММА: столбики – осадки (мм), линия – температура (°C).
• ПАРНИКОВЫЙ ЭФФЕКТ: CO₂ удерживает тепло → изменение климата.`,
en:`🌡️ Geography – climate and zones:
• WEATHER = right now · CLIMATE = the average over many years.
• Zones from the equator: tropics → subtropics (deserts) → temperate (Germany) → polar.
• Higher and further from the equator = colder (about 1 °C per 100 m).
• CLIMATE CHART: bars = rainfall, line = temperature.`},
geoStadt:{
de:`🏙️ Erdkunde – Stadt, Land, Wirtschaft:
• WIRTSCHAFTSSEKTOREN: primär (Landwirtschaft, Rohstoffe) · sekundär (Industrie, Handwerk) · tertiär (Dienstleistung: Handel, Schule, Arzt). In Deutschland arbeiten die meisten im TERTIÄREN Sektor.
• STADTVIERTEL: City (Geschäfte, teure Mieten), Wohnviertel, Industriegebiet, Randgebiet.
• VERSTÄDTERUNG: Immer mehr Menschen ziehen in Städte (weltweit über die Hälfte).
• STRUKTURWANDEL im Ruhrgebiet: früher Kohle und Stahl, heute Dienstleistung, Technik und Kultur.`,
ru:`🏙️ География – город, село, экономика:
• СЕКТОРЫ: первичный (сельское хозяйство, сырьё) · вторичный (промышленность) · третичный (услуги). В Германии большинство – в ТРЕТИЧНОМ.
• РАЙОНЫ ГОРОДА: центр (магазины, дорогая аренда), жилые, промышленные, окраины.
• УРБАНИЗАЦИЯ: всё больше людей живёт в городах.
• СТРУКТУРНЫЕ ИЗМЕНЕНИЯ в Рурской области: раньше уголь и сталь, теперь услуги и технологии.`,
en:`🏙️ Geography – city, country, economy:
• SECTORS: primary (farming, raw materials) · secondary (industry) · tertiary (services). Most Germans work in the tertiary sector.
• City zones: centre, residential, industrial, outskirts.
• URBANISATION: more and more people live in cities.`},
});
