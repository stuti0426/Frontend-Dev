// q8_retry_logic.js

function submitOrder() {
    return new Promise((resolve, reject) => {
        // 50% chance of failure
        if (Math.random() > 0.5) {
            resolve("Order Placed Successfully!");
        } else {
            reject("Server Busy");
        }
    });
}

async function processOrder() {
    console.log("--- Q8: Processing Order ---");
    const maxRetries = 3;

    for (let i = 1; i <= maxRetries; i++) {
        try {
            console.log(`Attempt ${i}: Sending request...`);
            const response = await submitOrder();
            console.log(`Attempt ${i}: Success - ${response}`);
            return; // Exit function on success
        } catch (error) {
            console.log(`Attempt ${i}: Failed (${error})`);
            if (i === maxRetries) {
                console.error("Critical Error: Order could not be processed after 3 attempts.");
            } else {
                // Optional: Wait 1 second before retrying
                await new Promise(r => setTimeout(r, 1000));
            }
        }
    }
}

processOrder();