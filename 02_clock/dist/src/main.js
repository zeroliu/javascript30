"use strict";
let hourHandRot = 90;
let minuteHandRot = 90;
let secondHandRot = 90;
function updateHands() {
    const date = new Date();
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    if (!hourHand || !minuteHand || !secondHand) {
        throw new Error('Hand elements not found.');
    }
    hourHandRot = calculateRotation(hourHandRot, date.getHours() % 12, 12);
    minuteHandRot = calculateRotation(minuteHandRot, date.getMinutes(), 60);
    secondHandRot = calculateRotation(secondHandRot, date.getSeconds(), 60);
    hourHand.style.transform = transformStyle(hourHandRot);
    minuteHand.style.transform = transformStyle(minuteHandRot);
    secondHand.style.transform = transformStyle(secondHandRot);
}
function calculateRotation(rot, value, base) {
    let aR = rot % 360;
    const nR = value / base * 360 + 90;
    if (aR < 0) {
        aR += 360;
    }
    if (aR < 180 && (nR > (aR + 180))) {
        rot -= 360;
    }
    if (aR >= 180 && (nR <= (aR - 180))) {
        rot += 360;
    }
    rot += (nR - aR);
    return rot;
}
function transformStyle(rot) {
    return `rotate(${rot}deg)`;
}
setInterval(updateHands, 1000);
updateHands();
//# sourceMappingURL=main.js.map