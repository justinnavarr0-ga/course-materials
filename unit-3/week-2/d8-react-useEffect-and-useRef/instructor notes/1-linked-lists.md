# Linked Lists

[Linked Lists](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/tree/main/computer-science/07b-linked-lists)

### Objectives

- Define what a Singly Linked List is
- Compare and contrast Linked Lists with Arrays
- Implement insertion, removal, and traversal methods on Singly Linked Lists


### What is a linked list? 
- A data structure that contains a head, tail, and length property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another **node** or `null`

- [x] I like to think of a linked list like a sky scraper with no elevators, ONLY stairs. 

![Linked List](https://i.imgur.com/O3VtD0q.png)

[Visualgo.net](https://visualgo.net/en/list)
1. Start with `searching` for a number.
2. Show `insertion` 
3. Show `insertion` at the beginning.

### Comparison with Arrays

*Lists:*
- Do not have indexes!
- Connected via nodes with a **next** pointer
- Random access is not allowed (skyscraper with no elevator)

*Arrays:*
- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index.

One of the things linked lists are *GOOD* at are `insertion` and `deletion`.

Memory Canvas:
![Memory Canvas](https://i.imgur.com/f7Zpgbf.png)

### Starter Code and Push Intro:

```js
// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const first = new Node('Hello');
first.next = new Node('Better Than Yesterday!')
first.next.next = new Node('What is')
first.next.next.next = new Node('For')
first.next.next.next.next = new Node('Lunch Today?')

console.log(first);
```

Hmmm... Is there a better way to do this? Why don't we build our **Linked List** class.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {

  }
}

const list = new LinkedList();
list.push("Hello!")
list.push("Unit 3!")
```

Okay. So that is where we're going. 

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // Do something here
  }
}
```
<hr>

### PUSHING PSEUDOCODE:
- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list
<hr>

*Show Insertion to an empty linked list.*
[Visualgo.net](https://visualgo.net/en/list)
<hr>

[What is the difference between a node and a vertex?](https://stackoverflow.com/questions/14111660/what-is-the-difference-between-a-node-and-a-vertex)
<hr>

**YOU DO! 5 minutes!**

<hr>

<details>
<summary>
Push Solution
</summary>

<hr>

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      // moving tail marker over
      this.tail = newNode;
    }
    this.length++
    return;
  }
}

let list = new LinkedList();
list.push("HELLO!")
list.push("BTY!")
list.push("BEST!")
list.push("EVAR@")
console.log(list);
```

<hr>
</details>

<hr>


### Pop Intro:

A little more complicated. It's not as easy as `pop` on an array.

[Visualize the removal at the tail](https://visualgo.net/en/list)

Wait a sec... How do we traverse a linked list?

```jsx
traverse() {
  let current = this.head;
  while (current) {
    console.log("This is the current vertex:", current.val)
    current = current.next;
  }
}

...
let list = new LinkedList();
list.push("HELLO!")
list.push("BTY!")
list.push("SECOND")
list.push("BEST")
list.push("COHORT")
list.push("EVAR!")
// console.log(list);

list.traverse();
```

### Popping Pseudocode:

- If there are no nodes in the list, return `undefined`
- Loop through the list until you reach the tail.
- Set the `next` property of the 2nd to last node to be `null`
- Set the `tail` to be the 2nd to last node.
- Decrement the length of the list by 1
- Return the value of the node removed (so we need to store the deleted node into a variable so we can return it???)

### Pop Solution:

<details>
<summary>
How do we pop?
</summary>
<hr>

```js
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while(current.next) {
      prev = current;
      current = current.next;
    }
    console.log("current.val: ", current.val)
    console.log("prev.val: ",  prev.val)
    this.tail = prev;
    this.tail.next = null
    this.length--;
    // Edge Case:
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
...

let list = new LinkedList();
list.push("HELLO!")
list.push("BTY!")

list.pop();
list.pop();
list.pop();
list.pop();

