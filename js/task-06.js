const inputVall = document.querySelector('#validation-input');
const vallMaxNum = document.querySelector('input[data-length="6"]')
const vallMaxLength = vallMaxNum.dataset.length
const valueEventNum = Number(vallMaxLength)

inputVall.addEventListener('blur', getInput);

function getInput (evn) {
const valueEvent = evn.currentTarget.value.length

console.log(valueEvent);

if (valueEvent === valueEventNum) {

        inputVall.classList.remove('invalid')
        inputVall.classList.add('valid')


} else {
   
     
        inputVall.classList.remove('valid')
        inputVall.classList.add('invalid')


  
    
}
 
}

console.log(inputVall)