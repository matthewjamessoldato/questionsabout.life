const fs = require('fs');

let text = fs.readFileSync('src/data/questions.ts', 'utf8');

// First replace the interface
if (!text.includes('depthLevel: number;')) {
    text = text.replace(
      'category: string;\n  vocabulary:',
      'category: string;\n  depthLevel: number;\n  vocabulary:'
    );
}
if (!text.includes('depthLevel?: number;')) {
    text = text.replace(
      'category: string;\n  vocabulary:',
      'category: string;\n  depthLevel?: number;\n  vocabulary:'
    );
}

// Ensure we don't double replace if we run it twice
if (!text.includes('"depthLevel"')) {
    text = text.replace(/"category":\s*"([^"]+)"/g, (match, category) => {
        let depth = 1;
        let catLow = category.toLowerCase();
        if (catLow.includes('daily') || catLow.includes('fun') || catLow.includes('hobbies') || catLow.includes('food')) {
            depth = 1;
        } else if (catLow.includes('social') || catLow.includes('feelings') || catLow.includes('relationships') || catLow.includes('family')) {
            depth = 2;
        } else if (catLow.includes('dreams') || catLow.includes('career') || catLow.includes('future')) {
            depth = 3;
        } else if (catLow.includes('wisdom') || catLow.includes('philosophy') || catLow.includes('meaning') || catLow.includes('deep')) {
            depth = 4;
        } else {
            depth = 2; // Default
        }
        return `"category": "${category}",\n    "depthLevel": ${depth}`;
    });
}

fs.writeFileSync('src/data/questions.ts', text);
console.log("Done processing regex replace in questions.ts");
