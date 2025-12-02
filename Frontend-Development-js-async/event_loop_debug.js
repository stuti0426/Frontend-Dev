// q9_event_loop_debug.js

console.log("--- Q9: Event Loop Prediction ---");

/*
PREDICTED ORDER:
1. "Script start"       (Synchronous code)
2. "Script end"         (Synchronous code)
3. "Promise callback"   (Microtask Queue - Higher Priority)
4. "Timeout callback"   (Macrotask Queue - Lower Priority)
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");