// q1_dynamic_parser.js
"use strict";

const apiData = ["25", "true", "false", "NaN", null, undefined, " ", "100px", "3.14"];
const validNumbers = [];
const invalidEntries = [];

console.log("--- Q1 Report ---");

for (let i = 0; i < apiData.length; i++) {
    const rawValue = apiData[i];
    
    // Task 1: Convert forms (for observation)
    const asString = String(rawValue);
    const asBool = Boolean(rawValue);
    const asNum = Number(rawValue); // strict conversion

    // Task 2: Validation Logic
    // Number() converts " " (whitespace) to 0, so we manually check for empty/whitespace strings.
    // isNaN(asNum) checks for "NaN", "100px", undefined.
    const isWhitespace = typeof rawValue === 'string' && rawValue.trim() === '';
    
    if (isNaN(asNum) || isWhitespace || rawValue === null) {
        // Log invalid entries separately as requested
        console.log(`Skipping Invalid: "${asString}" (parsed as ${asNum})`);
        invalidEntries.push(rawValue);
    } else {
        validNumbers.push(asNum);
    }
}

// Task 4: Detailed Report
console.log("\nSummary:");
console.log(`Valid Numeric Data: [${validNumbers.join(", ")}]`);
console.log(`Invalid Data Count: ${invalidEntries.length}`);