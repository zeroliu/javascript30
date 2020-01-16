const keys: number[] = [];
const PASSWORD = [40, 40, 37, 37, 39, 39, 65, 66, 65, 66, 13];

function handleKeyup(e: KeyboardEvent) {
  keys.push(e.keyCode);
  keys.splice(0, keys.length - PASSWORD.length);
  console.log(keys);
  if (keys.length !== PASSWORD.length) return;
  let found = true;
  for (let i = 0; i < keys.length; ++i) {
    if (keys[i] !== PASSWORD[i]) {
      found = false;
      break;
    }
  }
  if (found) {
    document.body.innerHTML = '<h1>Boom</h1>';
  }
}
document.addEventListener('keyup', handleKeyup);
