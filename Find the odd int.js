// Find the odd int

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Should be Viewed
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Solution

// Create a Map
// Loop through the Array
// Set Key Value Pairs of the Map
// Loop through those key value pairs
// Check on the Value if Odd or even

function findOdd(A) {
  const countMap = new Map();

  for (const num of A) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap.entries()) {
    if (count % 2 !== 0) {
      return num;
    }
  }

  return null;
}

console.log(findOdd([1, 1, 2]));
