// q6_prototype_chain.js

function Person(name) {
    this.name = name;
}
Person.prototype.eat = function() { console.log(`${this.name} is eating.`); };

function Faculty(name, id) {
    Person.call(this, name);
    this.id = id;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.teach = function() { console.log(`${this.name} is teaching.`); };

function Professor(name, id, subject) {
    Faculty.call(this, name, id);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.research = function() { console.log(`${this.name} is researching ${this.subject}.`); };

console.log("--- Q6 Output ---");
const prof = new Professor("Dr. Smith", 101, "AI");

// Accessing methods up the chain
prof.research(); // Own method
prof.teach();    // From Faculty
prof.eat();      // From Person