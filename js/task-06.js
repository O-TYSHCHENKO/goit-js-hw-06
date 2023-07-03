const textInput = document.querySelector('#validation-input');
const handleWrite = () => {
  if (
    Number(textInput.getAttribute('data-length')) === textInput.value.length
  ) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
};
textInput.addEventListener('blur', handleWrite);
