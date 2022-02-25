const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
};

const multiply = function(array) {
	let result = 1;
	for (let i = 0; i < array.length; i++) {
		result *= array[i];
	}
	return result;
};

const power = function(a, b) {
	let result = a;
	for (let i = 0; i < b-1; i++) {
		result *= a;
	}
	return result;
};

const factorial = function(n) {
	let fact = 1, i = 1;
	for (; i <= n; fact = fact * i, i++)
		;
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
