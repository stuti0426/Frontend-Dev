// q4_car_prototype.js

// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add method to Prototype (Shared by all instances)
Car.prototype.getDetails = function() {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");

console.log("--- Q4 Output ---");
car1.getDetails();
car2.getDetails();