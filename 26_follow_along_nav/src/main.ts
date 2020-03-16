const buttons = document.querySelectorAll('ul.cool > li');
const background = document.querySelector('.dropdownBackground') as HTMLElement;
const nav = document.querySelector('.top')!;

function handleEnter(this: HTMLLIElement) {
  if (this.classList.contains('trigger-enter')) {
    return;
  }
  this.classList.add('trigger-enter');
  background.classList.add('open');
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);

  const dropdown = this.querySelector('.dropdown')!;
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };
  background.style.width = `${coords.width}px`;
  background.style.height = `${coords.height}px`;
  background.style.top = `${coords.top}px`;
  background.style.left = `${coords.left}px`;
}

function handleLeave(this: HTMLLIElement) {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('mouseenter', handleEnter));
buttons.forEach(button => button.addEventListener('mouseleave', handleLeave));
