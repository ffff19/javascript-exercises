const repeatString = function(string, num) {
	if (num < 0)
		return "ERROR";
	let finalString = '';
	while (num > 0) {
		finalString += string;
		num--;
	}
	return finalString;
};

// Do not edit below this line
module.exports = repeatString;
