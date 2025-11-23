// q1_callback_intro.js

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    // Execute the callback function after the greeting
    callback();
}

// Demonstrate callback flow
console.log("--- Q1 Output ---");
greetUser("Alice", showEndMessage);