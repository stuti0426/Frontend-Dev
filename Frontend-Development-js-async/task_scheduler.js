// q2_task_scheduler.js

console.log("--- Q2: Event Loop Demo ---");

// 1. Synchronous Log
console.log("Start");

// 2. Macrotask (setTimeout)
setTimeout(() => {
    console.log("Timeout callback (Macrotask)");
}, 0);

// 3. Microtask (Promise)
Promise.resolve().then(() => {
    console.log("Promise callback (Microtask)");
});

// 4. Synchronous Log
console.log("End");

/* EXPLANATION:
1. "Start" and "End" are synchronous, so they run immediately on the Call Stack.
2. The Promise.then() callback is added to the "Microtask Queue".
3. The setTimeout callback is added to the "Macrotask Queue" (or Callback Queue).
4. The Event Loop prioritizes the Microtask Queue. It processes ALL items in the 
   Microtask Queue before moving to the Macrotask Queue.
   
Therefore, "Promise callback" appears before "Timeout callback".
*/