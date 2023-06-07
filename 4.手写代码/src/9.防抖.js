// 函数防抖是指事件在被触发n长时间后再执行，如果在这n秒内事件又被触发，则重新计时。可以使用在一些点击请求的时间上，避免因为用户的多次点击而造成多次请求
function debouncs(fn, delay) {
  let timer = null;
  return function () {
    // 保存上下文
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      // 执行函数，将定义的上下文带入，并传入参数
      fn.apply(context, args);
    }, delay);
  };
}
const logfun = debouncs(function () {
  console.log(1212);
}, 10);
logfun();

// 节流
function throttle(func, delay) {
  const curTime = Date.now();
  return function () {
    const context = this;
    const nowTime = Date.now();
    if (nowTime - curTime > delay) {
      curTime = Date.now();
      func.apply(context, arguments);
    }
  };
}

// function debounce(fn, delay) {
//   let timer = null;
//   return function () {
//     const context = this;
//     const args = arguments;
//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     }
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }
