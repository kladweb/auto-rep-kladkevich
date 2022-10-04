const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButtons = document.querySelectorAll('.modal button');
const selectContactButton = document.querySelectorAll('.main-nav__button');

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.main-nav__items');

// modal Window
for (var i = 0; i < selectContactButton.length; i++) {
  selectContactButton[i].addEventListener('click', function () {
    modal.classList.add('open');
    document.body.classList.add('_lock');
    backdrop.classList.add('open');
  })
}

for (var i = 0; i < modalNoButtons.length; i++) {
  if (modalNoButtons[i]) {
    modalNoButtons[i].addEventListener('click', closeModal);
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  document.body.classList.remove('_lock');
  if (menuBody) {
    menuBody.classList.remove('open');
    iconMenu.classList.remove('_active');
  }
}

// menu_icon (burger)
if (menuBody) {
  iconMenu.addEventListener('click', function () {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('open');
  })
}

// scroll-up
var goTopBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
  var scrolled = window.scrollY;
  var coords = window.innerHeight * 0.4;

  if (scrolled > coords) {
    goTopBtn.classList.add('show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('show');
  }
}

function backToTop() {
  var scrolled = window.scrollY;
  window.scrollBy(0, -scrolled);
}