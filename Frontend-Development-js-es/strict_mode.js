// q8_strict_mode.js
"use strict";

console.log("--- Q8 Output ---");

// Task 1 & 3: Illegal Operations in Strict Mode
// 1. Duplicate parameter names: function demo(a, a) { ... } -> SyntaxError
// 2. Undeclared variables: total = 10; -> ReferenceError
// 3. Deleting plain names: delete total; -> SyntaxError

// Task 4: Correct ES6 Version
function demoFixed(a, b) { // Unique params
    return a + b;
}

let total = 10; // Explicit declaration
// delete total; // Allowed on object properties, not on variables.

console.log(`Result: ${demoFixed(5, 10)}`);
console.log("Strict mode prevents duplicate args and deleting variables to ensure safer code.");