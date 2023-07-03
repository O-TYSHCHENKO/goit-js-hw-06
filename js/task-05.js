const textOutId = document.querySelector('#name-output');
const textAnonimus = textOutId.textContent;
const textInput = document.querySelector('#name-input');

function eventWrite() {
  textOutId.textContent =
    textInput.value === '' ? textAnonimus : textInput.value;
}
textInput.addEventListener('input', eventWrite);
