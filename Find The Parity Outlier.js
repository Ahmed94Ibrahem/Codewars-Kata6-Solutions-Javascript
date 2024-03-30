// Find The Parity Outlier

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Solution

// Slice the Array
// Loop through the array
// check on the numbers if even or odd
// define the type of the array
// Extract the outlier

function findOutlier(integers) {
  const slicedArray = integers.slice(0, 4);
  const arrayType =
    slicedArray.filter((number) => number % 2 === 0).length > 1
      ? "even"
      : "odd";
  if (arrayType === "odd") {
    return integers.filter((number) => number % 2 === 0)[0];
  } else {
    return integers.filter((number) => number % 2 !== 0)[0];
  }
}

console.log(findOutlier([2, 6, 8, 10, 3]));
