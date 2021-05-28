const scrollToTopBtn = document.querySelector('.aside__navigation');

window.addEventListener('scroll', () => {
  window.scrollY > window.innerHeight / 2 ?
  scrollToTopBtn.classList.add('active') :
  scrollToTopBtn.classList.remove('active');
})