const persons = [
	{name: 'Alice', age: 28, gender: 'Female'},
	{name: 'Bob', age: 34, gender: 'Male'},
	{name: 'Charlie', age: 22, gender: 'Male'},
	{name: 'Diana', age: 27, gender: 'Female'},
	{name: 'Ethan', age: 31, gender: 'Male'},
	{name: 'Fiona', age: 26, gender: 'Female'},
];
const updatePersonAge = (persons, name, newAge) => {
	const person = persons.find((person) => person.name === name);
	if (person) {
		person.age = newAge;
	}
	return person;
};

const result = updatePersonAge(persons, 'Diana', 40);
console.log('🚀🚀: result', result);
