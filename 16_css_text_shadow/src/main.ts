const hero = document.querySelector('.hero') as HTMLElement;
const text = hero.querySelector('h1') as HTMLElement;

function shadow(this: HTMLElement, e: MouseEvent) {
  const target = e.target as HTMLElement;
  const walk = 10;

  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x += target.offsetLeft;
    y += target.offsetTop;
  }
  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  text.style.textShadow = `${-xWalk}px ${-yWalk}px 10px rgba(0,0,0,.3)`;
}

hero.addEventListener('mousemove', shadow);
