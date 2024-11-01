// 3.Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

//F-1
const squareNumber = (number) => number * number;

//F-2
const doubleNumber = (number) => number * 2;

//F-3
const addNumber = (number) => number + 5;

const composeNumber = (number) => addNumber(doubleNumber(squareNumber(number)));

const result = composeNumber(5);
console.log('🚀🚀: result', result);
