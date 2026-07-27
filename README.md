# 🎓 Lernportal – Klasse 4 → 5 (Realschule Lise Meitner Paderborn)

A complete offline practice-test website for your son. No installation, no internet account, no server needed.

## How to start it

Double-click **`index.html`** — it opens in any browser (Edge/Chrome).
All progress, results and credits are saved automatically in that browser (localStorage).

> Tip: put a shortcut to `index.html` on the desktop of the computer/tablet he uses.
> Important: always use the **same browser on the same device**, otherwise results are stored separately.

## What's inside

- **54 tests** organised by grade and subject:
  - **Klasse 4:** Mathematik (13 tests, incl. 3 full "Lernzielkontrollen" with the 7-task structure), Deutsch (8), Englisch (3), Sachunterricht (5)
  - **Klasse 5 (Realschule NRW):** Mathematik (7), Deutsch (6), Englisch (5), Biologie (4), Erdkunde (3)
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
