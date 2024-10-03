const burgerMenu = document.querySelector('.burger__menu');
const navigationMenu = document.querySelector('.header__list');


burgerMenu.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('active');
    navigationMenu.classList.toggle('open');
})