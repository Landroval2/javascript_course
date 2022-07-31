// Lecture: Values and Variables

let country = "Argentina";
let continent = "America";
let population = 22;

console.log(country);
console.log(continent);
console.log(population);



// Lecture: Data Types

const isIsland = false;
// let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
// console.log(typeof language);


// Lecture: let, const and var

const language = "Spanish";
// language = 'French';


// Lecture: Basic Operators

const halfPopulation = population / 2

const populationPlusOne = population + 1
console.log(populationPlusOne)

const populationFinland = 6
const moreThanFinland = population > populationFinland
console.log(moreThanFinland)

const averagePopulation = 33
const moreThanAverage = population > averagePopulation
console.log(moreThanAverage)

let description = country + ' is in ' + continent + ', and its ' + population +
' million people speak ' + language
console.log(description)

// Lecture: Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description)


// Lecture: Taking Decisions: if / else statements:

if (moreThanAverage) {
    console.log(`${country}'s poplulation is above average`)
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`)
}