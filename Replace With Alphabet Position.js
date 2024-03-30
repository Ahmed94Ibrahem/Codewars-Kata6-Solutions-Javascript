// Replace With Alphabet Position

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// Solution

// Create a variable containing all the alphapet letters
// Create empty string ( Final Result )
// Loop through the string
// Find the index of each letter
// Include in the final Result

function alphabetPosition(text) {
  const loweredCaseText = text.toLowerCase();
  const alphetLetters = "abcdefghijklmnopqrstuvwxyz";
  let finalResult = "";

  for (let i = 0; i < loweredCaseText.length; i++) {
    if (alphetLetters.indexOf(loweredCaseText[i]) + 1 > 0) {
      finalResult += alphetLetters.indexOf(loweredCaseText[i]) + 1 + " ";
    }
  }
  return finalResult.trim();
}

console.log(alphabetPosition("Ahm-ed"));
