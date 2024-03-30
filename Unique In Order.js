// Unique In Order

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// Solution

// Check on the sequence to check if empty
// Check if the sequence is Array or not
// If the sequence is string, convert it to array
// Store the first Value
// Loop through the sequence
// Start the Comparing
// Check of the current letter
// if current not equal the previous, push it to the store
// return the final result

var uniqueInOrder = function (iterable) {
  if (!iterable) return [];
  const array = Array.isArray(iterable) ? iterable : iterable.split("");
  let finalResult = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      finalResult.push(array[i]);
    }
  }
  return finalResult;
};
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
