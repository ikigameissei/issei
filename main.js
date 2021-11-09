'use strict'

const ham = document.querySelector('.hamburger');
const p = document.querySelector('.menu_text');
const nav = document.querySelector('.nav');
// const text = p.innerHTML
ham.addEventListener('click',() => {
  mobileOpen();
});
nav.addEventListener('click',() => {
  mobileOpen();
});
function mobileOpen() {
  ham.classList.toggle('menu_open');
  nav.classList.toggle('menu_open');
}