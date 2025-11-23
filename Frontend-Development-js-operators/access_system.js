// q5_access_system.js

// Requirement: Variables for security conditions [cite: 49]
let isDoorLocked = true; // Interpreting "Door Closed/Locked"
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Requirement: Check access conditions using &&, ||, ! [cite: 50, 54]
// Condition 1: Alarm is on [cite: 51]
// Condition 2: Door and window are closed [cite: 52]
// Condition 3: Owner is inside [cite: 53]
function checkSecurity(alarm, door, window, owner) {
    if (alarm && (door && window) && owner) {
        console.log("Status: Secure"); // [cite: 54]
    } else {
        console.log("Status: Unsafe"); // [cite: 54]
    }
}

console.log("--- Q5 Output ---");
console.log("Test 1 (All conditions met):");
checkSecurity(isAlarmOn, isDoorLocked, isWindowClosed, isOwnerInside);

console.log("Test 2 (Window open):");
checkSecurity(isAlarmOn, isDoorLocked, false, isOwnerInside); // [cite: 55]