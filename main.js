const aboutSection = document.getElementById('about');
const scrollToTopButton = document.querySelector('.aside__home-btn');

document.addEventListener('scroll', (e) => {

  if (window.scrollY >= aboutSection.getBoundingClientRect().top) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }

  
}
)