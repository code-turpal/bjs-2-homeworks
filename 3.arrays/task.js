function compareArrays(arr1, arr2) {
	return arr1.every((element, i) => element === arr2[i])
}

function getUsersNamesInAgeRange(users, gender) {
	return users.filter(element => element.gender === gender).map(element => element.age).reduce((acc, element, index, arr) => {
		acc += element;
		if (index === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
	}, 0);
}