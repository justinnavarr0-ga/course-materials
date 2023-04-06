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