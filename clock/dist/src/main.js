"use strict";
function updateHands() {
    const date = new Date();
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    if (!hourHand || !minuteHand || !secondHand) {
        throw new Error('Hand elements not found.');
    }
    hourHand.style.transform = calculateTransformStyle(date.getHours() % 12, 12);
    minuteHand.style.transform = calculateTransformStyle(date.getMinutes(), 60);
    secondHand.style.transform = calculateTransformStyle(date.getSeconds(), 60);
}
function calculateTransformStyle(value, base) {
    return `rotate(${value / base * 360 + 90}deg)`;
}
setInterval(updateHands, 1000);
updateHands();
//# sourceMappingURL=main.js.map