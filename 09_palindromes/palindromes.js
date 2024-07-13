const palindromes = function (str) {
  const table = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let tem = str.toLowerCase().split('').filter(item => table.includes(item)).join('');
  let tmp = tem.split('').reverse().join('');
  return tmp == tem;
};

// Do not edit below this line
module.exports = palindromes;
