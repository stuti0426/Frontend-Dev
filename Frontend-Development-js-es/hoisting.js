// q5_hoisting_lab.js
"use strict";

console.log("--- Q5 Output ---");

// Task 1: Explanation of Original Code
// console.log(score); -> undefined (var is hoisted but initialized as undefined)
// announce(); -> Works (Function declarations are fully hoisted)
// console.log(status); -> ReferenceError (let/const are in Temporal Dead Zone)

// Task 2: Fixed Code sequence
function runFixedGame() {
    // Declarations first
    var score = 50; 
    let status = "ready";

    function announce() { console.log("Game started"); }
    
    // Execution
    console.log(`Score: ${score}`);
    announce();
    
    // Function declarations are hoisted, so this works even if defined below call
    startGame(); 
    
    function startGame() {
        console.log(`Status: ${status}`);
    }
}

runFixedGame();

// Task 3: Arrow Function comparison
console.log("\n--- Arrow Function Hoisting ---");
try {
    // arrowStart(); // This would throw Error: arrowStart is not a function (it's undefined var) or ReferenceError (const)
    const arrowStart = () => console.log("Arrow Start");
    arrowStart(); // Must call AFTER declaration
} catch (e) {
    console.log(e.message);
}