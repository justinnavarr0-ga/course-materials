# Big O Notation:

[Big O Notation Repo](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/tree/main/computer-science/01-cs-big-o-notation)

![Big O Notation](./images/BigOComplexity.png)

![Three different solutions to a problem](./images/complexityAnalysis.png)

`Time Complexity` is really just a measure of how fast an algorithm/solution to a coding interview problem runs.

`Space Complexity` is a measure of how much memory or space an algorithm uses up.

The faster an algorithm runs, the better the time complexity is. Therefore, the "better" the algorithm is.

Similarly, the less memory an algorithm takes, teh better its space complexity is. Therefore, the "better" the algorithm is.

For your coding interview problems, you aren't just thinking about what data structure allows you to best solve the problem, but also what data structure allows you to solve the problem with the "best time complexity" or the "best space complexity". 

This means y'all gotta be familiar with the ramifications (costs) of the various popular data structures.

Basically, it's just measuring how fast an algorithm runs and how much memory it takes up.

# Foundational Knowledge to REALLY UNDERSTAND 

## Memory

1. What is Memory?

One of the fundamental things we do in programming is to declare variables. We might declare a variable 
```js
const betterThanYesterday = 1
// This variable has to be stored.
const btyInstructionalTeam = 2
```

- Bounded Canvas that has a finite amount of memory slots.

|     |     |     |     |
| --- | --- | --- | --- |
| 0   | 1   | 2   | 3   |
| 4   | 5   | 6   | 7   |
| 8   | 9   | 10  | 11  |
| 12  | 13  | 14  | 15  |
| 16  | 17  | 18  | 19  |

So .... Let's store those two variables with the #s `1` and `2`

|        |     |     |     |
| ------ | --- | --- | --- |
| 0      | 1   | 2   | 3   |
| 4 (1)  | 5   | 6   | 7   |
| 8      | 9   | 10  | 11  |
| 12 (2) | 13  | 14  | 15  |
| 16     | 17  | 18  | 19  |

- [x] Most primitives (booleans, numbers, undefined, null): `constant space`. For the most part, they all get allocated the exact same amount of space. O(1)

### Example 1:
```js
function sum(nums) {
  // total variable is the one being STORED in memory...
  let total = 0;
  // This loop below doesn't really matter...
  for (let i=0; i<nums.length; i++>) {
    total += nums[i];
  }
  return total;
}
```


2. Back to Back Memory Slots:

- Memory is made up of `BITS` (zeroes and ones).
- Your computer **ONLY** understands zeroes and ones.
- 00101 are `BITS`. When you store data in a memory slot, you actually store them in `BITS`.
- One memory slot can hold 8 `BITS` (aka 1 `BYTE`).
- How do we transform the number 1 into BITS? Through the binary system (base 2 system). 

$2^7$ $2^6$ $2^5$ $2^4$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $2^3$ $2^2$ $2^1$ $2^0$  &nbsp;&nbsp; FYI: We have 2^8 (256) potential data values we can represent in 1 byte.  

0000 0001 = 1
0000 0010 = 2
0000 0011 = 3

|                |     |     |     |
| -------------- | --- | --- | --- |
| 0              | 1   | 2   | 3   |
| 4 (0000 0001)  | 5   | 6   | 7   |
| 8              | 9   | 10  | 11  |
| 12 (0000 0010) | 13  | 14  | 15  |
| 16             | 17  | 18  | 19  |

#### Let's store an array/list
```js
const arr = [1, 2, 3]
```

- [x] Back to back consecutive memory slots.

|             |             |             |             |
| ----------- | ----------- | ----------- | ----------- |
| 0           | 1           | 2           | 3           |
| (0000 0001) | (0000 0000) | (0000 0000) | (0000 0000) |
| (0000 0010) | (0000 0000) | (0000 0000) | (0000 0000) |
| (0000 0011) | (0000 0000) | (0000 0000) | (0000 0000) |
| 16          | 17          | 18          | 19          |

- `Reference types: ARRAYS and OBJECTS`: generally `O(n)`, where n is the length of array (or # of keys in an object). An array of 1 item vs an array of 1000 items. The 1000 items array would take roughly 1000x more space than the 1 item array.

### Example 2:

```js
function double(nums) {
    let doubledNums = [];
    for (let i = 0; i< nums.length; i++) {
      doubledNums.push(2 * nums[i])
    }
    return doubledNums;
}
```

If we pass in a 10 items array, we are creating a NEW 10 items array. If we pass in a 10000 items array, we are creating a NEW 10000 items array.

The amount of space it takes to store an array grows roughly in proportion with the length of that array.

### Rules of Thumb in JS:

- [x] Most primitives (booleans, numbers, undefined, null): constant space
For the most part, they all get allocated the exact same amount of space.

- [x] Strings: O(n) space (where n is the string length)
Strings are a bit different. A longer string will take up more space. 
So strings are O(n) complexity.
So as the number of characters n grows, the amount of storage/memory needed to store that string ALSO grows.

- [x] Reference types: generally O(n), where n is the length of array (or # of keys in an object).
An array of 1 item vs an array of 1000 items.
The 1000 items array would take roughly 1000x more space than the 1 item array.

# Big O Notation:

```js
const btyArr = [1, 2, 3]

// add function
function fooBarOne(arr) {
  return 1 + arr[0];
  // Should return 2
}

// sum function
function fooBarTwo(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
  // Should return 6
}

// pair function
function fooBarThree(arr) {
  // Nested loop for all possible pairs
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      document.write("(" + arr[i] + ", "+ arr[j] + ")" + ", ");
      // Should return the following:
      // (1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3),
    }
  }
}

```

- If we were to increase the size of the array to 10, 100, 1000, 10 million etc...
- Basically unreasonable to describe the time complexity of these algorithms in seconds/milleseconds because it just doesn't make sense. Depending on the size of our array (example: array with one element) compared to increasing our array by **A LOT**.  
- First algorithm effected a little bit. Second algorithm effect a little bit. Third algorithm effected a lot. Bad language. Let's do better than that. 

```js
// Asymptotic Analysis
f(n) 
n --> Infinity
```

- How do we read `O(1)`, `O(n)`, and `O(n^2)`❓❓❓

If you ever find yourself writing an algorithm with a bunch of elementary operations in them...
- How do we read `O(7n^2 + n + 85)`❓❓❓

### Most common notations:
- O(1)
- O(log(n))
- O(n)
- O(n*log(n))
- O($n^2$)
- O($2^n$)
- O(n!)

- [x] Look up complexity analysis / big o notation graph.

- [x] Time complexity in the `WORST CASE scenario`. 

```
Big O (O()) describes the upper bound of the complexity.
Omega (Ω()) describes the lower bound of the complexity.
Theta (Θ()) describes the exact bound of the complexity.
```

### How to figure out your complexity in an interview:

- O(25) --> ❓❓❓
- Traverse through entire array ❓❓❓-->  O(n)
- Traverse an array from left to right. Then right to left. O(2n) --> ❓❓❓
- Pairing algorithm would be O($n^2$ + 2n) --> ❓❓❓
- O($n^3$ + log(n) + 3) --> ❓❓❓


#### Overkill

- O(n + m)
- O($m^2$ + 2n)
- O(n! + log(m) + 2n + 3)


[Big O Notation Exercise](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/computer-science/01-cs-big-o-notation/exercises/BigOExercise.md)

