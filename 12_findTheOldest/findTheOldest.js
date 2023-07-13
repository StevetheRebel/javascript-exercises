const findTheOldest = function (arr) {
  let ages = [];
  let largestAge = 0;

  for (let i = 0; i < arr.length; i++) {
    let ageCalc = arr[i].yearOfDeath - arr[i].yearOfBirth;

    ages.push(ageCalc);
  }

  for (let x of ages) {
    if (x > largestAge) {
      largestAge = x;
    }
  }

  let ageIndex = ages.indexOf(largestAge);

  return arr[ageIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
