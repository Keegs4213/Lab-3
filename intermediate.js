// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) {
    const words = str.split(' '); // split string into array
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // capitalize the first letter of each word in array
    return capitalizedWords.join(' '); // join array items back into string
  }
  
  console.log(ucFirstLetters("new vegas") ) //new vegas

  