const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    if (blockID) {
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
}

const header = document.querySelector('.header')
const burger = document.querySelector('.header__burger')
const links = document.querySelectorAll('.menu-link')

burger.addEventListener('click', function () {
  this && header.classList.toggle('--active')
})

document.addEventListener('mousedown', (e) => {
  const menuRoot = document.querySelector('.header__menu')
  if (!menuRoot.contains(e.target) && !burger.contains(e.target)) header.classList.remove('--active')
})

links.forEach((link) => {
  link.addEventListener('click', () => header.classList.contains('--active') && header.classList.remove('--active'))
})

const defaultOffsetBg = 130
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
window.addEventListener('scroll', () => {
  if (scrollPosition() > defaultOffsetBg) {
    header.classList.add('-style')
  } else {
    header.classList.remove('-style')
  }
})
