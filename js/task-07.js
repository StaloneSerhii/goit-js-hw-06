const elemStats = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

elemStats.addEventListener('input', getStats)

function getStats (evn) {
   


text.style.fontSize = evn.currentTarget.value + 'px'
console.log(text);
}