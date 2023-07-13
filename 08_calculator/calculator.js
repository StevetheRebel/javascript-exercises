const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...arr]) {
  let result = 0;
  let sumArr = [...arr];

  if (sumArr.length === 0) {
    result = 0;
  } else if (sumArr.length === 1) {
    result = sumArr[0];
  } else if (sumArr.length > 1) {
    result = sumArr.reduce((result, next) => result + next);
  }

  return result;
};

const multiply = function (a, ...args) {
  let multArr = [a, ...args];

  return multArr.reduce((a, b) => a * b, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let answer = 1;
  if (a == 0 || a == 1) {
    return answer;
  } else if (a > 1) {
    for (let i = a; i >= 1; i--) {
      answer *= i;
    }
  }

  return answer;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
