const inputFrontSizeControl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");
inputFrontSizeControl.addEventListener("input", handleInputEl);

function handleInputEl(event) {
  spanTextEl.style.fontSize = event.currentTarget.value + "px";
}
