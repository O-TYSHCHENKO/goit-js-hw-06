const fontControl = document.querySelector('#font-size-control');
const fontElem = document.getElementById('text');
const handleChange = () => {
  fontElem.style.fontSize = fontControl.value + 'px';
};
fontControl.addEventListener('input', handleChange);
