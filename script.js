// JavaScript for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you can add code to send the form data to a server
        // For now, we will just reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});