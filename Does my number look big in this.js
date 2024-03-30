// Does my number look big in this

// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// Solution

// Get the number of the digits
// Convert the Number to string
// Split the Converted Number to array
// Loop through the numbers array
// Raise each number to the power
// Sum All The results
// Check if the final result === the given number

function narcissistic(value) {
  const numberOfDigits = String(value).length;
  const finalSumResult = String(value)
    .split("")
    .map((number) => Math.pow(Number(number), numberOfDigits))
    .reduce((acc, current) => acc + current);
  return finalSumResult === value ? true : false;
}

console.log(narcissistic(153));
