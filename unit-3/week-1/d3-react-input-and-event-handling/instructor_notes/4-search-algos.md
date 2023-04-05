# Search Algos:

*Here are some common use cases where binary search could be useful:*

1. Searching in a phone book: Imagine you need to find a person's phone number in a phone book. The phone book is sorted alphabetically, and you can use binary search to quickly find the person's name.

2. Finding a word in a dictionary: A dictionary is another example of a sorted list where binary search can be used to quickly find a word.

3. Searching in a database: If you have a large database of records sorted by some attribute (such as last name or ID), binary search can be used to efficiently find a specific record.

4. Finding an element in a sorted array: If you have a sorted array of elements, you can use binary search to find the index of a specific element in the array.



## Brute Force:

Refers to an algorithm that tries every possibility available. 
```js
const largeDataSet = [];
for (let i = 0; i <= 10000; i++) {
  largeDataSet.push(i)
}
largeDataSet.push("BTY IS THE BEST")
console.log(largeDataSet)

for (let i = 0; i < largeDataSet.length; i++) {
  if (largeDataSet[i] === "BTY IS THE BEST") {
    console.log("I FOUND IT! BRUTE FORCE SEARCH COMPLETE!")
  }
}
```

## Binary Search:

Binary search and binary search trees are two related concepts used in computer science, but they have different meanings and applications.

Binary search is a searching algorithm used to find a specific element in a sorted array or list. The idea behind binary search is to divide the array in half repeatedly until the element is found, or until it is determined that the element is not in the array. Binary search works by comparing the target element with the middle element of the array, and eliminating the half of the array that cannot contain the target element.

Binary search trees, on the other hand, are data structures used to store and organize data in a tree-like structure. A binary search tree is a special kind of binary tree, where every node has at most two children, and the value of every node in the left subtree is less than the value of the node itself, and the value of every node in the right subtree is greater than the value of the node itself. This property makes it easy to search for specific elements in the tree using a modified version of binary search.

- [x] In summary, binary search is an algorithm used to search for an element in a sorted list, while binary search trees are data structures used to store and organize data in a tree-like structure that allows for efficient searching and sorting.


### Ken's Thoughts:

I want to jump straight into the deep end with Binary Search Trees, but I thought I'd pull it back a little bit. 

`Binary search` is a search algorithm that works on a `sorted array` or `list of elements <-- Python vernacular`. The algorithm repeatedly divides the array in half until it finds the target element or determines that it is not present in the array. Here are the steps for the binary search algorithm:

1. Set two pointers, `start` and `end`, to the first and last indices of the array, respectively.
2. Calculate the `mid` index as the average of `start` and `end`:` mid = (start + end) // 2`.
3. Compare the target element with the middle element of the array, `arr[mid]`.
4. If the target element is equal to `arr[mid]`, then the search is successful and the index of the target element is `mid`.
5. If the target element is less than `arr[mid]`, then set `end = mid - 1` and go to step 2.
6. If the target element is greater than `arr[mid]`, then set `start = mid + 1` and go to step 2.
7. If start becomes greater than end, then the search is unsuccessful and the target element is not in the array.

![Binary Search Graphic](https://media.geeksforgeeks.org/wp-content/uploads/20220309171621/BinarySearch.png)

![Binary Search Graphic](https://i.ytimg.com/vi/HlEz93t628E/maxresdefault.jpg)

![Binary Search Graphic](https://learncodingfast.com/wp-content/uploads/2020/11/binary-search.png)

```js
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Index of TARGET here.
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target not found in the array.
}

console.log(binarySearch([3, 27, 56, 78, 99, 103, 177], 27))
```

[Python Tutor this code to step through it](https://pythontutor.com/javascript.html#mode=edit)


### Binary Search Insertion:

```js
function binarySearchInsert(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (value > arr[mid]) {
      low = mid + 1;
    } else if (value < arr[mid]) {
      high = mid - 1;
    } else {
      // value already exists in array
      return mid;
    }
  }

  // value not found, insert it at position low
  arr.splice(low, 0, value);
  return low;
}

// Example usage
let arr = [1, 3, 5, 7, 9];
let index = binarySearchInsert(arr, 4);
console.log(arr); // Output: [1, 3, 4, 5, 7, 9]
console.log(index); // Output: 2
```

In this example, the binarySearchInsert function takes an array and a value as inputs. It first initializes the low and high variables to the first and last indices of the array, respectively. Then, it performs a binary search on the array to find the index where the new value should be inserted.

If the value already exists in the array, the function returns the index of the existing value. Otherwise, the function uses the splice method to insert the new value at the position indicated by low, and returns low.

In the example usage, we call binarySearchInsert on the array [1, 3, 5, 7, 9] with the value 4. The function finds that 4 should be inserted at index 2, and inserts it using the splice method. The resulting array is [1, 3, 4, 5, 7, 9], and the function returns 2.


