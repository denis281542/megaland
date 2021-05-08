/* Menu */
let toggleBtn = document.querySelector('.menu__toggle')
let menuActive = document.querySelector('.menu')
let menuLeft = document.querySelector('.menu__left')
let menuRigth = document.querySelector('.menu__right')

function toggleActive() {
  this.classList.toggle('menu__toggle--active')
  menuActive.classList.toggle('menu--active')
  menuLeft.classList.toggle('menu__left--active')
  menuRigth.classList.toggle('menu__right--active')
}

toggleBtn.addEventListener('click', toggleActive)

/* Show item btn */
let showBtn = document.getElementById('show-btn')
let cardHidden = document.querySelector('.card__wrapper')

function showItem() {
  this.style.display = 'none'
  cardHidden.classList.remove('card--hidden')
}

showBtn.addEventListener('click', showItem)