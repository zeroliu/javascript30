const canvas = document.querySelector('#draw') as HTMLCanvasElement;
const context = canvas.getContext('2d')!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e: MouseEvent) {
  if (!isDrawing) return;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
  hue = (hue + 1) % 360;
  context.lineWidth = Math.min(context.lineWidth + 0.1, 100);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e: MouseEvent) => {
  isDrawing = true;
  context.lineWidth = 1;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});
