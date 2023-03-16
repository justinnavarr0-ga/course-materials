// console.log("good morning")

// recursion.js
// function dream() {
//   return "wake up!"
//   dream()
// }
// // 💩 Infinite Loop
// console.log(dream())


// function countUp(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i)
//   }
// }

// console.log(countUp(7))

// Iterative Approach to Countdown
// function countDown(num) {
//   // some code here
// }

// console.log(countDown(7));

// // Recursive Approach to Countdown
// function recursiveCountdown(startingNum) {
//   // Base Case/Terminating Condition
//   if (startingNum === -5) return 'We have woken up from this movie dream!'

//   console.log(startingNum)

//   recursiveCountdown(startingNum - 1)

// }
// console.log(recursiveCountdown(7));

// Iterative Approach to calculate the SUM
// function calculateTotal(num) {
//   let sum = 0;

//   for (let i = 0; i <= num; i++) {
//     sum += i
//   }

//   return sum;
// }

// console.log(calculateTotal(5)) // 15
// // console.log(calculateTotal(3)) // 6
// // console.log(calculateTotal(4)) // 10

// Recurive Approach to calculate the SUM


// function calculateSumRecursive(num, total = 0) {

//   // Base Case Exit Condition 
//   if (num === 0) return total;
//   total += num

//   return calculateSumRecursive(num - 1, total)
// }

// console.log(calculateSumRecursive(3)) // 6 
// console.log(calculateSumRecursive(5)) // 15
// console.log(calculateSumRecursive(10)) // 55

// function factorial(num) {

// }

// console.log(factorial(3)) // output: 6

// // same if we entered 5 
// // 5 * 4 * 3 * 2 * 1 = 120
// console.log(factorial(5)) // output: 120

// // the factorial of 0 is 1
// console.log(factorial(0)) // output: 1


// Data coming from the backend, JSON...
// Data coming from the backend, JSON...
const teamStructure = {
  name: 'Bill Gates',
  teams: [
    {
      name: 'Matthew Gonzcar',
      // Not sure how many teams Eric has...
      teams: [{
        name: 'Phil Knight',
        teams: [],
        directReports: [],
        age: 60,
        height: 188,
      }],
    },
    {
      name: 'Evan Maloney',
      // Not sure how many teams Sarah Rose has...
      teams: [{
        name: 'Kenjamin Button',
        teams: []
      }],
    }
  ]
}

function getTeamDetails(data) {
  // Base Case Terminating Condition
  if (data.teams.length === 0) return;


  data.teams.forEach(team => {
    console.log(team.name)
    getTeamDetails(team)
  })
}

console.log(getTeamDetails(teamStructure))