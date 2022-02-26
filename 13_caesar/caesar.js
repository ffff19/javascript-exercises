const caesar = function(string, shift) {
	const isAlpha = str => /^[a-zA-Z]*$/.test(str);
	let stringShifted = '';
	let unicodeZminusA = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
	let letter;
	for (let i = 0; i < string.length; i++) {
		letter = string[i];
		if (isAlpha(letter)) {
			if (isLetterLowerCase(letter)) {
				stringShifted += letterShifted(letter, shift).toLowerCase();
			} else {
				stringShifted += letterShifted(letter, shift);
			}
		} else
			stringShifted += string[i];
	}
	return stringShifted;
}
	
function isLetterLowerCase(letter) {
	let letterUpperCase = letter.toUpperCase();
	return letter != letterUpperCase;
}

function letterShifted(letter, shift) {
	letterUpperCase = letter.toUpperCase();
	j = letterUpperCaseUnicode = letterUpperCase.charCodeAt(0);
	zUpperCaseUnicode = 'Z'.charCodeAt(0);
	aUpperCaseUnicode = 'A'.charCodeAt(0);
	if (shift < 0) {
		for (let i = 0; i > shift; i--, j--) {
			if (j == aUpperCaseUnicode)
				j = zUpperCaseUnicode + 1;
		}
	} else {
		for (let i = 0; i < shift; i++, j++) {
			if (j == zUpperCaseUnicode)
				j = aUpperCaseUnicode - 1;
		}
	}
	return String.fromCharCode(j);
}

// Do not edit below this line
module.exports = caesar;
