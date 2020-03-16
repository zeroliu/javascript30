const divs = document.querySelectorAll('div');
function logText(this: HTMLElement, e: MouseEvent) {
  console.log(e);
  // console.log(this.classList.value);
}
// divs.forEach(div => div.addEventListener('click', logText, { capture: true }));
const one = document.querySelector('.one') as HTMLElement;
one.addEventListener('mousedown', logText);
