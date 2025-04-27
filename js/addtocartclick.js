function addToCart() {
    Swal.fire({
        icon: 'info',
        title: 'Notice!',
        text: 'You can add the product to cart from the Home Page, not here!',
        timer: 3000, // 2 seconds
        showConfirmButton: false, // No button needed
        timerProgressBar: true // Show a little progress bar
    });

    setTimeout(() => {
        window.location.href = './index.html#popular-books';
    }, 3000); // Redirect after 2 seconds
}
