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

const language = "spanish";
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

// Lecture: Type Conversion and Coercion

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 23. It is 617,  There is no minus between strings so it does the operation as if they were nubmers. But then it can add two strings.
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 18. It is 1143


// Lecture: Equality Operators: == vs ===

// const numNeighbours = Number(prompt("How many neighbor countries does your country have?"));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }


// Lecture: Logical operators

if ((population < 50) && !isIsland && (language === 'english')) {
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria`)
}
