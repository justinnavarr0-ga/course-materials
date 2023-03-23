// function bubbleSort(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let swapped = false;
//     for (let j = 0; j < arr.length - 1; j++) {
//       count += 1;
//       console.log("This is the current state of the array", arr)
//       if (arr[j] > arr[j + 1]) {
//         // swap elements in an array
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

//         swapped = true;
//       }
//     }
//     if (swapped === false) break;
//   }
//   console.log(count);
//   return arr;
// }

// // Data that's close to be sorted
// console.log(bubbleSort([99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else if (arr1[i] > arr2[j]) {
      results.push(arr2[j])
      j++
    }
  }
  // Only ONE of these while loops will run.
  // If i broke the top while loop, j will run.
  // If j broke the top while loop, i will run.
  // Dealing with leftovers for arr1
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  // Dealing with leftovers for arr2
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}


// CHECK IT OUT
// console.log(merge([1, 3, 6], [5, 8, 20]))
// Test this to see if our merge algo works.
// console.log(merge([5, 8, 8, 8, 8, 20], [1, 3, 6, 7, 7, 7, 7, 7]))

console.log(mergeSort([43, 232, 24, 42, 5]))

// [43, 232, 24, 42]