const nav = document.querySelector('.menuButton');
const menu = document.querySelector('.headerMenu');

nav.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.classList.toggle('open');
})