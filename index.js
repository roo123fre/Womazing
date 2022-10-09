const menu = document.querySelector('.menu')
const menuItem = document.querySelector('.nav__list')
menu.addEventListener('click',()=>{
    menuItem.classList.toggle('nav__active')
})
