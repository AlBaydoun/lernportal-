/* ============ Help library: HOW to solve each task type (never the answer!) ============ */
const HELP = {
division:{
de:`➗ Schriftliche Division – so geht's:
1. Schaue auf die erste Ziffer (oder die ersten zwei Ziffern) der großen Zahl.
2. Frage: „Wie oft passt der Teiler hinein?" – Schreibe die Zahl ins Ergebnis.
3. Multipliziere zurück und schreibe das Ergebnis darunter.
4. Subtrahiere.
5. Hole die nächste Ziffer herunter.
6. Wiederhole, bis alle Ziffern benutzt sind.
7. Was am Ende übrig bleibt, ist der Rest.

💡 Überschlag: Runde die große Zahl und teile im Kopf – so weißt du ungefähr, wie groß das Ergebnis sein muss.
Merksatz: Teilen → Malnehmen → Abziehen → Herunterholen.`,
ru:`➗ Деление в столбик – так это делается:
1. Посмотри на первую цифру (или первые две) большого числа.
2. Спроси: «Сколько раз делитель помещается?» – запиши цифру в ответ.
3. Умножь обратно и запиши результат снизу.
4. Вычти.
5. Спусти следующую цифру.
6. Повторяй, пока не используешь все цифры.
7. То, что осталось в конце – это остаток (Rest).

💡 Прикидка: округли большое число и раздели в уме – так ты поймёшь, каким примерно должен быть ответ.
Запомни: Делим → Умножаем → Вычитаем → Спускаем.`,
en:`➗ Long division – how it works:
1. Look at the first digit (or first two digits) of the big number.
2. Ask: "How many times does the divisor fit?" – write it in the result.
3. Multiply back and write it underneath.
4. Subtract.
5. Bring down the next digit.
6. Repeat until all digits are used.
7. Whatever is left at the end is the remainder.

💡 Estimate: round the big number and divide in your head – then you know roughly how big the result must be.
Remember: Divide → Multiply → Subtract → Bring down.`},
divDigits:{
de:`🔢 Wie viele Stellen hat das Ergebnis?
1. Mache einen Überschlag: Runde die große Zahl.
2. Teile die gerundete Zahl im Kopf.
3. Zähle die Stellen des ungefähren Ergebnisses.
Beispiel-Idee: 3.854 : 7 → ungefähr 3.500 : 7 = 500 → das Ergebnis hat 3 Stellen.
(Das ist nur die Methode – rechne mit DEINEN Zahlen!)`,
ru:`🔢 Сколько цифр в ответе?
1. Сделай прикидку: округли большое число.
2. Раздели округлённое число в уме.
3. Посчитай, сколько цифр в примерном ответе.
Пример метода: 3.854 : 7 → примерно 3.500 : 7 = 500 → в ответе 3 цифры.
(Это только метод – считай со СВОИМИ числами!)`,
en:`🔢 How many digits does the result have?
1. Estimate: round the big number.
2. Divide the rounded number in your head.
3. Count the digits of the approximate result.
Method example: 3,854 : 7 → about 3,500 : 7 = 500 → the result has 3 digits.
(That is only the method – calculate with YOUR numbers!)`},
wordDiv:{
de:`🛒 Sachaufgabe mit Division:
Viele gleiche Dinge kosten zusammen einen Gesamtpreis. Gesucht: der Preis für EIN Stück.
1. Unterstreiche im Text: Wie viele Stücke? Was ist der Gesamtpreis?
2. Regel: Preis für ein Stück = Gesamtpreis : Anzahl.
3. Rechne die Division schriftlich.
4. Kontrolle: Ergebnis × Anzahl muss wieder den Gesamtpreis ergeben.
5. Schreibe einen Antwortsatz: „Ein ... kostet ... €."`,
ru:`🛒 Задача с делением:
Несколько одинаковых предметов стоят вместе известную сумму. Нужно найти цену ОДНОГО предмета.
1. Подчеркни в тексте: сколько предметов? какая общая цена?
2. Правило: цена одного = общая цена : количество.
3. Выполни деление в столбик.
4. Проверка: ответ × количество = общая цена.
5. Напиши ответ предложением.`,
en:`🛒 Word problem with division:
Several identical items cost a total price. Find the price of ONE item.
1. Underline in the text: how many items? what is the total price?
2. Rule: price of one = total price : number of items.
3. Do the long division.
4. Check: result × number must give the total price again.
5. Write an answer sentence.`},
compare:{
de:`⚖️ Angebote vergleichen:
Du darfst NIE einfach die Preise vergleichen – die Mengen sind verschieden!
1. Bringe beide Angebote auf die GLEICHE Grammzahl (z. B. beide auf 100 g oder auf ein gemeinsames Vielfaches).
2. Trick für 100 g: Preis : (Gramm : 100).
3. Vergleiche erst dann die Preise.
4. Das Angebot mit dem kleineren Preis für die gleiche Menge ist günstiger.`,
ru:`⚖️ Сравнение предложений:
НЕЛЬЗЯ просто сравнивать цены – количества разные!
1. Приведи оба предложения к ОДИНАКОВОМУ весу (например, к 100 г или к общему кратному).
2. Приём для 100 г: цена : (граммы : 100).
3. Только потом сравни цены.
4. Выгоднее то предложение, где цена за одинаковый вес меньше.`,
en:`⚖️ Comparing offers:
NEVER just compare the prices – the amounts are different!
1. Bring both offers to the SAME number of grams (e.g. both to 100 g or a common multiple).
2. Trick for 100 g: price : (grams : 100).
3. Only then compare the prices.
4. The offer with the smaller price for the same amount is cheaper.`},
remainder:{
de:`🍪 Rest bestimmen:
1. Suche das größte Vielfache des Teilers, das noch in die Zahl passt.
2. Ziehe es ab.
3. Was übrig bleibt, ist der Rest.
Beispiel-Methode: 17 : 5 → 3·5=15 passt noch → 17−15=2 → Rest 2.
💡 Der Rest ist IMMER kleiner als der Teiler!`,
ru:`🍪 Найти остаток:
1. Найди самое большое кратное делителя, которое ещё помещается в число.
2. Вычти его.
3. То, что осталось – остаток.
Метод: 17 : 5 → 3·5=15 помещается → 17−15=2 → остаток 2.
💡 Остаток ВСЕГДА меньше делителя!`,
en:`🍪 Finding the remainder:
1. Find the biggest multiple of the divisor that still fits into the number.
2. Subtract it.
3. What is left is the remainder.
Method: 17 : 5 → 3·5=15 fits → 17−15=2 → remainder 2.
💡 The remainder is ALWAYS smaller than the divisor!`},
multWritten:{
de:`✖️ Schriftliche Multiplikation:
1. Schreibe die Zahlen untereinander (Einer unter Einer).
2. Multipliziere die obere Zahl zuerst mit den Einern, dann mit den Zehnern der unteren Zahl.
3. Rücke bei den Zehnern eine Stelle nach links (oder schreibe eine 0).
4. Addiere die Teilergebnisse.
💡 Überschlag vorher: Runde beide Zahlen und multipliziere im Kopf.`,
ru:`✖️ Умножение в столбик:
1. Запиши числа друг под другом (единицы под единицами).
2. Умножь верхнее число сначала на единицы, потом на десятки нижнего числа.
3. При десятках сдвинь результат на одну позицию влево (или пиши 0).
4. Сложи промежуточные результаты.
💡 Сначала прикидка: округли оба числа и умножь в уме.`,
en:`✖️ Written multiplication:
1. Write the numbers under each other (ones under ones).
2. Multiply the top number first by the ones, then by the tens of the bottom number.
3. For the tens, shift one place to the left (or write a 0).
4. Add the partial results.
💡 Estimate first: round both numbers and multiply in your head.`},
addSub:{
de:`➕➖ Schriftliche Addition / Subtraktion:
1. Schreibe die Zahlen stellengerecht untereinander (Einer unter Einer!).
2. Rechne von rechts nach links.
3. Addition: Bei 10 oder mehr → Übertrag 1 zur nächsten Stelle.
4. Subtraktion: Wenn die obere Ziffer zu klein ist → borge dir 10 (Übertrag).
5. Kontrolle: Bei Subtraktion → Ergebnis + abgezogene Zahl = Anfangszahl.`,
ru:`➕➖ Сложение / вычитание в столбик:
1. Запиши числа строго друг под другом (единицы под единицами!).
2. Считай справа налево.
3. Сложение: если 10 или больше → перенос 1 в следующий разряд.
4. Вычитание: если верхняя цифра меньше → займи 10.
5. Проверка: при вычитании → ответ + вычтенное число = исходное число.`,
en:`➕➖ Column addition / subtraction:
1. Write the numbers exactly under each other (ones under ones!).
2. Work from right to left.
3. Addition: 10 or more → carry 1 to the next column.
4. Subtraction: if the top digit is too small → borrow 10.
5. Check: for subtraction → result + subtracted number = starting number.`},
rounding:{
de:`🎯 Runden:
1. Finde die Stelle, auf die gerundet wird (Zehner, Hunderter, Tausender ...).
2. Schaue auf die Ziffer RECHTS daneben.
3. Ist sie 0,1,2,3,4 → abrunden (Stelle bleibt).
4. Ist sie 5,6,7,8,9 → aufrunden (Stelle +1).
5. Alle Ziffern rechts davon werden zu Nullen.`,
ru:`🎯 Округление:
1. Найди разряд, до которого округляем (десятки, сотни, тысячи ...).
2. Посмотри на цифру СПРАВА от него.
3. Если 0,1,2,3,4 → округляем вниз (разряд не меняется).
4. Если 5,6,7,8,9 → округляем вверх (разряд +1).
5. Все цифры справа становятся нулями.`,
en:`🎯 Rounding:
1. Find the place you are rounding to (tens, hundreds, thousands ...).
2. Look at the digit to the RIGHT of it.
3. If it is 0,1,2,3,4 → round down (digit stays).
4. If it is 5,6,7,8,9 → round up (digit +1).
5. All digits to the right become zeros.`},
placeValue:{
de:`🏛️ Stellenwerte:
Von rechts nach links: Einer (E), Zehner (Z), Hunderter (H), Tausender (T), Zehntausender (ZT), Hunderttausender (HT), Million (M).
1. Schreibe die Zahl in eine Stellenwerttafel.
2. Zähle die Stellen von rechts.
💡 Beispiel-Methode: In 52.804 steht die 8 an der Hunderterstelle.`,
ru:`🏛️ Разряды числа:
Справа налево: единицы (E), десятки (Z), сотни (H), тысячи (T), десятки тысяч (ZT), сотни тысяч (HT), миллион (M).
1. Запиши число в таблицу разрядов.
2. Считай разряды справа.
💡 Пример метода: в числе 52.804 цифра 8 стоит в разряде сотен.`,
en:`🏛️ Place value:
From right to left: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, million.
1. Write the number in a place-value chart.
2. Count the places from the right.
💡 Method example: in 52,804 the 8 is in the hundreds place.`},
compareNum:{
de:`↔️ Zahlen vergleichen:
1. Zähle zuerst die Stellen: mehr Stellen = größere Zahl.
2. Gleich viele Stellen? Vergleiche Ziffer für Ziffer von LINKS.
3. Zeichen: < heißt „kleiner als", > heißt „größer als". Die Spitze zeigt immer zur kleineren Zahl!`,
ru:`↔️ Сравнение чисел:
1. Сначала посчитай количество цифр: больше цифр = больше число.
2. Цифр поровну? Сравнивай цифры СЛЕВА направо.
3. Знаки: < значит «меньше», > значит «больше». Остриё всегда показывает на меньшее число!`,
en:`↔️ Comparing numbers:
1. First count the digits: more digits = bigger number.
2. Same number of digits? Compare digit by digit from the LEFT.
3. Signs: < means "less than", > means "greater than". The point always aims at the smaller number!`},
units:{
de:`📏 Einheiten umrechnen:
Länge: 1 km = 1.000 m · 1 m = 100 cm · 1 cm = 10 mm
Gewicht: 1 t = 1.000 kg · 1 kg = 1.000 g
Geld: 1 € = 100 Cent
Zeit: 1 h = 60 min · 1 min = 60 s
1. In die KLEINERE Einheit → multiplizieren.
2. In die GRÖSSERE Einheit → dividieren.`,
ru:`📏 Перевод единиц:
Длина: 1 km = 1.000 m · 1 m = 100 cm · 1 cm = 10 mm
Вес: 1 t = 1.000 kg · 1 kg = 1.000 g
Деньги: 1 € = 100 центов
Время: 1 h = 60 мин · 1 мин = 60 с
1. В МЕНЬШУЮ единицу → умножай.
2. В БОЛЬШУЮ единицу → дели.`,
en:`📏 Converting units:
Length: 1 km = 1,000 m · 1 m = 100 cm · 1 cm = 10 mm
Weight: 1 t = 1,000 kg · 1 kg = 1,000 g
Money: 1 € = 100 cents
Time: 1 h = 60 min · 1 min = 60 s
1. To a SMALLER unit → multiply.
2. To a BIGGER unit → divide.`},
timeCalc:{
de:`🕐 Zeitspannen berechnen:
1. Rechne zuerst bis zur nächsten vollen Stunde.
2. Rechne dann die vollen Stunden.
3. Rechne zuletzt die restlichen Minuten.
Beispiel-Methode: von 9:40 bis 12:10 → 20 min bis 10:00, dann 2 h bis 12:00, dann 10 min → 2 h 30 min.`,
ru:`🕐 Вычисление промежутков времени:
1. Сначала досчитай до ближайшего полного часа.
2. Потом посчитай полные часы.
3. В конце добавь оставшиеся минуты.
Метод: с 9:40 до 12:10 → 20 мин до 10:00, потом 2 ч до 12:00, потом 10 мин → 2 ч 30 мин.`,
en:`🕐 Calculating time spans:
1. First count up to the next full hour.
2. Then count the full hours.
3. Finally add the remaining minutes.
Method: from 9:40 to 12:10 → 20 min to 10:00, then 2 h to 12:00, then 10 min → 2 h 30 min.`},
geoLines:{
de:`📐 Parallel und senkrecht:
• Parallel (∥): Zwei Geraden haben überall den gleichen Abstand und treffen sich NIE. (Wie Eisenbahnschienen!)
• Senkrecht (⊥): Zwei Geraden schneiden sich im rechten Winkel (90°).
Mit dem Geodreieck: Die Mittellinie des Geodreiecks auf die Gerade legen → die lange Kante zeigt die Senkrechte.`,
ru:`📐 Параллельно и перпендикулярно:
• Параллельно (∥): две прямые везде на одинаковом расстоянии и НИКОГДА не пересекаются. (Как рельсы!)
• Перпендикулярно (⊥): прямые пересекаются под прямым углом (90°).
С помощью Geodreieck (треугольной линейки): средняя линия на прямую → длинная сторона показывает перпендикуляр.`,
en:`📐 Parallel and perpendicular:
• Parallel (∥): two lines keep the same distance everywhere and NEVER meet. (Like train tracks!)
• Perpendicular (⊥): two lines cross at a right angle (90°).
With a set square: put the middle line on the line → the long edge shows the perpendicular.`},
quadri:{
de:`⬛ Vierecke – die wichtigsten Eigenschaften:
QUADRAT: 4 gleich lange Seiten, 4 rechte Winkel.
RECHTECK: 4 rechte Winkel, gegenüberliegende Seiten gleich lang und parallel.
PARALLELOGRAMM: gegenüberliegende Seiten parallel und gleich lang (Winkel müssen NICHT 90° sein).
🌟 Merke: Jedes Quadrat ist auch ein Rechteck und ein Parallelogramm – aber nicht umgekehrt!`,
ru:`⬛ Четырёхугольники – главные свойства:
КВАДРАТ: 4 равные стороны, 4 прямых угла.
ПРЯМОУГОЛЬНИК: 4 прямых угла, противоположные стороны равны и параллельны.
ПАРАЛЛЕЛОГРАММ: противоположные стороны параллельны и равны (углы НЕ обязательно 90°).
🌟 Запомни: каждый квадрат – это и прямоугольник, и параллелограмм, но не наоборот!`,
en:`⬛ Quadrilaterals – key properties:
SQUARE: 4 equal sides, 4 right angles.
RECTANGLE: 4 right angles, opposite sides equal and parallel.
PARALLELOGRAM: opposite sides parallel and equal (angles do NOT have to be 90°).
🌟 Remember: every square is also a rectangle and a parallelogram – but not the other way round!`},
periArea:{
de:`📦 Umfang und Flächeninhalt (Rechteck):
• Umfang = einmal außen herum: U = 2 · (a + b)  → Einheit: cm, m ...
• Flächeninhalt = wie viele Quadrate hineinpassen: A = a · b  → Einheit: cm², m² ...
Beim Quadrat: U = 4 · a und A = a · a.
💡 Umfang = addieren, Fläche = multiplizieren!`,
ru:`📦 Периметр и площадь (прямоугольник):
• Периметр = один раз вокруг: U = 2 · (a + b) → единицы: cm, m ...
• Площадь = сколько квадратиков помещается: A = a · b → единицы: cm², m² ...
У квадрата: U = 4 · a и A = a · a.
💡 Периметр = складываем, площадь = умножаем!`,
en:`📦 Perimeter and area (rectangle):
• Perimeter = once around the outside: P = 2 · (a + b) → unit: cm, m ...
• Area = how many squares fit inside: A = a · b → unit: cm², m² ...
For a square: P = 4 · a and A = a · a.
💡 Perimeter = add, area = multiply!`},
coords:{
de:`🗺️ Koordinatensystem:
Ein Punkt wird so angegeben: (x | y).
1. Die ERSTE Zahl: wie weit nach RECHTS (x-Achse).
2. Die ZWEITE Zahl: wie weit nach OBEN (y-Achse).
💡 Merksatz: „Erst krabbeln, dann klettern" – erst rechts, dann hoch!`,
ru:`🗺️ Система координат:
Точка записывается так: (x | y).
1. ПЕРВОЕ число: насколько ВПРАВО (ось x).
2. ВТОРОЕ число: насколько ВВЕРХ (ось y).
💡 Запомни: «Сначала ползём, потом лезем» – сначала вправо, потом вверх!`,
en:`🗺️ Coordinate system:
A point is written like this: (x | y).
1. The FIRST number: how far RIGHT (x-axis).
2. The SECOND number: how far UP (y-axis).
💡 Remember: "Crawl first, then climb" – right first, then up!`},
divisibility:{
de:`🔍 Teilbarkeitsregeln:
• durch 2: letzte Ziffer ist 0, 2, 4, 6 oder 8.
• durch 5: letzte Ziffer ist 0 oder 5.
• durch 10: letzte Ziffer ist 0.
• durch 3: die QUERSUMME (alle Ziffern addiert) ist durch 3 teilbar.
• durch 9: die Quersumme ist durch 9 teilbar.
Beispiel-Methode: 741 → 7+4+1=12 → 12 ist durch 3 teilbar → 741 auch!`,
ru:`🔍 Признаки делимости:
• на 2: последняя цифра 0, 2, 4, 6 или 8.
• на 5: последняя цифра 0 или 5.
• на 10: последняя цифра 0.
• на 3: СУММА ЦИФР делится на 3.
• на 9: сумма цифр делится на 9.
Метод: 741 → 7+4+1=12 → 12 делится на 3 → значит 741 тоже!`,
en:`🔍 Divisibility rules:
• by 2: last digit is 0, 2, 4, 6 or 8.
• by 5: last digit is 0 or 5.
• by 10: last digit is 0.
• by 3: the DIGIT SUM is divisible by 3.
• by 9: the digit sum is divisible by 9.
Method: 741 → 7+4+1=12 → 12 is divisible by 3 → so is 741!`},
orderOps:{
de:`🧮 Punkt vor Strich:
1. Zuerst KLAMMERN ( ) berechnen.
2. Dann PUNKTRECHNUNG: · und :
3. Zuletzt STRICHRECHNUNG: + und −
Beispiel-Methode: 5 + 3 · 4 → zuerst 3·4=12 → dann 5+12=17.`,
ru:`🧮 Порядок действий:
1. Сначала СКОБКИ ( ).
2. Потом умножение и деление: · и :
3. В конце сложение и вычитание: + и −
Метод: 5 + 3 · 4 → сначала 3·4=12 → потом 5+12=17.`,
en:`🧮 Order of operations:
1. First BRACKETS ( ).
2. Then multiplication and division: · and :
3. Last addition and subtraction: + and −
Method: 5 + 3 · 4 → first 3·4=12 → then 5+12=17.`},
wordProblem:{
de:`📖 Sachaufgaben – der 5-Schritte-Plan:
1. Lies die Aufgabe ZWEIMAL.
2. Unterstreiche wichtige Zahlen und die Frage.
3. Überlege: Was wird gesucht? Welche Rechnung passt (+, −, ·, :)?
4. Rechne Schritt für Schritt (manchmal sind ZWEI Rechnungen nötig!).
5. Schreibe einen Antwortsatz und prüfe: Ist das Ergebnis sinnvoll?`,
ru:`📖 Текстовые задачи – план из 5 шагов:
1. Прочитай задачу ДВА раза.
2. Подчеркни важные числа и вопрос.
3. Подумай: что ищем? Какое действие подходит (+, −, ·, :)?
4. Считай шаг за шагом (иногда нужно ДВА действия!).
5. Напиши ответ и проверь: разумный ли результат?`,
en:`📖 Word problems – the 5-step plan:
1. Read the problem TWICE.
2. Underline important numbers and the question.
3. Think: what is asked? Which operation fits (+, −, ·, :)?
4. Calculate step by step (sometimes you need TWO steps!).
5. Write an answer sentence and check: does the result make sense?`},
mental:{
de:`⚡ Kopfrechnen-Tricks:
• Einmaleins: Nutze Nachbaraufgaben (7·8 = 7·7+7).
• Zerlege Zahlen: 25+38 → 25+30+8.
• Bei ·10, ·100: hänge Nullen an.
• Division: Denke an das Einmaleins rückwärts (56:8 → „8 mal was ist 56?").`,
ru:`⚡ Приёмы устного счёта:
• Таблица умножения: используй соседние примеры (7·8 = 7·7+7).
• Раскладывай числа: 25+38 → 25+30+8.
• При ·10, ·100: добавь нули.
• Деление: вспомни таблицу умножения наоборот (56:8 → «8 умножить на сколько = 56?»).`,
en:`⚡ Mental maths tricks:
• Times tables: use neighbour facts (7·8 = 7·7+7).
• Split numbers: 25+38 → 25+30+8.
• For ·10, ·100: add zeros.
• Division: think of times tables backwards (56:8 → "8 times what is 56?").`},
diagram:{
de:`📊 Diagramme lesen:
1. Lies zuerst die Überschrift: Worum geht es?
2. Schaue auf die Achsen: Was wird gezählt? In welchen Schritten?
3. Lies die Höhe jedes Balkens genau ab.
4. Zum Vergleichen: Subtrahiere die Werte. Für „insgesamt": Addiere alle Werte.`,
ru:`📊 Чтение диаграмм:
1. Сначала прочитай заголовок: о чём диаграмма?
2. Посмотри на оси: что считается? С каким шагом?
3. Точно определи высоту каждого столбика.
4. Для сравнения: вычитай значения. Для «всего»: сложи все значения.`,
en:`📊 Reading charts:
1. First read the title: what is it about?
2. Look at the axes: what is counted? In which steps?
3. Read the height of each bar exactly.
4. To compare: subtract values. For "in total": add all values.`},
// ---------- GERMAN ----------
wortarten:{
de:`🔤 Wortarten erkennen:
• NOMEN (Namenwort): Menschen, Tiere, Dinge, Gefühle – wird GROSS geschrieben. Probe: Kann man der/die/das davor setzen?
• VERB (Tunwort): sagt, was jemand tut oder was geschieht – klein. Probe: Kann man es in „ich ..., du ...st" setzen?
• ADJEKTIV (Wiewort): beschreibt, WIE etwas ist – klein. Probe: Kann man steigern (schnell, schneller, am schnellsten)?
• ARTIKEL (Begleiter): der, die, das, ein, eine.
• PRONOMEN (Fürwort): ersetzt ein Nomen (er, sie, es, wir ...).`,
ru:`🔤 Части речи:
• NOMEN (существительное): люди, животные, предметы, чувства – пишется с БОЛЬШОЙ буквы. Проверка: можно ли поставить der/die/das?
• VERB (глагол): что кто-то делает или что происходит – с маленькой. Проверка: «ich ..., du ...st».
• ADJEKTIV (прилагательное): описывает, КАКОЙ предмет – с маленькой. Проверка: можно ли сравнить (schnell, schneller, am schnellsten)?
• ARTIKEL (артикль): der, die, das, ein, eine.
• PRONOMEN (местоимение): заменяет существительное (er, sie, es, wir ...).`,
en:`🔤 Parts of speech (in German):
• NOMEN (noun): people, animals, things, feelings – written with a CAPITAL letter. Test: can you put der/die/das in front?
• VERB: what someone does or what happens – lowercase. Test: "ich ..., du ...st".
• ADJEKTIV (adjective): describes WHAT something is like – lowercase. Test: can you compare it (schnell, schneller, am schnellsten)?
• ARTIKEL (article): der, die, das, ein, eine.
• PRONOMEN (pronoun): replaces a noun (er, sie, es, wir ...).`},
zeiten:{
de:`⏳ Die Zeitformen:
• PRÄSENS (Gegenwart): ich gehe – passiert jetzt.
• PRÄTERITUM (1. Vergangenheit): ich ging – Erzählzeit, oft in Geschichten.
• PERFEKT (2. Vergangenheit): ich bin gegangen – mit haben/sein + Partizip (ge-...).
• FUTUR (Zukunft): ich werde gehen – mit werden.
💡 Um die Zeitform zu erkennen: Suche das Verb (oder BEIDE Verbteile!) und frage: Wann passiert das?`,
ru:`⏳ Времена глагола:
• PRÄSENS (настоящее): ich gehe – происходит сейчас.
• PRÄTERITUM (прошедшее простое): ich ging – время рассказов.
• PERFEKT (прошедшее разговорное): ich bin gegangen – haben/sein + Partizip (ge-...).
• FUTUR (будущее): ich werde gehen – с werden.
💡 Чтобы определить время: найди глагол (или ОБЕ его части!) и спроси: когда это происходит?`,
en:`⏳ German tenses:
• PRÄSENS (present): ich gehe – happening now.
• PRÄTERITUM (simple past): ich ging – story-telling tense.
• PERFEKT (spoken past): ich bin gegangen – haben/sein + participle (ge-...).
• FUTUR (future): ich werde gehen – with werden.
💡 To find the tense: find the verb (or BOTH verb parts!) and ask: when does it happen?`},
faelle:{
de:`❓ Die 4 Fälle – frage nach dem Nomen:
1. NOMINATIV: Wer oder was? → der Hund
2. GENITIV: Wessen? → des Hundes
3. DATIV: Wem? → dem Hund
4. AKKUSATIV: Wen oder was? → den Hund
💡 Stelle die Frage an den Satz – die Antwort zeigt dir den Fall!`,
ru:`❓ 4 падежа – задай вопрос к существительному:
1. NOMINATIV: Wer oder was? (кто? что?) → der Hund
2. GENITIV: Wessen? (чей?) → des Hundes
3. DATIV: Wem? (кому?) → dem Hund
4. AKKUSATIV: Wen oder was? (кого? что?) → den Hund
💡 Задай вопрос к предложению – ответ покажет падеж!`,
en:`❓ The 4 German cases – ask about the noun:
1. NOMINATIV: Wer oder was? (who/what – subject) → der Hund
2. GENITIV: Wessen? (whose?) → des Hundes
3. DATIV: Wem? (to whom?) → dem Hund
4. AKKUSATIV: Wen oder was? (whom/what – object) → den Hund
💡 Ask the question in the sentence – the answer shows the case!`},
satzglieder:{
de:`🧩 Satzglieder finden:
• SUBJEKT: Wer oder was tut etwas? (Frage: Wer/Was?)
• PRÄDIKAT: Das Verb – was getan wird. Steht im Aussagesatz an 2. Stelle!
• OBJEKT: Wem? (Dativobjekt) oder Wen/Was? (Akkusativobjekt)
• ADVERBIALE BESTIMMUNG: Wo? Wann? Wie? Warum?
💡 Umstellprobe: Satzglieder kann man im Satz verschieben – sie bleiben zusammen!`,
ru:`🧩 Члены предложения:
• SUBJEKT (подлежащее): кто или что делает? (вопрос: Wer/Was?)
• PRÄDIKAT (сказуемое): глагол – в утвердительном предложении стоит на 2-м месте!
• OBJEKT (дополнение): Wem? (датив) или Wen/Was? (аккузатив)
• ADVERBIALE BESTIMMUNG (обстоятельство): где? когда? как? почему?
💡 Проверка перестановкой: члены предложения можно переставлять – они двигаются целиком!`,
en:`🧩 Sentence parts (German):
• SUBJEKT: who or what does something? (question: Wer/Was?)
• PRÄDIKAT: the verb – in a statement it is in 2nd position!
• OBJEKT: Wem? (dative object) or Wen/Was? (accusative object)
• ADVERBIALE BESTIMMUNG: where? when? how? why?
💡 Move-around test: sentence parts move as one block!`},
satzarten:{
de:`❗ Satzarten:
• AUSSAGESATZ: erzählt etwas. Endet mit Punkt (.)
• FRAGESATZ: stellt eine Frage. Endet mit Fragezeichen (?)
• AUFFORDERUNGSSATZ / AUSRUFESATZ: Befehl oder Ausruf. Endet mit Ausrufezeichen (!)
💡 Lies den Satz laut – deine Stimme verrät die Satzart!`,
ru:`❗ Виды предложений:
• AUSSAGESATZ (повествовательное): сообщает что-то. Точка (.)
• FRAGESATZ (вопросительное): задаёт вопрос. Знак вопроса (?)
• AUFFORDERUNGSSATZ (побудительное): приказ или восклицание. Восклицательный знак (!)
💡 Прочитай вслух – интонация подскажет вид предложения!`,
en:`❗ Sentence types (German):
• AUSSAGESATZ: statement. Ends with a full stop (.)
• FRAGESATZ: question. Ends with a question mark (?)
• AUFFORDERUNGSSATZ: command or exclamation. Ends with (!)
💡 Read it aloud – your voice reveals the type!`},
rechtIE:{
de:`✍️ Wörter mit ie / i / Dehnungs-h:
• Langes „i" schreibt man meistens „ie": spielen, Wiese, sieben.
• Kurzes „i" bleibt „i": Kind, Tisch, singen.
• Dehnungs-h macht den Vokal lang: fahren, Zahl, Stuhl – man hört das h NICHT.
💡 Sprich das Wort langsam: Ist der Klang laaang oder kurz?`,
ru:`✍️ Слова с ie / i / удлиняющим h:
• Долгий звук «и» чаще пишется «ie»: spielen, Wiese, sieben.
• Короткий «и» – просто «i»: Kind, Tisch, singen.
• Удлиняющее h делает гласный долгим: fahren, Zahl, Stuhl – h НЕ произносится.
💡 Произнеси слово медленно: звук дооолгий или короткий?`,
en:`✍️ Words with ie / i / lengthening h:
• A long "i" sound is usually written "ie": spielen, Wiese, sieben.
• A short "i" stays "i": Kind, Tisch, singen.
• A lengthening h makes the vowel long: fahren, Zahl, Stuhl – you do NOT hear the h.
💡 Say the word slowly: is the sound looong or short?`},
rechtDoppel:{
de:`✍️ Doppelte Konsonanten / ck / tz:
Nach einem KURZEN Vokal folgt oft ein doppelter Konsonant: kommen, Sommer, schwimmen.
• Statt „kk" schreibt man „ck": backen, Zucker.
• Statt „zz" schreibt man „tz": Katze, sitzen.
💡 Sprich das Wort: Ist der Vokal kurz und knackig? → Verdopplung wahrscheinlich!
Verlängerungsprobe: rennen → er rennt.`,
ru:`✍️ Двойные согласные / ck / tz:
После КОРОТКОГО гласного часто идёт двойной согласный: kommen, Sommer, schwimmen.
• Вместо «kk» пишут «ck»: backen, Zucker.
• Вместо «zz» пишут «tz»: Katze, sitzen.
💡 Произнеси слово: гласный короткий и резкий? → скорее всего удвоение!`,
en:`✍️ Double consonants / ck / tz:
After a SHORT vowel there is often a double consonant: kommen, Sommer, schwimmen.
• Instead of "kk" write "ck": backen, Zucker.
• Instead of "zz" write "tz": Katze, sitzen.
💡 Say the word: is the vowel short and snappy? → probably doubled!`},
rechtSS:{
de:`✍️ ß oder ss:
• Nach LANGEM Vokal oder Doppellaut (au, ei, ie): ß → Straße, groß, heißen.
• Nach KURZEM Vokal: ss → Fluss, essen, Schloss.
💡 Sprich das Wort langsam und höre auf den Vokal davor!`,
ru:`✍️ ß или ss:
• После ДОЛГОГО гласного или дифтонга (au, ei, ie): ß → Straße, groß, heißen.
• После КОРОТКОГО гласного: ss → Fluss, essen, Schloss.
💡 Произнеси слово медленно и слушай гласный перед звуком «с»!`,
en:`✍️ ß or ss:
• After a LONG vowel or diphthong (au, ei, ie): ß → Straße, groß, heißen.
• After a SHORT vowel: ss → Fluss, essen, Schloss.
💡 Say the word slowly and listen to the vowel before the s-sound!`},
rechtEnd:{
de:`✍️ Auslaut b/p, d/t, g/k:
Am Wortende klingen b, d, g oft wie p, t, k!
Verlängerungsprobe: Verlängere das Wort, dann hörst du den richtigen Buchstaben:
• Hund → Hunde (d!) • Berg → Berge (g!) • Korb → Körbe (b!)`,
ru:`✍️ Конечные b/p, d/t, g/k:
В конце слова b, d, g часто звучат как p, t, k!
Приём удлинения: удлини слово, и услышишь правильную букву:
• Hund → Hunde (d!) • Berg → Berge (g!) • Korb → Körbe (b!)`,
en:`✍️ Final b/p, d/t, g/k:
At the end of a word b, d, g often sound like p, t, k!
Lengthening test: make the word longer and you hear the right letter:
• Hund → Hunde (d!) • Berg → Berge (g!) • Korb → Körbe (b!)`},
grossklein:{
de:`🔠 Groß- oder Kleinschreibung:
GROSS schreibt man:
• Satzanfänge
• Nomen (Probe: der/die/das davor?)
• Namen und die Anrede „Sie"
• Nominalisierte Verben/Adjektive: das Laufen, das Schöne (Signalwörter: das, beim, zum, vom, etwas, nichts, alles)
KLEIN: Verben, Adjektive, Artikel, Pronomen im Satz.`,
ru:`🔠 С большой или маленькой буквы:
С БОЛЬШОЙ пишут:
• Начало предложения
• Существительные (проверка: der/die/das?)
• Имена и вежливое «Sie»
• Глаголы/прилагательные, ставшие существительными: das Laufen (сигнальные слова: das, beim, zum, vom, etwas, nichts, alles)
С маленькой: глаголы, прилагательные, артикли, местоимения внутри предложения.`,
en:`🔠 Capital or lowercase (German rules):
CAPITAL:
• Beginnings of sentences
• Nouns (test: der/die/das in front?)
• Names and polite "Sie"
• Verbs/adjectives used as nouns: das Laufen (signal words: das, beim, zum, vom, etwas, nichts, alles)
lowercase: verbs, adjectives, articles, pronouns inside a sentence.`},
kommas:{
de:`✏️ Kommas bei Aufzählungen:
1. Zwischen den Teilen einer Aufzählung steht ein Komma: Äpfel, Birnen, Pflaumen.
2. Vor „und" sowie „oder" steht KEIN Komma: Äpfel, Birnen und Pflaumen.
💡 Zähle die Aufzählungsglieder und setze zwischen alle ein Komma – außer vor und/oder!`,
ru:`✏️ Запятые при перечислении:
1. Между частями перечисления ставится запятая: Äpfel, Birnen, Pflaumen.
2. Перед «und» и «oder» запятая НЕ ставится: Äpfel, Birnen und Pflaumen.
💡 Посчитай элементы перечисления и поставь запятые между всеми – кроме как перед und/oder!`,
en:`✏️ Commas in lists (German):
1. Put a comma between list items: Äpfel, Birnen, Pflaumen.
2. NO comma before "und" and "oder": Äpfel, Birnen und Pflaumen.
💡 Count the list items and put commas between all of them – except before und/oder!`},
woertlRede:{
de:`💬 Wörtliche Rede:
• Begleitsatz vorne: Anna sagt: „Ich komme mit."  → Doppelpunkt, dann Anführungszeichen unten „ ... oben".
• Begleitsatz hinten: „Ich komme mit", sagt Anna. → Komma nach der Rede.
• Die wörtliche Rede beginnt IMMER groß.
💡 Anführungszeichen: unten auf (99), oben zu (66).`,
ru:`💬 Прямая речь:
• Слова автора впереди: Anna sagt: „Ich komme mit." → двоеточие, кавычки внизу „ ... вверху".
• Слова автора после: „Ich komme mit", sagt Anna. → запятая после речи.
• Прямая речь ВСЕГДА начинается с большой буквы.`,
en:`💬 Direct speech (German):
• Speaker first: Anna sagt: „Ich komme mit." → colon, then quotation marks (low „ ... high ").
• Speaker after: „Ich komme mit", sagt Anna. → comma after the speech.
• Direct speech ALWAYS starts with a capital letter.`},
lesen:{
de:`📖 Leseverstehen – so knackst du jeden Text:
1. Lies zuerst die FRAGEN, dann den Text.
2. Lies den Text in Ruhe – zweimal, wenn nötig.
3. Unterstreiche die Stellen, die zu den Fragen passen.
4. Die Antwort steht fast immer IM Text – rate nicht!
5. Prüfe bei Richtig/Falsch-Fragen jedes Wort genau.`,
ru:`📖 Понимание текста – как справиться с любым текстом:
1. Сначала прочитай ВОПРОСЫ, потом текст.
2. Спокойно прочитай текст – дважды, если нужно.
3. Подчеркни места, которые подходят к вопросам.
4. Ответ почти всегда ЕСТЬ в тексте – не угадывай!
5. В вопросах «верно/неверно» проверяй каждое слово.`,
en:`📖 Reading comprehension – crack any text:
1. Read the QUESTIONS first, then the text.
2. Read the text calmly – twice if needed.
3. Underline the parts that match the questions.
4. The answer is almost always IN the text – don't guess!
5. For true/false questions check every word carefully.`},
wortfamilie:{
de:`🌳 Wortfamilien und Wortfelder:
• WORTFAMILIE: Wörter mit dem gleichen Wortstamm: fahren – Fahrer – Fahrt – Abfahrt.
• WORTFELD: Wörter mit ähnlicher Bedeutung: gehen – laufen – rennen – schleichen.
💡 Wortfamilie = gleicher Stamm. Wortfeld = gleiches Thema!`,
ru:`🌳 Семьи слов и тематические поля:
• WORTFAMILIE (семья слов): слова с одинаковым корнем: fahren – Fahrer – Fahrt – Abfahrt.
• WORTFELD (поле слов): слова с похожим значением: gehen – laufen – rennen – schleichen.
💡 Семья = одинаковый корень. Поле = одна тема!`,
en:`🌳 Word families and word fields:
• WORTFAMILIE (word family): words with the same stem: fahren – Fahrer – Fahrt – Abfahrt.
• WORTFELD (word field): words with similar meaning: gehen – laufen – rennen – schleichen.
💡 Family = same stem. Field = same topic!`},
// ---------- ENGLISH ----------
engVocab:{
de:`🇬🇧 Vokabeln lernen:
1. Lies das Wort laut.
2. Verbinde es mit einem Bild im Kopf.
3. Decke die Übersetzung ab und teste dich.
💡 Bei diesem Test: Überlege zuerst, was das deutsche Wort bedeutet – dann suche das passende englische Wort.`,
ru:`🇬🇧 Учим английские слова:
1. Прочитай слово вслух.
2. Свяжи его с картинкой в голове.
3. Закрой перевод и проверь себя.
💡 В этом тесте: сначала подумай, что значит немецкое слово, потом найди подходящее английское.`,
en:`🇬🇧 Learning vocabulary:
1. Read the word aloud.
2. Connect it with a picture in your head.
3. Cover the translation and test yourself.
💡 In this test: think what the German word means first, then find the matching English word.`},
engTobe:{
de:`🇬🇧 to be (sein):
I am · you are · he/she/it is · we are · you are · they are
1. Schaue auf die Person am Satzanfang.
2. Wähle die passende Form: am (nur I), is (he/she/it), are (you/we/they).
💡 Merksatz: „He, she, it – das s muss mit" gilt auch für IS!`,
ru:`🇬🇧 Глагол to be (быть):
I am · you are · he/she/it is · we are · you are · they are
1. Посмотри, кто стоит в начале предложения.
2. Выбери форму: am (только I), is (he/she/it), are (you/we/they).`,
en:`🇬🇧 to be:
I am · you are · he/she/it is · we are · you are · they are
1. Look at the person at the start of the sentence.
2. Choose the right form: am (only I), is (he/she/it), are (you/we/they).`},
engHave:{
de:`🇬🇧 have got (haben):
• I/you/we/they → have got
• he/she/it → has got
Verneinung: haven't got / hasn't got.
Frage: Have you got ...? / Has she got ...?
💡 Nur bei he/she/it: HAS!`,
ru:`🇬🇧 have got (иметь):
• I/you/we/they → have got
• he/she/it → has got
Отрицание: haven't got / hasn't got.
Вопрос: Have you got ...? / Has she got ...?
💡 Только с he/she/it: HAS!`,
en:`🇬🇧 have got:
• I/you/we/they → have got
• he/she/it → has got
Negative: haven't got / hasn't got.
Question: Have you got ...? / Has she got ...?
💡 Only with he/she/it: HAS!`},
engSimplePres:{
de:`🇬🇧 Simple Present:
Für Dinge, die immer oder regelmäßig passieren.
• he/she/it → Verb + s: She plays football.
• Verneinung: don't / doesn't + Grundform: He doesn't play.
• Frage: Do/Does + Person + Grundform: Does she play?
💡 „He, she, it – das s muss mit!" Aber nach does/doesn't: KEIN s mehr am Verb!`,
ru:`🇬🇧 Simple Present:
Для того, что происходит всегда или регулярно.
• he/she/it → глагол + s: She plays football.
• Отрицание: don't / doesn't + начальная форма: He doesn't play.
• Вопрос: Do/Does + подлежащее + начальная форма: Does she play?
💡 «He, she, it – прибавь s!» Но после does/doesn't у глагола s уже НЕТ!`,
en:`🇬🇧 Simple Present:
For things that happen always or regularly.
• he/she/it → verb + s: She plays football.
• Negative: don't / doesn't + base form: He doesn't play.
• Question: Do/Does + person + base form: Does she play?
💡 "He, she, it – add the s!" But after does/doesn't: NO s on the verb!`},
engPlural:{
de:`🇬🇧 Plural (Mehrzahl):
• Normal: + s → cats, books
• Nach s, sh, ch, x: + es → boxes, buses
• y nach Konsonant → ies: baby → babies
• Ausnahmen lernen: man→men, woman→women, child→children, mouse→mice, foot→feet, tooth→teeth`,
ru:`🇬🇧 Множественное число:
• Обычно: + s → cats, books
• После s, sh, ch, x: + es → boxes, buses
• y после согласной → ies: baby → babies
• Исключения: man→men, woman→women, child→children, mouse→mice, foot→feet, tooth→teeth`,
en:`🇬🇧 Plural:
• Normal: + s → cats, books
• After s, sh, ch, x: + es → boxes, buses
• y after a consonant → ies: baby → babies
• Learn exceptions: man→men, woman→women, child→children, mouse→mice, foot→feet, tooth→teeth`},
engQuestions:{
de:`🇬🇧 Fragewörter:
• What = was • Where = wo • Who = wer • When = wann
• Why = warum • How = wie • How many = wie viele • How old = wie alt
💡 Lies die Antwort-Möglichkeiten: Welche Frage passt zur Antwort?
Wortstellung in Fragen: Fragewort + do/does/is/are + Person + Verb.`,
ru:`🇬🇧 Вопросительные слова:
• What = что • Where = где • Who = кто • When = когда
• Why = почему • How = как • How many = сколько • How old = сколько лет
💡 Порядок слов в вопросе: вопросительное слово + do/does/is/are + подлежащее + глагол.`,
en:`🇬🇧 Question words:
• What • Where • Who • When • Why • How • How many • How old
💡 Word order in questions: question word + do/does/is/are + person + verb.`},
engArticles:{
de:`🇬🇧 a oder an:
• a + Konsonanten-LAUT: a dog, a book, a university
• an + Vokal-LAUT: an apple, an elephant, an hour
💡 Es zählt der KLANG des nächsten Wortes, nicht der Buchstabe!`,
ru:`🇬🇧 a или an:
• a + согласный ЗВУК: a dog, a book
• an + гласный ЗВУК: an apple, an elephant, an hour
💡 Важен ЗВУК следующего слова, а не буква!`,
en:`🇬🇧 a or an:
• a + consonant SOUND: a dog, a book
• an + vowel SOUND: an apple, an elephant, an hour
💡 The SOUND of the next word counts, not the letter!`},
// ---------- SACHUNTERRICHT / BIO / GEO ----------
sachMap:{
de:`🗺️ Deutschland und Karten:
• Deutschland hat 16 Bundesländer, die Hauptstadt ist Berlin.
• Unser Bundesland: Nordrhein-Westfalen (NRW), Landeshauptstadt Düsseldorf.
• Himmelsrichtungen: Norden (oben), Osten (rechts), Süden (unten), Westen (links). Merksatz: „Nie Ohne Seife Waschen!"
• Der Kompass zeigt immer nach Norden.`,
ru:`🗺️ Германия и карты:
• В Германии 16 федеральных земель, столица – Берлин.
• Наша земля: Северный Рейн-Вестфалия (NRW), столица земли – Дюссельдорф.
• Стороны света: север (вверху), восток (справа), юг (внизу), запад (слева). Запоминалка: „Nie Ohne Seife Waschen!"
• Компас всегда показывает на север.`,
en:`🗺️ Germany and maps:
• Germany has 16 federal states, the capital is Berlin.
• Our state: North Rhine-Westphalia (NRW), state capital Düsseldorf.
• Compass directions: North (top), East (right), South (bottom), West (left). Memory aid: "Nie Ohne Seife Waschen!"
• A compass always points north.`},
sachWater:{
de:`💧 Wasser und Wetter:
• Wasserkreislauf: Die Sonne lässt Wasser VERDUNSTEN → Wasserdampf steigt auf → es bilden sich WOLKEN (Kondensation) → es regnet (NIEDERSCHLAG) → das Wasser fließt zurück.
• Drei Zustände: fest (Eis), flüssig (Wasser), gasförmig (Wasserdampf).
• Bei 0 °C gefriert Wasser, bei 100 °C kocht es.`,
ru:`💧 Вода и погода:
• Круговорот воды: солнце ИСПАРЯЕТ воду → пар поднимается → образуются ОБЛАКА (конденсация) → идёт дождь (ОСАДКИ) → вода стекает обратно.
• Три состояния: твёрдое (лёд), жидкое (вода), газообразное (пар).
• При 0 °C вода замерзает, при 100 °C кипит.`,
en:`💧 Water and weather:
• Water cycle: the sun makes water EVAPORATE → vapour rises → CLOUDS form (condensation) → it rains (PRECIPITATION) → water flows back.
• Three states: solid (ice), liquid (water), gas (vapour).
• Water freezes at 0 °C and boils at 100 °C.`},
sachStrom:{
de:`⚡ Strom:
• Ein Stromkreis funktioniert nur, wenn er GESCHLOSSEN ist: Batterie → Draht → Lämpchen → Draht → zurück zur Batterie.
• LEITER lassen Strom durch: Metalle (Kupfer, Eisen).
• NICHTLEITER (Isolatoren): Holz, Kunststoff, Gummi, Glas.
• Sicherheit: Nie mit Strom aus der Steckdose experimentieren! Wasser + Strom = Gefahr!`,
ru:`⚡ Электричество:
• Электрическая цепь работает, только если она ЗАМКНУТА: батарейка → провод → лампочка → провод → назад к батарейке.
• ПРОВОДНИКИ пропускают ток: металлы (медь, железо).
• НЕПРОВОДНИКИ (изоляторы): дерево, пластик, резина, стекло.
• Безопасность: никогда не экспериментируй с розеткой! Вода + ток = опасность!`,
en:`⚡ Electricity:
• A circuit only works when it is CLOSED: battery → wire → bulb → wire → back to the battery.
• CONDUCTORS let current through: metals (copper, iron).
• NON-CONDUCTORS (insulators): wood, plastic, rubber, glass.
• Safety: never experiment with mains electricity! Water + electricity = danger!`},
sachVerkehr:{
de:`🚲 Verkehr und Fahrrad:
• Verkehrssicheres Fahrrad braucht: zwei Bremsen, Klingel, weißes Licht + weißer Reflektor vorne, rotes Licht + roter Reflektor hinten, gelbe Reflektoren in Speichen und Pedalen.
• Regel: rechts fahren, Handzeichen vor dem Abbiegen, an Kreuzungen gilt oft „rechts vor links".
• Helm schützt den Kopf – immer tragen!`,
ru:`🚲 Дорожное движение и велосипед:
• Безопасный велосипед: два тормоза, звонок, белая фара + белый отражатель спереди, красный фонарь + красный отражатель сзади, жёлтые отражатели на спицах и педалях.
• Правила: держись правой стороны, показывай рукой поворот, на перекрёстках часто действует «правый имеет преимущество» (rechts vor links).
• Шлем защищает голову – надевай всегда!`,
en:`🚲 Traffic and bicycle:
• A road-safe bike needs: two brakes, a bell, white light + white reflector at the front, red light + red reflector at the back, yellow reflectors in spokes and pedals.
• Rules: ride on the right, give hand signals before turning, at crossings often "right before left".
• A helmet protects your head – always wear it!`},
sachBody:{
de:`🫀 Körper und Ernährung:
• Das Herz pumpt das Blut durch den Körper. Die Lunge holt Sauerstoff aus der Luft.
• Das Skelett stützt den Körper, der Schädel schützt das Gehirn.
• Ernährungspyramide: VIEL Wasser, Obst und Gemüse – WENIG Süßigkeiten und Fett.
• Zähne: 2× täglich putzen!`,
ru:`🫀 Тело и питание:
• Сердце качает кровь по телу. Лёгкие получают кислород из воздуха.
• Скелет поддерживает тело, череп защищает мозг.
• Пирамида питания: МНОГО воды, фруктов и овощей – МАЛО сладкого и жирного.
• Зубы: чистить 2 раза в день!`,
en:`🫀 Body and nutrition:
• The heart pumps blood through the body. The lungs take oxygen from the air.
• The skeleton supports the body, the skull protects the brain.
• Food pyramid: LOTS of water, fruit and vegetables – LITTLE sweets and fat.
• Teeth: brush twice a day!`},
bioMammal:{
de:`🐕 Säugetiere (Hund & Katze):
• Kennzeichen aller Säugetiere: Fell, lebende Junge, die Mutter SÄUGT die Jungen mit Milch, gleichwarme Körpertemperatur, Lungenatmung.
• Hund: Rudeltier, sehr gute Nase (Spürhund!), Fleischfresser-Gebiss.
• Katze: Einzelgänger, einziehbare Krallen, sieht in der Dämmerung sehr gut, lautloser Schleichjäger.`,
ru:`🐕 Млекопитающие (собака и кошка):
• Признаки млекопитающих: шерсть, живорождение, мать ВСКАРМЛИВАЕТ детёнышей молоком, постоянная температура тела, лёгочное дыхание.
• Собака: стайное животное, отличный нюх, зубы хищника.
• Кошка: одиночка, втяжные когти, отлично видит в сумерках, бесшумный охотник.`,
en:`🐕 Mammals (dog & cat):
• Features of all mammals: fur, live young, the mother FEEDS the young with milk, constant body temperature, lungs.
• Dog: pack animal, excellent nose (sniffer dog!), carnivore teeth.
• Cat: loner, retractable claws, sees very well at dusk, silent stalking hunter.`},
bioSkeleton:{
de:`🦴 Skelett und Muskeln:
• Das Skelett stützt den Körper und schützt die Organe: Schädel → Gehirn, Rippen/Brustkorb → Herz und Lunge, Wirbelsäule → Rückenmark.
• Gelenke verbinden Knochen beweglich (Knie, Ellenbogen, Schulter).
• Muskeln arbeiten immer in PAAREN: Beuger und Strecker (z. B. Bizeps und Trizeps).`,
ru:`🦴 Скелет и мышцы:
• Скелет поддерживает тело и защищает органы: череп → мозг, рёбра → сердце и лёгкие, позвоночник → спинной мозг.
• Суставы подвижно соединяют кости (колено, локоть, плечо).
• Мышцы работают ПАРАМИ: сгибатель и разгибатель (например, бицепс и трицепс).`,
en:`🦴 Skeleton and muscles:
• The skeleton supports the body and protects organs: skull → brain, ribs → heart and lungs, spine → spinal cord.
• Joints connect bones so they can move (knee, elbow, shoulder).
• Muscles always work in PAIRS: flexor and extensor (e.g. biceps and triceps).`},
bioVertebrates:{
de:`🐟 Die 5 Wirbeltierklassen:
1. FISCHE: Kiemen, Schuppen, Flossen, legen Eier (Laich).
2. AMPHIBIEN (Frosch, Molch): leben im Wasser UND an Land, wechselwarm.
3. REPTILIEN (Schlange, Eidechse): Hornschuppen, wechselwarm, legen meist Eier.
4. VÖGEL: Federn, Schnabel, legen Eier, gleichwarm.
5. SÄUGETIERE: Fell, lebende Junge, Milch, gleichwarm.`,
ru:`🐟 5 классов позвоночных:
1. РЫБЫ: жабры, чешуя, плавники, мечут икру.
2. АМФИБИИ (лягушка, тритон): живут в воде И на суше, холоднокровные.
3. РЕПТИЛИИ (змея, ящерица): роговые чешуйки, холоднокровные, откладывают яйца.
4. ПТИЦЫ: перья, клюв, откладывают яйца, теплокровные.
5. МЛЕКОПИТАЮЩИЕ: шерсть, живорождение, молоко, теплокровные.`,
en:`🐟 The 5 vertebrate classes:
1. FISH: gills, scales, fins, lay eggs (spawn).
2. AMPHIBIANS (frog, newt): live in water AND on land, cold-blooded.
3. REPTILES (snake, lizard): horny scales, cold-blooded, mostly lay eggs.
4. BIRDS: feathers, beak, lay eggs, warm-blooded.
5. MAMMALS: fur, live young, milk, warm-blooded.`},
bioFood:{
de:`🥗 Gesunde Ernährung:
• Nährstoffe: KOHLENHYDRATE (Brot, Nudeln) = Energie · EIWEISS (Fleisch, Eier, Milch) = Bausteine · FETTE = Energiespeicher · VITAMINE & MINERALSTOFFE (Obst, Gemüse) = Schutz.
• Viel trinken: Wasser! Zucker-Getränke nur selten.
• Regel: bunt und abwechslungsreich essen.`,
ru:`🥗 Здоровое питание:
• Питательные вещества: УГЛЕВОДЫ (хлеб, макароны) = энергия · БЕЛКИ (мясо, яйца, молоко) = строительный материал · ЖИРЫ = запас энергии · ВИТАМИНЫ и МИНЕРАЛЫ (фрукты, овощи) = защита.
• Пей много воды! Сладкие напитки – редко.
• Правило: ешь разнообразно и «разноцветно».`,
en:`🥗 Healthy eating:
• Nutrients: CARBOHYDRATES (bread, pasta) = energy · PROTEIN (meat, eggs, milk) = building blocks · FATS = energy store · VITAMINS & MINERALS (fruit, veg) = protection.
• Drink lots of water! Sugary drinks only rarely.
• Rule: eat colourful and varied.`},
geoWorld:{
de:`🌍 Kontinente und Ozeane:
Die 7 Kontinente: Asien (größter), Afrika, Nordamerika, Südamerika, Antarktis, Europa, Australien/Ozeanien (kleinster).
Die Ozeane: Pazifik (größter), Atlantik, Indischer Ozean, Arktischer Ozean (Nordpolarmeer), Südlicher Ozean.
💡 Europa und Asien bilden zusammen die Landmasse Eurasien.`,
ru:`🌍 Континенты и океаны:
7 континентов: Азия (самый большой), Африка, Северная Америка, Южная Америка, Антарктида, Европа, Австралия/Океания (самый маленький).
Океаны: Тихий (самый большой), Атлантический, Индийский, Северный Ледовитый, Южный.
💡 Европа и Азия вместе образуют Евразию.`,
en:`🌍 Continents and oceans:
The 7 continents: Asia (largest), Africa, North America, South America, Antarctica, Europe, Australia/Oceania (smallest).
The oceans: Pacific (largest), Atlantic, Indian, Arctic, Southern.
💡 Europe and Asia together form Eurasia.`},
geoGermany:{
de:`🇩🇪 Deutschland und NRW:
• 16 Bundesländer, Hauptstadt Berlin, 9 Nachbarländer.
• NRW: Landeshauptstadt Düsseldorf, größte Stadt Köln. Paderborn liegt in Ostwestfalen!
• Fun Fact: Die Pader in Paderborn ist der kürzeste Fluss Deutschlands (ca. 4 km).
• Höchster Berg: Zugspitze (2.962 m). Wichtige Flüsse: Rhein, Elbe, Donau, Weser.`,
ru:`🇩🇪 Германия и NRW:
• 16 федеральных земель, столица Берлин, 9 соседних стран.
• NRW: столица земли – Дюссельдорф, крупнейший город – Кёльн. Падерборн находится в Восточной Вестфалии!
• Факт: река Падер в Падерборне – самая короткая река Германии (около 4 км).
• Высочайшая гора: Цугшпитце (2.962 м). Важные реки: Рейн, Эльба, Дунай, Везер.`,
en:`🇩🇪 Germany and NRW:
• 16 federal states, capital Berlin, 9 neighbouring countries.
• NRW: state capital Düsseldorf, biggest city Cologne. Paderborn is in East Westphalia!
• Fun fact: the Pader in Paderborn is Germany's shortest river (about 4 km).
• Highest mountain: Zugspitze (2,962 m). Important rivers: Rhine, Elbe, Danube, Weser.`},
geoMapSkills:{
de:`🧭 Karte, Kompass, Maßstab:
• Maßstab 1:100.000 bedeutet: 1 cm auf der Karte = 100.000 cm = 1 km in Wirklichkeit.
• Rechne: cm auf der Karte × Maßstabszahl = echte Entfernung (dann in km umwandeln).
• Die LEGENDE erklärt die Kartenzeichen.
• Auf Karten ist Norden fast immer OBEN.`,
ru:`🧭 Карта, компас, масштаб:
• Масштаб 1:100.000 значит: 1 см на карте = 100.000 см = 1 км в реальности.
• Считай: см на карте × число масштаба = настоящее расстояние (потом переведи в км).
• ЛЕГЕНДА объясняет условные знаки.
• На картах север почти всегда СВЕРХУ.`,
en:`🧭 Map, compass, scale:
• Scale 1:100,000 means: 1 cm on the map = 100,000 cm = 1 km in reality.
• Calculate: cm on the map × scale number = real distance (then convert to km).
• The LEGEND explains map symbols.
• On maps, north is almost always at the TOP.`}
};
function helpText(key){ const h = HELP[key]; if(!h) return ''; return h[LANG] || h.de; }
