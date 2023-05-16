// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return this.size++;
//   }
//   // Popping from the head.
//   pop() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     // return removed node
//     return temp.value;
//   }

// }

// const stack = new Stack();
// const newNode = new Node(33)
// stack.push(newNode)
// stack.push(45);
// stack.push(55);
// console.log(stack);


// const queue = [];
// queue.push('Apple')
// queue.push('Banana')
// queue.push('Cranberry')
// console.log(queue);
// queue.shift();
// queue.shift();
// queue.shift();
// console.log(queue);

// const queue = [];
// queue.unshift("First")
// queue.unshift("Second")
// queue.unshift("Third")
// // queue.pop();
// // queue.pop();
// // queue.pop();
// console.log(queue);
// queue.pop();
// console.log(queue);
// queue.pop();
// console.log(queue);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Add to the end, and remove from the beginning.
// That's the fastest. O(1)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Add to queue (AT THE END)
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
  // Remove from queue (FROM THE BEGINNING)
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
}