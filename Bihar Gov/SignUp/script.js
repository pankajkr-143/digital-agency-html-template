// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match.";
        messageDiv.style.color = "red";
        return; // Stop form submission
    }
    messageDiv.textContent = "Form Submitted Successfully!";
    messageDiv.style.color = "green";

    // Here you would typically send the form data to a server
    console.log("Form submitted!");
    this.reset();
});