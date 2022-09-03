// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------

const result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result);

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";


// --------------------------------------

const resultTwo = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);

console.log(resultTwo);

// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

resultThree = ((one + two + three)/3).toFixed(5);

console.log(resultThree);

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letter = letters.charAt(2);

console.log(letter);

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const replaced = fact.replace("j","J");
console.log(replaced);

// --------------------------------------



