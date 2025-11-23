// q7_smart_calculator.js
"use strict";

const num1 = 25, num2 = 0;
// Test different operations here: "add", "divide", "root", "unknown"
const operation = "divide"; 

console.log(`--- Q7 Calculator (${operation}) ---`);

try {
    let result;
    
    // Task 1: Switch Statement
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "divide":
            // Task 2: Custom Error
            if (num2 === 0) throw new Error("Cannot divide by zero.");
            result = num1 / num2;
            break;
        case "power":
            result = Math.pow(num1, num2);
            break;
        case "root":
            if (num1 < 0) throw new Error("Cannot verify root of negative number.");
            result = Math.sqrt(num1);
            break;
        default:
            // Task 3: Invalid Operation
            throw new Error("InvalidOperationError: Unknown operation type.");
    }
    
    console.log(`Result: ${result}`);

} catch (error) {
    // Task 4: Formatted Error Summary
    console.error(`Calculation Failed: ${error.message}`);
}