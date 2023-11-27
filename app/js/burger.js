const navBtn = document.querySelector('.header__nav-btn');
const navIcon = document.querySelector('.nav-icon');
const topInner = document.querySelector('.header__top-inner');
const menu = document.querySelector('.menu__list');


navBtn.addEventListener('click', ()=>{
    navIcon.classList.toggle('nav-icon--active');
    menu.classList.toggle('menu__list--active')
});