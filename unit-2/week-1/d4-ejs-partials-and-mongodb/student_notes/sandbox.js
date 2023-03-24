console.log('good morning')

function lengthOfString(str, len = 0) {
    if (!str.length) return len;
    let restOfString = str.substring(1);
    return lengthOfString(restOfString, ++len);
  }
  
  function sumOfArray(Array , total = 0) {
    // This function returns the sum of all of the numbers in a given array.
    if (Array.length === 0) return total
    total += Array.value
    return sumOfArray(Array, total)
  }
  
  function findMax() {
    // This function returns the largest number in a given array.
  }
  
  function factorial() {
    // This function returns the factorial of a given number.
  }
  
  function fibonacci() {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
  }
  
  function coinFlips() {
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
  }
  
  function letterCombinations() {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  }

// function dream() {
//     //This is a terminating condition(Base Case)
//     return "Wake Up"
//     dream()
// }
//
// console.log(dream())

// function countUp(num) {
//     for (i = 1; i <= num; i++){
//       console.log(i)  
//     }
// }
// console.log(countUp(7))

// function countDown(num) {
//     for (i = 100; i >= num; i--){
//       console.log(i)  
//     }
// }
// console.log(countDown(7))

// function recursiveCountdown(startingNum) {
//     //Base Case/ Terminating Condition
//     if (startingNum === -5) return "we have woken up";
//     console.log(startingNum)
//     recursiveCountdown(startingNum - 1)
// }
// console.log(recursiveCountdown(7))

// function calculateTotal(num) {
//     let sum = 0
//     for (let i = 0; i <= num ; i++){
//     sum += i
//     }
//     return sum
// }

// console.log(calculateTotal(5))

// recursive approach 

// function calculateSumRecursive(num, total = 0) {
//     //terminating condition
//     if (num === 0) return total
//     total += num
//    return calculateSumRecursive(num - 1, total);
// }
// console.log(calculateSumRecursive(5))

// function factorial(num, total = 1) {
//     if (num === 0) return total
//     total = (total*num)
//     return factorial(num - 1, total)
// }

// console.log(factorial(0))


