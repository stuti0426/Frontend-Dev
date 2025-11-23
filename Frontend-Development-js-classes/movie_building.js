// q5_movie_booking.js

function bookTicket() {
    // Assumptions: Inputs have IDs 'bName', 'bEmail', 'bSeats'
    const name = document.getElementById('bName').value;
    const email = document.getElementById('bEmail').value;
    const seats = document.getElementById('bSeats').value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation
    if (!nameRegex.test(name)) return alert("Invalid Name");
    if (!emailRegex.test(email)) return alert("Invalid Email");
    if (seats < 1 || seats > 10) return alert("Seats must be between 1 and 10");

    // Success: Store and Display
    const ticket = {
        name: name,
        email: email,
        seats: Number(seats),
        bookingId: 'TKT' + Math.floor(Math.random() * 10000)
    };

    console.log("Booking Successful:", ticket);
    alert(`Ticket Booked! ID: ${ticket.bookingId}`);
}