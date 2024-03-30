// Your order, please

// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Solution

// Check on the String and return empty string if not exist
// Convert the string into array
// Use the sort method with the new array
// Extract the numbers from the strings
// Sort
// Convert the result into string

function order(words) {
  if (!words) return "";
  const splittedArray = words.split(" ");
  splittedArray.sort((a, b) => {
    const numberA = Number(a.match(/\d/)[0]);
    const numberB = Number(b.match(/\d/)[0]);
    return numberA - numberB;
  });

  return splittedArray.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
