// q9_es6_classes.js

class Person {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        console.log(`Hello, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls parent constructor
        this.branch = branch;
    }
    
    showBranch() {
        console.log(`I study in the ${this.branch} branch.`);
    }
}

console.log("--- Q9 Output ---");
const studentEs6 = new Student("Karan", "IT");
studentEs6.sayHello();
studentEs6.showBranch();

// Proof that it works the same
console.log("Is instance of Person?", studentEs6 instanceof Person); // true