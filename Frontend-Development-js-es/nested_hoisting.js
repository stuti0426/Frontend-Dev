// q10_nested_hoisting.js
"use strict";

console.log("--- Q10 Output ---");

function outer() {
    // console.log(count); // ReferenceError if let/const, undefined if var (due to hoisting below)
    
    var count = 5;
    
    function inner() {
        // Task 1: Predict Output
        // The 'var count' inside 'inner' is hoisted to the top of 'inner'.
        // It shadows the outer 'count'. 
        // At this line, it is initialized to 'undefined'.
        console.log(`Inner Hoisted value: ${count}`); 
        
        var count = 10; // Assignment happens here
        console.log(`Inner Assigned value: ${count}`);
    }
    
    inner();
    console.log(`Outer value: ${count}`);
}

outer();

// Task 3: Arrow Function Conversion
console.log("\n--- Arrow Function Version ---");
const outerArrow = () => {
    let count = 5; // Using let for better scoping
    
    const innerArrow = () => {
        // Arrow functions don't change scoping rules for variables, 
        // but using 'let' prevents the 'undefined' hoisting issue (TDZ).
        // console.log(count); // This would throw ReferenceError if uncommented before declaration
        let count = 10;
        console.log(`Arrow Inner: ${count}`);
    }
    innerArrow();
};
outerArrow();