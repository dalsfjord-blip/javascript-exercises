const convertToCelsius = function(fahrenheit) {
   const celsius = (fahrenheit - 32) * 5 / 9;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * 1.8) + 32;
  return Number(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
