const inputVall = document.querySelector('#name-input');
const changeSpan = document.querySelector('#name-output')

inputVall.addEventListener('input', getInput)

function tInput(evn) {
    if (!evn.currentTarget.value) {
        changeSpan.textContent = 'Anonymouse'
} else {
    changeSpan.textContent = evn.currentTarget.value
    console.log(evn.currentTarget.value);
}
}
