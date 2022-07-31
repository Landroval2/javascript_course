// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"


const markWeight = 78
const markHeight = 1.69
const johnWeight = 92
const johnHeight = 1.95

// const markWeight = 95
// const markHeight = 1.88
// const johnWeight = 85
// const johnHeight = 1.76

// markBMI = markWeight / markHeight ** 2
// johnBMI = johnWeight / johnHeight ** 2

const markBMI = markWeight / (markHeight * markHeight)
const johnBMI = johnWeight / (johnHeight * johnHeight)


if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}