// Sum of Digits / Digital Root

// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

// Must Reviewed
// https://medium.com/sessionstack-blog/how-javascript-works-recursion-in-javascript-what-it-is-and-how-it-is-used-eef3d734f20d

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Solution

// Check if n is just one number
// Convert the N into String
// Split the string into Array
// Loop through The Array
// Convert each item into number and then sum all of them
// Repeat The Function Again

function digitalRoot(n) {
  if (n < 10) return n;
  let sum = String(n)
    .split("")
    .map((number) => Number(number))
    .reduce((acc, current) => acc + current);
  return digitalRoot(sum);
}

console.log(digitalRoot(493193));
