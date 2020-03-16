"use strict";
const speed = document.querySelector('.speed');
const video = document.querySelector('video');
const speedBar = document.querySelector('.speed-bar');
let startY = null;
const min = 0.5;
const max = 4;
const speedHeight = speed.getBoundingClientRect().height;
function playbackRate(percent) {
    return (min + (max - min) * percent).toFixed(1);
}
function setVideoSpeed(percent) {
    video.playbackRate = playbackRate(percent);
}
function renderSpeedBar(percent) {
    speedBar.style.height = `${percent * 100}%`;
    speedBar.innerHTML = `${playbackRate(percent)}x`;
}
function move(e) {
    if (startY === null) {
        return;
    }
    startY = e.pageY - speed.offsetTop;
    const percent = startY / speedHeight;
    renderSpeedBar(percent);
    setVideoSpeed(percent);
}
function start(e) {
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
//# sourceMappingURL=main.js.map