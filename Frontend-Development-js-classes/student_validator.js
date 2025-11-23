// q2_student_validator.js

// HTML Assumption: <form id="studentForm"> with inputs: name, email, phone, password
// usage: document.getElementById('studentForm').addEventListener('submit', validateStudentForm);

function validateStudentForm(event) {
    event.preventDefault(); // Prevent actual submission

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');

    // Validation patterns
    const patterns = {
        name: /^[A-Za-z\s]+$/,                   // Only alphabets
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,     // Simple email format
        phone: /^\d{10}$/,                       // Exactly 10 digits
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/ // 1 Upper, 1 Number, 1 Special
    };

    function setStatus(input, isValid, msg) {
        input.style.border = isValid ? "2px solid green" : "2px solid red";
        // Assuming there's a span for error messages next to input
        const errorSpan = input.nextElementSibling; 
        if(errorSpan) errorSpan.textContent = isValid ? "" : msg;
    }

    // Execute checks
    setStatus(name, patterns.name.test(name.value), "Name must be alphabets only");
    setStatus(email, patterns.email.test(email.value), "Invalid email format");
    setStatus(phone, patterns.phone.test(phone.value), "Phone must be 10 digits");
    setStatus(password, patterns.password.test(password.value), "Password needs 1 Upper, 1 Number, 1 Special char");
}