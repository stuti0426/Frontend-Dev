// q10_employee_evaluator.js

// Requirement: Create a nested array for departments [cite: 104]
const departments = [
    ["HR", 72],      // [cite: 106]
    ["Finance", 88], // [cite: 107]
    ["Tech", 95],    // [cite: 108]
    ["Support", 63]  // [cite: 109]
];

console.log("--- Q10 Output ---");

// Requirement: Use loops and conditionals [cite: 112]
for (let i = 0; i < departments.length; i++) {
    let deptName = departments[i][0];
    let score = departments[i][1];
    let rating = "";

    // Requirement: "Excellent" if score >= 90 [cite: 113]
    if (score >= 90) {
        rating = "Excellent";
    }
    // Requirement: "Good" if 75-89 [cite: 114]
    else if (score >= 75) {
        rating = "Good";
    }
    // Requirement: "Average" if 60-74 [cite: 115]
    else if (score >= 60) {
        rating = "Average";
    }
    // Requirement: "Needs Improvement" otherwise [cite: 117]
    else {
        rating = "Needs Improvement";
    }

    console.log(`Department: ${deptName}, Score: ${score}, Rating: ${rating}`);
}