// q2_employee_bonus.js
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: " 38000", years: " 2" }, // Note whitespace
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("--- Q2 Employee Bonus Report ---");

employees.forEach(emp => {
    try {
        // Task 1: Convert types
        // trim() removes whitespace before conversion
        if (!emp.salary || !emp.years) throw new Error("Missing data fields");
        
        const salary = Number(emp.salary.trim());
        const years = Number(emp.years.trim());

        if (isNaN(salary) || isNaN(years)) throw new Error("Invalid number format");

        // Task 2: Calculate bonus
        const bonusPercentage = years > 3 ? 0.1 : 0.05;
        const bonus = salary * bonusPercentage;

        // Task 4: Template string output
        console.log(`Employee: ${emp.name} | Years: ${years} | Bonus: $${bonus.toFixed(2)}`);

    } catch (error) {
        // Task 5: Handle conversion errors
        console.error(`Error processing ${emp.name || 'Unknown'}: ${error.message}`);
    }
});