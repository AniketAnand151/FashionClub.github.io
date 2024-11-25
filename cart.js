// Load cart items from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.quantity * parseFloat(item.price.replace('RS', ''));
        total += itemTotal;
        
        cartItemsContainer.innerHTML += `
            <tr style="width:0vw;">
                <td><img src="${item.image}" alt="${item.name}" style="margin:auto; width: 100px; border-radius:15px;"></td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>RS ${itemTotal.toFixed(2)}</td>
                <td><button style="border:none; background-color:black; color:white; border-radius:30px; padding:7px;cursor:pointer;" onclick="removeItem(${index})" class="remove-btn">Remove</button></td>
            </tr>
        `;
    });

    totalPriceElement.innerText = `RS ${total.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function checkout() {
    if (cart.length > 0) {
        alert('Proceeding to checkout...');
        // Here you would integrate your checkout process
    } else {
        alert('Your cart is empty.');
    }
}

// Display cart items on page load
document.addEventListener('DOMContentLoaded', displayCartItems);
