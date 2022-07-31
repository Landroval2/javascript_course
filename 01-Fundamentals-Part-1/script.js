// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun")

// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23)

// let firstName =  "Bob"
// console.log(firstName)

// let PI = 3.1415;

// let myFirstJob = "Teacher";
// let myCurrentJob = "Programmer";

// const birthYear = 1991;
// birthYear = 1990;

// const job;

// var job = "programmer"
// job = "teacher"

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah =  now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// const firstName = "Jonas"
// const lastName = "Schmedtmann";
// console.log(firstName + ' ' + lastName)

// let x =  10 + 5;
// console.log(x);
// x += 10;
// console.log(x);
// x *= 4;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// Comparison operators

// console.log(ageJonas > ageSarah);

// const firstName = "Jonas";
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) +
// ' years old ' + job + '!';

// console.log(jonas);

// const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew)

// console.log('String with \n\ multiple \n\
// lines');

// console.log(`String
// multiple
// lines`)

// const age = 21;

// if (age >= 18) {
//     console.log('Sarah can start driving lessons 🏎.')
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. She needs to wait another
//     ${yearsLeft} years.`)
// }

// let century;
// const birthYear = 2221;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)


// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23)

// Type coercieon
// console.log('I am ' + 23 + ' years old');
// console.log('2' * 2)

// let n = '1' + 1;
// n =  n - 1;
// console.log(n)

// console.log(-2 + '5')


// Falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 5;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("Get a job")
// }

// let height;
// if (height) {
//     console.log('Height is defined!')
// } else {
//     console.log('Height is not defined')
// };
// console.log(typeof height)


// Equality operators: == (doest type coersion) and === (stric equiality)
// const age = '18';
// if (age === 18) console.log('You just became an adult (stric)');
// if (age == 18) console.log('You just became an adult (loose)');

// const favorite = Number(prompt("What's your favourite number?"));
// console.log(favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number');
// } else if (favorite === 7) {
//     console.log('Cool! 7 is also a good number');
// } else {
//     console.log('Number is not 23 nor 7')
// }

// if (favorite !== 23) {
//     console.log('Why not 23?')
// }


// Logical operators

const  hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired)


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive');
}

