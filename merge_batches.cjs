const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, 'src/data/questions.ts');
let content = fs.readFileSync(questionsFile, 'utf8');

// The batches
const files = ['q_batch1.ts', 'q_batch2.ts', 'q_batch3.ts', 'q_batch4.ts'];
let allNewQuestions = '';

for (const file of files) {
    const fPath = path.join(__dirname, 'src/data', file);
    if (!fs.existsSync(fPath)) continue;
    
    let fContent = fs.readFileSync(fPath, 'utf8');
    
    // Extract everything between export const batchX: Question[] = [ and ];
    const startStr = 'Question[] = [';
    const startIdx = fContent.indexOf(startStr);
    const endIdx = fContent.lastIndexOf('];');
    
    if (startIdx !== -1 && endIdx !== -1) {
        let arrayBody = fContent.substring(startIdx + startStr.length, endIdx).trim();
        if (arrayBody) {
             allNewQuestions += (allNewQuestions ? ',\n  ' : '  ') + arrayBody;
        }
    }
}

// Find the end of the questions array in questions.ts
const mainEndIdx = content.lastIndexOf('];');
// Let's be careful; lastIndexOf('];') is the categories export.
// We need to find the `];` that closes the `questions` array.
// Look for `export const categories` and the closest `];` before it.
const categoriesIdx = content.indexOf('export const categories');
if (categoriesIdx !== -1) {
    const arrEndIdx = content.lastIndexOf(']', categoriesIdx);
    
    // Insert allNewQuestions right before arrEndIdx
    content = content.substring(0, arrEndIdx) + ',\n' + allNewQuestions + '\n' + content.substring(arrEndIdx);
}

fs.writeFileSync(questionsFile, content, 'utf8');
console.log("Successfully merged the new batches into questions.ts");
