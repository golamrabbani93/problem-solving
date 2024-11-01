// 2.Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
	{title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
	{title: 'House Dragon', author: 'George Orwell', year: 1949},
	{title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
	{title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813},
	{title: 'Moby-Dick', author: 'Herman Melville', year: 1851},
];

const getBookTitles = (books) => {
	const bookTitles = books.map((book) => book.title);
	return bookTitles;
};

const newBookTitles = getBookTitles(books);
console.log('🚀🚀: newBookTitles', newBookTitles);
