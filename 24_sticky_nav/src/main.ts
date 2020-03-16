const header = document.querySelector('header')!;
const nav = document.querySelector('nav')!;
const topOfNav = nav.offsetTop;

function onScroll() {
  if (window.scrollY < topOfNav) {
    document.body.classList.remove('sticky');
    document.body.style.paddingTop = '0';
  } else {
    document.body.classList.add('sticky');
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  }
}
window.onscroll = onScroll;
