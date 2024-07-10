const sumAll = function (a, b) {
  if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) return 'ERROR';
  let sum = 0;
  let small = a < b ? a : b;
  for (let i = small; i <= a + b - small; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
