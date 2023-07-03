function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const butClick = document.querySelector('.change-color');
const messageText = document.querySelector('.color');
const bodyColor = document.querySelector('body');

const handleClick = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  messageText.textContent = getRandomHexColor();
};
butClick.addEventListener('click', handleClick);
