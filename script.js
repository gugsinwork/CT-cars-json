const openModalButton = document.querySelector('.style-login');
const closeModalBUtton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () =>{
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[openModalButton, closeModalBUtton, fade].forEach((el) =>{
    el.addEventListener("click", () => toggleModal());
});

const OpenModalCart = document.querySelector('.style-cart');
const closeModalCart = document.querySelector('#close-cart');
const modalCart = document.querySelector('#modal-cart');
const fadeCart = document.querySelector('#fade-cart');

const toggleModalCart = () =>{
    modalCart.classList.toggle('hide-cart');
    fadeCart.classList.toggle('hide-cart');
}

[OpenModalCart, closeModalCart, fadeCart].forEach((el) =>{
    el.addEventListener("click", () => toggleModalCart());
});



