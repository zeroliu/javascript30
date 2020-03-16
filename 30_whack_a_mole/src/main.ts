const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
const scoreEl = document.querySelector('.score')!;

let score = 0;
let endTime = 0;
let timerId = -1;
const showRate = 0.03;

function setScore(value: number) {
  score = value;
  scoreEl.innerHTML = `${score}`;
}
function startGame() {
  setScore(0);
  endTime = Date.now() + 1000 * 10;
  clearInterval(timerId);
  timerId = setInterval(update, 1000 / 60);
}

function update() {
  if (Date.now() >= endTime) {
    console.log('game over');
    clearInterval(timerId);
  }
  const showNewMole = Math.random() < showRate;
  if (showNewMole) {
    const mole = moles[Math.floor(Math.random() * 6)];
    if (!mole.classList.contains('active')) {
      activateMole(mole);
    }
  }
}

function activateMole(mole: Element) {
  let timerId = -1;
  const deactivate = () => {
    mole.removeEventListener('click', clickHandler);
    mole.classList.remove('active');
    clearTimeout(timerId);
  };
  const clickHandler = () => {
    setScore(score + 1);
    deactivate();
  };
  mole.addEventListener('click', clickHandler);
  mole.classList.add('active');
  timerId = setTimeout(deactivate, 200 + Math.random() * 1800);
}

startButton?.addEventListener('click', startGame);
