'use strict';

const goTopBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
  const coords = window.innerHeight * 0.4;
  let scrolled = window.scrollY;
  if (scrolled > coords) {
    goTopBtn.classList.add('show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('show');
  }
}

function backToTop() {
  let scrolled = window.scrollY;
  window.scrollBy(0, -scrolled);
}