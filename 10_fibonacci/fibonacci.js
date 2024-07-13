const fibonacci = function (n) {
  let num = n;
  if (typeof n == 'string') number = Number(n);
  if (num < 0) return 'OOPS';
  let a = 0;
  let b = 1;
  while (num--) {
    let tmp = a;
    a = b;
    b = tmp + b;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
