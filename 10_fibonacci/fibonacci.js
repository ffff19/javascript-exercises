const fibonacci = function(n) {
	n = parseInt(n);
	if (n < 0)
		return 'OOPS';
	let a = 0, b = 1, aa;
	for (let i = 0; i < n-1; i++, aa = a, a = b, b += aa) {
		;
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
