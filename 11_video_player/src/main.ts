const player = document.querySelector('.player')!;
const video = player.querySelector('video') as HTMLVideoElement;
const progress = player.querySelector('.progress') as HTMLElement;
const progressBar = player.querySelector('.progress__filled') as HTMLElement;
const playButton = player.querySelector('.toggle')!;
const skipButtons = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider');

progressBar.style.flexBasis = '0';
let isScrubbing = false;

function togglePlay() {
  if (video.paused) {
    video.play();
    return;
  }
  video.pause();
}
function updatePlayButton() {
  const text = video.paused ? '►' : '▮▮';
  playButton.textContent = text;
}

function skip(this: HTMLElement) {
  const offset = this.dataset['skip']!;
  video.currentTime += parseInt(offset);
}

function updateVideoProperty(this: HTMLInputElement) {
  const name = this.name as 'volume' | 'playbackRate';
  video[name] = parseFloat(this.value);
}

function timeUpdate() {
  progressBar.style.flexBasis = `${(video.currentTime / video.duration) *
    100}%`;
}

function scrub(e: MouseEvent) {
  const percent = e.offsetX / progress.offsetWidth;
  video.currentTime = percent * video.duration;
}

progress.addEventListener('mousedown', e => {
  isScrubbing = true;
  scrub(e);
});
progress.addEventListener('mouseup', e => {
  isScrubbing = false;
  scrub(e);
});
progress.addEventListener('mousemove', e => {
  if (isScrubbing) {
    scrub(e);
  }
});
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('playing', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', timeUpdate);
skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});
sliders.forEach(slider => {
  slider.addEventListener('input', updateVideoProperty);
});
