class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    // If there is no root node in the tree... Do this...
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      // There is a root in our Tree
      let current = this.root

      while (true) {
        // Dealing with duplicates
        if (value === current.value) return undefined

        // Dealing with the left side of our binary search tree
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            // There is a left node and the spot has been taken up, 
            // we reassign current (tracker).
            current = current.left
          }
        } else if (value > current.value) {
          // Handling the right side
          if (current.right === null) {
            current.right = newNode
            return this // returning tree
          } else {
            // Reassign current to current.right and keep looking.
            current = current.right
          }
        }
      }
    }
  }

  find(value) {
    // Check to see if there is a root node:
    if (this.root === null) return false
    // Tracker for our current node... moving this tracker left or right.
    let current = this.root
    while (current !== null) {
      // Checking the left side of our BST
      if (value < current.value) {
        // reassign current tracker to the left node
        current = current.left
      } else if (value > current.value) {
        // Checking the right side of our BST
        current = current.right
      } else {
        // if value === current.value
        return true
      }
    }
    return false
  }

}

//          10
//        5    13
//      2  7  11 16

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

tree.insert(3)

tree.insert(10) // inserting a duplicate

console.log(tree.find(-3))
console.log(tree.find(16))
// console.log(tree) 