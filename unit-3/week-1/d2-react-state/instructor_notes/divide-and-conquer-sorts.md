# Real World Use Cases for Merge Sort:

1. **Database Sorting:** Merge sort is often used in database sorting algorithms to sort and merge large data sets quickly and efficiently.

2. **External Sorting:** Merge sort is ideal for sorting large files that do not fit into main memory, such as external hard drives.

3. **Parallel Processing:** Merge sort can be parallelized, which allows for efficient sorting of large data sets across multiple processors and can be used in big data processing applications.

4. **Network Routing:** In network routing, merge sort can be used to sort a list of potential routes to determine the fastest or most efficient route for data to travel.

5. **Multimedia Sorting:** Merge sort can be used in multimedia applications, such as sorting large collections of images or videos.

6. **Genome Sequencing:** Merge sort can be used in genome sequencing to sort and merge large data sets of DNA sequences, which is essential for identifying genetic mutations and developing targeted treatments.

7. **Search Algorithms:** Merge sort can be used as a sorting subroutine in search algorithms to sort data before searching for specific items.

8. **Event Scheduling:** Merge sort can be used to sort a list of events by their start or end times, making it easier to schedule and manage events.

9. **Financial Data Analysis:** Merge sort can be used in financial data analysis to sort and merge large data sets of financial transactions and market data, making it easier to identify trends and patterns.

10. **Data Visualization:** Merge sort can be used in data visualization applications to sort and display large amounts of data in an organized and meaningful way, making it easier to interpret and analyze the data.

# Divide and Conquer Sorts

[Divide-and-Conquer Sorts](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/computer-science/05-cs-divide-and-conquer-sorts/readme.md)

