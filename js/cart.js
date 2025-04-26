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

let allProduct = [
    {
        id: 1,
        productImage: "./images/SIORA BRIGHTENING BODY LOTION.png",
        productName: "Siora Brightening Body Lotion",
        productPrice: 799,
        productSize: 250,
        navigationLink: "./bodylotion.html"
    },
    {
        id: 2,
        productImage: "./images/SIORA CRYSTAL CLEAR GEL CLEANSER.png",
        productName: "Siora Crystal Clear Gel Cleanser",
        productPrice: 699,
        productSize: 100,
        navigationLink: "./bodyclenser.html"
    },
    {
        id: 3,
        productImage: "./images/SIORA EXFOLIATING COFFEE BODY SCRUB.png",
        productName: "Siora Exfoliating Coffee Body Scrub",
        productPrice: 699,
        productSize: 200,
        navigationLink: "./bodyscrum.html"
    },
    {
        id: 4,
        productImage: "./images/SIORA HAIR GROWTH SERUM.png",
        productName: "Siora Hair Growth Serum",
        productPrice: 899,
        productSize: 30,
        navigationLink: "./hairgrowthserum.html"
    },
    {
        id: 5,
        productImage: "./images/SIORA INTENSE REPAIR HAIR ELIXIR.png",
        productName: "Siora Intense Repair Hair Elixir",
        productPrice: 799,
        productSize: 30,
        navigationLink: "./Hairelixir.html"
    },
    {
        id: 6,
        productImage: "./images/SIORA MATTE DEFENSE SUNSCREEN SPF 50 PA+++.png",
        productName: "Siora Matte Defence Sunscreen",
        productPrice: 799,
        productSize: 50,
        navigationLink: "./sunscreen.html"
    },
    {
        id: 7,
        productImage: "./images/SIORA ONION HAIR OIL.png",
        productName: "Siora Onion Hair Oil",
        productPrice: 699,
        productSize: 100,
        navigationLink: "./onionoil.html"
    },
    {
        id: 8,
        productImage: "./images/SIORA RADIANCE RENEWAL SERUM.png",
        productName: "Siora Radiance Renewal Serum",
        productPrice: 999,
        productSize: 30,
        navigationLink: "./renewalserum.html"
    },
    {
        id: 9,
        productImage: "./images/SIORA REFRESH & REPAIR BODY CLEANSER.png",
        productName: "Siora Refresh & Repair Body Cleanser",
        productPrice: 699,
        productSize: 250,
        navigationLink: "./bodyclenser.html"
    },
    {
        id: 10,
        productImage: "./images/renamed.png",
        productName: "Siora Salicylic Acid Face Wash",
        productPrice: 100,
        productSize: 30,
        navigationLink: "./facewash.html"
    },
    {
        id: 11,
        productImage: "./images/SIORA SILK GLOW BODY OIL.png",
        productName: "Siora Silk Glow Body Oil",
        productPrice: 899,
        productSize: 100,
        navigationLink: "./bodyoil.html"
    },
    {
        id: 12,
        productImage: "./images/SIORA SUBLIME SHINE SHAMPOO.png",
        productName: "Siora Sublime Shine Shampoo",
        productPrice: 899,
        productSize: 250,
        navigationLink: "./sublimeshampoo.html"
    },
    {
        id: 13,
        productImage: "./images/SIORA VELVET GLOW MOISTURIZER.png",
        productName: "Siora Velvet Glow Moisturizer",
        productPrice: 1299,
        productSize: 50,
        navigationLink: "./moisturizer.html"
    },
    {
        id: 14,
        productImage: "./images/SIORA VELVET TOUCH HAIR MASQUE.png",
        productName: "Siora Velvet Touch Hair Masque",
        productPrice: 799,
        productSize: 200,
        navigationLink: "./hairmasque.html"
    },
]

