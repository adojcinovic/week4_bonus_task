const inputs = document.querySelectorAll('.input')
const button = document.querySelector('button')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const email = document.querySelector('.email')

function checkEmail() {
    if (emailRegex.test(email.firstElementChild.value)) {
        email.classList.remove('show')
        email.classList.add('email')
    } else {
        email.classList.add('show')
        email.firstElementChild.value = ''
        email.firstElementChild.placeholder = 'example@quantox.com'
    }
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
