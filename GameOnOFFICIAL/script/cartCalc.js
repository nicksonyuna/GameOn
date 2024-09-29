document.addEventListener('DOMContentLoaded', () => {
    // Get the cart count element
    const cartCount = document.getElementById('cart-count');
    
    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Function to update the cart count
    const updateCartCount = () => {
        let count = parseInt(cartCount.innerText);
        cartCount.innerText = count + 1;
    };

    // Add event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', updateCartCount);
    });
});
