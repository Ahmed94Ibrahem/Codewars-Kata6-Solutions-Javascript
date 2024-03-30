// The latest clock

// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

// The time should be in HH:MM format.

// Solution

// Max Time 2 3 : 5 9

// Create an Array with The Digits - Done
// Sorting the Array Desc - Done
// Get The Length of Numbers greater than 5 - Done
// Create Function to get The Max Number
// Create the Formula

function latestClock(a, b, c, d) {
  const sortedDigitsArray = [a, b, c, d].sort((a, b) => b - a);
  const digitsGreaterThan5 = sortedDigitsArray.filter(
    (digit) => digit > 5
  ).length;
  const getMaxDigit = (maxDigit) => {
    for (let i = 0; i < sortedDigitsArray.length; i++) {
      const currentDigit = sortedDigitsArray[i];
      if (currentDigit <= maxDigit) {
        delete sortedDigitsArray[i];
        return currentDigit;
      }
    }
  };

  const firstDigit = getMaxDigit(digitsGreaterThan5 > 1 ? 1 : 2);
  const secondDigit = getMaxDigit(firstDigit === 2 ? 3 : 9);
  const thirdDigit = getMaxDigit(5);
  const forthDigit = getMaxDigit(9);
  return `${firstDigit}${secondDigit}:${thirdDigit}${forthDigit}`;
}

console.log(latestClock(0, 0, 0, 0));
