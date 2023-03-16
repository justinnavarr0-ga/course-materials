[Recursion (CS)](https://www.notion.so/Recursion-CS-4cb2d567f5fc4077a27e85f5757918f1)

# Example 1: Inception
```js
// recursion.js
function dream() {
  // Needs a Terminating Condition/Base Case
  return "Wake Up!"
  dream()
}
// 💩 Infinite Loop
console.log(dream())
```

How to we get this dream function to stop calling itself?
We have to find a way to wake up...

# Example 2: Countdown...
<!-- Iterative Approach -->
```js
function countDown(startingNum) {
  for (let i=startingNum; i>0; i--) {
      console.log(i)
  }
}
console.log(countDown(7))
```
<!-- Recursive Approach -->
Step 1:
```js
function recursiveCountdown(startingNum) {
  if (startingNum <= 0) return;
  
  console.log(startingNum)
}
console.log(recursiveCountdown(10)) // 100
```
Step 2:
```js
function recursiveCountdown(startingNum) {
  if (startingNum <= 0) return;
  
  console.log("This is the startingNum parameter", startingNum)
  recursiveCountdown(startingNum - 1)
}
console.log(recursiveCountdown(3)) // 100

recursiveCountdown(3) // first call(startingNum = 3)
recursiveCountdown(2) // second call(startingNum = 3-1 || 2)
recursiveCountdown(1) // third call(startingNum = 2-1 || 1)
recursiveCountdown(0) // fourth call(startingNum = 1-1 || 0)
```
Super silly example of countdown, but it's just a basic example.
**Main take away is that you need to WAKE UP. Need a BASE CASE to exit the function.**

Example 3: Let's just watch, not code along here...
<!-- Step 1 Iterative Approach: -->
```js
function calculateTotal(arbitraryNum) {
  let total = 0;
  for (let i=0; i<=arbitraryNum; i++) {
    total += i;
  }
  return total;
}
console.log(calculateTotal(3))
```
<!-- Step 2 Recursive Approach: -->
```js
// Put in pythontutor...
function calculateTotalRecursive(startingNum) {
  // What's wrong with this function?
  let total = 0;
  // We need to return a TOTAL!
  (startingNum === 0) return total;
}
console.log(calculateTotalRecursive(3))
```

<!-- Step 3: Recursive Approach: -->
```js
// put total in global scope first to clear things up...
function calculateTotalRecursive(startingNum, total = 0) {
  // We need to return a TOTAL!
  if (startingNum === 0) return total;
  return calculateTotalRecursive(startingNum - 1, total += startingNum)
}
console.log(calculateTotalRecursive(3)) // (3, 0)
/*
console.log(calculateTotalRecursive(3)) // (3, 0)
console.log(calculateTotalRecursive(startingNum - 1 || 2, 3))
console.log(calculateTotalRecursive(startingNum -1 || 1, 5))
console.log(calculateTotalRecursive(startingNum -1 || 0, 6))
*/
```

<!-- Solve Factorial::: -->
```js
function factorial(num) {

}

console.log(factorial(5))
```

BIG PICTURE! We are still in overkill right now. 
We really didn't need to use Recursion! 

Real world example: Nested Nodes... We don't know how 
deep the nodes go.

When we're working with the DOM in javascript, and we're 
traversing/visiting all those nodes, it becomes quite
complicated using loops, especially when we don't know how
deeply nested the nodes are.... Recursion is now the
BEST approach.

```js
// Data coming from the backend, JSON...
const teamStructure = {
  name: 'Troy',
  teams: [
    {
      name: 'Eric',
      // Not sure how many teams Eric has...
      teams: [],
    }, 
    {
      name: 'Sarah Rose',
      // Not sure how many teams Sarah Rose has...
      teams: [],
    }
  ]
}

function getTeamDetails(data) {
  return data;
}

console.log(getTeamDetails(teamStructure))
```

Okay. What do we need?
1. Base case/wake up/terminating condition...


```js
// Data coming from the backend, JSON...
const teamStructure = {
  name: 'Troy',
  teams: [
    {
      name: 'Eric',
      // Not sure how many teams Eric has...
      teams: [{
        name: 'Daniel Jones',
        teams: []
      }],
    }, 
    {
      name: 'Sarah Rose',
      // Not sure how many teams Sarah Rose has...
      teams: [{
        name: 'Kenjamin Button',
        teams: []
      }],
    }
  ]
}

function getTeamDetails(data) {
  // Base Case aka Terminating Condition aka Wake Up From Dream
  if (data.teams.length === 0) {
    return;
  }
  data.teams.forEach(team => {
    console.log(team.name)
    console.log(team)
  })
}

console.log(getTeamDetails(teamStructure))
```

How do get Kenjamin Button and Daniel Jones?
Final Step: RECURSIVE CALL TO OUR FUNCTION!
```js
// Data coming from the backend, JSON...
const teamStructure = {
  name: 'Troy',
  teams: [
    {
      name: 'Eric',
      // Not sure how many teams Eric has...
      teams: [{
        name: 'Daniel Jones',
        teams: []
      }],
    }, 
    {
      name: 'Sarah Rose',
      // Not sure how many teams Sarah Rose has...
      teams: [{
        name: 'Kenjamin Button',
        teams: []
      }],
    }
  ]
}

function getTeamDetails(data) {
  console.log('Team name...', data)
  // Base Case aka Terminating Condition aka Wake Up From Dream
  if (data.teams.length === 0) {
    return;
  }
  data.teams.forEach(team => {
    console.log(team)
    getTeamDetails(team)
  })
}

console.log(getTeamDetails(teamStructure))
```





Factorial Recursion:

```js
function factorial() {

}
console.log(factorial(5))
```


```js
function factorial(num, result = 1) {
  if (num === 1) return result;
  
  return factorial(num - 1, result *= num)
}
console.log(factorial())

// console.log(factorial(5)) // 1 * 5 = 5
// console.log(factorial(4)) // 5 * 4 = 20
// console.log(factorial(3)) // 20 * 3 = 60
// console.log(factorial(2)) // 60 * 2 = 120
// console.log(factorial(1)) // 120 * 1 = 120
```



