const sumAll = function(a, b) {
	if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
		return "ERROR";

	let sum = 0;
	if (a < b) {
		for (; a <= b; a++) {
			sum += a;
		}
	} else
		for (; b <= a; b++) {
			sum += b;
		}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
