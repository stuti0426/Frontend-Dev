// q9_number_analyzer.js

const results = [];

// Requirement: Accept numbers 1-30 in an array using a loop [cite: 93]
for (let i = 1; i <= 30; i++) {
    let label = "";

    // Requirement: If divisible by 3 and 5 print "FizzBuzz" [cite: 96]
    if (i % 3 === 0 && i % 5 === 0) {
        label = "FizzBuzz";
    }
    // Requirement: Else if even print "Even" [cite: 97]
    else if (i % 2 === 0) {
        label = "Even";
    }
    // Requirement: Else print "Odd" [cite: 99]
    else {
        label = "Odd";
    }

    // Requirement: Store results in a new array [cite: 100]
    // Using push() as requested in [cite: 101]
    results.push({ number: i, type: label });
}

console.log("--- Q9 Output ---");
console.log(results);