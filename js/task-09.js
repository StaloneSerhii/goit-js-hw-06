function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const target = document.querySelector('body');
const btnChange = document.querySelector('button');
const text = document.querySelector('.color')

btnChange.addEventListener('click', onState)
console.log(btnChange);
function onState () {
  const random = getRandomHexColor()
  target.style.backgroundColor = random
  text.textContent = random
console.log(random)
}


