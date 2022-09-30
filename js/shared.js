var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButtons = document.querySelectorAll(".modal button");
var selectContactButton = document.querySelector(".main-nav__button");

selectContactButton.addEventListener("click", function() {
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