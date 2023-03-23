const inputdEl = document.querySelector("#validation-input");

inputdEl.addEventListener('blur', onInputTextLength);
const inputValidLength = Number(inputdEl.dataset.length);
// console.log(inputValidLength);
function onInputTextLength(event) {
    if (inputValidLength===inputdEl.value.length) {
        inputdEl.classList.remove('invalid');
        inputdEl.classList.add('valid')
    } else {
        inputdEl.classList.remove('valid');
         inputdEl.classList.add('invalid')
  }
    


}