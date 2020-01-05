document.addEventListener('keyup', ev => {
  const audio = document.querySelector(
    `audio[data-key="${ev.keyCode}"]`,
  ) as HTMLAudioElement;
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!key) {
    return;
  }
  key.classList.add('key-playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', (ev: Event) => {
    if ((ev as TransitionEvent).propertyName !== 'transform') {
      key.classList.remove('key-playing');
    }
  });
});