console.log(list);
```
<hr>
</details>

<hr>

### Shifting Intro:

Remove a new **node** from the beginning of a Linked List!

[Visualize the removal at the HEAD](https://visualgo.net/en/list)

Takes constant `O(1)` time.
Compare to an array removal at the HEAD.

<hr>

### Shifting Pseudocode:

- If there are no nodes, return `undefined`
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed

<hr>

<details>
<summary>
Shift Solution
</summary>

<hr>

```js
shift() {
  // If there are no nodes, return `undefined`
  if (!this.head) return undefined;
  
  // Store the current head property in a variable
  let currentHead = this.head;
  
  // Set the head property to be the current head's next property
  this.head = currentHead.next;

  // Decrement the length by 1
  this.length--;

  // Return the value of the node removed
  return currentHead;
}
```

1. Test it out with `list.shift()`
2. `console.log(list)` to see the new head.

```js
let list = new LinkedList();
list.push("HELLO!")
list.push("BTY!")

list.shift()
list.shift()
list.shift()

// Testing... Why is head null and next set to null???
console.log(list);
```

Let's fix this.

```js
shift() {
  // If there are no nodes, return `undefined`
  if (!this.head) return undefined;
  
  // Store the current head property in a variable
  let currentHead = this.head;
  
  // Set the head property to be the current head's next property
  this.head = currentHead.next;

  // Decrement the length by 1
  this.length--;

  // Set head to null and tail to null
  if(this.length === 0) {
    this.tail = null;
  }
  // Return the value of the node removed
  return currentHead;
}
```

</details>

<hr>

### Unshifting:

Adding a new **node** to the *beginning* of the Linked List!

[Visualize Unshifting on a Linked List](https://visualgo.net/en/list)

1. Basically, create that new Node with the val/data.
2. Point the new node to the head
3. Set the head to the new node. 


### Unshifting Pseudocode:

- The function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list

<details>
<summary>
Unshift Solution
</summary>
<hr>

```js
// The function should accept a value
unshift(val) {
  // Create a new node using the value passed to the function
  const newNode = new Node(val);
  // If there is no head property on the list, set the head and tail to be the newly created node
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  }
  // set the newly created node's next property to be the current head property on the list
  newNode.next = this.head;
  // Set the head property on the list to be that newly created node
  this.head = newNode;
  // Increment the length of the list by 1
  this.length++
  // Return the linked list
  return this;
}
```

Test the code with the following:
```js
let list = new LinkedList();
list.push("HELLO!")
list.push("BTY!")

list.unshift('HOLA!')
console.log(list);
```

There is ONE issue with our code, that will become clear if we have an empty list.

```js
let list = new LinkedList();

list.unshift('HOLA')
console.log(list);
```

Open up the head node and see the bug.

```js
// bug fix
unshift(val) {
  const newNode = new Node(val);
  
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++
  return this;
}
```

<hr>
</details>


### Get Intro:

Retrieve a node by its position in the Linked List

![What's at Index of 3 in the Linked List?](https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png)

```js
get(2) // node.val -> 'C'
```

This is **NOT** like an array. We need to traverse every element in this linked list. 

### Get Pseudocode:

- Function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return `null`
- Loop through the list until you reach the index and return the node at that specific index

<details>
<summary>
Get Solution:
</summary>
<hr>

```js
// Function should accept an index
get(index) {
  // If the index is less than zero or greater than or equal to the length of the list, return `null`
  if (index < 0 || index >= this.length) {
    return null
  }
  let counter = 0;
  let current = this.head;
  // Loop through the list until you reach the index and return the node at that specific index
  while (counter !== index) {
    current = current.next;
    counter++
  }
  return current;
}

```
<hr>
</details>

### Set Intro:

Changing the **value** of a node based on its position in the Linked List

### Set pseudocode:

- This function should accept a `value` and an `index`
- Use your **get** function to find the specific node
- If the node is not found, return `false`
- If the node is found, set the value of that node to be the value passed to the function and return true

<details>
<summary>
SET SOLUTION
</summary>
<hr>

```js
set(index, val) {
  const foundNode = this.get(index);
  if (foundNode) {
    foundNode.val = val;
    return true;
  }
  return false;
}
```

Test with the following:

```js
let list = new LinkedList();

list.push('HELLO')
list.push('BTY')
list.push('<3')

