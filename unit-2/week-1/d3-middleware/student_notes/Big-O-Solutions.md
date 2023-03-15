# Exercise #1:

The time complexity of this algorithm is O(n), where n is the number of words in the phrase. This is because the function iterates over each word in the phrase array once and performs a constant amount of work for each word.

The space complexity of this algorithm is also O(n), where n is the number of words in the phrase. This is because the function creates an array array to store all the words in the phrase, and the size of this array is proportional to the number of words in the phrase. The result variable and the loop counter variable i both take constant space, so they do not contribute to the space complexity as n grows large.

Overall, this function has a linear time and space complexity, which is quite efficient for most practical purposes.

# Exercise #2:

The time complexity of bubble sort algorithm is O(n^2) in the worst-case scenario, where n is the number of elements in the input array. This is because the algorithm compares each element with every other element in the array, which requires nested loops, each iterating over n elements.

The space complexity of the algorithm is O(1) because it sorts the array in place, without creating any new arrays. The only extra space required is for the temporary variable temp used to swap elements.

Overall, bubble sort is not considered an efficient algorithm, especially for large arrays. Its time complexity of O(n^2) makes it impractical for sorting large datasets. There are other sorting algorithms, such as quicksort, merge sort, and heapsort, that have better time complexities and are more efficient in practice.

# Exercise #3:

The time complexity of the factorial function is O(n), where n is the input parameter, because the function calls itself recursively n times to calculate the factorial of n. Each recursive call takes a constant amount of time to execute, and the total number of calls is proportional to n.

The space complexity of the factorial function is also O(n), because each recursive call creates a new stack frame on the call stack, which contains the local variables and parameters of the function call. Therefore, the space used on the call stack is proportional to the number of recursive calls, which is also proportional to n.

In summary, the factorial function has a time complexity of O(n) and a space complexity of O(n), both of which are linear in the input size n. This makes the function reasonably efficient and suitable for calculating factorials of small to moderate-sized integers. However, for very large inputs, the recursive nature of the algorithm could cause it to run out of stack space and crash the program. In such cases, an iterative implementation of the algorithm may be more appropriate.

# Exercise #4:

The time complexity of the bobIsFirst function is O(1), because the function simply checks whether the first element of the input array people is equal to the string 'bob'. This operation takes constant time regardless of the size of the input array, so the time complexity is constant.

The space complexity of the function is also O(1), because it does not create any new variables or data structures that depend on the size of the input. It only uses a constant amount of memory to store the input array and the temporary variable used in the comparison.

Therefore, the bobIsFirst function has a time complexity of O(1) and a space complexity of O(1), both of which are constant and do not depend on the size of the input.

# Exercise #5:

The time complexity of the isPalindrome function is O(n), where n is the length of the input string input. This is because the function iterates over each character in the string input once, pushing it onto the stack, and then pops each character off the stack once. Both operations take constant time, so the overall time complexity of the function is O(n).

The space complexity of the function is also O(n), because it creates a stack data structure that can hold up to n elements, where n is the length of the input string. In the worst case, if the input string is a palindrome, the stack will contain all n characters of the input string. Additionally, the function creates a string output to hold the reversed characters, which can also take up to n characters in the worst case.

Therefore, the isPalindrome function has a time complexity of O(n) and a space complexity of O(n), both of which are linear in the size of the input string.

# Exercise #6:

The time complexity of the sumOfDivisors function is O(n), where n is the input parameter. This is because the function loops through all integers from 1 to n-1 and performs a constant amount of work (a single modulus operation and a conditional check) for each iteration of the loop. In the worst case, when n is a prime number, the loop will run n-2 times, which is proportional to n.

The space complexity of the function is O(1), because it only uses a constant amount of additional memory to store the result variable and the loop counter i. The amount of memory used by the function does not depend on the size of the input, so the space complexity is constant.

Therefore, the sumOfDivisors function has a time complexity of O(n) and a space complexity of O(1), making it reasonably efficient for calculating the sum of divisors of small to moderate-sized integers. However, for very large inputs, the function may take a long time to run, and more efficient algorithms may be needed.

# Exercise #7:

The time complexity of the printAllNumbersThenSumPairs function is O(n), where n is the length of the numArray. This is because the function performs two passes over the array using two forEach loops. The first loop simply prints out each element of the array, which takes constant time per element, resulting in O(n) time complexity. The second loop performs a constant amount of work for each pair of adjacent elements, and there are n-1 pairs of adjacent elements in the array, so the second loop also has a time complexity of O(n).

The space complexity of the function is O(1), because it only uses a constant amount of additional memory to store the loop variables and any temporary variables created by the loops. The amount of memory used by the function does not depend on the size of the input, so the space complexity is constant.

Therefore, the printAllNumbersThenSumPairs function has a time complexity of O(n) and a space complexity of O(1), making it a reasonably efficient algorithm for processing small to moderate-sized arrays. However, for very large arrays, more efficient algorithms may be needed to avoid performance issues.

# Exercise #8:

The time complexity of the isPrime function is O(n), where n is the value of the input num. This is because the function performs a loop from i = 2 up to i = num - 2, checking whether each value of i evenly divides num. In the worst case, the loop will iterate num - 3 times, giving a time complexity of O(n).

The space complexity of the function is O(1), because it only uses a constant amount of additional memory to store the loop variables and any temporary variables created by the loop. The amount of memory used by the function does not depend on the size of the input, so the space complexity is constant.

Therefore, the isPrime function has a time complexity of O(n) and a space complexity of O(1), making it a reasonably efficient algorithm for checking whether a single number is prime. However, for checking many numbers for primality, more efficient algorithms such as the Sieve of Eratosthenes may be needed to avoid performance issues.


