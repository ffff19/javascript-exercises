const findTheOldest = function(array) {
	let oldestIndex = 0;
	let oldestAge;
	let currentYear = Date().slice(11, 15);
	if (array[0].yearOfDeath != undefined) {
		oldestAge =	array[0].yearOfDeath - array[0].yearOfBirth;
	} else {
		oldestAge = currentYear - array[0].yearOfBirth; 
	}
	for (let i = 1; i < array.length; i++) {
		if (array[i].yearOfDeath != undefined) {
			if (array[i].yearOfDeath - array[i].yearOfBirth > oldestAge) {
				oldestIndex = i;
				oldestAge = array[i].yearOfDeath - array[i].yearOfBirth;
			}
		} else {
			if (currentYear - array[i].yearOfBirth > oldestAge) {
				oldestIndex = i;
				oldestAge = currentYear - array[i].yearOfBirth;
			}
		}
	}
	return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
