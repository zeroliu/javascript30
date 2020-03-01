"use strict";
const timeNodes = document.querySelectorAll('li[data-time]');
const secs = Array.from(timeNodes)
    .map(timeNode => timeNode.dataset['time'])
    .reduce((totalSecs, timeStr) => {
    const [min, secs] = timeStr.split(':').map(parseFloat);
    totalSecs += min * 60 + secs;
    return totalSecs;
}, 0);
const hour = Math.floor(secs / 3600);
let secondsLeft = secs % 3600;
const min = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
const resStr = `${hour}:${min}:${secondsLeft}`;
console.log(resStr);
//# sourceMappingURL=main.js.map