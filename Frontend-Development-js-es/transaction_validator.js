// q3_transaction_validator.js
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 }, // Invalid: Negative
    { id: 3 },               // Invalid: Missing amount
    null                     // Invalid: Null
];

const valid = [];
const invalid = [];

console.log("--- Q3 Transaction Log ---");

// Task 1: Loop
for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];
    try {
        // Task 2: Throw custom errors
        if (!tx) throw new Error("Null entry found");
        if (!tx.id || tx.amount === undefined) throw new Error("Missing ID or Amount");
        if (tx.amount < 0) throw new Error(`Negative amount: ${tx.amount}`);

        valid.push(tx);
        console.log(`Transaction ${tx.id}: Success`);

    } catch (err) {
        // Task 3: Catch and categorize
        invalid.push({ index: i, error: err.message });
        console.error(`Failed at index ${i}: ${err.message}`);
    }
}

// Task 4: Final Report
console.log("\n--- Final Counts ---");
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);