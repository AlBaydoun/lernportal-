# 🎓 Lernportal – Klasse 4 → 5 (Realschule Lise Meitner Paderborn)

A complete offline practice-test website for your son. No installation, no internet account, no server needed.

## How to start it

Double-click **`index.html`** — it opens in any browser (Edge/Chrome).
All progress, results and credits are saved automatically in that browser (localStorage).

> Tip: put a shortcut to `index.html` on the desktop of the computer/tablet he uses.
> Important: always use the **same browser on the same device**, otherwise results are stored separately.

## What's inside

- **79 tests** organised by grade and subject:
  - **Klasse 4:** Mathematik (16 tests, incl. 3 full "Lernzielkontrollen" with the 7-task structure), Deutsch (12), Englisch (5), Sachunterricht (6)
  - **Klasse 5 (Realschule NRW):** Mathematik (10), Deutsch (9), Englisch (8), **Informatik (4)**, Biologie (5), Erdkunde (4)
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
