// q4_performance_analyzer.js

// Requirement: Create an array of 8 random scores between 30 and 100 [cite: 38]
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Requirement: Calculate Highest and lowest score [cite: 40]
const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Requirement: Average score using reduce [cite: 41, 43]
const sum = scores.reduce((acc, curr) => acc + curr, 0);
const average = sum / scores.length;

// Requirement: Number of students who passed (>= 50) using filter [cite: 42, 43]
const passedCount = scores.filter(score => score >= 50).length;

// Requirement: Display a full summary in a formatted output [cite: 44]
console.log("--- Q4 Output ---");
console.log(`Scores: [${scores.join(", ")}]`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Passed: ${passedCount}`);