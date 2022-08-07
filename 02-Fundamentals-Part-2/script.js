"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// function logger() {
//   console.log("My name is Jonas");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = ` Juice with ${apples} apples
//     and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1990);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1990);
// console.log(age2);

// const age3 = calcAge2(1995);
// console.log(age3);

// Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(2001));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1985, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = ` Juice with ${applePieces} pieces of apple
//     and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1970, "Jonas"));

// const friends = ["Michael", "John", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2020, 2021);
// console.log(years);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

const calcAge = function (birthYears) {
  return 2037 - birthYears;
};

const years = [1990, 1967, 2002, 2010, 2018];

const friends = ["Michael", "John", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("Johnny");
console.log(friends);

// Remove elements
friends.pop(); // Removes the last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes the first element
console.log(friends);

console.log(friends.indexOf("John"));
console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
console.log(friends.includes("John"));
friends.push(23);
console.log(friends.includes("23")); // Strict comparison

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
