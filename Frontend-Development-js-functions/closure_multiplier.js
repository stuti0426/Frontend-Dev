// q7_closure_multiplier.js

function makeMultiplier(multiplier) {
    // This inner function forms a closure.
    // It "remembers" the 'multiplier' variable even after makeMultiplier has finished executing.
    return function(number) {
        return number * multiplier;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("--- Q7 Output ---");
console.log(`Double of 5: ${double(5)}`); // 10
console.log(`Triple of 5: ${triple(5)}`); // 15