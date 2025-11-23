// q2_string_manipulation.js

// Requirement: Store a product name like " wireless headphones PRO " [cite: 19]
const rawTitle = " wireless headphones PRO ";

// Logic: Trim extra spaces, convert to lowercase [cite: 20]
// Then split into words to capitalize the first letter of each word [cite: 20, 23]
let cleanedTitle = rawTitle.trim().toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' '); // [cite: 23]

// Requirement: Replace "pro" with "Pro Edition" [cite: 21]
// Note: Since we capitalized words specifically, we look for "Pro" now.
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

// Requirement: Display the cleaned title and its length [cite: 22]
console.log("--- Q2 Output ---");
console.log(`Original: '${rawTitle}'`);
console.log(`Cleaned:  '${cleanedTitle}'`);
console.log(`Length:   ${cleanedTitle.length}`);