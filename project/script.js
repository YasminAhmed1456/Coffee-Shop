let navbar = document.querySelector('.nav');
let cartItem = document.querySelector('.cart-items-container');
let searchForm = document.querySelector('.search-form');

// Toggle the navbar
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
};

// Toggle the cart-items-container
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// Toggle the Search-Form
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
};
