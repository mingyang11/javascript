class MayBe {
  static of(val) {
    return new MayBe(val);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
  }
  isNothing() {
    return this._value === null || this._value === undefined;
  }
}

const r = MayBe.of(null).map((x) => x.toUpperCase());
console.log(r, '12');
