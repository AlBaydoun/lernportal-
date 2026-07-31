# 🎓 Lernportal – Klasse 4 → 5 (Realschule Lise Meitner Paderborn)

A complete offline practice-test website for your son. No installation, no internet account, no server needed.

## How to start it

Double-click **`index.html`** — it opens in any browser (Edge/Chrome).
All progress, results and credits are saved automatically in that browser (localStorage).

> Tip: put a shortcut to `index.html` on the desktop of the computer/tablet he uses.
> Important: always use the **same browser on the same device**, otherwise results are stored separately.

## 👤 Users

The site opens with a login screen. **Timur / `Baydoun1984`** is set up. Each user has completely separate progress (results, levels, lessons read, gadget minutes, practice time).

Admin → **👥 Benutzer**: create more users (name + password), switch user, reset a password, delete a user, and see each user's test count, average and practice time at a glance.

### Continuing on another device

Progress is stored in the browser of each device, so it does **not** sync by itself. To move it: on the old device open Admin → 👥 Benutzer → **Sync-Code erstellen**, copy the code (e.g. send it to yourself in WhatsApp), then on the new device Admin → **Sync-Code laden** and paste it. Everything comes along — results, levels, gadget minutes, streak. Do the same in reverse when he switches back. (The admin JSON export/import in Einstellungen does the same for *all* users at once.)

> Real automatic sync across devices would need a server/database with an account. Say the word and I can set that up — it means his data would live online rather than only on your devices.

⚠️ **Security note:** this is a friendly gate, not a bank. The site's code is public on GitHub, so treat the passwords as "keeps a kid out", not as strong security. Passwords are stored only as one-way hashes — no plaintext anywhere in the code or the browser storage.

## 🎮 Daily gadget time (the whole point)

Every day he starts at **0 minutes** and earns gadget time by working on the platform, up to **120 minutes (2 h) per day**. A meter at the top shows the current balance live.

Per test, the **best attempt of that day** counts: ≥90 % → 30 min · ≥80 % → 20 · ≥70 % → 15 · ≥60 % → 10 · ≥50 % → 5 min. **At midnight everything resets to 0** — so gadget time has to be re-earned every single day. The admin panel (🎮 Gadget-Zeit tab) shows today's total plus the last 7 days, and you can add or subtract minutes manually (e.g. `-30` after he used the tablet).

## Three modes

**📚 Freies Training (start page)** — browse by grade (1 → 10) and subject, pick any test directly.

**🎓 Lektionen** — **147 lessons** from Klasse 1 to Klasse 10. **Every single lesson has both a full written explanation (German + Russian + English) and at least one real explainer video** — 188 hand-checked videos in total. Videos play **inside the site only**; there is deliberately no link to YouTube anywhere, so he cannot drift off into the YouTube feed. Each lesson also has an **Übungsheft** (workbook: practice questions that never count towards grades, repeat as often as he likes) and links to the real tests on that topic. Where a topic has no dedicated video of its own, the closest related lesson's video is shown and clearly marked as such.

## 📈 Seeing his progress

Admin panel → **📈 Fortschritt** shows at a glance: lessons read, tests taken, overall average, **day streak**, total practice time, levels completed, a 14-day bar chart of daily gadget minutes, progress bars per subject and per grade, and automatically computed **💪 strengths** and **📌 topics that need practice** (based on points lost per lesson).

**🗺️ Abenteuer** — a game map with **54 levels** from ⭐ Starter through 👑 Champion (Kl. 5) and on through 🌟 Klasse 6, ⚡ 7, 🔥 8, 💎 9 up to 🎓 Klasse 10 – Abschluss. Each level randomly draws one test from a themed pool (**all 139 tests** are woven into the path). Pass with **≥ 60 %** to unlock the next node; stars show his best score. Videos **play directly in a pop-up player** inside the site.

## What's inside

