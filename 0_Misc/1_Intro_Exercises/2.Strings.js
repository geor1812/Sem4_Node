// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
result = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(result.toFixed(2))

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

result = (one + two + three)/3;
console.log(result.toFixed(5));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
char = letters[2];
console.log(char);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

result = fact.replace('j', 'J');
console.log(result);

// --------------------------------------



