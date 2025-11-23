// q8_object_updater.js

let user = { name: "John", email: "john@mail.com", age: 21 };

// HTML: <form onsubmit="updateUser(event)"> Inputs for name, email, age </form>
// <div id="displayArea"></div>

function displayUser() {
    const display = document.getElementById('displayArea');
    display.innerHTML = `
        <h3>Current User Details:</h3>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
    `;
}

function updateUser(event) {
    event.preventDefault(); // Stop reload
    
    // Get values
    const newName = document.getElementById('editName').value;
    const newEmail = document.getElementById('editEmail').value;
    const newAge = document.getElementById('editAge').value;

    // Update Object
    if(newName) user.name = newName;
    if(newEmail) user.email = newEmail;
    if(newAge) user.age = newAge;

    // Refresh UI
    displayUser();
    alert("User Updated!");
}

// Initial render
// displayUser();