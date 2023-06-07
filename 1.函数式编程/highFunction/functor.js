// class Container {
//   constructor(value) {
//     this._value = value;
//   }
//   map(fn) {
//     return new Container(fn(this._value));
//   }
// }

// const r = new Container(1)
//   .map((x) => x + 1)
//   .map((x) => x + 2)
//   .map((x) => x * x);
// console.log(r, '21');

class Container {
  static create(val) {
    return new Container(val);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return Container.create(fn(this._value));
  }
}
const r = Container.create(1)
  .map((x) => x + 1)
  .map((x) => x + 2)
  .map((x) => x * x);
console.log(r, '21');
