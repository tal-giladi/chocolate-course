# Build progress

Goal: build the Hebrew course "שוקולד בעבודת יד" per `curriculum/plan.md`, following
`tals-academy/docs/new-course-instructions.md` (exception: Hebrew) and `curriculum/build-spec.md`,
until `npm run check-course` reports `0 problems`. Repo: `tal-giladi/chocolate-course` (not created yet).

## Resume procedure

1. Read this file, then `curriculum/status/*.log`. Skip anything marked done.
2. At most two writing agents at once; one module per agent; agents follow `curriculum/build-spec.md`
   and validate with `node curriculum/tools/check-module.mjs NN`. Agents never spawn agents.
3. Shared files (`_sidebar.md`, `README.md`, `glossary.md`, `references/`, `templates/`) are edited
   only by the main session. After a module finishes: `node curriculum/tools/build-sidebar.mjs`,
   `node curriculum/tools/merge-glossary.mjs`, run check-course from the Academy repo, commit.
4. Lesson list and running numbers: `curriculum/tools/modules.txt` → `node curriculum/tools/build-manifest.mjs`.

## Units

- [x] Repo, plan in `curriculum/plan.md`, build spec, manifest, tools, templates, README, course-details
- [x] Research: official Israeli sources (`curriculum/research/sources.md`)
- [x] References: `references/where-to-buy.md`, `references/kashrut-guide.md`
- [x] Module 3 — טמפרור (pilot)
- [x] Module 1 — המטבח של השוקולד
- [x] Module 2 — המסה וטיבול בלי טמפרור
- [x] Module 4 — טבלאות ותבניות
- [x] Module 5 — בונבונים
- [x] Module 6 — גנאש וטראפלס
- [x] Module 7 — מילויים
- [x] Module 8 — צורות תלת־ממד
- [x] Module 9 — קישוטי שוקולד
- [ ] Module 10 — לוח השנה היהודי והישראלי
- [ ] Module 11 — אריזה ומתנה
- [ ] Module 12 — טבעוני ופרווה
- [ ] Module 13 — בריא יותר
- [ ] Module 14 — אלרגיות ורגישויות
- [ ] Module 15 — לפני שפותחים
- [ ] Module 16 — בטיחות מזון ורישוי
- [ ] Module 17 — כשרות לעסק
- [ ] Module 18 — מוצר, תווית וחיי מדף
- [ ] Module 19 — מספרים
- [ ] Module 20 — חנות אונליין ומשלוחים
- [ ] Module 21 — שיווק והשקה
- [ ] Final QA (check-course 0 problems, link check, TODO_FOR_TAL)

## Agents now

- Module writers: module 10, module 11

## Decisions and open questions

- One fixed set of 9 `##` sections in every lesson, business lessons too (instructions win over plan §4,
  which had `## בעסק שלכם` for business lessons; business actions go under `## תרגול`).
- Sidebar module lines stay `- **Module N — <Hebrew title>**` (the importer parses the English word).
- RTL: the Academy is LTR-only today (`src/i18n/config.ts` has only `en: "ltr"`; lesson HTML allows a
  `dir` attribute but the layout sets `dir="ltr"`). Content is written anyway; Academy fix is for Tal.
- Modules are added to `_sidebar.md` only when finished, so check-course stays at 0 problems.
- Research corrections to the plan (sources.md): kashrut-description ruling is 2017 (דנג"ץ 5026/16), not 2018;
  no 2019 parve-chocolate recall found — use Feb 2025 (De Carina pralines) and Oct 2026 (Pobeda) recalls;
  SI 1145 → EU 1169/2011 rules voluntary since 1.1.2025, mandatory 1.1.2028 (draft) — 18.1 teaches both;
  polyol warning wording unconfirmed ("פעילות מעיים מוגברת" per press) — lessons say "check current rule".
  Red labels for solids: sugars 10 g, sat. fat 4 g per 100 g → chocolate gets two red labels; front ≤25 cm² exempt.
- References (2026-11-10): no dreidel mould sold in Israel → 08.2 must teach ordering abroad or a two-half-sphere/cone workaround;
  no vegan "milk" chocolate found in Israel (12.2 makes it at home); Cacao Barry and Belcolade ARE available.
- Final QA: add marble/granite slab and room thermometer-hygrometer to where-to-buy (כלים); re-check Mycryo stock/kashrut; optional tempering-log columns (seed grams, minutes on slab).
- Final QA: turn 02.1/02.2 plain mentions of 01.1/01.4 into links; where-to-buy lacks nuts & dried fruit, silicone ice-cube trays, disposable spoons.
- Final QA: where-to-buy add silicone spatula, airtight boxes; templates/tasting-sheet.md (01.5 inline table); split מכיל/עלול להכיל in recipe-card; add Oct 2026 Pobeda recall to kashrut guide; cross-links listed in curriculum/matrix/module-01.md; 01.4 cites FDA/FARE (gov.il 403) — swap to MoH if reachable.
- Final QA: process every '## Requests for main session' in curriculum/matrix/module-*.md (shared-file additions, plain-id mentions → links).
- Final QA (must): align 05.2 ganache-bonbon storage (2 weeks at 14-18°C) with 06.4 (home ganache aw 0.85-0.88 → fridge).
