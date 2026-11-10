// Rebuilds _sidebar.md: fixed reference links + every module whose status log says "module done".
// Lesson titles come from each lesson's H1; running numbers from curriculum/manifest.json.
import fs from "node:fs";
const manifest = JSON.parse(fs.readFileSync("curriculum/manifest.json", "utf8"));
const head = [
  "- [Home](/)",
  "- [מילון מונחים](glossary.md)",
  "- [איפה קונים: כלים, אריזות וחומרי גלם](references/where-to-buy.md)",
  "- [מדריך כשרות לחומרי גלם](references/kashrut-guide.md)",
  "- [תבניות](templates/README.md)",
];
const stages = { 1: "חלק א — יסודות", 4: "חלק ב — מוצרים ועיצוב", 12: "חלק ג — חלופות", 15: "חלק ד — עסק: חנות שוקולד אונליין" };
const out = [...head];
for (const m of manifest.modules) {
  const nn = String(m.number).padStart(2, "0");
  const log = `curriculum/status/module-${nn}.log`;
  if (!fs.existsSync(log) || !/module done/.test(fs.readFileSync(log, "utf8"))) continue;
  if (stages[m.number]) out.push("", `- ${stages[m.number]}`);
  out.push(`- **Module ${m.number} — ${m.title}**`);
  for (const l of m.lessons) {
    const h1 = /^# \d{2}\.\d+ · (.+)$/m.exec(fs.readFileSync(l.file, "utf8"))[1].trim();
    out.push(`  - [${String(l.running).padStart(2, "0")} · ${h1}](${l.file})`);
  }
  out.push(`  - [מבחן מודול ${m.number}](${m.quiz})`);
}
fs.writeFileSync("_sidebar.md", out.join("\n") + "\n");
console.log("sidebar written");
// The docsify site (index.html, relativePath on) needs root-absolute sidebar links.
fs.writeFileSync("_site_sidebar.md", out.join("\n").replace(/\]\((?!\/|https?:)/g, "](/") + "\n");
