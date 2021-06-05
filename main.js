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
  hamburger.classList.toggle('h-active');
  mainMenu.classList.toggle('visible');
  document.body.classList.toggle('fixed');
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

  const lastSectionPosition = lastSection.getBoundingClientRect()
  console.log(lastSectionPosition.top);

  // let bottomReached = false;

  if (lastSectionPosition.top <= 0) {
    scrollToTopBtn.style.bottom = '4rem';
  } else if (lastSectionPosition.top >= 0) {
    scrollToTopBtn.style.bottom = '1.5rem';
  }
  
});