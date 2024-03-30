// Who likes it?

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.

// Solution

// Declare the messages variables
// Check on the array length
// Return The Messages

function likes(names) {
  const none = "no one likes this";
  const singleMessage = "likes this";
  const multiple = "like this";
  const others = "others like this";

  if (names.length === 1) {
    return `${names[0]} ${singleMessage}`;
  } else if (names.length > 1 && names.length < 3) {
    return `${names[0]} and ${names[1]} ${multiple}`;
  } else if (names.length > 2 && names.length < 4) {
    return `${names[0]}, ${names[1]} and ${names[2]} ${multiple}`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} ${others}`;
  } else {
    return `${none}`;
  }
}

console.log(likes(["Ahmed", "Ibrahem", "Adel", "Mohamed"]));
