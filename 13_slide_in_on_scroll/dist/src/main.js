"use strict";
const images = document.querySelectorAll('.slide-in');
function checkSlide() {
    console.count('check slide');
    images.forEach(image => {
        const box = image.getBoundingClientRect();
        if (box.height / 2 + box.y < innerHeight && box.y + box.height / 2 > 0) {
            image.classList.add('active');
        }
        else {
            image.classList.remove('active');
        }
    });
}
document.addEventListener('scroll', debounce(checkSlide));
function debounce(callback, timeout = 50) {
    let isDebouncing = false;
    let meta = {
        cached: false,
    };
    function execute() {
        if (!meta.cached) {
            return;
        }
        meta.cached = false;
        return callback.apply(undefined, meta.cachedArgs || []);
    }
    return (...args) => {
        meta.cached = true;
        meta.cachedArgs = args;
        if (!isDebouncing) {
            isDebouncing = true;
            setTimeout(() => {
                isDebouncing = false;
                execute();
            }, timeout);
            return execute();
        }
        return;
    };
}
//# sourceMappingURL=main.js.map