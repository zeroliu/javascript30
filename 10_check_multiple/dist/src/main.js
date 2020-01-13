"use strict";
const inputs = [
    ...document.querySelectorAll('input[type="checkbox"]'),
];
let lastIndex = -1;
let lastValue = false;
inputs.forEach(input => {
    input.addEventListener('click', (event) => {
        const currentIndex = inputs.indexOf(input);
        const currentValue = input.checked;
        if (lastIndex >= 0 && event.shiftKey) {
            const min = Math.min(lastIndex, currentIndex);
            const max = Math.max(lastIndex, currentIndex);
            for (let i = min; i <= max; i++) {
                inputs[i].checked = currentValue;
            }
        }
        lastIndex = currentIndex;
        lastValue = currentValue;
    });
});
//# sourceMappingURL=main.js.map