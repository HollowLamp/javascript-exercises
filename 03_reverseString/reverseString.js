const reverseString = function (text) {
  let res = '';
  let length = text.length;
  for (let i = length - 1; i >= 0; i--) {
    res += text[i];
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
