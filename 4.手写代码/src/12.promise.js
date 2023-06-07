/**
 * 1.promise是一个类，在执行类的时候需要专递一个执行器进去，执行期会立刻执行
 * 2.promise有三种状态，分别是fulfilled, rejected, pending
 *   状态只能从pending-》fulfilled或者pending->rejected，且不能更改
 * 3.resolve和reject函数是用来改变状态的
 * 4.then方法内部做的事情就是判断状态，如果状态是成功，调用成功的参数，如果状态是失败，调用失败的参数，then定义在函数的原型链上
 * 5.then成功回调有一个参数，表示成功后的值。then失败回调后有一个参数，表示失败后的原因
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
  constructor(excutor) {
    try {
      excutor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  // 状态
  status = PENDING;

  // 成功之后的值
  successValue = undefined;

  // 失败之后的原因
  failedReason = undefined;

  // 成功回调
  successCallback = [];

  // 失败回调
  failedCallback = [];

  //   成功
  resolve = (val) => {
    //   判断状态
    if (this.status !== PENDING) {
      throw new Error('resolve错误');
    }
    this.status = FULFILLED;
    // 保存成功之后的值
    this.successValue = val;

    // 判断成功回调是否存在，如果存在就调用
    // this.successCallback && this.successCallback(this.successValue);
    while (this.successCallback.length) {
      this.successCallback.shift()(this.successValue);
    }
  };

  //  失败
  reject = (reason) => {
    if (this.status !== PENDING) {
      throw new Error('resolve错误');
    }
    this.status = REJECTED;
    // 保存失败后的原因
    this.failedReason = reason;

    // 判断失败回调是否存在，存在就调用
    // this.failedCallback && this.failedCallback(this.failedReason);
    while (this.failedCallback.length) {
      this.failedCallback.shift()(this.failedReason);
    }
  };

  // 如果是函数式则需要定义在原型链上
  then(successCall, failCall) {
    //   保证then的链式调用，需要then返回一个promise对象
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        try {
          const x = successCall(this.successValue);
          // 判断x的值是普通值还是promise对象，如果是普通值，直接调用resolve
          // 如果是promise对象，查看promise对象返回的结果
          // 再根据promise对象返回结果，决定调用resolve还是reject
          // resolve(x);
          resolvePromise(x, resolve, reject);
        } catch (error) {
          this.reject(error);
        }
      } else if (this.status === REJECTED) {
        failCall(this.failedReason);
      } else {
        // 等待
        //将成功/失败回调保存起来
        this.successCallback.push(successCall);
        this.failedCallback.push(failCall);
      }
    });
    return promise2;
  }
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    x.then(
      (val) => {
        resolve(val);
      },
      (reason) => {
        reject(reason);
      }
    );
    // x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

const promise = new MyPromise((resolve, reject) => {
  throw new Error('chuze');
  //   setTimeout(() => {
  resolve('success');
  // reject('失败');
  //   }, 1000);
});
promise.then(
  (val) => {
    console.log(val, '12');
  },
  (val) => {
    console.log(val, '15');
  }
);
// promise.then(
//   (val) => {
//     console.log(val, '13');
//   },
//   (val) => {
//     console.log(val, '16');
//   }
// );
// promise.then(
//   (val) => {
//     console.log(val, '14');
//   },
//   (val) => {
//     console.log(val, '17');
//   }
// );

// promise
//   .then((val) => {
//     console.log(val);
//     // return 100;
//     return new MyPromise((resolve) => {
//       resolve('other');
//     });
//   })
//   .then((val) => {
//     console.log(val);
//   });
