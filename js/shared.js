var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButtons = document.querySelectorAll(".modal button");
var selectContactButton = document.querySelector(".main-nav__button");

// modal Window

selectContactButton.addEventListener("click", function () {
  document.body.classList.add('_lock');
  modal.classList.add("open");
  backdrop.classList.add("open");
});

for (var i = 0; i < modalNoButtons.length; i++) {
  if (modalNoButtons[i]) {
    modalNoButtons[i].addEventListener("click", closeModal);
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  document.body.classList.remove('_lock');
}

// menu_icon (burger)
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.main-nav__items');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('open');
  })
}