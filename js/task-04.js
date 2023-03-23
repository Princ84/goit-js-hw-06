let counterValue = 0;
const addButton = document.querySelector('[data-action= "increment"]');
const pickUpValue = document.querySelector('[data-action= "decrement"]');
// console.log(addButton, pickUpValue);
const valueEl = document.querySelector('#value');


const addValue = (element)=>{
    counterValue+=1;
     valueEl.textContent = counterValue;
}

const minusValue = (element) => {
    counterValue-=1;
    valueEl.textContent = counterValue;
}

addButton.addEventListener('click', addValue);
pickUpValue.addEventListener('click', minusValue);