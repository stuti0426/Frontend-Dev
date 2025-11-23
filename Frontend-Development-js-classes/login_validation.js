// q7_login_validation.js

function validateLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('userpass').value;
    const msgBox = document.getElementById('message');

    // Rules
    const validUser = user.length >= 5;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!validUser) {
        msgBox.textContent = "Error: Username must be at least 5 chars.";
        msgBox.style.color = "red";
        return;
    }

    if (!passRegex.test(pass)) {
        msgBox.textContent = "Error: Password must be 8+ chars, with Upper, Lower, Number, & Special.";
        msgBox.style.color = "red";
        return;
    }

    msgBox.textContent = "Login Successful!";
    msgBox.style.color = "green";
}