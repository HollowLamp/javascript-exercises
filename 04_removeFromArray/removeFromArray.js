const removeFromArray = function (arr, ...exarr) {
  for (let i = 0; i < exarr.length; i++) {
    let target = exarr[i];
    while (arr.includes(target)) {
      arr.splice(arr.indexOf(target), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
