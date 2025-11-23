// q8_mymap_polyfill.js

// Adding method to Array prototype
Array.prototype.myMap = function(callback) {
    const result = [];
    // 'this' refers to the array calling the method
    for (let i = 0; i < this.length; i++) {
        // Call the callback with: element, index, original array
        result.push(callback(this[i], i, this));
    }
    return result;
};

const nums = [1, 2, 3];
const multiplied = nums.myMap(num => num * 2);

console.log("--- Q8 Output ---");
console.log("Original:", nums);
console.log("Custom Map Result:", multiplied);