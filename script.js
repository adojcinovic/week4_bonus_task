const inputs = document.querySelectorAll('.input')
const button = document.querySelector('button')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function checkEmail() {
    const email = document.getElementById('email')
    emailRegex.test(email.value) ? null : email.classList.add('input_error')
    email.placeholder = 'example@quantox.com'
}

function checkInputs() {
    inputs.forEach((input) => {
        input.firstElementChild.value.length === 0 ? input.classList.add('show') : input.classList.remove('show')
    })
}

button.addEventListener('click', () => {
    checkEmail()
    checkInputs()
})
