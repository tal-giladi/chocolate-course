// Merges curriculum/glossary-inbox/module-NN.md into glossary.md (dedupe by term, sort alphabetically).
import fs from "node:fs";
const g = fs.readFileSync("glossary.md", "utf8");
const [intro] = g.split(/\n(?=- \*\*)/);
const entries = new Map();
const add = (line) => {
  const m = /^- \*\*(.+?)\*\*/.exec(line.trim());
  if (!m) return;
  const key = m[1].toLowerCase();
  if (!entries.has(key)) entries.set(key, line.trim());
};
g.split("\n").forEach(add);
for (const f of fs.readdirSync("curriculum/glossary-inbox").sort().filter((f) => { const log = `curriculum/status/${f.replace(".md", ".log")}`; return fs.existsSync(log) && /module done/.test(fs.readFileSync(log, "utf8")); }))
  fs.readFileSync(`curriculum/glossary-inbox/${f}`, "utf8").split("\n").forEach(add);
const sorted = [...entries.entries()].sort((a, b) => a[0].localeCompare(b[0], "he")).map((e) => e[1]);
fs.writeFileSync("glossary.md", intro.trimEnd() + "\n\n" + sorted.join("\n") + "\n");
console.log(sorted.length, "glossary entries");
