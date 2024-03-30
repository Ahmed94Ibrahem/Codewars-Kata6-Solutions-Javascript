// Playing with digits

// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Solution

// Convert the n Number to string
// Convert the converted string into array
// Loop through the array and convert Each item in the array into Number
// Add the pow to each number
// Sum All the numbers
// Find the K
// sum = k * n
function digPow(n, p) {
  //   const convertedNumberToString = String(n);
  //   let convertedStringToArray = convertedNumberToString.split("");
  //   convertedStringToArray = convertedStringToArray.map((item) => Number(item));
  //   convertedStringToArray = convertedStringToArray
  //     .map((number, index) => Math.pow(number, p + index))
  //     .reduce((acc, current) => acc + current);
  const numbersSum = String(n)
    .split("")
    .map((item) => Number(item))
    .map((number, index) => Math.pow(number, p + index))
    .reduce((acc, current) => acc + current);
  const k = numbersSum / n;
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(92, 1));
