"use strict";
const divs = document.querySelectorAll('div');
function logText(e) {
    console.log(e);
    // console.log(this.classList.value);
}
// divs.forEach(div => div.addEventListener('click', logText, { capture: true }));
const one = document.querySelector('.one');
one.addEventListener('mousedown', logText);
//# sourceMappingURL=main.js.map