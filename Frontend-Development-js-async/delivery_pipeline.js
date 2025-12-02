// q10_delivery_pipeline.js

function runStep(stepName) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 1000) + 1000; // 1-2s delay
        setTimeout(() => {
            // 20% chance of failure
            if (Math.random() > 0.8) {
                reject(`${stepName} failed!`);
            } else {
                console.log(stepName);
                resolve();
            }
        }, time);
    });
}

async function runPipeline() {
    console.log("--- Q10: Delivery Pipeline Started ---");

    try {
        await runStep("Step 1: Order taken");
        await runStep("Step 2: Food prepared");
        await runStep("Step 3: Package ready");
        await runStep("Step 4: Out for delivery");
        console.log("Delivery completed! 🍔");
    } catch (error) {
        console.error("Pipeline failed!", error);
    }
}

/*
Explanation:
- We use 'await' to ensure Step 1 finishes before Step 2 starts (Sequential Execution).
- If any 'await runStep' rejects (fails), execution jumps immediately to the 'catch' block.
- This mimics real-world dependency: you can't deliver food before it's prepared.
*/

runPipeline();