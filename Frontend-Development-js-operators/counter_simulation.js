// q6_counter_simulation.js

// Requirement: Use variable count = 0 [cite: 59]
let count = 0;

// Requirement: Create increment function [cite: 60]
function increment() {
    count++;
    logCount("Incremented");
}

// Requirement: Create decrement function [cite: 60]
function decrement() {
    count--;
    logCount("Decremented");
}

// Requirement: Use a nested function to show function scope [cite: 63]
function logCount(action) {
    function formatMessage() {
        // This inner function accesses 'count' from the parent/global scope
        return `${action}! Current count: ${count}`;
    }
    console.log(formatMessage()); // [cite: 61]
}

console.log("--- Q6 Output ---");
// Requirement: Simulate "click" by calling these functions manually [cite: 62]
increment();
increment();
decrement();