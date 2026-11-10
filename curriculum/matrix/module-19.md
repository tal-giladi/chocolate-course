# Module 19 — מספרים: notes

Written 2026-11-10. Every external source below was opened that day with WebFetch. All worked-example numbers were recomputed with a script; they build on the 11.2 dreidel-box example (raw 10.45, packaging 3.13, waste 12% = 1.63, total 15.21).

## Sources

| Title | URL | Used for | Lessons |
|---|---|---|---|
| כל זכות, מס ערך מוסף | https://www.kolzchut.org.il/he/מס_ערך_מוסף_(מע"מ) | VAT 18% from 1.1.2025, 17% until 31.12.2024 | 19.2, 19.4, quizzes |
| כל זכות, עוסק פטור | https://www.kolzchut.org.il/he/עוסק_פטור | Ceiling 122,833 ₪ (2026), 120,000 (2025), turnover not profit; no VAT charged; may not issue tax invoice (issues חשבון עסקה + receipt); cannot offset input VAT (it is part of cost) | 19.1, 19.2, 19.4, quizzes |
| כל זכות, שכר מינימום | https://www.kolzchut.org.il/he/שכר_מינימום | 35.40 ₪/h, 6,443.85 ₪/month from 1.4.2026 (labour reference point) | 19.1 |
| Wix Help Center, Connecting Grow by Meshulam | https://support.wix.com/en/article/connecting-grow-by-meshulam-as-a-payment-provider | Pay-by-use 1.7% + 1 ₪ per transaction excl. VAT; 1.5% + 1 ₪ at 5,000 ₪/month; service package 59 ₪/month + 1.5% (page undated) | 19.1, 19.2, 19.4 |
| Wix Help Center, Connecting Pelecard | https://support.wix.com/en/article/connecting-pelecard-as-a-payment-provider | "From 1.50%" (background only, not in lesson text) | background |
| ice, 19.11.2025, delivery comparison | https://www.ice.co.il/consumerism/news/article/1091833 | GetPackage door-to-door ~70 ₪ fixed; Israel Post express 5 kg Be'er Sheva-Haifa ~73 ₪ | 19.1, 19.2, quizzes |
| calcalist, 7.1.2025, Israel Post prices | https://www.calcalist.co.il/local_news/article/h1ohyaq81x | Courier home delivery for receiving parcels 25→29 ₪ (recipient service; not used in text) | background |
| ynetnews, allocation numbers | https://www.ynetnews.com/business/article/r1dznurgfe | From 1.6.2026 >5,000 ₪ before VAT needs allocation number; tax invoices only; customer may lose VAT deduction; artificial splitting improper (article undated, ~late May 2026) | 19.2, 19.4, quizzes |
| חוק הגנת הצרכן (ויקיטקסט) | https://he.wikisource.org/wiki/חוק_הגנת_הצרכן | s.17א "המחיר הכולל" includes VAT; s.17ב(א) display total price | 19.2, module quiz |
| SuperfastCPA, margin vs markup | https://www.superfastcpa.com/what-is-the-difference-between-margin-and-markup | Formulas: margin = (price − cost)/price; markup = (price − cost)/cost (page undated) | 19.2 |
| גיפטוש, מארז סביבונים משוקולד | https://www.giftush.co.il/מארז-סביבונים-משוקולד | 5 dreidels, 40 ₪, no delivery fee shown (neutral comparison) | 19.1, 19.2, 19.4, quizzes |
| Hebcal, holidays 2026-2027 | https://www.hebcal.com/holidays/2026-2027 | Chanukah begins evening Fri 4.12.2026, ends 12.12 | 19.3 |
| Callebaut, How to mould | https://www.callebaut.com/en/callebaut-chocolate-academy/tutorials/moulding/how-to | Set ~5 min mould upside down; fridge 14-16 °C "a few minutes"; mould 26-27 °C | 19.3 |
| Callebaut, Prevent fat bloom | https://www.callebaut.com/callebaut-chocolate-academy/tutorials/storing/prevent-fatbloom | Finished products at constant 18-20 °C | 19.3, quiz |
| Callebaut, Moulded chocolates troubleshooting | https://www.callebaut.com/en/callebaut-chocolate-academy/troubleshooting/moulded-chocolates | No numbers; opened, not cited | background |
| ice, 25.3.2026 (Swish) | https://www.ice.co.il/research/news/article/1107428 | Opened for corporate context; not cited in text (15.1 already covers it) | background |
| references/where-to-buy.md, references/kashrut-guide.md, lessons 11.2, 08.2, 15.1, 15.2, 17.1, 17.2 | (internal) | Couverture prices (Lubeka 65 ₪/kg dark and milk, Callebaut white 179 ₪/2.5 kg, 811 parve 259 ₪/5 kg; 80-100 ₪/kg small bags), packaging prices, 25 min per box, competitor unit prices, 49 ₪/h kashrut average | all |

