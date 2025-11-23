// q3_math_dashboard.js

// Requirement: Take a number x = 16.75 [cite: 27]
const x = 16.75;

// Requirement: Calculate various math properties [cite: 29, 30, 31]
const rounded = Math.round(x);
const sqrtVal = Math.sqrt(x);
const powerVal = Math.pow(x, 3);

// Requirement: Random number between 10-50 [cite: 32]
// Logic: Math.random() * (max - min + 1) + min -> (50 - 10 + 1) = 41
const randomVal = Math.floor(Math.random() * 41) + 10;

// Requirement: Use template literals to show a formatted result summary [cite: 34]
console.log("--- Q3 Output ---");
console.log(`Dashboard for x = ${x}:
- Rounded: ${rounded}
- Square Root: ${sqrtVal.toFixed(2)}
- Power (x^3): ${powerVal.toFixed(2)}
- Random (10-50): ${randomVal}`);