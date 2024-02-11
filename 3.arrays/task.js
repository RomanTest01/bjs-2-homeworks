function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	/* const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0;
	}
	const ages = filteredUsers.map(user => user.age);
	const sumOfAges = ages.reduce((total, age) => total + age, 0);
	const averageAge = sumOfAges / ages.length;
	return averageAge; */

	return users.filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
}