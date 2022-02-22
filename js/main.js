let menuMobile = document.querySelector('header div.hamburger-menu');
let hamburgerLink = document.querySelector('.header-right > a');
let closeLink = document.querySelector('header .hamburger-menu a.close');


// event listeners
hamburgerLink.addEventListener('click', toggleMenu);
closeLink.addEventListener('click', toggleMenu);


// functions
function toggleMenu() {
    menuMobile.classList.toggle('active');
}
