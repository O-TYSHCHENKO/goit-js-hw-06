const listWithId = document.querySelector('#categories');
const categoriesChild = listWithId.children;
console.log(`Number of categories: ${categoriesChild.length}`);

const listWithClass = document.querySelectorAll('.item');
listWithClass.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});
