let menuMobile = document.querySelector('header div.hamburger-menu');
let navToggle = document.querySelectorAll('header > div > a');


// event listeners
navToggle[0].addEventListener('click', toggleMenu);
navToggle[1].addEventListener('click', toggleMenu);


// functions
function toggleMenu() {
    menuMobile.classList.toggle('active');
}