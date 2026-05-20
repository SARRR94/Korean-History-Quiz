const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "questions.js");
const content = fs.readFileSync(filePath, "utf8");

const startMarker = "const QUIZ_QUESTIONS = [";
const start = content.indexOf(startMarker);
const end = content.lastIndexOf("];");
const header = content.slice(0, start);
const footer = content.slice(end + 2);
const arraySrc = content.slice(start + startMarker.length, end + 1);

const CATEGORY_LABELS = {};
let questions;
eval(`questions = ${arraySrc}`);

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, " ");
}

function toSingleLine(q) {
  return `  { id: ${q.id}, category: "${q.category}", categoryLabel: "${esc(q.categoryLabel)}", text: "${esc(q.text)}", answer: ${q.answer}, explanation: "${esc(q.explanation)}" },`;
}

const byId = new Map(questions.map((q) => [q.id, q]));

const newArraySrc = arraySrc.replace(
  /\{\n\s+id:\s*(\d+),[\s\S]*?\n\s+\},?/g,
  (match, idStr) => {
    const id = parseInt(idStr, 10);
    if (id < 201 || id > 299) return match;
    const q = byId.get(id);
    return q ? toSingleLine(q) : match;
  }
);

const out =
  header + startMarker + newArraySrc + footer;

fs.writeFileSync(filePath, out, "utf8");

const count = questions.filter((q) => q.id >= 201 && q.id <= 299).length;
console.log(`Converted ${count} questions (201-299) to single-line format.`);
