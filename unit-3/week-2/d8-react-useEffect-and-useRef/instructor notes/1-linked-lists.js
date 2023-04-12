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

  traverse() {
    let current = this.head;
    while (current) {
      console.log("This is the current vertex:", current.val)
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    console.log("current.val: ", current.val)
    console.log("prev.val", prev.val)
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

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

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

  reverse() {
    let node = this.head;
    // Swap the head and tail
    this.head = this.tail
    this.tail = node;
    let next;
    let prev = null;
    // Doing a for loop because we're keeping track of the length
    for (let i = 0; i < this.length; i++) {
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

}

let list = new LinkedList();

list.push('HELLO')
list.push('BTY')
list.push('<3')


list.print()