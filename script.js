const btn = document.getElementById('menu-btn')
const burger = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    burger.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)