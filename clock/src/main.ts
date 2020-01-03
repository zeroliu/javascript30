function updateHands() {
  const date = new Date();
  const hourHand = document.querySelector('.hour-hand') as HTMLElement;
  const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
  const secondHand = document.querySelector('.second-hand') as HTMLElement;
  if (!hourHand || !minuteHand || !secondHand) {
    throw new Error('Hand elements not found.');
  }
  hourHand.style.transform = calculateTransformStyle(date.getHours() % 12, 12);
  minuteHand.style.transform = calculateTransformStyle(date.getMinutes(), 60);
  secondHand.style.transform = calculateTransformStyle(date.getSeconds(), 60);
}

function calculateTransformStyle(value: number, base: number) {
  return `rotate(${value / base * 360 + 90}deg)`;
}

setInterval(updateHands, 1000);
updateHands();
