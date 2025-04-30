// cart2.js
let localArr = JSON.parse(localStorage.getItem("cart")) || [];
let checkoutBox = document.getElementById("tablecontent");
let totalAmount = 0;
let totalCard = document.getElementById("totalCard");
let counterMain = document.getElementById("counter-offcanvas");

function deleteItem(idx) {
    Swal.fire({
        title: "Are you sure?",
        text: "Remove this item from your cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Remove it!",
        cancelButtonText: "No, Keep it"
    }).then((result) => {
        if (result.isConfirmed) {
            localArr.splice(idx, 1);
            saveCartArray();
            displayItem();
            Swal.fire({
                title: "Removed!",
                text: "Item has been removed from your cart.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

function clearAll() {
    Swal.fire({
        title: "Clear Cart?",
        text: "Are you sure you want to remove all items from the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Clear All!",
        cancelButtonText: "No, Cancel"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("cart");
            localArr = [];
            saveCartArray();
            location.reload();
        }
    });
}


function updateQuntity(idx, value) {
    let newQuntity = localArr[idx].quantity + value;

    if (newQuntity <= 0) {
        deleteItem(idx);
    } else {
        localArr[idx].quantity = newQuntity;
        saveCartArray();
        displayItem();
    }
}

function updateCartCounter() {
    const count = localArr.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll("#counter-offcanvas").forEach(el => {
        el.textContent = count;
    });
}

function displayItem() {
    checkoutBox.innerHTML = "";
    totalAmount = 0;
    totalCard.style.display = "none";

    if (localArr.length === 0) {
        nothingCart.innerHTML = `
            <div class="mt-3 col-12 text-center">
                <div>
                    <img src="./images/th-removebg-preview.png" alt="empty-cart image" class="img-fluid">
                </div>
                <div>
                    <button class="text-center my-3 py-3 rounded text-white fw-bold hover-checkout" onclick="window.location = './index.html'">
                        <i class="fa-solid fa-arrow-left hover-left"></i> Continue Shopping
                    </button>
                </div> 
            </div>
        `;
        updateCartCounter();
        return;
    }

    totalCard.style.display = "block";
    let cartHTML = '';
    localArr.forEach((item, idx) => {
        let subTotal = item.quantity * item.productPrice;
        totalAmount += subTotal;
        cartHTML += `
            <div class="d-flex flex-wrap justify-content-between pb-4 border-bottom">
                <div class="col-12 col-md-6 pt-2">
                    <div class="d-flex">
                        <div class="col-6">
                            <img src="${item.productImage}" alt="${item.productName}" class="img-h">
                        </div>
                        <div class="col-6 d-flex flex-column justify-content-center">
                            <p class="m-0 text-body-secondary font-14">${item.productSize} ml</p>
                            <p class="text-black">${item.productName}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center mt-3 mt-md-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="col-3 mt-2 text-center">
                            <p class="fw-bold">₹${item.productPrice}</p>
                        </div>
                        <div class="col-5">
                            <div class="d-flex border justify-content-between px-3 py-2 rounded">
                                <button class="bg-transparent text-secondary m-0 p-0" onclick="updateQuntity(${idx}, -1)">
                                    <i class="fa-solid fa-minus color-75"></i>
                                </button>
                                <div class="fw-bold d-flex align-items-center">${item.quantity}</div>
                                <button class="bg-transparent text-secondary m-0 p-0" onclick="updateQuntity(${idx}, 1)">
                                    <i class="fa-solid fa-plus color-75"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-2 text-center">
                            <button class="text-secondary bg-transparent color-75" onclick="deleteItem(${idx})">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    checkoutBox.innerHTML = cartHTML;

    totalCard.innerHTML = `
        <div class="position-sticky top-0">
    <div class="border rounded">
        <div class="p-40">
            <!-- Subtotal Section (Sticky) -->
            <div class="d-flex justify-content-between border-bottom mb-4">
                <p class="fw-bold m-0">Subtotal</p>
                <p class="fw-bold m-0">₹${totalAmount}</p>
            </div>

            <p class="fw-bold mb-2">Shipping</p>
            <div class="mb-2">
                <input type="checkbox" class="assent-color"> Flat rate
            </div>
            <div class="mb-3">
                <input type="checkbox" class="assent-color"> Free shipping
            </div>

            <div class="d-flex fw-bold justify-content-between border-bottom mb-4">
                <p>Shipping to <span class="text-danger"> NY. </span></p>
                <p><i class="fa-solid fa-location-dot text-danger"></i> Change address</p>
            </div>

            <div class="mt-1">
                <div class="d-flex justify-content-between">
                    <div class="text-body-secondary fw-bold">Total</div>
                    <div class="fw-bold" id="total">₹${totalAmount}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Sticky Buttons Section -->
    <button class="w-100 text-center my-3 py-3 rounded text-white fw-bold hover-checkout" onclick="window.location = './thankyou.html'">
        Proceed To Checkout
    </button>

    <div class="d-flex justify-content-between">
        <button class="bg-transparent color-75 fw-bold hover-shoping" onclick="window.history.back()">
            <i class="fa-solid fa-arrow-left hover-left"></i> Continue Shopping
        </button>

        <button class="bg-transparent color-75 fw-bold hover-shoping" onclick="clearAll()">
            <i class="fa-solid fa-trash"></i> Clear All
        </button>
    </div>
</div>

    `;
    updateCartCounter();
}

function saveCartArray() {
    localStorage.setItem("cart", JSON.stringify(localArr));
}

displayItem();
