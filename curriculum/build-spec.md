# Build spec for module writers

You write ONE module of the Hebrew course "שוקולד בעבודת יד: מהמטבח הביתי ועד חנות אונליין".
Read first, in this order:

1. `C:\Users\TalGiladi\OneDrive\repos\tals-academy\docs\new-course-instructions.md` (binding; the one
   exception Tal approved: the course is in **Hebrew**, not English).
2. `curriculum/plan.md` (course plan; §1-7, 9, 10 matter most; §3 has your module's lesson list).
3. this file.
4. `curriculum/manifest.json` (your module's lesson ids, titles, project file name).
5. `references/where-to-buy.md`, `references/kashrut-guide.md` (shops and kashrut, already verified),
   `curriculum/research/sources.md` (verified Israeli official sources: law, labelling, tax, kashrut).
6. One finished module if any exists (`lessons/module-03/` is the pilot) to match tone and format.

Do NOT spawn agents. Do not commit.

## What you produce for module NN

- `lessons/module-NN/lesson-MM.md` + `lesson-MM.quiz.yaml` for every lesson in the manifest (exactly
  those ids; you may polish titles slightly — report the final titles).
- `assessments/module-NN-quiz.md` + `assessments/module-NN-quiz.quiz.yaml` (10 questions).
- `projects/mNN-<slug>.md` (file name in the manifest): the module's larger practical piece.
- Diagrams: `assets/mNN-<name>.svg` (hand-written SVG, Hebrew labels, `direction="rtl"` text, readable
  on white and dark backgrounds — dark strokes on a white rect background) and/or ```` ```mermaid ````
  blocks. At least one diagram per module.
- `curriculum/glossary-inbox/module-NN.md`: new terms, one per line: `- **מונח** (English term) — הסבר קצר.`
- `curriculum/matrix/module-NN.md`: module notes: every source you used (title, URL, what for), any
  statement you could not source, and `## Requests for main session` (templates/references to add,
  links other modules should make).
- Append `lesson-MM done` to `curriculum/status/module-NN.log` after each lesson (md + quiz), then
  `module done` at the end.

Never edit shared files: `_sidebar.md`, `README.md`, `glossary.md`, `references/`, `templates/`,
`BUILD_PROGRESS.md`, `TODO_FOR_TAL.md`, other modules.

## Language and tone

- Hebrew throughout: lessons, quizzes, explanations, alt text, diagram labels. Plain, warm, direct
  (second person plural or neutral "מכינים", "שוקלים"). Short sentences. No marketing tone.
- Professional terms: Hebrew first, English/French in parentheses the first time in a lesson
  (קוברטורה (couverture), טמפרור (tempering), הזרעה (seeding)).
- Numbers: metric (גרם, ק"ג, °C, ס"מ), prices in ₪. Use Western digits.
- Product and shop names as they appear in Hebrew in the references.

## Lesson format (exact)

```markdown
---
id: "03.2"
module: 3
minutes: 10
practice_minutes: 45
prerequisites: ["03.1", "02.1"]
objectives:
  - "לטמפר 300 גרם שוקולד מריר בשיטת ההזרעה ולהגיע ל־31-32°C."
  - "להסביר למה קריסטלים מצורה V נותנים ברק וסנאפ."
volatility: concept
sources:
  - title: "…"
    url: https://…
last_verified: "2026-11-10"
---

# 03.2 · טמפרור בשיטת ההזרעה

פסקת פתיחה רגילה (2-3 משפטים, בלי עיצוב בתחילתה): מה עושים בשיעור ומה מכינים בסופו.

## מה צריך
## למה זה עובד
## שלב אחר שלב
## בדיקה: איך יודעים שהצליח
## כשזה משתבש
## חלופות
### טבעוני / פרווה
### בריא יותר
### כשרות
## איפה קונים
## תרגול
## סיכום
```

- Exactly those 9 `##` sections, in that order, in every lesson (business lessons too). `###` inside.
- Objectives: 2-4, measurable, quoted strings.
- `volatility: implementation` when the lesson depends on prices, products, shops, laws, labelling,
  tax or platforms; otherwise `concept`.
- `prerequisites`: real earlier lesson ids only. `minutes` 5-15 honest; `practice_minutes` honest
  hands-on time including setting/cooling.
- **מה צריך**: equipment and ingredients for the lesson, as a short list or table with grams. Always
  the small practice quantity (plan §6.1): tempering 250-300 g, ganache on ~100 g chocolate, 6-8
  bonbons, one dreidel before a box of five. Give the full-batch quantity next to it where relevant.
- **למה זה עובד**: the science/reasoning with numbers (cocoa-butter crystal forms I-VI, melting points,
  emulsions, water activity, sugar crystallisation, cost structure for business lessons). At least one
  diagram per module where it helps.
- **שלב אחר שלב**: numbered steps with temperatures, times and visual cues.
- **בדיקה: איך יודעים שהצליח**: concrete checks (snap, shine, release from mould, temperature, taste,
  for business: a filled document passes a checklist).
- **כשזה משתבש**: table `| מה רואים | למה זה קורה | מה עושים עכשיו | איך מונעים בפעם הבאה |`, then a
  fixed paragraph `### מה עושים עם מה שלא הצליח` (nothing goes in the bin: re-melt and re-temper,
  brownies, hot chocolate, sauce, truffles, bark).
- **חלופות**: always the three `###` subsections. Vegan/parve: what to swap and what it changes
  (tempering temperatures, texture, shelf life). Healthier: less sugar, higher cocoa, smaller portions
  — no health promises. Kashrut: which kind of raw material (חלבי / חלב ישראל / פרווה / ציוד חלבי)
  the recipe needs and what to look for on the package, linking `../../references/kashrut-guide.md`.
  In business lessons these subsections cover the business side of each option (a vegan line, a
  less-sugar line, selling to kashrut-observant customers); if one truly does not apply, one sentence
  saying why and pointing to where it is covered.
- **איפה קונים**: no shop links inside lessons. Link the relevant section of
  `../../references/where-to-buy.md` and/or `../../references/kashrut-guide.md` (e.g.
  `[תבניות פוליקרבונט](../../references/where-to-buy.md#…)` — use the exact headings listed at the end
  of those files to build anchors; GitHub anchor = heading text, spaces → `-`, punctuation removed) and
  describe generically what to buy (type, cocoa %, size) so it can be bought anywhere. Business
  lessons: link the official sources from `curriculum/research/sources.md` relevant to the lesson.
- **תרגול**: every lesson ends with practice. Subsections: `### משימה` (what to make, small quantity),
  `### זמן` , `### יומן` (link `../../templates/practice-log.md`), `### בדיקה עצמית` (task list
  `- [ ] …`). Business lessons: the practice is a document/sheet the learner fills (link the template)
  with a worked example in `<details><summary>דוגמה פתורה</summary>…</details>`.
- **סיכום**: 3-5 bullets.
- Lesson 1 of each practical module says briefly: watching is not doing; the Academy cannot grade
  photos — compare your result with the checks; keep a practice log.
- The first lesson of the module ends `סיכום` with one bullet saying what the module project is, linking
  `../../projects/mNN-….md`. The last lesson's `תרגול` links the project too.

## Safety and honesty

- Hot sugar/caramel (170°C+), boiling cream, knives, oven, microwave hot spots, alcohol, allergens,
  luster dust "for decoration only", raw chocolate, fresh fillings: open the step with
  `> [!WARNING]` or `> [!CAUTION]` (one or two specific sentences).
- Allergens (nuts, peanuts, milk, soy, gluten, sesame, eggs) named in every recipe's `מה צריך`.
- Kashrut: only what is written on the package or manufacturer site; never rule on halacha; "לבדוק
  על האריזה" / "לשאול את הרב".
- Health: no health promises or medical claims. Maltitol: always the GI warning (gas, diarrhoea in
  quantity, not for children in quantity).
- Law/tax/labelling (modules 13.5, 15-21): general information, not legal or tax advice; facts only
  from `curriculum/research/sources.md` or official sources you opened, with date; give "what to ask
  and whom" for licensing.
- Competitors (e.g. גיפטוש): neutral examples only (price, box size, packaging) with the date checked;
  no criticism, no recommendation.
- Technical chocolate claims: cite reputable sources you opened (Callebaut Academy / callebaut.com,
  Valrhona, Cacao Barry, Ecole Chocolat, peer-reviewed papers on cocoa-butter polymorphism, Serious
  Eats, King Arthur, Ministry of Health, FDA/EFSA for food safety). Open each URL (WebFetch) before
  citing it. 2-5 sources per lesson. Temperatures as ranges, with the reason.

## Quizzes (Hebrew)

Follow section 5 of the instructions exactly. Lesson quiz: 4-5 questions (3 minimum). Module quiz:
10 scenario questions (a learner in a real Israeli kitchen or small business: a failed batch, a
customer question, a label, a price, a heat wave delivery). Wrong options are plausible mistakes.
Spread `correct` evenly (10 questions: 2-3 of each 0-3, no pattern; 4-5 questions: no position more
than twice). The correct option must not be the longest (the checker flags it if it is >25% longer
than the average of the others) — make wrong options equally detailed. No "כל התשובות" / "אף אחת".
Always use `>-` block scalars for question, every option and explanation.

## Module quiz intro page

`assessments/module-NN-quiz.md`: `# מבחן מודול N: Title`, one paragraph on what it covers, "10 שאלות
רב־ברירה על מצבים אמיתיים, ציון עובר 70%", then `## חזרה לפי נושא`: bullets
`- נושא → [NN.M · Title](../lessons/module-NN/lesson-MM.md)`, then one line linking the project.
No questions or answers, no "תשובות" heading.

## Project brief

`projects/mNN-<slug>.md`: `# פרויקט: Title`, intro paragraph, `## המשימה`, `## מה צריך`,
`## שלבים`, `## מה מגישים` (what the learner makes/writes/photographs for themselves),
`## בדיקה עצמית` (table: קריטריון | עומד בדרישה | צריך עוד עבודה), `## קישורים לשיעורים`.
Link templates in `templates/` by relative path (`../templates/<name>.md`).

## Templates available (link; do not edit)

- `templates/practice-log.md` — יומן תרגול (מה עשיתי, טמפרטורות, מה יצא, מה אשנה)
- `templates/tempering-log.md` — יומן טמפרור (שיטה, טמפרטורות, בדיקה)
- `templates/recipe-card.md` — כרטיס מתכון (רכיבים, גרסת תרגול/מלאה, חלופות, אלרגנים, כשרות)
- `templates/gift-box-plan.md` — תכנון מארז (פריטים, אריזה, עלות)
- `templates/pricing-sheet.md` — גיליון תמחור
- `templates/product-label.md` — תווית מוצר
- `templates/market-research.md` — מחקר שוק
- `templates/business-plan.md` — תוכנית עסקית קצרה
- `templates/production-plan.md` — תכנון ייצור לעונה

Reference pages: `references/where-to-buy.md`, `references/kashrut-guide.md`, `glossary.md`.

## Finish

Run `node curriculum/tools/check-module.mjs NN` from the course root until it prints
`0 problems in module NN`. Then append `module done` to the status log and reply with: final lesson
titles, the project file name, anything under "Requests for main session" (max 15 lines).

## Conventions from the pilot (module 3) — copy these

- `מה צריך`: a table `פריט | כמות לתרגול | כמות מלאה | הערה`, then a bold **אלרגנים:** line.
- `למה זה עובד`: name the source inline for every number; manufacturer ranges in a table with the brand
  next to each range, saying the curve on the pack wins.
- Safety: one `> [!WARNING]` at the top of `שלב אחר שלב` (plus inline ones for specific hot steps);
  the maltitol warning in every `### בריא יותר` that mentions maltitol.
- `### כשרות`: only what is written on packages, plus "אם יש ספק, שואלים את הרב".
- First lesson of a practical module: a `### לפני שמתחילים את המודול` box inside `מה צריך`.
- Practice reuses the same chocolate across lessons (re-melt), so a module costs little; the project
  self-check table ends with a "בלי בזבוז" row.
- Read `lessons/module-03/` before writing, and match its depth (~15-19 KB per lesson).
