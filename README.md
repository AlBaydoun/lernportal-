# 🎓 Lernportal – Klasse 4 → 5 (Realschule Lise Meitner Paderborn)

A complete offline practice-test website for your son. No installation, no internet account, no server needed.

## How to start it

Double-click **`index.html`** — it opens in any browser (Edge/Chrome).
All progress, results and credits are saved automatically in that browser (localStorage).

> Tip: put a shortcut to `index.html` on the desktop of the computer/tablet he uses.
> Important: always use the **same browser on the same device**, otherwise results are stored separately.

## Two modes

**📚 Freies Training (start page)** — browse by grade (4 → 10) and subject, pick any test directly.

**🗺️ Abenteuer** — a game map with **54 levels** from ⭐ Starter through 👑 Champion (Kl. 5) and on through 🌟 Klasse 6, ⚡ 7, 🔥 8, 💎 9 up to 🎓 Klasse 10 – Abschluss. Each level randomly draws one test from a themed pool (**all 139 tests** are woven into the path). Pass with **≥ 60 %** to unlock the next node; stars show his best score. Videos **play directly in a pop-up player** inside the site.

## What's inside

- **139 tests** covering **Klasse 4 to Klasse 10** (Realschule NRW) — his full school career:
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
