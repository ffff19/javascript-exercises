const palindromes = function (string) {
	const isAlpha = str => /^[a-zA-Z]*$/.test(str);
	for (let i = 0, j = string.length - 1; i <= j; i++, j--) {
		if (isAlpha(string[i]) == false) {
			j++;
			continue;
		}
		if (isAlpha(string[j]) == false) {
			i--;
			continue;
		}
		if (string[i].toUpperCase() != string[j].toUpperCase())
				return false;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
