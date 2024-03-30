// Convert string to camel case

// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Solution

// Convert the string into array
// Loop through the array
// Skip the first Word
// Convert the first Character of each word to Capital
// Then Add the Remaining characters to the string
// Convert the array into String

function toCamelCase(str) {
  const splittedArray = str.split(/[-_]/);
  const finalResult = splittedArray.map((word, index) => {
    if (index === 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });
  return finalResult.join("");
}
console.log(toCamelCase("The_Stealth-Warrior"));