## Assumptions in worked examples (marked "הנחה" in text)

- Labour 50 ₪/h; 25 min per dreidel box (from 15.1 example), 20 min in corporate batches.
- Fixed costs 3,600 ₪/year over 900 boxes = 4.00 ₪/box.
- Logo sticker 1.00 ₪; one delivery of 70 ₪ per corporate order; mould cycle ~1 hour; 2 moulds × 24 cavities; 6 net production hours/day + 1 h admin.

## Statements I could not source

- No Israeli card-acquirer published rate for small businesses was found (Isracard tariff says "per agreement"); the lesson uses the Grow-by-Meshulam rate from Wix's help page as one example and says so.
- No official Israel Post / courier price list was readable; the ~70 ₪ figure is from an ice article (19.11.2025).
- Whether insurance, accountant etc. carry deductible VAT for עוסק מורשה is not addressed; the lesson keeps overhead unchanged as a cautious assumption.
- The exact total fridge time for moulded shells is not given by Callebaut ("a few minutes"); the lesson uses the course's own 08.2 timings.

## Requests for main session

- `templates/pricing-sheet.md`: consider adding rows used in module 19: "מעמד מע"מ (פטור/מורשה)" at the top, "מחיר רצפה", "בדיקה בחזרה (רווח, מרווח, תוספת)", "בדיקת רגישות (3 שורות)", and a column for date/source in part 1. Part 4 says waste is % of raw materials; the 11.2/19.x example applies 12% to raw materials + packaging — harmonise wording ("מחומרי הגלם, ואפשר גם מהאריזה").
- `templates/production-plan.md`: consider a row "צוואר בקבוק" and "קיבולת מתוכננת (80%)" in the capacity table, and a "שעות" column in the schedule.
- `curriculum/research/sources.md` §7: add minimum wage (35.40 ₪/h from 1.4.2026, kolzchut), Grow by Meshulam fee example (Wix help page), and the ice 19.11.2025 delivery comparison; mark "Bit / PayBox לעסקים: לא נבדק" still open.
- glossary: merge `curriculum/glossary-inbox/module-19.md`.
- Links later modules should make back: 20.1/20.2 (platforms, payments) → 19.1 fee per order (fixed fee hurts small orders; VAT on fee for עוסק פטור); 20.3 (shipping) → 19.1 shipping as a separate per-order line and 19.2 corporate single delivery; 21.2 (corporate gifts) → 19.2 tiers, deposit, invoice/allocation number, and project m19; 21.x (launch) → 19.3 order cut-off date by capacity.
- Back-links already made in module 19 (as requested by earlier matrices): 08.2 and project m08 (19.1, 19.3, project), 11.2 worked example (19.1-19.4), project m07 (19.1, project), project m10 (19.3, project), project m12 / m13 (19.1, 19.4), project m14 and m14-separation-plan.svg (19.3), project m16 batch sheet (19.3), 15.1 hours and 15.2 unit-price range 6.25-11.67 (19.1, 19.2), 17.1 kashrut as fixed cost and 17.2 ₪/kg by kashrut (19.1, 19.2, 19.4). Module 08 quiz q10 idea (raw vs full cost vs market price) is module-quiz q10.
- Optional: lessons 08.2 and 11.2 say "תמחור מלא ... מודול 19" without a link; the main session may turn those into links to `../module-19/lesson-01.md`.
