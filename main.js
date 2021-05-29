// ===============
// DOM ELEMENTS
// ===============
const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.main-menu');
const mainMenuList = document.querySelector('.main-menu__list');
const scrollToTopBtn = document.querySelector('.aside__navigation');


// ===============
// FUNCTIONS
// ===============
const mobileMenuClassToggleHandler = () => {
  hamburger.classList.toggle('h-active');
  mainMenu.classList.toggle('visible');
};


// ===============
// EVENT LISTENERS
// ===============
hamburger.addEventListener('click', mobileMenuClassToggleHandler);
mainMenuList.addEventListener('click', mobileMenuClassToggleHandler);

window.addEventListener('scroll', () => {
  window.scrollY > window.innerHeight / 2 ?
  scrollToTopBtn.classList.add('active') :
  scrollToTopBtn.classList.remove('active');
});