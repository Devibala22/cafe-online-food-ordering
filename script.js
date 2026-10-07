// Cafe menu data
const menuItems = [
    {
        name: "Classic Burger",
        description: "Crispy vegetables with a juicy patty and special sauce.",
        price: 120,
        category: "Non-Veg",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
        name: "Veg Pizza",
        description: "Fresh vegetables, mozzarella cheese and tomato sauce.",
        price: 180,
        category: "Veg",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },
    {
        name: "Creamy Pasta",
        description: "Creamy white sauce pasta with herbs and vegetables.",
        price: 150,
        category: "Veg",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
    },
    {
        name: "Cold Coffee",
        description: "Chilled coffee blended with milk and a creamy topping.",
        price: 100,
        category: "Veg",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
    },
    {
        name: "Grilled Sandwich",
        description: "Grilled sandwich filled with fresh vegetables and cheese.",
        price: 90,
        category: "Veg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
    },
    {
        name: "Chicken Sandwich",
        description: "Grilled chicken with fresh vegetables and special sauce.",
        price: 140,
        category: "Non-Veg",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980"
    }
];


// Store selected food items
let cart = [];


// Get HTML elements
const menuContainer = document.getElementById("menu-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");


// Display menu
menuItems.forEach(function(item, index) {

    const card = document.createElement("div");

    card.className = "menu-card";

    card.innerHTML = `
        <img
            src="${item.image}"
            alt="${item.name}"
            class="menu-image"
        >

        <div class="menu-content">

            <h2 class="menu-name">${item.name}</h2>

            <p class="menu-description">
                ${item.description}
            </p>

            <div class="menu-bottom">

                <span class="price">
                    ₹${item.price}
                </span>

                <span class="category">
                    ${item.category}
                </span>

            </div>

            <button
                class="add-cart-button"
                onclick="addToCart(${index})"
            >
                Add to Cart
            </button>

        </div>
    `;

    menuContainer.appendChild(card);
});


// Add item to cart
function addToCart(index) {

    const item = menuItems[index];

    cart.push(item);

    updateCart();

}


// Display cart
function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    } else {

        cart.forEach(function(item) {

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            `;

            cartItems.appendChild(cartItem);

        });
    }


    // Calculate total
    let total = 0;

    cart.forEach(function(item) {
        total += item.price;
    });


    cartTotal.textContent = `₹${total}`;

    cartCount.textContent = cart.length;

}