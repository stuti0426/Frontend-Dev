// q9_shopping_cart.js

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    applyCoupon(couponCode) {
        let total = this.getTotal();
        let discount = 0;

        // RegExp: Must start with SAVE or DISC followed by digits (e.g. SAVE20)
        const discountRegex = /^(SAVE|DISC)(\d+)$/;
        const match = couponCode.match(discountRegex);

        if (match) {
            const percent = parseInt(match[2]); // Extract number from match
            discount = total * (percent / 100);
            total -= discount;
            console.log(`Coupon Applied! Discount: ${percent}% (-$${discount.toFixed(2)})`);
        } else {
            console.log("Invalid Coupon Code.");
        }

        return total;
    }
}

// Test
const myCart = new Cart();
myCart.addItem("Apple", 2, 5);  // $10
myCart.addItem("Bread", 3, 2);  // $6
myCart.addItem("Milk", 4, 1);   // $4
// Subtotal: $20

console.log(`Subtotal: $${myCart.getTotal()}`);
const finalPrice = myCart.applyCoupon("SAVE20"); // Should take 20% off
console.log(`Final Total: $${finalPrice}`);