- **167 tests + 147 lessons** covering **Klasse 1 to Klasse 10** (Realschule NRW) — his full school career:
  - **Klasse 1–3:** Zahlen bis 10/100, Plus & Minus mit Zehnerübergang, das kleine Einmaleins, Uhr lesen, Geld, Formen & Körper, Buchstaben/Silben, richtig schreiben
  - **Sprachen in der Tiefe:** Englisch (27 Tests: bis Reported Speech, Modals, Relative Clauses, Writing), Französisch (6), **Spanisch (4, neu)**, **Russisch (5, neu — Kyrillisch, 6 Fälle, Aspekt)**
  - **Klasse 4:** Mathematik (16, incl. 3 full "Lernzielkontrollen"), Deutsch (12), Englisch (5), Sachunterricht (6)
  - **Klasse 5:** Mathematik, Deutsch, Englisch, Informatik, Biologie, Erdkunde
  - **Klasse 6:** Brüche, Dezimalzahlen, Winkel · Satzgefüge, Textsorten · Simple Past, Present Progressive · Zellen & Fotosynthese · Klimazonen · Physik-Grundlagen · **Französisch**, Antike
  - **Klasse 7:** Negative Zahlen, Prozent, Dreisatz, Terme · Aktiv/Passiv, Konjunktiv · Present Perfect, Steigerung · Optik · Stoffe & Trennverfahren · Mittelalter · Demokratie · Tabellen/Präsentationen
  - **Klasse 8:** Lineare Funktionen, Körper, Statistik · Literatur & Stilmittel · If-Sätze · Elektrizität · Atome · Neuzeit · Ökologie · Stadt & Wirtschaft
  - **Klasse 9:** Pythagoras, Potenzen, Zinsen · Erörterung · Passive Voice · Mechanik · Säuren & Laugen · 20. Jahrhundert · Genetik · Python
  - **Klasse 10:** Quadratische Gleichungen, Trigonometrie + **Abschlussprüfungen** in Mathe, Deutsch, Englisch und Physik
  - Subjects: Mathematik, Deutsch, Englisch, Französisch, Informatik, Sachunterricht, Biologie, Physik, Chemie, Erdkunde, Geschichte, Politik/Wirtschaft
- **Instant feedback:** after each task he presses "Prüfen" and immediately sees ✔ right / ✘ wrong (but never the solution — that stays admin-only).
- **📚 Erklärung & 🎬 button on every test card:** full explanation of all topics in the test (DE/RU/EN) plus hand-verified YouTube videos in German and Russian that explain exactly that lesson (Lehrerschmidt, Инфоурок & co.). Topics without an exact matching video show the written explanation only — no generic links.
- **⏱ Daily practice timer:** the blue chip shows how many minutes he practised **today** (counts only while he is actively using the site; resets automatically at midnight). The admin panel's **📅 Tagebuch** tab keeps the full history: per day it shows practice time, every test taken with score/attempt/help usage, plus an auto-generated conclusion — his wins (≥80 %) and the exact topics where he lost the most points ("noch üben").
- **Math tests are generated with fresh numbers on every attempt** (🎲 badge) — so he can never memorise answers.
- **3 languages:** German (main) 🇩🇪, Russian 🇷🇺, English 🇬🇧 — switch at the top right. Every question also has a 🌐 translation button.
- **💡 Help button on every question** — explains HOW to solve that type of task (in all 3 languages), but **never shows the answer**.
- **2 attempts per test.** After that the test locks and he must ask you. You can grant extra attempts in the admin panel.
- **Credits = gadget minutes:** ≥90 % → 30 min · ≥80 % → 20 · ≥70 % → 15 · ≥60 % → 10 · ≥50 % → 5. The **best attempt per test** counts. The balance is always visible at the top.

## Admin panel (⚙️ icon, top right)

**Default password: `lise2026`** — change it in Settings on first use!

| Tab | What it does |
|---|---|
| 📊 Ergebnisse | Every attempt: score, time, help used — click a row to see **his answer vs. the correct solution** per question |
| 🔓 Versuche | Grant +1 attempt or reset attempts per test |
| 🪙 Credits | Balance, pay out minutes (enter e.g. `-30` + note "Tablet Samstag"), or give bonus minutes |
| 🔑 Lösungen | The **only place** with answer keys. Generated math tests show a sample version; exact solutions for each attempt are under Ergebnisse |
| ⚙️ Einstellungen | Change password, export/import backup (JSON), full reset |

Solutions are never visible to the student — the test result only shows which questions were right/wrong.

## Notes

- An attempt is counted when a test is **started** (so quitting halfway doesn't give a free retry).
- Backup: admin → Einstellungen → "Daten exportieren" saves a JSON file you can re-import later or on another device.
