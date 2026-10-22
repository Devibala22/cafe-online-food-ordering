
// Cafe menu items
const menuItems = [
    {
        id: 1,
        name: "Classic Burger",
        description: "Crispy vegetables with a juicy patty and special sauce.",
        price: 120,
        type: "Non-Veg",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Veg Pizza",
        description: "Fresh vegetables, mozzarella cheese and tomato sauce.",
        price: 180,
        type: "Veg",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Creamy Pasta",
        description: "Creamy white sauce pasta with herbs and vegetables.",
        price: 150,
        type: "Veg",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Cold Coffee",
        description: "Chilled coffee blended with milk and a creamy topping.",
        price: 100,
        type: "Veg",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Grilled Sandwich",
        description: "Grilled sandwich filled with fresh vegetables and cheese.",
        price: 90,
        type: "Veg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Chicken Sandwich",
        description: "Grilled chicken with fresh vegetables and special sauce.",
        price: 140,
        type: "Non-Veg",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
    }
];

// Selected items and their quantities
let cart = [];

// Display menu according to selected filter
function displayMenu(filter = "All") {
    const menu = document.getElementById("menu");

    const filteredItems = menuItems.filter(item => {
        return filter === "All" || item.type === filter;
    });

    menu.innerHTML = filteredItems.map(item => `
        <div class="menu-card">
            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="menu-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>

                <div class="price-row">
                    <span class="price">₹${item.price}</span>

                    <span class="food-type ${item.type === "Veg" ? "veg" : "non-veg"}">
                        ${item.type}
                    </span>
                </div>

                <button class="add-btn" onclick="addToCart(${item.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join("");
}

// Add an item or increase its quantity
function addToCart(itemId) {
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        const menuItem = menuItems.find(item => item.id === itemId);

        cart.push({
            ...menuItem,
            quantity: 1
        });
    }

    updateCart();
}

// Increase or decrease quantity
function changeQuantity(itemId, amount) {
    const item = cart.find(item => item.id === itemId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== itemId);
    }

    updateCart();
}

// Remove an item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Update cart count, selected items and total
function updateCart() {
    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-total").textContent = `₹${totalPrice}`;

    const cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty. Add something delicious!
            </p>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-row">
            <span>
                ${item.name} — ₹${item.price * item.quantity}
            </span>

            <div class="cart-controls">
                <button
                    class="quantity-btn"
                    onclick="changeQuantity(${item.id}, -1)"
                    aria-label="Decrease ${item.name} quantity"
                >−</button>

                <span>${item.quantity}</span>

                <button
                    class="quantity-btn"
                    onclick="changeQuantity(${item.id}, 1)"
                    aria-label="Increase ${item.name} quantity"
                >+</button>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >Remove</button>
            </div>
        </div>
    `).join("");
}

// Scroll to cart when the cart button is clicked
function scrollToCart() {
    document.getElementById("cart-section").scrollIntoView({
        behavior: "smooth"
    });
}

// Connect filter buttons
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayMenu(button.dataset.filter);
    });
});

// Load menu and empty cart when the page opens
displayMenu();
updateCart();
