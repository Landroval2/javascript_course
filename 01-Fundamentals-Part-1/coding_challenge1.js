// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John. 


markWeight = 78
markHeight = 1.69
johnWeight = 92
johnHeight = 1.95

// const markWeight = 95
// const markHeight = 1.88
// const johnWeight = 85
// const johnHeight = 1.76

// markBMI = markWeight / markHeight ** 2
// johnBMI = johnWeight / johnHeight ** 2

const markBMI = markWeight / (markHeight * markHeight)
const johnBMI = johnWeight / (johnHeight * johnHeight)

const markHigherBMI = markBMI > johnBMI

console.log(markBMI, johnBMI, markHigherBMI)