// ===============
// DOM ELEMENTS
// ===============
const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.main-menu');
const mainMenuList = document.querySelector('.main-menu__list');
const scrollToTopBtn = document.querySelector('.aside__navigation');
const lastSection = document.getElementById('contact');


// ===============
// FUNCTIONS
// ===============
const mobileMenuClassToggleHandler = () => {
  if (window.screen.width <= 550) {
    hamburger.classList.toggle('h-active');
    mainMenu.classList.toggle('visible');
    document.body.classList.toggle('fixed');
  }
  
};


// ===============
// EVENT LISTENERS
// ===============
hamburger.addEventListener('click', mobileMenuClassToggleHandler);
mainMenuList.addEventListener('click', mobileMenuClassToggleHandler);

window.addEventListener('scroll', () => {

  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn.classList.add('active');
  } else {
    scrollToTopBtn.classList.remove('active');
  }

  const lastSectionPosition = lastSection.getBoundingClientRect()
  console.log(lastSectionPosition.top);

  // let bottomReached = false;

  if (lastSectionPosition.top <= 0) {
    scrollToTopBtn.style.bottom = '4rem';
  } else if (lastSectionPosition.top >= 0) {
    scrollToTopBtn.style.bottom = '1.5rem';
  }
  
});