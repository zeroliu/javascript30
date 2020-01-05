const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => {
  input.addEventListener('change', handleChange);
  input.addEventListener('mousemove', handleChange);
});

function handleChange(this: HTMLInputElement) {
  const suffix = this.dataset.sizing;
  const value = suffix ? `${this.value}${suffix}` : this.value;
  document.documentElement.style.setProperty(`--${this.name}`, value);
}
