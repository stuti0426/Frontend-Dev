// q7_lazy_loader.js

function loadProfile() { 
    return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); 
}
function loadPosts() { 
    return new Promise((r, reject) => setTimeout(() => reject("Posts Failed (Network Error)"), 1500)); // Simulating rejection
}
function loadMessages() { 
    return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); 
}

async function loadDashboard() {
    console.log("--- Q7: Loading Dashboard Modules... ---");
    const startTime = Date.now();

    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

    const endTime = Date.now();
    console.log(`Total time taken: ${endTime - startTime}ms`);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Module ${index + 1}: Success -> ${result.value}`);
        } else {
            console.log(`Module ${index + 1}: Failed -> ${result.reason}`);
        }
    });
}

loadDashboard();