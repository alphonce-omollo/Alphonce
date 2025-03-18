document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to ABC IT Consultancy!");

    // Form validation
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting us! We'll get back to you soon.");
    });
});
