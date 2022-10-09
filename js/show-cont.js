'use strict';
const ShowButtons = document.querySelectorAll('.blogs .button-show');
const HideButtons = document.querySelectorAll('.blogs .button-hide');
const HideContents = document.querySelectorAll('.blogs .hide-content');

for (let i = 0; i < ShowButtons.length; i++) {
  ShowButtons[i].addEventListener("click", ShowContent);

  function ShowContent() {
    ShowButtons[i].classList.add('close');
    setTimeout(ShowContentTime, 400);
  }

  function ShowContentTime() {
    HideContents[i].classList.remove('close');
    HideButtons[i].classList.remove('close');
  }
}

for (let i = 0; i < HideButtons.length; i++) {
  HideButtons[i].addEventListener("click", HideContent);

  function HideContent() {
    HideButtons[i].classList.add('close');
    setTimeout(HideContentTime, 500);
  }

  function HideContentTime() {
    HideContents[i].classList.add('close');
    ShowButtons[i].classList.remove('close');
  }
}