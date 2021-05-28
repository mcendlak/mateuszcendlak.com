// ===============
// DOM ELEMENTS
// ===============
const hamburger = document.querySelector('.hamburger');
const scrollToTopBtn = document.querySelector('.aside__navigation');

// ===============
// EVENT LISTENERS
// ===============
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('h-active');
});

window.addEventListener('scroll', () => {
  window.scrollY > window.innerHeight / 2 ?
  scrollToTopBtn.classList.add('active') :
  scrollToTopBtn.classList.remove('active');
});