const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");
// console.log(ingredients);
// const itemArray = [];
ingredients.forEach(element => {
  const createElement = document.createElement('li')
  createElement.classList.add('item')
  createElement.textContent = element
  
 
   ingredientsEl.append(createElement);
});
