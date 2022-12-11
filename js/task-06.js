const inputVall = document.querySelector('#validation-input');
const vallMaxNum = document.querySelector('input[data-length="6"]')
const vallMaxLength = vallMaxNum.dataset.length

inputVall.addEventListener('blur', getInput);

function getInput (evn) {
const valueEvent = evn.currentTarget.value.length

console.log(valueEvent);

if (valueEvent == vallMaxLength) {

    if(inputVall.classList.contains('invalid')){
        inputVall.classList.remove('invalid')
        inputVall.classList.add('valid')
    }else {
    inputVall.classList.add('valid')
    }

} else {
   
    if(inputVall.classList.contains('valid')) {
        inputVall.classList.remove('valid')
        inputVall.classList.add('invalid')
    } else {
        inputVall.classList.add('invalid')
    }
  
    
}
 
}

console.log(inputVall)