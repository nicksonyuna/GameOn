document.addEventListener("DOMContentLoaded", function() {
    var checkoutButton = document.getElementById("checkoutButton");
        checkoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Checkout Successful! Thank you for your purchase.");
            window.location.href = "../pages/profile.html";
        });
});