// q1_coffee_maker.js

function step(message, minTime, maxTime) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
        
        setTimeout(() => {
            // Simulate 10% chance of random failure (e.g., out of beans)
            if (Math.random() > 0.9) {
                reject(new Error(`Failed at step: ${message}`));
            } else {
                console.log(message);
                resolve();
            }
        }, time);
    });
}

console.log("--- Q1: Coffee Process Started ---");

// Step 1: Boil Water (1000-2000ms)
step("Boiling water...", 1000, 2000)
    // Step 2: Brew Coffee
    .then(() => step("Brewing coffee...", 1000, 2000))
    // Step 3: Pour into cup
    .then(() => step("Pouring into cup...", 1000, 2000))
    // Final Success Message
    .then(() => console.log("Coffee ready for the team! ☕"))
    // Error Handling
    .catch((error) => console.error("Error:", error.message));