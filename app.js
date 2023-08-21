const body = document.querySelector('body')

const swit = document.querySelector('.switch-lua')

const switSol = document.querySelector('.switch-sol')

swit.addEventListener('click', function () {
  body.className = 'light'
})

switSol.addEventListener('click', function () {
  body.className = 'dark'
})
