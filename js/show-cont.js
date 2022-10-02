const ShowButtons = document.querySelectorAll('.blogs .button-show');
const HideContents = document.querySelectorAll('.blogs .hide-content');

for (let i = 0; i < ShowButtons.length; i++) {
  ShowButtons[i].addEventListener("click", function () {
    HideContents[i].classList.add('open');
    ShowButtons[i].classList.add('close');
  })
}