const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b;
};

const sum = (arr) => arr.reduce((a, b) => a + b, 0);


const multiply = function(arr) {
  if (arr.lenght === 0) return 0;
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = n => (n <= 1) ? 1 : n * factorial(n - 1);
	


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
