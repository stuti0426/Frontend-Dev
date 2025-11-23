// q6_pyramid_generator.js
"use strict";

const limit = 5; // Task 3: Simulating user input

console.log("--- Q6 Pyramid ---");

// Task 4: "use strict" ensures we must declare 'i' and 'j'
for (let i = 1; i <= limit; i++) { 
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Task 1 & 2: Explanation
// If we used 'var i', 'i' would exist here as 6 (global/function scope).
// With 'let i', 'i' is block scoped and does not exist here.
try {
    console.log("Value of i outside loop: " + i);
} catch (e) {
    console.log("Debug: 'i' is not defined outside loop (Correct block scoping).");
}