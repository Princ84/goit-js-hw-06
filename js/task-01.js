const categoryEl = document.querySelectorAll(".item");
// const categories = document.getElementById("categories");
console.log(`Number of categories: ${categoryEl.length}`);
const itemEl = document.querySelectorAll('li.item');
// console.log(itemEl);
itemEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    // console.log(`Elements: ${element.lastElementChild.children.length}`);
    console.log(`Elements:${element.lastElementChild.childElementCount}`);
});
    
// childElementCount - вот этого в конспекте нет , где например искать такое