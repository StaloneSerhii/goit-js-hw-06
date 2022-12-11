let counterValue = 0;
const sumClick = document.querySelector('#value');

const buttonAdd = document.querySelector('button[data-action="increment"]');
const buttonRem = document.querySelector('button[data-action="decrement"]');

buttonAdd.addEventListener('click', getTitle);
buttonRem.addEventListener('click', remTitile)

function getTitle () {
    counterValue += 1;
    sumClick.textContent = counterValue
}

function remTitile () {
    counterValue -= 1;
    sumClick.textContent = counterValue
}
