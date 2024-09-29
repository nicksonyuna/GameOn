document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let emailField = document.getElementById('email');
    let pwField = document.getElementById('password');

    let email = emailField.value;
    let pw = pwField.value;

    // Basic email validation
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Email must be valid');
        return;
    }

    // Basic password validation
    if (pw.length < 8) {
        alert('Password must contain at least 8 characters');
        return;
    }

    // Further validation can be added here (e.g., checking against stored user data)

    alert('Login successful');
    
    // Redirect to a different page after successful login
    window.location.href = "../pages/profile.html"; // Change to your desired page
});
