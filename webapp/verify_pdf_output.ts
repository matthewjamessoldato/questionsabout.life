import { questions } from './src/data/questions';
import { generatePDF } from './src/utils/PDFGenerator';

// Target the first question which was problematic
const q1 = questions.find(q => q.id === 1)!;

console.log("Generating test PDF for Question 1...");
try {
    generatePDF(q1);
    console.log("PDF generation triggered successfully. Check the file system for the new PDF.");
} catch (e) {
    console.error("PDF generation failed:", e);
}
