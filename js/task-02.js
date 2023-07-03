const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newmarkup = ingredients.map((elem) => {
  const listIngredient = document.createElement('li');
  listIngredient.classList.add('item');
  listIngredient.textContent = elem;
  return listIngredient;
});
const elemUlWihtId = document.querySelector('#ingredients');
elemUlWihtId.append(...newmarkup);
