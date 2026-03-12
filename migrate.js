const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/questions.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Match the array part
const arrStartStr = 'export const questions: Question[] = ';
const openBracketIdx = content.indexOf('[', content.indexOf(arrStartStr));
const closeBracketIdx = content.lastIndexOf('];');

if (openBracketIdx === -1 || closeBracketIdx === -1) {
    console.error("Could not find array bounds.");
    process.exit(1);
}

const arrStr = content.substring(openBracketIdx, closeBracketIdx + 1);

let questions;
try {
  questions = eval('(' + arrStr + ')');
} catch (e) {
  console.error("Failed to parse array with eval", e);
  process.exit(1);
}

questions = questions.map(q => {
  let depth = 1;
  const category = (q.category || '').toLowerCase();
  
  if (category.includes('daily') || category.includes('fun') || category.includes('hobbies') || category.includes('food')) {
    depth = 1;
  } else if (category.includes('social') || category.includes('feelings') || category.includes('relationships') || category.includes('family')) {
    depth = 2;
  } else if (category.includes('dreams') || category.includes('career') || category.includes('future')) {
    depth = 3;
  } else if (category.includes('wisdom') || category.includes('philosophy') || category.includes('meaning')) {
    depth = 4;
  } else {
    depth = 2;
  }
  
  if (q.depthLevel !== undefined) {
      depth = q.depthLevel;
  }
  
  return { ...q, depthLevel: depth };
});

// Since we evaluated JS and it might have single quotes inside, JSON.stringify is safer and cleaner
const newArrStr = JSON.stringify(questions, null, 2);

let newContent = content.substring(0, openBracketIdx) + newArrStr + content.substring(closeBracketIdx + 1);

if (!newContent.includes('depthLevel: number;')) {
    newContent = newContent.replace(
      '  category: string;\n  vocabulary:',
      '  category: string;\n  depthLevel: number;\n  vocabulary:'
    );
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Updated questions.ts with depth levels successfully.");