[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

## Merge Sort:

![Merge Sort](https://i.imgur.com/1U1LxaK.png)

Solve the bottom half of the algorithm first. 
```js
function merge(arr1, arr2) {
  const results = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      results.push(arr1[pointer1])
      pointer1++
    } else {
      results.push(arr2[pointer2])
      pointer2++
    }
  }
  while (pointer1 < arr1.length) {
    results.push(arr1[pointer1])
    pointer1++
  }
  while (pointer2 < arr2.length) {
    results.push(arr2[pointer2])
    pointer2++
  }

  return results;
}

const arr1 = [4, 22, 33, 77]
const arr2 = [14, 36, 41, 85]

console.log(merge(arr1, arr2));
```

The recursive part of the algorithm: Find mid, left, right. 

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

All together now:

```js
function merge(arr1, arr2) {
  const results = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      results.push(arr1[pointer1])
      pointer1++
    } else {
      results.push(arr2[pointer2])
      pointer2++
    }
  }
  while (pointer1 < arr1.length) {
    results.push(arr1[pointer1])
    pointer1++
  }
  while (pointer2 < arr2.length) {
    results.push(arr2[pointer2])
    pointer2++
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const arr = [33, 14, 55, 223, 23, 4124, 49, 72]
console.log(mergeSort(arr));
```

# Real World Use Cases for Quick Sort:

1. **Web Browsers:** Quick sort can be used in web browsers to sort and render web pages in the order of importance or relevance to the user.

2. **Computer Graphics:** Quick sort can be used in computer graphics to sort a list of objects by their depth, making it easier to display them in the correct order.

3. **File Systems:** Quick sort can be used in file systems to sort files and folders alphabetically or by size, making it easier to locate specific files and folders.

4. **Music and Video Players:** Quick sort can be used in music and video players to sort playlists by song name, artist, album, or genre.

5. **Machine Learning:** Quick sort can be used in machine learning algorithms to sort and preprocess large data sets of training data, making it easier to train the model.

6. **Language Analysis:** Quick sort can be used in natural language processing to sort and preprocess large data sets of text documents, making it easier to analyze the language.

7. **Geographical Data Analysis:** Quick sort can be used in geographical data analysis to sort and preprocess large data sets of geographic data, such as maps and satellite images.

8. **Operating Systems:** Quick sort can be used in operating systems to sort and manage processes and threads, making it easier to allocate system resources efficiently.

9. **Scientific Data Analysis:** Quick sort can be used in scientific data analysis to sort and preprocess large data sets of scientific data, such as temperature readings, making it easier to analyze the data.

10. **Financial Analysis:** Quick sort can be used in financial analysis to sort and preprocess large data sets of financial data, such as stock prices, making it easier to analyze the data and identify trends.



## Quick Sort: 

- [x] Bane of my existence in terms of sorting algos. My brain does not like the way quicksort works. My brain rejects storing quicksort. 

- [x] Works on the same assumption that merge sort does - easiest to solve through recursion. Like merge sort, exploits the fact that arrays of 0 or 1 element are **ALWAYS** sorted.

- [x] Works bey selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array. All numbers `lower` than the "pivot" are to the left. All numbers `greater` than the "pivot" are to the right side. 

- [x] Once the "pivot" is positioned appropriately, quick sort can be applied on either side of the pivot. 

### How does it work?

**[`5`, 2, 1, 8, 4, 7, 6, 3]**

1. Pick a pivot (first element, which is `5`). 
2. Count numbers less than "pivot", and move it to the left of the "pivot".
3. So now we have **[3, 2, 1, 4, `5`, 7, 6, 8]**
4. Let's have a `moment` together here - is `5`/"pivot" sorted? 🙌 
5. Now, let's `recursively` repeat the process on the left side and the right side. 
6. It doesn't matter what we pick as our pivot, it will work no matter what. Let's pick the first element as our pivot. 

**[`3`, 2, 1, 4, 5, 7, 6, 8]** 

Next, we get the following: 

**[1, 2, `3`, 4, 5, 7, 6, 8]** 

Now, we recursively do the same thing on elements 1 and 2.

**[`1`, 2, 3, 4, 5, 7, 6, 8]** 

Okay. We took care of the left side of our original "pivot"/`5`. Now, let's take care of the right side. 

**[1, 2, 3, 4, 5, `7`, 6, 8]** 

Hmm.. We have 1 number less than the our "pivot"/`7`, so we move it right 1 index.

**[1, 2, 3, 4, 5, 6, `7`, 8]** 

Now, we have a sorted array. 

### Explain Quick Sort to me!!! 
[Visual Algo Animation](https://visualgo.net/en/sorting)

Explain quicksort. This code is very difficult. There is no expectation that you go and write this code from scratch. 

### Pivot Helper Implementation:

- In order to implement merge sort, it's useful to first implement a function responsible arranging elements, in an array on either side of a pivot.
- Given an array, this helper function should designate an element as the pivot.
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, adn all values greater than the pivot are moved to the right of the pivot. 
- The order of elements on either side of the pivot doesn't matter. 
- The helper should do this **in place**, that is, it should not create a new array.
- When complete, the *helper* should return the index of the pivot.

### Picking a pivot
- The runtime of quick sort depends in part on how we select the "pivot"
- Ideally, the "pivot" should be chosen so that it's roughly the median value in the data set you're sorting.
- For simplicity, we'll always choose the "pivot" to be the first element (we'll talk about the consequences of this later in terms of Big O).

Pivot Helper Example:
```js
      //   0  1  2  3  4  5  6  7
let arr = [5, 2, 1, 8, 4, 7, 6, 3]
pivot(arr); // 4 (index of 4)

arr;
// Any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable/possible mutations as well.
```

- [x] Basically, it doesn't matter, for our code, what ORDER we have on the left side and ORDER on the right side. ALL THAT MATTERS is that `5` is in the correct spot. 

- [x] Big Picture! `5` is in its final position once we sort the data. 

### Pivot Pseudocode:

- It will help to accept three arguments (or parameters): an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the "pivot" from the start of the array.
- Store the current "pivot" index in a variable (this will keep track of where the pivot should end up aka where we'll `swap` that pivot to at the end.
- Loop through the array from the start until the end.

> If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.

- Swap the starting element (i.e. the pivot) with the pivot index.
- Return the pivot index.

One more [Visual Algo Animation](https://visualgo.net/en/sorting) walkthrough 

### Pivot Helper Implementation:

What should calling this function return? 
```js
function pivot(arr, start=0, end=arr.length-1) {
  // doing some magical "stuff" here
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

// What should this array return? 
// index === 3;

```
**[2, 1, 3, `4`, 8, 6, 7, 5]** one of many possible solutions. All that matters is that `4` is in the correct spot. 

```js
function pivot(arr, start=0, end=arr.length-1) {
  let pivot = arr[start] // starting at first element with "pivot"
  let swapIdx = start;

  // Let's loop over everything AFTER "start" b/c there's no need to loop over itself. 
  for (let i=start + 1; i<arr.length; i++) {
    // Let's compare our pivot 
    if (pivot > arr[i]) {
      // Incrementing swapIdx by 1
      swapIdx++
      // Now we gotta swap 2 with 8. 
      // 8 is currently at index swapIdx right now. 
      // Copying in ANY swap function.
    }
  }
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
```

Now we're going to copy in ANY swap function.

```js
function pivot(arr, start=0, end=arr.length-1) {
  // Copying in ANY Swap function.
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start] // starting at first element with "pivot"
  let swapIdx = start;

  // Let's loop over everything AFTER "start" b/c there's no need to loop over itself. 
  for (let i=start + 1; i<arr.length; i++) {
    // Let's compare our pivot 
    if (pivot > arr[i]) {
      // Incrementing swapIdx by 1
      swapIdx++
      // Now we gotta swap 2 with 8. 
      // 8 is currently at index swapIdx right now. 
      // Swapping i=2 with swapIdx which swapIdx === 1;
      // [4, 2, 8, 1, 5, 7, 6, 3]
      swap(arr, swapIdx, i)
      // Repeat the code. 
    }
  }
  return swapIdx;
}
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
```


- Starting off: `pivot([4, 8, 2, 1, 5, 7, 6, 3])`
- [4, 8, 2, 1, 5, 7, 6, 3] *Initial array input here.*
- [4, 2, 8, 1, 5, 7, 6, 3]
- [4, 2, 1, 8, 5, 7, 6, 3]
- [4, 2, 1, 3, 5, 7, 6, 8]
- Now we have to take that `LAST swapIdx` and swap it with our `start`.
- [3, 2, 1, `4`, 5, 7, 6, 8] *Now, 4 is at the correct position*


```js
function pivot(arr, start=0, end=arr.length-1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start]
  let swapIdx = start;

  for (let i=start + 1; i<arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
      // Printing out array to make it a little clearer for us.
      // Does this match what we expected above with our pseudocode output?
      console.log(arr)
    }
  }
  return swapIdx;
}
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
```

One more finishing touch. Let's swap the starting element WITH the pivot index. 
```js
function pivot(arr, start=0, end=arr.length-1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start]
  let swapIdx = start;

  for (let i=start + 1; i<arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  // Check out what the array is at the very end.
  console.log(arr);
  return swapIdx;
}
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
```

Test the code above by adding 9 at the beginning of the array.
```js
console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]))
```

Right on. So that's our **Pivot Helper**. Now we need to move on the actual *SORTING* part.

### Quicksort Pseudocode:

- Our `pivot helper` is finished. We have our full array. It's gonna take our first item, figure out what's smaller, throw them to the left of our pivot and larger numbers to the right of our pivot. 
- Call the `pivot helper` on the array.
- When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the `left` of that index, and the subarray to the `right` of that index.
- Important to note that we're **NOT** making new arrays. This is all happening IN PLACE. 
- Our base case is checking if the **`SUBARRAY`** has one item in it. 
- Very few people can implement this within the first hour of learning this algorithm, so don't beat yourself up if you can't code it from scratch.

```js
function quickSort(arr) {
  let pivotIndex = pivot(arr);
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))
```

Okay. Wait... Our `pivot` function accepts an `arr, start, and end` in the parameters, right? 

The very first time through, we wanna call our `pivot` function on the whole array, but then we're gonna call it on our **SUBARRAYS** where we have a different start and end point. 

```js
function quickSort(arr, left=0, right=arr.length-1) {
  let pivotIndex = pivot(arr, left, right); 
  // Currently, pivotIndex === 3 at this point.
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))
// [4, 6, 9, 1, 2, 5, 3]
// [3, 2, 1, 4, 6, 9, 5]
//           4
// 3, 2, 1      6, 9, 5
//       3         6
// 2, 1         5     9
//    2
// 1
```

Now, we wanna repeat the same thing, but we wanna do it on the `left side` (start point where `left=0`) up until the `pivotIndex-1`.
```js
// 0  1  2   3   INDEXES

//           4   ELEMENTS
// 3, 2, 1       ELEMENTS
```

So let's focus on the left side first.

```js
function quickSort(arr, left=0, right=arr.length-1) {
  let pivotIndex = pivot(arr, left, right); 
  // left side
  quickSort(arr, left, pivotIndex-1)
  // right side
  //  3 4  5  6   INDEXES
  //  4           PIVOT ELEMENT
  //    6, 9, 5   RIGHT SIDE ELEMENTS
  quickSort(arr, pivotIndex+1, right)
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))
// [4, 6, 9, 1, 2, 5, 3]
// [3, 2, 1, 4, 6, 9, 5]
//           4
// 3, 2, 1      6, 9, 5
//       3         6
// 2, 1         5     9
//    2
// 1
```

So now we have our recursive calls for our left and right side. However, if I run this now, there's a **BIG PROBLEM** in that it's gonna run FOREVER. 

Where do we wanna stop **(BASE CASE)**? We wanna stop when we hit a situation where our `SUBARRAY` is one element long. 

How do we know that our `SUBARRAY` is one element long? `arr` is ALWAYS the same array, but `left` and `right` are constantly changing. Can you see a situation where `left` and `right` are the **SAME**??? **EXPLAIN THIS.**

```js
function quickSort(arr, left=0, right=arr.length-1) {
  // BASE CASE
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); 
    // left side
    quickSort(arr, left, pivotIndex-1)
    // right side
    quickSort(arr, pivotIndex+1, right)
  }
  // Okay, still not QUITE DONE.

}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))
// [4, 6, 9, 1, 2, 5, 3]
// [3, 2, 1, 4, 6, 9, 5]
//           4
// 3, 2, 1      6, 9, 5
//       3         6
// 2, 1         5     9
//    2
// 1
```

We still have ONE missing piece. We're not returning anything. We need to return ______???


So... Now we have the final working version of our code as follows: 

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start]
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  // Check out what the array is at the very end.
  console.log(arr);
  return swapIdx;
}
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
// console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]))

function quickSort(arr, left = 0, right = arr.length - 1) {
  // BASE CASE
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))
```

### Chrome Callstack Review

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SANDBOX CHROME DEBUGGER</title>
</head>

<body>
  <h1>HERE WE GO!</h1>
  <script src="./sandbox.js"></script>
</body>

</html>
```

### BIG O of Quicksort

| Time Complexity (best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O( n log n)            | O (n log n)               | O $(n^2)$               | O(log n)         |


O(log n) decompositions
O(n) comparisons per decomposition


[Overview of Quicksort](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)

[Differences Between Merge Sort and Quick Sort](https://www.interviewkickstart.com/learn/quicksort-vs-merge-sort#:~:text=Quicksort%20is%20very%20efficient%20for,complexity%20of%20O(n))