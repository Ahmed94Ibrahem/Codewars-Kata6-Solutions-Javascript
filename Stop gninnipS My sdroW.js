// Stop gninnipS My sdroW

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Solution

// Split The String Into Array of words
// Loop through the Splitted Array
// Check if the word letters are five or more
// Convert the String into Array
// Reverse the array and then join to return to string
// If the Words less than 5 return the same string

function spinWords(string) {
  //   const splittedArray = string.split(" ");
  //   let finalResult = [];
  //   for (let i = 0; i < splittedArray.length; i++) {
  //     if (splittedArray[i].length >= 5) {
  //       finalResult.push([...splittedArray[i]].reverse().join(""));
  //     } else {
  //       finalResult.push(splittedArray[i]);
  //     }
  //   }
  //   return finalResult.join(" ");

  return string
    .split(" ")
    .map((item) => {
      return item.length >= 5 ? [...item].reverse().join("") : item;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
