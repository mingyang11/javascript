// 节流
function throttle(fn, delay) {
  let curTime = Date.now();
  return function () {
    const context = this;
    const args = arguments;
    const nowTime = Date.now();
    if (nowTime - curTime > delay) {
      curTime = nowTime;
      return fn.apply(context, args);
    }
  };
}

// // 防抖
// function debounce(fun, delay) {
//   const timer = null;
//   return function () {
//     const context = this;
//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     }

//     timer = setTimeout(() => {
//       fun.apply(context, arguments);
//     }, delay);
//   };
// }

function throtall(fn, delay) {
  let curTime = Date.now();
  return function () {
    const context = this;
    const args = arguments;
    const nowTime = Date.now();
    if (nowTime - curTime > delay) {
      curTime = nowTime;
      fn.apply(context, args);
    }
  };
}
