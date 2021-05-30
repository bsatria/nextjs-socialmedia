// eslint-disable-next-line import/prefer-default-export
export function debounce(func, wait, immediate) {
  let timeout;
  return function debounced(...args) {
    // @ts-ignore
    const context = this;
    const later = function laterFn() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}
