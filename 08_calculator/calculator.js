const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((total, curr) => total + curr);
};

const multiply = function (arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a == 0) return 1;
  let tmp = 1;
  while (a--) tmp *= a + 1;
  return tmp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
