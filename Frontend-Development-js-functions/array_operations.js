// q2_array_operations.js

function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

const nums = [1, 2, 3, 4];

// Callbacks
const double = (n) => n * 2;
const square = (n) => n * n;

console.log("--- Q2 Output ---");
console.log("Original:", nums);
console.log("Doubled:", applyOperation(nums, double));
console.log("Squared:", applyOperation(nums, square));