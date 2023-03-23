function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector("span.color");
const body = document.querySelector("body");
changeColorEl.addEventListener("click", onChangeColor);

function onChangeColor(elem) {
  body.style.backgroundColor = getRandomHexColor();
  colorEl.innerHTML = getRandomHexColor();
}
