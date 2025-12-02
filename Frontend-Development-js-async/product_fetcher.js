// q6_product_fetcher.js

// Note: Ensure you are using a modern environment (Browser or Node v18+) that supports 'fetch'.
const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
    console.log("--- Q6: Fetching Products... ---");
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        const products = await response.json();

        // Log details for each product
        products.forEach(product => {
            console.log(`\nProduct: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
        });

    } catch (error) {
        console.error("Failed to load products. Please try again.");
        console.error("Debug Info:", error.message);
    }
}

fetchProducts();

/* Bonus Note: To append to the page (Browser Only):
const container = document.getElementById('container');
const card = document.createElement('div');
card.innerHTML = `<h3>${product.title}</h3><img src="${product.image}" width="100">`;
container.appendChild(card);
*/