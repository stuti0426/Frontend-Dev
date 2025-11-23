// q8_discount_evaluator.js

// Requirement: Use an array of objects [cite: 77, 78]
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 }, // [cite: 80]
    { item: "Shoes", category: "fashion", price: 2500 },       // [cite: 82]
    { item: "Book", category: "education", price: 600 }        // [cite: 84]
];

// Requirement: Calculate total using reduce(), loops, conditionals [cite: 89]
let subTotal = cart.reduce((acc, product) => {
    let finalPrice = product.price;

    // Requirement: Electronics -> 10% discount [cite: 86]
    if (product.category === "electronics") {
        finalPrice = product.price * 0.90;
    } 
    // Requirement: Fashion -> 5% discount [cite: 87]
    else if (product.category === "fashion") {
        finalPrice = product.price * 0.95;
    }
    
    return acc + finalPrice;
}, 0);

// Requirement: If total cart value > 50000 apply extra 5% overall discount [cite: 88]
if (subTotal > 50000) {
    console.log("Bulk discount applied (5%)!");
    subTotal = subTotal * 0.95;
}

console.log("--- Q8 Output ---");
console.log(`Final Cart Total: $${subTotal.toFixed(2)}`);