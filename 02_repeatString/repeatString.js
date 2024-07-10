const repeatString = function (text, times) {
  if (times < 0) return 'ERROR';
  let res = '';
  while (times--) {
    res += text;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
