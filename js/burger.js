const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
  body.classList.toggle('lock')

})

menu.addEventListener('click', (e) => {
  let target = e.target
  if (target.tagName != 'A') return

  burger.classList.toggle('active')
  menu.classList.toggle('active')
  body.classList.toggle('lock')
})
