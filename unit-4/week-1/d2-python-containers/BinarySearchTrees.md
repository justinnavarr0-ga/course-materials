# Introduction to Trees

### Objectives:

- Define what a tree is
- Compare and contrast trees and lists
- Explain the differences between trees, binary trees, and binary search trees
- Implement operations on binary search trees

### What is a treee?

- [x] A data structure that consists of nodes in a **parent / child** relationship

![Upside Down Tree](https://imgs.search.brave.com/-CqSbsofkVvMXvVUYifrQCzivGPqbVI6fKy_mkQIFuQ/rs:fit:626:900:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9hcnR3b3Jr/aW1hZ2VzL21lZGl1/bWxhcmdlLzIvdGhl/LXVwc2lkZS1kb3du/LXRyZWUtbmV2aWxs/ZS1qb25lcy5qcGc)

![Tree Data Structure](https://miro.medium.com/v2/resize:fit:1354/format:webp/1*Z89j_NoDx9HkFcPHy3rPZg.png)

- [x] Some nodes have one child, some nodes have three children, some nodes have 5 children.

- [x] Not all trees look like the one above. Some `trees` look like the one below

![Another picture of a tree](https://media.geeksforgeeks.org/wp-content/uploads/tree.jpg)

> - Lists are `linear`.
> - Trees are `non-linear`.

What's the difference? Let's look at `trees` and `lists` and the life choices I have made.

![A Singly Linked List](https://res.cloudinary.com/practicaldev/image/fetch/s--cPptvWWk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z1kb5073yog804obhg21.png)

You can think of a singly linked list as a very special case of a tree. The above `could` be a tree (not a very good use case for a tree). The above is not a linked list once it becomes `non-linear`

![Not a Tree](https://res.cloudinary.com/practicaldev/image/fetch/s--RhFfkI9U--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/arq2attu0hbpqbc2922q.png)

For a tree, every node is moving away from the root node.

![Only has one root???](https://res.cloudinary.com/practicaldev/image/fetch/s--oY_vKwwf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cxkmxjn8ro9ildpcbat3.png)

All the nodes are pointing away from the root, yes, but there is no **ONE** root. We need to have one entry point.

### Tree Terminology

- **Root** - The top node in a tree
- **Child** -A node directly connected to another node when movoing away from the Root
- **Parent** - The converse notion of a child
- **Siblings** - A group of nodes with the same parent
- **Leaf** - A node with no children
- **Edge** - The connection between one node and another

# REAL WORLD Uses Cases For Trees

Trees have a lot of different applications:

- HTML DOM

![HTML DOM TREE](https://www.w3schools.com/whatis/img_htmltree.gif)

- Network Routing

[Network Routing schemes](https://en.wikipedia.org/wiki/Routing)

- Abstract Syntax Trees

Describing the syntax of a programming language using a tree structure.

![Python Abstract Syntax Tree](https://i0.wp.com/pybit.es/wp-content/uploads/2021/05/tree-sketch.png?w=750&ssl=1)

- Artificial Intelligence

Simplest example is a mini max tree

I'm going to over simplify this, not get into the mini max part of the logic, and just turn this diagram into a decision tree. 🤪🥹

Tic Tac Toe
![Tic Tac Toe](https://images.squarespace-cdn.com/content/v1/5a0c6978bff2001ef7581170/1513544673859-RJ7F813HA0C9A45OME6C/a-move-tree-where-x-always-wins.png?format=2500w)

- Folders in an Operating System

![File Structure Tree](https://www.oreilly.com/api/v2/epubs/9781449328962/files/httpatomoreillycomsourceoreillyimages1448104.png)

[API Call with JSON](https://pokeapi.co/api/v2/pokemon/snorlax)

# Kinds / Varieties of Trees

[Types of Trees in Data Structures](https://www.geeksforgeeks.org/types-of-trees-in-data-structures/)

Some will be faster at insertion, searching etc.. But some of them have some special rules that make them different. Some excel at storing data with a lot of duplicates and others excel at storing data that are all unique. There a lot of niche trees here.

Quadrilaterals, trapazoids, rectangles, squares.

![Binary Trees](https://imgs.search.brave.com/An3WHr97EGNJmeNUVH7RHliGrUaDmVkXEOKbqpwa7uc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kMTM4/emQxa3R0OWlxZS5j/bG91ZGZyb250Lm5l/dC9tZWRpYS9zZW9f/bGFuZGluZ19maWxl/cy91c2hhLXF1YWRy/aWxhdGVyYWxzLTE4/LTE1OTU1ODU0MDUu/cG5n)

### RECAP

> Trees --> Binary Trees --> Binary Search Trees

Trees: No specific rules about how many children
![Tree Data Structure](https://miro.medium.com/v2/resize:fit:1354/format:webp/1*Z89j_NoDx9HkFcPHy3rPZg.png)

> Trees --> Binary Trees --> Binary Search Trees

Binary Tree: Special condition. Each node can **AT MOST** have two children.

![Binary Tree](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwHAl418VgcspARmq0ZHkCyRoQEE41_2r0qoNHmejpQ&usqp=CAU&ec=48665701)

What's the difference between the General Tree vs The Binary Tree?
![General Tree vs Binary tree](https://media.geeksforgeeks.org/wp-content/uploads/20200219144238/General-Tree-vs-Binary-Tree.png)

[Different Types of Binary Tree with colourful illustrations](https://towardsdatascience.com/5-types-of-binary-tree-with-cool-illustrations-9b335c430254)
![Ken Tree](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CMGFtehu01ZEBgzHG71sMg.png)

### Binary Search Trees:

1. At most have two chlidren per node. Basically, 0, 1, or 2 children.
2. Sorted in a particular way. Sorted data that can be **compared** ex. Strings, Numbers,
3. All numbers less than root are the to left.
4. All numbers greater than the root are to the right.

![Binary Search Tree](https://static.javatpoint.com/ds/images/binary-search-tree11.png)

### How BST(S) Work

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

[Binary Search Trees](https://visualgo.net/en/bst)

Wait, so what's the difference between a **`binary tree`** and a **`binary search tree`**?

## POP QUIZ!

![Imgur](https://i.imgur.com/ZSyp1SE.png)

![Imgur](https://i.imgur.com/S3egpik.png)

![Imgur](https://i.imgur.com/MIt0XCp.png)

<!-- [Nice Starting Point](https://dev.to/code_regina/binary-search-trees-5029) -->

<!-- ![Types of Trees](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CMGFtehu01ZEBgzHG71sMg.png) -->

# Searching a Binary Tree

Wait, so why do we use Binary Search Trees?

Well, it makes it really fast and easy to **LOOK THINGS UP**

It makes it easy to **insert** things as well.

[Visualgo](https://visualgo.net/en/bst)

Cutting search in half every time.

### Binary Search Tree Class

```js
class BinarySearchTree {
  constructor() {
    this.root = null
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

//          10
//        7    15
//         9

var tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

// Okay. We know where we're going with this. We're basically going to write an insert method next... 😃
```

### BST INSERT

![Imgur](https://i.imgur.com/OHuLnv4.png)

[Show Visualgo Insertion](https://visualgo.net/en/bst)

### PSEUDOCODE for INSERTING into BST

> Inserting a Node:
> Steps - Iteratively or Recursively

- Create a new node
- Starting at the root
  - Check if there is a root. If not, the root now becomes the new node.
  - IF there is a root, check if the value of the new node is greater than or less than the value of the root
  - IF it is greater:
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat the steps
      - If there is not, add that node as the right property
  - If it is less:
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat the steps
      - If there is not, add that node as the left property

RETURN entire tree at the end of the method??? I like to. It's up to you. You do you.

### BST INSERT SOLUTION

```js
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
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      // There is a root
      // The process involves looping...
      let current = this.root
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            // Verify that left side works
            current = current.left
          }
        } else if (value > current.value) {
          // Handling the right side
          if (current.right === null) {
            // if it is, we found our spot
            current.right = newNode
            return this
          } else {
            // keep looking
            current = current.right
          }
        }
      }
    }
  }
}

//          10
//        5    13
//      2  7  11 16

// const tree = new BinarySearchTree()
// tree.insert(10)
// tree.insert(5)
// tree.insert(2)

// TEST #2
const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

// What is the expected behavior of the following:
tree.insert(3)

// How does our binary search tree handle duplicates? 🤨🧐
// What is the expected behavior of the following:
tree.insert(10)
```

How we handle duplicates is decided upon what specific task we're doing. Some people ignore duplicates - that's what we'll do.

We can add a check in our BST:

```js
if (value === current.value) return false // or undefined
```

We can also add a frequency or count to each node:

```js
//          10(2)
//        5    13
//      2  7  11 16(4)
```

Quick and dirty fix to our `BST`

```js
while (true) {
  if (value === current.value) return undefined
  ...
}
```

Lastly, we can simplify this logic:
The below solution is less explicit, but also less verbose.

```js
insert(value) {
  var newNode = new Node(value)
  if (this.root === null) {
    this.root = newNode
    return this
  }
  let current = this.root
  while (true) {
    if (value === current.value) return undefined
    if (value < current.value) {
      if (current.left === null) {
        current.left = newNode
        return this
      }
      current = current.left
    } else {
      if (current.right === null) {
        current.right = newNode
        return this
      }
      current = current.right
    }
  }
}
```

## Finding a Node in a BST
Steps - Iteratively or Recursively

- Starting at the root
  - Check if there is a root. If not - we're done searching! 😬
  - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done! 😄
  - If not, check to see if the value is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching!
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching! 😀

Visual representation of `FIND in a BST`
[BST Visualgo](https://visualgo.net/en/bst)

## BST FIND SOLUTION

```js
find(value) {
  if (this.root === null) return false
}

const t = new BinarySearchTree()
t.find(-88) // false
```

Looks good. We're getting somewhere

```js
find(value) {
  if (this.root === null) return false
  let current = this.root
  while (current) {
    if (value < current.value)  {
      current = current.left
    } else if (value > current.value) {
      current = current.right
    } else {
      // only other option is === to
      return true
    }
  }
  return false
}

//          10
//        5    13
//      2  7  11 16

```

Okay. We're done. Here's the complete code:

```js
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
    var newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  find(value) {
    if (this.root === null) return false
    let current = this.root
    while (current) {
      if (value < current.value)  {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        // only other option is === to
        return true
      }
    }
    return false
  }
}


const tree = new BinarySearchTree()

//          10
//        5    13
//      2  7  11 16

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

tree.find(10)
tree.find(11)
tree.find(16)
tree.find(2)
tree.find(7)
tree.find(-100)
```

## Big O of Binary Search Trees

Big O of BST

Best and Average Case: NOT GUARANTEED!

- [x] Insertion - O(log n)
- [x] Searching - O(log n)

O(log n) is GOOD. 

![Imgur](https://i.imgur.com/lVufUqG.png)

This only works in a BINARY SEARCH TREE.

![Log base 2](https://people.richland.edu/james/lecture/m116/logs/log2.gif)


- [x] 2x number of nodes: 1 extra step
- [x] 4x number of nodes: 2 extra step
- [x] 8x number of nodes: 3 extra step

![Big O Complexity Chart](https://cdn.hackr.io/uploads/posts/attachments/1650357901lkH1xKTytK.webp)

Why is O(log n) time complexity 💩NOT GUARANTEED💩? (Think about the `Ken` tree with a million items/nodes)
![Degenerate Tree](https://ianfinlayson.net/class/cpsc340/notes/images/degenerate.png)

If you really needed this to be stored in a binary tree, why not pick a different ROOT? That would make your searching and insertion much faster. 