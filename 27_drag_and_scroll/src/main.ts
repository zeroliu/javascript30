const items = document.querySelector('.items') as HTMLElement;

let startX: number | null = null;
let startScroll: number = 0;

function handleMousedown(this: HTMLElement, e: MouseEvent) {
  startX = e.pageX;
  startScroll = this.scrollLeft;
  items.classList.add('active');
}

function handleMouseup(this: HTMLElement) {
  startX = null;
  items.classList.remove('active');
}

function handleMousemove(this: HTMLElement, e: MouseEvent) {
  if (startX === null) {
    return;
  }
  items.scrollLeft = startScroll - e.pageX + startX;
  e.preventDefault();
}

items.addEventListener('mousedown', handleMousedown);
items.addEventListener('mouseup', handleMouseup);
items.addEventListener('mousemove', handleMousemove);
