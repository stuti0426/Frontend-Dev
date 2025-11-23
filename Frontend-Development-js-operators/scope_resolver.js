// q1_scope_resolver.js

// Requirement: Declare a global variable bonus = 5000 [cite: 12]
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Requirement: Declare a local variable salary = 40000 [cite: 13]
    let salary = 40000;
    let totalSalary = salary;

    // Requirement: Add the bonus only if a local variable isPermanent is true [cite: 14]
    if (isPermanent) {
        totalSalary += bonus; // Accessing global variable
    }

    // Requirement: Print total salary inside the function [cite: 15]
    console.log(`Status: ${isPermanent ? "Permanent" : "Contract"}, Total Salary: ${totalSalary}`);
}

// Requirement: Demonstrate how changing isPermanent affects the result [cite: 16]
console.log("--- Q1 Output ---");
calculateSalary(true);  // Should include bonus
calculateSalary(false); // Should not include bonus