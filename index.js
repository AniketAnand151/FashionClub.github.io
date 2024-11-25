const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

//updated code

// Initialize the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to the cart
function addToCart(product) {
    // Check if the product already exists in the cart
    const itemIndex = cart.findIndex(item => item.id === product.id);
    
    if (itemIndex !== -1) {
        // If product exists, increase quantity
        cart[itemIndex].quantity += 1;
    } else {
        // If new product, add to cart
        cart.push({ ...product, quantity: 1 });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
}

// Example to bind 'add to cart' button
document.querySelectorAll('.cart').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productElement = e.target.closest('.pro');
        const product = {
            id: productElement.querySelector('h5').innerText,
            name: productElement.querySelector('h5').innerText,
            price: productElement.querySelector('h4').innerText,
            image: productElement.querySelector('img').src,
        };
        addToCart(product);
    });
});
