'use strict';
const fs   = require('fs');
const path = require('path');

const WORDS_PATH = path.join(__dirname, '..', 'src', 'data', 'words.json');

const existing = JSON.parse(fs.readFileSync(WORDS_PATH, 'utf8'));
const existingEN = new Set(existing.map(w => w.en.toLowerCase()));

const batches = ['a1','a2','b1','b2'].map(level =>
  JSON.parse(fs.readFileSync(path.join(__dirname, `is_kariyer_${level}.json`), 'utf8'))
);
const newWords = batches.flat();

// Son kontrol
const crossDups = newWords.filter(w => existingEN.has(w.en.toLowerCase())).map(w => w.en);
if (crossDups.length) { console.error('ÇAKIŞMA:', crossDups); process.exit(1); }

const enSet = new Set();
const intDups = [];
for (const w of newWords) {
  const key = w.en.toLowerCase();
  if (enSet.has(key)) intDups.push(w.en);
  else enSet.add(key);
}
if (intDups.length) { console.error('İÇ TEKRAR:', intDups); process.exit(1); }

const merged = [...existing, ...newWords];
fs.writeFileSync(WORDS_PATH, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Tamam! ${existing.length} + ${newWords.length} = ${merged.length} kelime`);
