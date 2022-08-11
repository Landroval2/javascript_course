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

// Lecture: Functions calling other functions

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is ${percentageOfWorld1(
    population
  )}% of the world total population`;
}

console.log(describePopulation("China", populationChina));
console.log(describePopulation("Argentina", populationArgentina));
console.log(describePopulation("Finland", populationFinland));

// Lecture: Introduction to Arrays

const populations = [1441, 45, 6];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld2(populations[1]),
  percentageOfWorld3(populations[2]),
];

console.log(percentages);

// Lecture: Basic Array Operations (Methods)

const neighbours = ["Chile", "Brasil", "Uruguay", "Paraguay", "Bolivia"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[1] = "Brazil";
console.log(neighbours);

// Lecture: Introduction to Objects

const myCountry = {
  country: "Argentina",
  capital: "Buenos Aires",
  language: "Spanish",
  population: 45,
  neighbours: ["Chile", "Bolivia", "Paraguay", "Brazil", "Uruguay"],
};

// Lecture: Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population = myCountry.population - 2;
console.log(myCountry.population);

myCountry["population"] = myCountry["population"] + 2;

console.log(myCountry.population);

// Lecture: Object Methods

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};

myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
};

myCountry.checkIsland();
console.log(myCountry.isIsland);
