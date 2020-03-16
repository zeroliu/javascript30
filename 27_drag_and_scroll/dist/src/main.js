"use strict";
const items = document.querySelector('.items');
let startX = null;
let startScroll = 0;
function handleMousedown(e) {
    startX = e.pageX;
    startScroll = this.scrollLeft;
    items.classList.add('active');
}
function handleMouseup() {
    startX = null;
    items.classList.remove('active');
}
function handleMousemove(e) {
    if (startX === null) {
        return;
    }
    items.scrollLeft = startScroll - e.pageX + startX;
    e.preventDefault();
}
items.addEventListener('mousedown', handleMousedown);
items.addEventListener('mouseup', handleMouseup);
items.addEventListener('mousemove', handleMousemove);
//# sourceMappingURL=main.js.map