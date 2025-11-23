// q7_feedback_processor.js

// Requirement: Store a feedback string [cite: 67]
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Requirement: Count words using split() [cite: 69, 73]
// We split by spaces to approximate word count
const wordCount = feedback.split(" ").length;

// Requirement: Check if feedback includes "bad" or "poor" [cite: 70, 73]
const lowerFeedback = feedback.toLowerCase();
const isNegative = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log("--- Q7 Output ---");
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);

// Requirement: Print "Positive Feedback" or "Needs Improvement" [cite: 71, 72]
if (!isNegative) {
    console.log("Verdict: Positive Feedback");
} else {
    console.log("Verdict: Needs Improvement");
}