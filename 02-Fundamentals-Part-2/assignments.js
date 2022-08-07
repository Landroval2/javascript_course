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

// LECTURE: Function Declarations vs. Expressions

const totalPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / totalPopulation) * 100;
}

const populationChina = 1441;
const populationArgentina = 45;
const populationFinland = 6;

console.log(percentageOfWorld1(populationChina));
console.log(percentageOfWorld1(populationArgentina));
console.log(percentageOfWorld1(populationFinland));

const percentageOfWorld2 = function (population) {
  return (population / totalPopulation) * 100;
};

console.log(percentageOfWorld2(populationChina));
console.log(percentageOfWorld2(populationArgentina));
console.log(percentageOfWorld2(populationFinland));

// Lecture Arrow Functions:

const percentageOfWorld3 = (population) => (population / totalPopulation) * 100;

console.log(percentageOfWorld2(populationChina));
console.log(percentageOfWorld2(populationArgentina));
console.log(percentageOfWorld2(populationFinland));
