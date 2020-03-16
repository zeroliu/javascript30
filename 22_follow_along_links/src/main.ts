const triggers = document.querySelectorAll('a');
const highlighter = document.createElement('div');
highlighter.classList.add('highlight');
document.body.appendChild(highlighter);

function highlight(this: HTMLAnchorElement) {
  const { width, height, left, top } = this.getBoundingClientRect();
  console.log(this.getBoundingClientRect());
  highlighter.style.width = `${width}px`;
  highlighter.style.height = `${height}px`;
  highlighter.style.transform = `translate(${left + window.scrollX}px, ${top +
    window.scrollY}px)`;
}
triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', highlight);
});
