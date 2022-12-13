function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValueAll = document.querySelector('#controls');
const inputValue = document.querySelector('input')
const inputCreate = document.querySelector('button[data-create]');
const inputDestroy = document.querySelector('button[data-destroy]');
const newDiv = document.querySelector('#boxes')


inputValue.addEventListener('blur', amount);
inputCreate.addEventListener('click', creatDiv)

let stat = [];

function amount (e) {

  stat += e.currentTarget.value

  console.log(e.currentTarget.value)

}

function creatDiv () {

  console.log(stat)

  for (let i = 0; i < stat; i++) {

    const newElem = '<div></div>';
 console.log(newElem);

    newDiv.insertAdjacentHTML("beforeend", newElem)
   
 }
}

