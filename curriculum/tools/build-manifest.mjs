// Builds curriculum/manifest.json from curriculum/tools/modules.txt (planning tool, not imported).
import fs from "node:fs";
const lines = fs.readFileSync("curriculum/tools/modules.txt", "utf8").split("\n").filter(Boolean);
const modules = [];
let running = 0;
for (const line of lines) {
  const m = /^(\d+)\|(.+?)\|(.+)$/.exec(line);
  if (m) { modules.push({ number: +m[1], title: m[2], project: m[3], lessons: [] }); continue; }
  const mod = modules.at(-1);
  const nn = String(mod.number).padStart(2, "0");
  const mm = String(mod.lessons.length + 1).padStart(2, "0");
  mod.lessons.push({ id: `${nn}.${mod.lessons.length + 1}`, running: ++running, title: line.trim(), file: `lessons/module-${nn}/lesson-${mm}.md` });
}
for (const mod of modules) {
  const nn = String(mod.number).padStart(2, "0");
  mod.quiz = `assessments/module-${nn}-quiz.md`;
  mod.project = `projects/m${nn}-${mod.project}.md`;
}
fs.writeFileSync("curriculum/manifest.json", JSON.stringify({ modules }, null, 2) + "\n");
console.log(modules.length, "modules,", running, "lessons");
