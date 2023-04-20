const removeFromArray = function (arr, ...num) {
  let result = arr.filter(item => !num.includes(item));

  return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
