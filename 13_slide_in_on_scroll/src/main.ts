const images = document.querySelectorAll('.slide-in');
function checkSlide() {
  console.count('check slide');
  images.forEach(image => {
    const box = image.getBoundingClientRect();
    if (box.height / 2 + box.y < innerHeight && box.y + box.height / 2 > 0) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}
document.addEventListener('scroll', debounce(checkSlide));

function debounce<A extends any[], R>(
  callback: (...args: A) => R,
  timeout = 50,
): (...args: A) => R | undefined {
  let isDebouncing = false;
  let meta: { cached: boolean; cachedArgs?: A } = {
    cached: false,
  };
  function execute() {
    if (!meta.cached) {
      return;
    }
    meta.cached = false;
    return callback.apply(undefined, meta.cachedArgs || ([] as any));
  }
  return (...args: A) => {
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
