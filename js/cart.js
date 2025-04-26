// cart.js
let productArray = [
    {
        id: 1,
        productImage: "./images/SIORA VELVET GLOW MOISTURIZER.png",
        productName: "Siora Velvet Glow Moisturizer",
        productPrice: 1299,
        productSize: 50,
        navigationLink: "./moisturizer.html"
    },
    {
        id: 2,
        productImage: "./images/SIORA MATTE DEFENSE SUNSCREEN SPF 50 PA+++.png",
        productName: "Siora Matte Defence Sunscreen",
        productPrice: 799,
        productSize: 50,
        navigationLink: "./sunscreen.html"
    },
    {
        id: 3,
        productImage: "./images/SIORA BRIGHTENING BODY LOTION.png",
        productName: "Siora Brightening Body Lotion",
        productPrice: 799,
        productSize: 250,
        navigationLink: "./bodylotion.html"
    },
    {
        id: 4,
        productImage: "./images/renamed.png",
        productName: "Siora Salicylic Acid Face Wash",
        productPrice: 100,
        productSize: 30,
        navigationLink: "./facewash.html"
    }
];

let addProduct = document.getElementById("cart-content");

productArray.forEach(item => {
    addProduct.innerHTML += `
        <div class="col-md-3">
            <div class="product-item">
                <figure class="product-style">
                    <img src="${item.productImage}" alt="${item.productName}" class="product-item">
                    <button type="button" class="add-to-cart" data-product-tile="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                </figure>
                <a href="${item.navigationLink}">
                    <div class="text-center m-0 p-0">
                        <button class="border rounded">Show details</button>
                    </div>
                </a>
                <figcaption>
                    <h3>${item.productName}</h3>
                    <span>Size: ${item.productSize}ml | 3.4 oz.</span>
                    <div class="item-price">$${item.productPrice} (introductory)</div>
                </figcaption>
            </div>
        </div>
    `;
});

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (productId) => {
    let findedP = productArray.find(item => item.id == productId);

    let existing = cartArr.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        findedP.quantity = 1;
        cartArr.push(findedP);
    }

    localStorage.setItem("cart", JSON.stringify(cartArr));
    window.location.href = './cart.html';
};
