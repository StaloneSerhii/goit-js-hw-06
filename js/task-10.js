function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValueAll = document.querySelector('#controls');
const inputValue = document.querySelector('input')
const inputCreate = document.querySelector('button[data-create]');
const inputDestroy = document.querySelector('button[data-destroy]');



inputValue.addEventListener('blur', amount);

function amount (e) {
  console.log(e.currentTarget.value)
  
  for (let i = 0; i < Number(e); i++) {
    const newElem = document.createElement('div')
  }
  
}


// function createBoxes(amount) {
// console.log(amount.carrentTarget.value)
// }
