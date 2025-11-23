// q1_product_manager.js

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount
    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
    }

    // Method to display details
    getDetails() {
        return `ID: ${this.id} | ${this.name} (${this.category}) - $${this.price.toFixed(2)}`;
    }
}

// Create multiple product objects
const products = [
    new Product(101, "Laptop", 1200, "Electronics"),
    new Product(102, "Headphones", 150, "Electronics"),
    new Product(103, "Coffee Maker", 80, "Home"),
    new Product(104, "Smartphone", 999, "Electronics"),
    new Product(105, "Gaming PC", 2500, "Electronics")
];

// Apply a discount to the Smartphone
products[3].applyDiscount(10); 

console.log("--- All Products ---");
products.forEach(p => console.log(p.getDetails()));

// Filter products with price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);

console.log("\n--- High Value Products (> $1000) ---");
expensiveProducts.forEach(p => console.log(p.getDetails()));