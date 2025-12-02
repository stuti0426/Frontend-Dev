// q3_bug_tracker.js

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random API failure (50% chance)
            const isSuccess = Math.random() > 0.5;

            if (isSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs from server.");
            }
        }, 1000);
    });
}

console.log("--- Q3: Bug Tracker ---");

getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        console.table(bugs); // Neatly displays data
    })
    .catch((error) => {
        console.error("Error:", error);
    });