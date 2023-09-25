const burgerButton = document.querySelector('.burger')
const navigationMenu = document.querySelector('.navigation')
const navigationLinks = document.querySelectorAll('.navigation-link')
const body = document.querySelector('.page-body')


function navMenu() {
  navigationMenu.classList.toggle('active')
  body.classList.toggle('lock')
}

burgerButton.addEventListener('click', navMenu)

for (let navLink of navigationLinks) {
  navLink.addEventListener('click', navMenu)
}