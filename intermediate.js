// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// console.log(ucFirstLetters("los angeles") ) //Los Angeles

// function ucFirstLetters(str) {
//     const words = str.split(' '); // split string into array
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // capitalize the first letter of each word in array
//     return capitalizedWords.join(' '); // join array items back into string
//   }

//   console.log(ucFirstLetters("new vegas") ) //new vegas

// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...
//2.a
// function truncate(str, max) {

//   if (str.length > 5) {
//     const truncatedStr = str.slice(0, max - 3) + "...";
//     return truncatedStr;
//   } else {
//     return str;
//   }
// }
// console.log(truncate("longstring", 5));  // longstr...
//2.b

// function truncate2(str, max) {
//   return (str.length > max) ? str.slice(0, max - 3) + "..." : str;
// }
// console.log(truncate2("verylongstring", 10));

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

// const animals = ["Tiger", "Giraffe"];
// console.log(animals);

// //a
// animals.push("Hippo", "Lion");
// console.log(animals);
// //b
// animals.unshift("Elephant", "Zebra");
// console.log(animals);
// //c
// animals.sort();
// console.log(animals);
// //d
// function replaceMiddleAnimal(newAnimal) {
//   const middleAnimal = Math.floor(animals.length / 2);
//   animals[middleAnimal] = newAnimal;
// }
// replaceMiddleAnimal("Lemur");
// console.log(animals);
// //e
// function findMatchingAnimals(beginsWith) {
//   return animals.filter((animals) =>
//     animals.toLowerCase().startsWith(beginsWith.toLowerCase()));
// }
// console.log(findMatchingAnimals("t"));

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

function camelCase(cssProp) {
    return cssProp.replace(/-)
}


console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display