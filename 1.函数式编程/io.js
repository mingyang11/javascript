const fp = require('lodash/fp');

class IO {
  static of(value) {
    return new IO(function () {
      return value;
    });
  }

  constructor(fn) {
    this._value = fn;
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
}

// 调用
const r = IO.of(process).map((p) => p.execPath);
console.log(r._value(), '121');
