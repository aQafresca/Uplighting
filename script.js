const sliderImages = document.querySelectorAll('.slider__img');
const sliderContainer = document.querySelector('.slider__container');
const sliderDots = document.querySelectorAll('.slider__dot');
const buttonNext = document.querySelector('.slider__next');
const buttonPrev = document.querySelector('.slider__prev');

let sliderCount = 0;
let sliderWidth;


window.addEventListener('resize', showSlide);
buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);

// setInterval(() => {
//         nextSlide()
//     }, 5000);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderContainer.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlide();
}

showSlide();


function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlide();
    thisSlide(sliderCount);
}


function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;
    
    rollSlide();
    thisSlide(sliderCount);

}

function rollSlide() {
    sliderContainer.style.transform = `translateX(${- sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}


sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlide();
        thisSlide();
    })
})

//////////////////////////////////////burger//////////////////

const burgerMenu = document.querySelector('.burger__menu');
const navigationMenu = document.querySelector('.header__list');
const body = document.querySelector('body');




burgerMenu.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('active');
    navigationMenu.classList.toggle('open');
    body.classList.toggle('lock');
    
});


function closeBurger() {
    if (!navigationMenu) {
        burgerMenu.classList.remove('active');
    }
}

window.addEventListener('click', closeBurger)