let bodyProducts = [
    {
        id: 1,
        productImage: "./images/SIORA BRIGHTENING BODY LOTION.png",
        productName: "Siora Brightening Body Lotion",
        productPrice: 799,
        productSize: 250,
        navigationLink: "./bodylotion.html"
    },
    {
        id: 2,
        productImage: "./images/SIORA EXFOLIATING COFFEE BODY SCRUB.png",
        productName: "Siora Exfoliating Coffee Body Scrub",
        productPrice: 699,
        productSize: 200,
        navigationLink: "./bodyscrum.html"
    },
    {
        id: 3,
        productImage: "./images/SIORA REFRESH & REPAIR BODY CLEANSER.png",
        productName: "Siora Refresh & Repair Body Cleanser",
        productPrice: 699,
        productSize: 250,
        navigationLink: "./bodyclenser.html"
    },
    {
        id: 4,
        productImage: "./images/SIORA SILK GLOW BODY OIL.png",
        productName: "Siora Silk Glow Body Oil",
        productPrice: 899,
        productSize: 100,
        navigationLink: "./bodyoil.html"
    },
]
let scrumProducts = [
    {
        id: 1,
        productImage: "./images/SIORA EXFOLIATING COFFEE BODY SCRUB.png",
        productName: "Siora Exfoliating Coffee Body Scrub",
        productPrice: 699,
        productSize: 200,
        navigationLink: "./bodyscrum.html"
    },
    {
        id: 2,
        productImage: "./images/SIORA HAIR GROWTH SERUM.png",
        productName: "Siora Hair Growth Serum",
        productPrice: 899,
        productSize: 30,
        navigationLink: "./hairgrowthserum.html"
    },
    {
        id: 3,
        productImage: "./images/SIORA RADIANCE RENEWAL SERUM.png",
        productName: "Siora Radiance Renewal Serum",
        productPrice: 999,
        productSize: 30,
        navigationLink: "./renewalserum.html"
    },
]
let faceProducts = [
    {
        id: 1,
        productImage: "./images/SIORA MATTE DEFENSE SUNSCREEN SPF 50 PA+++.png",
        productName: "Siora Matte Defence Sunscreen",
        productPrice: 799,
        productSize: 50,
        navigationLink: "./sunscreen.html"
    },
    {
        id: 2,
        productImage: "./images/SIORA RADIANCE RENEWAL SERUM.png",
        productName: "Siora Radiance Renewal Serum",
        productPrice: 999,
        productSize: 30,
        navigationLink: "./renewalserum.html"
    },
    {
        id: 3,
        productImage: "./images/renamed.png",
        productName: "Siora Salicylic Acid Face Wash",
        productPrice: 100,
        productSize: 30,
        navigationLink: "./facewash.html"
    },
    {
        id: 4,
        productImage: "./images/SIORA VELVET GLOW MOISTURIZER.png",
        productName: "Siora Velvet Glow Moisturizer",
        productPrice: 1299,
        productSize: 50,
        navigationLink: "./moisturizer.html"
    },
]
let hairProducts = [
    {
        id: 1,
        productImage: "./images/SIORA HAIR GROWTH SERUM.png",
        productName: "Siora Hair Growth Serum",
        productPrice: 899,
        productSize: 30,
        navigationLink: "./hairgrowthserum.html"
    },
    {
        id: 2,
        productImage: "./images/SIORA INTENSE REPAIR HAIR ELIXIR.png",
        productName: "Siora Intense Repair Hair Elixir",
        productPrice: 799,
        productSize: 30,
        navigationLink: "./Hairelixir.html"
    },
    {
        id: 3,
        productImage: "./images/SIORA VELVET TOUCH HAIR MASQUE.png",
        productName: "Siora Velvet Touch Hair Masque",
        productPrice: 799,
        productSize: 200,
        navigationLink: "./hairmasque.html"
    },
    {
        id: 4,
        productImage: "./images/SIORA ONION HAIR OIL.png",
        productName: "Siora Onion Hair Oil",
        productPrice: 699,
        productSize: 100,
        navigationLink: "./onionoil.html"
    },
    {
        id: 5,
        productImage: "./images/SIORA SUBLIME SHINE SHAMPOO.png",
        productName: "Siora Sublime Shine Shampoo",
        productPrice: 899,
        productSize: 250,
        navigationLink: "./sublimeshampoo.html"
    },
]
let cleanserProducts = [
    {
        id: 1,
        productImage: "./images/SIORA CRYSTAL CLEAR GEL CLEANSER.png",
        productName: "Siora Crystal Clear Gel Cleanser",
        productPrice: 699,
        productSize: 100,
        navigationLink: "./bodyclenser.html"
    },
    {
        id: 2,
        productImage: "./images/SIORA REFRESH & REPAIR BODY CLEANSER.png",
        productName: "Siora Refresh & Repair Body Cleanser",
        productPrice: 699,
        productSize: 250,
        navigationLink: "./bodyclenser.html"
    },
]

let addProduct = document.getElementById("cart-content");
let addallProduct = document.getElementById("all-content");
let bodycontent = document.getElementById("body-content");
let scrumcontent = document.getElementById("scrum-content")
let facecontent = document.getElementById("face-content")
let haircontent = document.getElementById("hair-content")
let cleansercontent = document.getElementById("cleanser-content")

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

allProduct.forEach((item) => {
    addallProduct.innerHTML += `
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
    `
})
bodyProducts.forEach((item) => {
    bodycontent.innerHTML += `
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
    `
})
scrumProducts.forEach((item) => {
    scrumcontent.innerHTML += `
        <div class="col-md-3 ">
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
    `
})
faceProducts.forEach((item) => {
    facecontent.innerHTML += `
        <div class="col-md-3 ">
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
    `
})
hairProducts.forEach((item) => {
    haircontent.innerHTML += `
        <div class="col-md-3 ">
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
    `
})
cleanserProducts.forEach((item) => {
    cleansercontent.innerHTML += `
        <div class="col-md-3 ">
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
    `
})

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
