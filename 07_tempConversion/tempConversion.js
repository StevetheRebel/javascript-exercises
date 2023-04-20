const convertToCelsius = function (tempInFahrenheit) {
  let newTemp = ((tempInFahrenheit - 32) * 5) / 9;
  let result = Math.round(newTemp * 10) / 10;

  return result;
};

const convertToFahrenheit = function (tempInCelsius) {
  let newTemp = (tempInCelsius * 9) / 5 + 32;
  let result = Math.round(newTemp * 10) / 10;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
