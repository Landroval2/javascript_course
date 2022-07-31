// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// const averageDolphinsScore = (96 + 108 + 89) / 3
// const averageKoalasScore = (88 + 91 + 110) / 3

//bonus 1
// const averageDolphinsScore = (97 + 112 + 101) / 3
// const averageKoalasScore = (109 + 95 + 123) / 3

//bonus 2
const averageDolphinsScore = (97 + 112 + 101) / 3
const averageKoalasScore = (109 + 95 + 106) / 3

console.log(averageDolphinsScore, averageKoalasScore)

if (averageDolphinsScore === averageKoalasScore
    && averageKoalasScore >= 100) {
    console.log("There was a draw, no team gets the trophy")
} else if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log("The dolphins win the trophy!")
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log("The koalas win the trophy!")
} else {
    console.log("There was no winner")
}
