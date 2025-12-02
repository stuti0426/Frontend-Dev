// q5_frontend_pipeline.js

const runStage = (stage) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Stage completed: ${stage}`);
            resolve();
        }, 1000);
    });
};

/* // --- BAD: Callback Hell Version (For Reference) ---
function runCallbacks() {
    runStage("Design").then(() => {
        runStage("Build").then(() => {
            runStage("Test").then(() => {
                runStage("Deploy").then(() => {
                    runStage("Celebrate");
                });
            });
        });
    });
}
*/

// --- GOOD: Async/Await Version ---
async function runPipeline() {
    console.log("--- Q5: Pipeline Started ---");
    
    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate"); // 🎉

    console.log("Pipeline Finished Cleanly!");
}

/* Why Async/Await improves readability:
It allows us to write asynchronous code that looks and behaves like synchronous code. 
There is no deep nesting ("pyramid of doom"), making the flow top-to-bottom and much easier to debug.
*/

runPipeline();