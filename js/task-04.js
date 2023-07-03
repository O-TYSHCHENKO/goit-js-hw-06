let counterValue = 0;
const value = document.querySelector('#value');
const decBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decFunction = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decBtn.addEventListener('click', decFunction);
const incFunction = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
incBtn.addEventListener('click', incFunction);
