// q4_devops_race.js

const checkServer = (name, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random crash
            if (Math.random() > 0.9) return reject(`${name} crashed!`);
            resolve(`${name} responded in ${time}ms`);
        }, time);
    });
};

const serverA = checkServer("Server A", 2000);
const serverB = checkServer("Server B", 3000);

console.log("--- Q4: DevOps Monitor ---");

// Case 1: Wait for ALL to finish
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch((err) => console.error("Deployment failed:", err));

// Case 2: Which is fastest?
Promise.race([serverA, serverB])
    .then((winner) => console.log("Fastest response:", winner))
    .catch((err) => console.error("Race error:", err));