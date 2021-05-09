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

/* Close modal window */
let closeModalBtn = document.getElementById('close-modal-btn')
let modalWindow = document.querySelector('.modal__wrapper')
closeModalBtn.addEventListener('click', () => {
  modalWindow.style.display = 'none'
})

/* Open modal */
let offersList = document.querySelector('.offers__list')

function openModal(event) {
  let target = event.target.tagName

  if(target != 'BUTTON') return
  
  modalWindow.style.display = 'block'
}

offersList.addEventListener('click', openModal)
