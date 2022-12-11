const form = document.querySelector('.login-form');
const inputValue = document.querySelectorAll('input')

form.addEventListener('submit', onSerch)

function onSerch (evt) {
    evt.preventDefault()
    const {email, password} = evt.currentTarget.elements
    if (!email.value || !password.value) {
       
        alert('Enter the your data!')
    }
    console.log(login.value);
console.log(password.value);


}



