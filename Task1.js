function createStep(stepName) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000; 

        console.log(stepName + " started...");

        setTimeout(() => {
            let success = Math.random() > 0.3; 

            if (success) {
                console.log(stepName + " completed.");
                resolve();
            } else {
                reject(stepName + " failed.");
            }
        }, time);
    });
}

async function handleEmergency() {
    try {
        await createStep("Registering patient");
        await createStep("Assigning doctor");
        await createStep("Starting diagnosis");
        await createStep("Starting treatment");

        console.log("Patient is treated successfully!");
    } 
    catch (error) {
        console.log(error);
        console.log("Emergency handling failed!");
    }
}

handleEmergency();
