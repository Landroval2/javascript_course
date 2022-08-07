"use strict";

// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const argentina = describeCountry("Argentina", 40, "Buenos Aires");
const finland = describeCountry("Finland", 6, "Helsinki");
const usa = describeCountry("United States", 300, "Washington D. C.");

console.log(argentina);
console.log(finland);
console.log(usa);
