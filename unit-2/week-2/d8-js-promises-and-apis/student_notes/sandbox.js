// function bubbleSort3(arr) {
//     let count = 0;
//     for (let i=0; i<arr.length - count; i++) { // - count will be optimized for one array
//       let swapped = false;
//       for (let j=0; j<arr.length; j++) {
//         count++
//         console.log("The current state of the arr", arr)
//         if (arr[j] > arr[j+1]) {
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//         //   let temp = arr[j];
//         //   arr[j] = arr[j+1]
//         //   arr[j+1] = temp;
//           swapped = true;
//         }
//       }
//       if (swapped === false) break;
//     }
//     console.log("Total Count: ", count)
//     return arr;
//   }


// console.log(bubbleSort3([99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
//this will go through
while (i < arr1.length && j < arr2.length) {
    //this would run one time
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else if (arr1[i] > arr2[j]){
      results.push(arr2[j]);
      j++
    }
  }
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
    // base case
    // We stop trying to split when we have an array of length 0 or 1.
    if (arr.length <= 1) {
      return arr // We don't need to split it any further.
    }
    // typical case
    // arr has 2 or more elements, split it into two new arrays. Using slice to help.
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid)) // 0 to mid
    const right = mergeSort(arr.slice(mid)) // mid to end
    return merge(left, right)
  }
  
  // CHECK IT OUT
  console.log(mergeSort([43, 232, 24, 42, 5]))