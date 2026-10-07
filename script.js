
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

// Get the menu container
const menuContainer = document.getElementById("menu-container");

// Display menu items
menuItems.forEach(function(item) {

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

        </div>
    `;

    menuContainer.appendChild(card);
});
