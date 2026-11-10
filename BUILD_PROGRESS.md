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
- [ ] Research: official Israeli sources (`curriculum/research/sources.md`)
- [ ] References: `references/where-to-buy.md`, `references/kashrut-guide.md`
- [ ] Module 3 — טמפרור (pilot)
- [ ] Module 1 — המטבח של השוקולד
- [ ] Module 2 — המסה וטיבול בלי טמפרור
- [ ] Module 4 — טבלאות ותבניות
- [ ] Module 5 — בונבונים
- [ ] Module 6 — גנאש וטראפלס
- [ ] Module 7 — מילויים
- [ ] Module 8 — צורות תלת־ממד
- [ ] Module 9 — קישוטי שוקולד
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

- Research agent: official sources → `curriculum/research/sources.md`
- Research agent: shops and kashrut → `references/where-to-buy.md`, `references/kashrut-guide.md`

## Decisions and open questions

- One fixed set of 9 `##` sections in every lesson, business lessons too (instructions win over plan §4,
  which had `## בעסק שלכם` for business lessons; business actions go under `## תרגול`).
- Sidebar module lines stay `- **Module N — <Hebrew title>**` (the importer parses the English word).
- RTL: the Academy is LTR-only today (`src/i18n/config.ts` has only `en: "ltr"`; lesson HTML allows a
  `dir` attribute but the layout sets `dir="ltr"`). Content is written anyway; Academy fix is for Tal.
- Modules are added to `_sidebar.md` only when finished, so check-course stays at 0 problems.
