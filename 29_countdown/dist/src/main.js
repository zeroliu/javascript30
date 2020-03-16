"use strict";
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__controls > button');
const custom = document.querySelector('input[name="minutes"]');
let timerId = -1;
let timeLeft = 0;
let endDate = new Date();
function pad(num) {
    return ('0' + num).slice(-2);
}
function renderedTime(total) {
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
function setTimer(seconds) {
    clearInterval(timerId);
    timeLeft = seconds;
    const currentDate = new Date();
    endDate = new Date(currentDate.getTime() + seconds * 1000);
    timerId = setInterval(updateTime, 1000);
    renderTime();
}
function renderTime() {
    var _a, _b;
    displayTimeLeft.innerHTML = renderedTime(timeLeft);
    displayEndTime.innerHTML = `Be back at ${(_a = endDate) === null || _a === void 0 ? void 0 : _a.getHours()}:${pad((_b = endDate) === null || _b === void 0 ? void 0 : _b.getMinutes())}`;
}
function handleClick() {
    const seconds = Number(this.dataset['time']);
    setTimer(seconds);
}
function handleCustomInput() {
    setTimer(Number(this.value) * 60);
}
buttons.forEach(button => button.addEventListener('click', handleClick));
custom.addEventListener('input', handleCustomInput);
//# sourceMappingURL=main.js.map