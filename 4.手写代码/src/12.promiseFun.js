const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(excutor) {
  const self = this;
  this.status = PENDING;
  // 保存成功的值
  this.successValue = undefined;
  // 保存失败的的原因
  this.failedReason = undefined;
  // 成功回调
  this.callbacks = [];
  // 失败回调
  this.failCallbacks = [];

  //执行器，实例化的时候会传入这个
  function resolve(val) {
    // 如果当前状态不是pending不执行
    if (this.status !== PENDING) {
      return;
    }

    // 状态转变不可逆
    this.status = RESOLVED;

    this.successValue = val;
    // 如果有待执行的callback函数，立即异步执行回调函数
    if (callbacks.length) {
      while (callbacks.length) {
        callbacks.shift()(val);
      }
    }
  }
  function reject(reason) {
    this.status = REJECTED;
    this.failedReason = reason;
  }

  // 立即执行执行函数
  excutor(resolve, reject);
}

// new Promise((resolve, reject) => {});

/**
 * promise原型对象的then
 * 指定一个成功/失败的回调函数
 * 返回一个新的promise对象
 */
// 在原型链上添加then方法
MyPromise.prototype.then = function (onResolved, onRejected) {
  if (this.status === PENDING) {
    this.callbacks.push(onResolved);
    this.failCallbacks.push(onRejected);
  } else if (this.status === RESOLVED) {
    // 成功时
  } else if (this.status === REJECTED) {
    // 回调时
  }
};

/**
 * promise的catch
 * 指定一个失败的回调函数
 * 返回一个新的promise对象
 */
MyPromise.prototype.catch = function () {};

/**
 * promis函数对象的resolve方法
 * 返回一个指定结果的promise对象
 */
MyPromise.resolve = function (val) {};

MyPromise.reject = function (val) {};
/*
 * Promise函数对象的all方法
 * 返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
 */
MyPromise.all = function (val) {};
/*
 * Promise函数对象的race方法
 * 返回一个promise对象，状态由第一个完成的promise决定
 */
MyPromise.race = function (val) {};
