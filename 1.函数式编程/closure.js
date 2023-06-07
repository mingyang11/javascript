function makePower(power) {
  return function (num) {
    return Math.pow(num, power);
  };
}

const pow2 = makePower(2);
const pow3 = makePower(3);
console.log(pow2(4));
console.log(pow3(4));
