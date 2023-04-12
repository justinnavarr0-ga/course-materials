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
    // DO SOMETHING.
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
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
    console.log("prev.val: ", prev.val)
    this.tail = prev;
    this.tail.next = null;
    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // returning deleted node
    return current;
  }
  shifting() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;
    // Store the current head property in a variable
    let currentHead = this.head;
    // Set the head property to be the current head's next property
    this.head = currentHead.next;
    // Decrement the length by 1
    this.length--;

    // Set head to null and tail to null
    if (this.length === 0) {
      this.tail = null;
    }
    // Return the value of the node removed
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;
      // Set the head property on the list to be that newly created node
      this.head = newNode;
    }
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

}

const list = new LinkedList();
list.push("Hello!")
list.push("B!")
list.push("T!")
list.push("Y!")


