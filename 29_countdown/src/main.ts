const displayTimeLeft = document.querySelector(
  '.display__time-left',
) as HTMLElement;
const displayEndTime = document.querySelector(
  '.display__end-time',
) as HTMLElement;
const buttons = document.querySelectorAll('.timer__controls > button');
const custom = document.querySelector(
  'input[name="minutes"]',
) as HTMLInputElement;

let timerId = -1;
let timeLeft = 0;
let endDate: Date = new Date();

function pad(num: number) {
  return ('0' + num).slice(-2);
}

function renderedTime(total: number) {
  const hour = Math.floor(total / 3600);
  let sec = total % 3600;
  const min = Math.floor(sec / 60);
  sec = sec % 60;
  if (hour > 0) {
    return `${hour}:${pad(min)}:${pad(sec)}`;
  }
  if (min > 0) {
    return `${min}:${pad(sec)}`;
  }
  return `0:${pad(sec)}`;
}

function updateTime() {
  if (timeLeft <= 0) {
    clearInterval(timerId);
    timerId = -1;
    return;
  }
  timeLeft = Math.round((endDate.getTime() - Date.now()) / 1000);
  renderTime();
}

function setTimer(seconds: number) {
  clearInterval(timerId);
  timeLeft = seconds;
  const currentDate = new Date();
  endDate = new Date(currentDate.getTime() + seconds * 1000);
  timerId = setInterval(updateTime, 1000);
  renderTime();
}

function renderTime() {
  displayTimeLeft.innerHTML = renderedTime(timeLeft);
  displayEndTime.innerHTML = `Be back at ${endDate?.getHours()}:${pad(
    endDate?.getMinutes(),
  )}`;
}

function handleClick(this: HTMLElement) {
  const seconds = Number(this.dataset['time']);
  setTimer(seconds);
}

function handleCustomInput(this: HTMLInputElement) {
  setTimer(Number(this.value) * 60);
}

buttons.forEach(button => button.addEventListener('click', handleClick));
custom.addEventListener('input', handleCustomInput);
