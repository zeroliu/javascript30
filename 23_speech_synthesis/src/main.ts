const msg = new SpeechSynthesisUtterance();
let voices = [] as SpeechSynthesisVoice[];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = (document.querySelector(
  '[name="text"]',
) as HTMLTextAreaElement).value;

function populateVoices(this: SpeechSynthesis) {
  voices = this.getVoices();
  const voiceOptions = voices.map(
    voice =>
      `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`,
  );
  voicesDropdown!.innerHTML = voiceOptions.join('');
  if (!msg.voice) {
    msg.voice = voices[0];
  }
}

function toggleVoice() {
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function setVoice(this: HTMLSelectElement) {
  const selectedVoice = voices.find(voice => voice.name === this.value);
  if (selectedVoice) {
    msg.voice = selectedVoice;
    toggleVoice();
  }
}

function setOption(this: HTMLInputElement) {
  (msg as any)[this.name] = this.value;
  toggleVoice();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown!.addEventListener('change', setVoice);
speakButton!.addEventListener('click', () => {
  speechSynthesis.speak(msg);
});
stopButton!.addEventListener('click', () => {
  speechSynthesis.cancel();
});
options.forEach(option => option.addEventListener('change', setOption));
