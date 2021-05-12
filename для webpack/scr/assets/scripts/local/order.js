/* Menu */
let toggleBtn = document.querySelector('.menu__toggle')
let menuActive = document.querySelector('.menu')
let menuLeft = document.querySelector('.menu__left')
let menuRigth = document.querySelector('.menu__right')

function toggleActive() {
  this.classList.toggle('menu__toggle--active')
  menuActive.classList.toggle('menu--active')

  if(!menuLeft.classList.contains('menu__left--active') &&
  !menuRigth.classList.contains('menu__right--active')) {
  setTimeout(function() {
      menuLeft.classList.add('menu__left--active')
      menuRigth.classList.add('menu__right--active')
    }, 1000)
  } else {
    menuLeft.classList.remove('menu__left--active')
    menuRigth.classList.remove('menu__right--active')
  }
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

/* Current date */
let date = new Date()
let dateInput = document.getElementById('date');

function formatDate(date) {
  let dd = date.getDate()
  if (dd < 10) dd = '0' + dd

  let MM = date.getMonth() + 1
  if (MM < 10) MM = '0' + MM

  let yyyy = date.getFullYear()
  if (yyyy < 10) yyyy = '0' + yyyy

  return yyyy + '-' + MM + '-' + dd
}

let currentDate = formatDate(date)
dateInput.value = currentDate

/* Open modal */
let offersList = document.querySelector('.offers__list')
let phoneSection = document.querySelectorAll('.phone')
let navLink = document.querySelector('.menu__btn')

function openModal(event) {
  let target = event.target.tagName

  if(target != 'BUTTON') return
  
  modalWindow.style.display = 'block'
}

offersList.addEventListener('click', openModal)
navLink.addEventListener('click', e => {
  modalWindow.style.display = 'block'
})

phoneSection.forEach(el => {
  el.addEventListener('click', openModal)
})

/* Close modal window */
let closeModalBtn = document.getElementById('close-modal-btn')
let modalWindow = document.querySelector('.modal__wrapper')
closeModalBtn.addEventListener('click', () => {
  modalWindow.style.display = 'none'
})

document.addEventListener('click', e => {
  if(e.target.classList.contains('modal')) {
    modalWindow.style.display = 'none'
  }
})

