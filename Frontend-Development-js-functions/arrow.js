// q3_arrow_vs_normal.js

console.log("--- Q3 Output ---");

const user = {
    name: "John Doe",
    // Arrow Function: 'this' is inherited from the parent scope (Global/Module), not the object.
    showNameArrow: () => {
        console.log("Arrow Function 'this.name':", this.name); 
    },
    // Regular Function: 'this' refers to the object calling the method (user).
    showNameNormal: function() {
        console.log("Normal Function 'this.name':", this.name);
    }
};

user.showNameArrow(); // Output: undefined
user.showNameNormal(); // Output: John Doe

/* Explanation:
Arrow functions do not have their own 'this'. They capture 'this' from the lexical scope
where they were defined. In Node.js or browser global scope, 'this' does not point to the 'user' object.
Normal functions bind 'this' to the object to the left of the dot at call time.
*/