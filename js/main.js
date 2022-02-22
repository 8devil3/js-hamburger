let menuMobile = document.querySelector('header div:nth-of-type(3)');

let hamburgerLink = document.querySelector('.header-right > a');
let closeLink = document.querySelector('header .hamburger-menu a.close');


// event listeners
hamburgerLink.addEventListener('click', openMenu);
closeLink.addEventListener('click', closeMenu);


// functions
function openMenu() {
    menuMobile.style.display = 'block';
}

function closeMenu() {
    menuMobile.style.display = 'none';
}