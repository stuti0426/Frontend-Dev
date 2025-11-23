// q5_es5_inheritance.js

// 1. Parent Constructor
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log(`Hello, I am ${this.name}`);
};

// 2. Child Constructor
function Student(name, branch) {
    // Call Parent constructor with 'this' context
    Person.call(this, name); 
    this.branch = branch;
}

// 3. Link Prototypes
Student.prototype = Object.create(Person.prototype);
// Reset constructor pointer
Student.prototype.constructor = Student;

// Add Child-specific method
Student.prototype.showBranch = function() {
    console.log(`I study in the ${this.branch} branch.`);
};

console.log("--- Q5 Output ---");
const student1 = new Student("Rahul", "CSE");
student1.sayHello();   // Inherited from Person
student1.showBranch(); // Specific to Student