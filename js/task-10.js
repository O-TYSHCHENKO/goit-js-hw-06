function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputElem = document.querySelector('#controls input');
const boxElem = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const delButton = document.querySelector('button[data-destroy]');
inputElem.addEventListener('input', getValueInput);
createButton.addEventListener('click', addElem);
delButton.addEventListener('click', delElem);
function delElem() {
  boxElem.innerHTML = '';
  inputElem.value = '';
}
function getValueInput(event) {
  inputElem.value = event.currentTarget.value;
}
function addElem() {
  createBoxes(inputElem.value);
}
function createBoxes(amount) {
  let sizeFirstBox = 30;
  let arrBox = [];
  for (let i = 0; i < amount; i++) {
    const newBoxElem = document.createElement('div');
    newBoxElem.style.width = `${sizeFirstBox}px`;
    newBoxElem.style.marginBottom = '5px';
    newBoxElem.style.height = `${sizeFirstBox}px`;
    newBoxElem.style.backgroundColor = getRandomHexColor();
    sizeFirstBox += 10;
    arrBox.push(newBoxElem);
  }
  boxElem.append(...arrBox);
}