console.log(list.set(1, 'Better Than Yesterday'));
```
<hr>
</details>

### Insert Intro:

**Insert** is adding a node to the Linked List at a **specific** position

[Show Insert with Visualgo](https://visualgo.net/en/list)

### Insert pseudocode:

- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, `push` a new node to the end of the list
- If the index is 0, `unshift` a new node to the start of the list.
- Otherwise, using the **get** method, access the node at the index -1
- Set the next property on that node to be the new node.
- Set the next property on the new node to be the previous next
- Increment the length
- Return true

In our *insert* method, we want to return `true` or `false`. The problem is, when we rely on our `push` and `unshift` methods, those **DON'T RETURN FALSE**. To make this a little NICER, we should always return `true` or `false`.

Insert is one of the trickier ones so 

### Insert Solution

<details>
<summary>
INSERT SOLUTION
</summary>
<hr>

```js
insert(index, val) {
  if (index < 0 || index > this.length) return false;
  if (index === this.length) return this.push(val); // Will return the entire list 
  if (index === 0) return this.unshift(val); // Will return entire list.
  const newNode = new Node(val);
  const prev = this.get(index - 1)
  const temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
}
```

Deal with the inconsistency of `true` and the entire list.

```js
insert(index, val) {
  if (index < 0 || index > this.length) return false;
  if (index === this.length) return !!this.push(val); // Will return the entire list 
  if (index === 0) return !!this.unshift(val); // Will return entire list.
  const newNode = new Node(val);
  const prev = this.get(index - 1)
  const temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
}
```

<hr>
</details>

### Remove Intro:

Removing a node from the Linked List at a **specific** position.

[Visualgo Remove](https://visualgo.net/en/list)

### Remove Pseudocode:
- If the index is less than zero or greater than the length, return undefined.
- If the index is the same as the length-1, pop
- If the index is 0, shift
- Otherwise, using the **get** method, access the node at the index - 1
- Set the next property on that node to be **the next of the next node**. 
- Decrement the length
- Return the value of the node removed

### Remove Solution

<details>
<summary>
REMOVE SOLUTION:
</summary>
<hr>

```js
remove(index) {
  if (index < 0 || index >= this.length) return undefined;
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();
  const previousNode = this.get(index - 1);
  const removed = previousNode.next;
  previousNode.next = removed.next;
  this.length--;
  return removed;
}
```

Test out the remove method.

<hr>
</details>

### Reverse Intro 

Reversing a Linked List **in place!**

Reverse is a classic computer science / interview question. 


| Head     |     |     | Tail     |
| -------- | --- | --- | -------- |
| 13       | 27  | 32  | 71       |
|          |     |     |          |
| **Tail** |     |     | **Head** |
| 13       | 27  | 32  | 71       |
|          |     |     |          |
|          |     |     |          |

### Reverse Pseudocode
- Swap the head and tail
- Create a variable called next
- Create a variable caleld prev
- Create a variable called node and initialize it ot the head property
- Loop through the list
- Set next to be the next property on whatever node is 
- Set the next property on the node to be whatever prev is 
- Set prev to be the value of the node variable

### Reverse Solution

<details>
<summary>
Reverse Solution
</summary>
<hr>

```js
reverse() {
  let node = this.head;
  // Swap the head and tail
  this.head = this.tail
  this.tail = node;
  let next;
  let prev = null;
  // Doing a for loop because we're keeping track of the length
  for (let i=0; i<this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}

print() {
  // Easiest way to print it all in one line
  var arr = [];
  var current = this.head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  console.log(arr);
}

```
<hr>

Test to see that reverse works.
```js
console.log(list.print())
list.reverse()
console.log(list.print())
```

</details>

### Big O of Singly Linked Lists:

- Insertion - O(1)
- Removal - *it depends...* O(1) for *head* or O(n) for *tail*
- Searching - O(n)
- Access  - O(n)

> So compared to arrays, singly linked lists excel at insertion and deletion. When you don't need `random access`, go with linked lists. 

### RECAP
- Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index whereas Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues (built on top of linked lists)



<details>
<summary>
HASH TABLES SOLUTION!
</summary>
<hr>

```js


```
<hr>
</details>