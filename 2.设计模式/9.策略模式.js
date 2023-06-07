// 策略模式定义了一系列的算法，并将每个算法封装起来，使他们可以相互替换，且算法的变化不会影响使用算法的客户
// 该模式主要解决在多种相似的算法情况下，使用if...else...所带来的复杂和难以维护。优点是算法可以自由切换，同时避免多重if...else...判断，具有良好的拓展性

let strategry = {
  A: (salary) => {
    return salary * 4;
  },
  B: (salary) => {
    return salary * 3;
  },
  C: (salary) => {
    return salary * 2;
  },
};

// 计算年终奖
function calBonus(level, salary) {
  return strategry[level](salary);
}

calBonus('A', 16000);
calBonus('B', 20000);
calBonus('C', 11000);
