function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector('input')
const inputCreate = document.querySelector('button[data-create]');
const inputDestroy = document.querySelector('button[data-destroy]');
const newDiv = document.querySelector('#boxes')


inputValue.addEventListener('blur', amount);
inputCreate.addEventListener('click', creatDiv)
inputDestroy.addEventListener('click', destroyBoxes)

let stat = [];

const mrg = 30;

let widthH = 30;

function amount (e) {

  stat = e.currentTarget.value


}

function creatDiv () {

  for (let i = 0; i < stat; i++) {

    const newElem = `<div style="width: ${widthH}px; height: ${widthH}px; background-color: ${getRandomHexColor()}; margin-bottom: ${mrg}px"></div>`;
    
    newDiv.insertAdjacentHTML("beforeend", newElem)
  
    widthH += 10;

 }
}

function destroyBoxes() {

newDiv.innerHTML= '';
}

