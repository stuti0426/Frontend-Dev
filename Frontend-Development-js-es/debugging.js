// q4_debugging_mystery.js
"use strict";

function showMessage() {
    // Original Error: greeting = "Welcome"; 
    // In strict mode, you cannot assign to a variable that hasn't been declared (no implicit globals).
    
    // Task 2: Fix - Declare variable properly using let/const/var
    let greeting = "Welcome"; 
    
    console.log("Inside function:", greeting);
}

// console.log(greeting); // This would fail here because 'greeting' is now function-scoped.
showMessage();

console.log("--- Q4 Explanation ---");
console.log("Fixed by adding 'let'. Strict mode forbids creating global variables by accident.");