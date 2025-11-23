// q9_json_audit.js
"use strict";

const rawData = [
    '{"user":"Alex", "age":25}',
    '{"id":2}', // Missing user/age
    '{invalid}', // Malformed JSON
    '{"user":"Mina", "age": "22"}' // Valid
];

const cleanData = [];

console.log("--- Q9 JSON Audit ---");

rawData.forEach((entry, index) => {
    try {
        // Task 1: Parse
        const parsed = JSON.parse(entry);

        // Task 2: Validate Keys
        if (!parsed.hasOwnProperty("user") || !parsed.hasOwnProperty("age")) {
            throw new Error("Missing required keys (user, age)");
        }

        // Task 5: Bonus - Filter under 18 (and ensure age is number)
        const ageNum = Number(parsed.age);
        if (ageNum < 18) {
            throw new Error("User is under 18");
        }

        // If valid, push formatted object
        cleanData.push({ user: parsed.user, age: ageNum });

    } catch (error) {
        // Task 3: Log errors with line number (index)
        console.error(`Line ${index + 1} Error: ${error.message}`);
    }
});

console.log("\nValid Users:", cleanData);