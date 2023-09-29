const openNavBtn = document.querySelector('.icon-mobile-nav.open');
const closeNavBtn = document.querySelector('.icon-mobile-nav.close');
const header = document.querySelector('.header');

openNavBtn.addEventListener('click', () => {
  header.classList.add('nav-open');
});

closeNavBtn.addEventListener('click', () => {
  header.classList.remove('nav-open');
});
