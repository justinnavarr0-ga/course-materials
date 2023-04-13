# Stacks and Queues

## Stacks

### Objectives

- Define what a stack is
- Understand use cases for a stack
- Implement operations on a stack data structure

### What is a stack?

- [x] It's a collection of data that needs to abide by the **LIFO** principle. 
- [x] The last element added to tohe stack will be the first element removed from the stack.

### How is it used?

Think about a stack of **dirty dishes** or a stack of **books**. THe last dirty dish or last book on the stack is what getes removed first. 

Call Stack Example

```js
function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x-1);
}

factorial(4)
```

### Where are stacks used?

- Managing function invocations
- Undo / Redo
- Routing (the history object) React will use a stack to model the page history.

### There is more than one way of implementing a stack

**Array Implementation**

```js
const stack = [];
stack.push('apple')
stack.push('facebook')
stack.push('samsung')
stack.push('tesla')
stack.push('youtube')
console.log(stack)
stack.pop();
```

Wait, so using `push` and `pop` on an array works? **YES**

```js
const stack = [];
stack.unshift("check all slack messages")
stack.unshift("check emails")
stack.unshift("answer phone call")
stack.unshift("deal with banking")
console.log(stack);
stack.shift();
```

There's a distinction between these two. Which one of these is more efficient? Why?

### Writing our own Stack from scratch

Theoretical...
```js
const stack = new Stack();
stack.push("first")
stack.push("second")
stack.push("third")
stack.push("fourth")
stack.pop()
stack.pop()
stack.pop()
stack.pop()
```

So wait? Why don't we use our Linked List as our stack? Well, if we remember, `push` and `pop` are supposed to be constant time. `pop` in our linked list is not constant time. 

[Visualgo](https://visualgo.net/en/list)

### Pushing Pseudocode

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

We're going to be adding a removing from a singly linked list **AT THE HEAD**. If we used a double linked list, then it wouldn't really matter. 

### Stack Code

```js
class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
}
```

Test our stack's `push` method.

### Pop pseudocode
- If there are no nodes in the stack, return `null`
- Create a temporary variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be `null`
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed

```js
pop() {
  if (!this.first) return null;
  let temp = this.first;
  if (this.first === this.last) {
    this.last = null;
  }
  this.first = this.first.next;
  this.size--;
  return temp.value;
}
```

Test the pop method.

### Big O of Stacks:

| Insertion | Time Complexity |
| --------- | --------------- |
| Insertion | O(1) |
| Removal   | O(1) |
| Searching | O(N) |
| Access    | O(N) |

### Recap

- Stacks are a **LIFO** data structure where the last value in is the first one out
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remembering pages you have visited and go back/forward) and must more.
- They are not a built in data structure in JavaScript, but are relatively simple to implement


## Queues

### Objectives
- Define what a queue is
- Understand use cases for a queue
- Implement operations on a queue data structure

### What is a queue?

- [x] A **FIFO** data structure
- First In First Out

Queues exists seemingly everywhere. Think about the last time you waited in a line.

When do we use `queues` in programming?
- Joining a Fortnite server
- Background tasks
- Uploading resources
- Printing / Task processing
- enqueue/dequeue

### Building a queue with an array:

```js
const queue = [];
queue.push('Apple')
queue.push('Banana')
queue.push('Cranberry')
console.log(queue);
queue.shift();
queue.shift();
queue.shift();
```

Another way we can do this:

```js
const queue = [];
queue.unshift("First")
queue.unshift("Second")
queue.unshift("Third")
queue.pop();
queue.pop();
queue.pop();
```

What's the problem we're having with these two version using an array?
> Hint: Think about if we grow this queue to 100,000+ items.

### Writing our own queue from scratch:

```js
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

So basically, with a queue, **::A::** we can add from the end and remove from the beginning. 

Or, we can **::B::** add from the beginning and remove from the end.

Use [Visualgo](https://visualgo.net/en/list) to see our options.

<details>
<summary>
Which option should we choose? 
</summary>
<hr>

Add to the end, and remove from the beginning. That's the fastest. O(1)

<hr>
</details>


```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    
  }
  dequeue() {

  }
}
```

### Enqueue Pseudocode
- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that new node, and then set the last property of the queue to be that node
- Increment the size by 1

```js
enqueue(val) {
  let newNode = new Node(val);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
  } else {
    this.last.next = newNode;
    this.last = newNode;
  }
  return ++this.size
}
```

### Dequeue

Should remove from the beginning, in order to give us the LIFO 

### Dequeue pseudocode

- If there is no first property, just return `null`
- Store the first property in the variable
- See if the first is the same as teh last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first
- Decrement the size by 1
- Return the value of the node dequeued

```js
dequeue() {
  if (!this.first) return null;
  let temp = this.first;
  if (this.first === this.last) {
    this.last = null;
  }
  this.first = this.first.next;
  this.size--;
  return temp.value;
}
```

<hr>

<details>
<summary>
Complete code
</summary>
<hr>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size
  }
}
```

### Big O of Queues

| Insertion | Time Complexity |
| --------- | --------------- |
| Insertion | O(1) |
| Removal   | O(1) |
| Searching | O(N) |
| Access    | O(N) |

### Recap:

- Queues are a **FIFO** data structure, all elements are first in first out
- Queues are useful for processing tasks and are foundational for complex data structures
- Insertion and Removal can be done in O(1)









<hr>
</details>

<details>
<summary>
Hash Tables
</summary>
<hr>

```js


```
<hr>
</details>
