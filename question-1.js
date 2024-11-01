// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
	{name: 'Alice', age: 28, gender: 'Female'},
	{name: 'Bob', age: 34, gender: 'Male'},
	{name: 'Charlie', age: 22, gender: 'Male'},
	{name: 'Diana', age: 27, gender: 'Female'},
	{name: 'Ethan', age: 31, gender: 'Male'},
	{name: 'Fiona', age: 26, gender: 'Female'},
];

const peopleByGender = (people) => {
	const getAllFemale = people
		.filter((person) => person.gender === 'Female')
		.map((person) => person.name);

	return getAllFemale;
};

const result = peopleByGender(people);
console.log('🚀🚀: result', result);
