"use strict";
const background = document.querySelectorAll('.background-car');
const styleBackground = window.getComputedStyle(background[0]);
const positionY = parseInt(styleBackground.backgroundPositionY);

window.addEventListener('scroll', backgroundMove);

function backgroundMove() {
  let scrolled = window.scrollY;
  let deltaY = scrolled * 0.5;

  for (let i = 0; i < background.length; i++) {
    background[i].style.backgroundPositionY = `${positionY - deltaY}px`;
  }
}