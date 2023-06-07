class Left {
  static of(val) {
    return new Left(val);
  }
  constructor(value) {
    this._value = value;
  }
  map(fun) {
    return this;
  }
}

class Right {
  static of(val) {
    return new Right(val);
  }
  constructor(value) {
    this._value = value;
  }
  map(fun) {
    return Right.of(fun(this._value));
  }
}
function parseJson(str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (error) {
    return Left.of({ error: error.message });
  }
}
// 出错的
const errorParseFun = parseJson('{name: yang}');
console.log(errorParseFun);
// 正确的
const rightParseFun = parseJson('{"name": "yang"}').map((x) =>
  x.name.toUpperCase()
);
console.log(rightParseFun);
