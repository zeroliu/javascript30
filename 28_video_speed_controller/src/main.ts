const speed = document.querySelector('.speed') as HTMLElement;
const video = document.querySelector('video') as HTMLVideoElement;
const speedBar = document.querySelector('.speed-bar') as HTMLElement;

let startY: number | null = null;
const min = 0.5;
const max = 4;
const speedHeight = speed.getBoundingClientRect().height;

function playbackRate(percent: number) {
  return min + (max - min) * percent;
}

function setVideoSpeed(percent: number) {
  video.playbackRate = playbackRate(percent);
}

function renderSpeedBar(percent: number) {
  speedBar.style.height = `${percent * 100}%`;
  speedBar.innerHTML = `${playbackRate(percent).toFixed(1)}x`;
}

function move(e: MouseEvent) {
  if (startY === null) {
    return;
  }
  startY = e.pageY - speed.offsetTop;
  const percent = startY / speedHeight;
  renderSpeedBar(percent);
  setVideoSpeed(percent);
}

function start(e: MouseEvent) {
  console.log('start');
  startY = e.pageY - speed.offsetTop;
  const percent = startY / speedHeight;
  renderSpeedBar(percent);
  setVideoSpeed(percent);
}

function end() {
  console.log('end');
  startY = null;
}

speed.addEventListener('mousedown', start);
speed.addEventListener('mouseup', end);
speed.addEventListener('mousemove', move);
