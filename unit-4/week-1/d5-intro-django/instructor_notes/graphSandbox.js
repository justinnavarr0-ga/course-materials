// Undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    // WRite code here
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    // Do something...
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      console.log("adjacencyVertex from the removeVertex method:::", adjacentVertex)
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
}


const g = new Graph()
// console.log(g)
g.addVertex("Tokyo")
g.addVertex("Hong Kong")
g.addVertex("Los Angeles")
// console.log(g) // TOKYO

// g.addVertex("Los Angeles")
g.addVertex("Dallas")
g.addVertex("Aspen")
// console.log(g)

// console.log(g)
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
g.addEdge("Tokyo", "Hong Kong")
g.addEdge("Hong Kong", "Los Angeles")
g.addEdge("Dallas", "Hong Kong")
g.addEdge("Dallas", "Los Angeles")

console.log(g)

// BTYAdjacencyList = {
//   adjacencyList: {
//     // Tokyo: ['Dallas'],
//     Tokyo: [],
//     Dallas: [], Aspen: []
//   }
// }


// Removing Edge:
// g.removeEdge("Tokyo", "Dallas")

g.removeVertex("Hong Kong")
console.log(g)


const flights = {
  Tokyo: ['Dallas'],
  'Los Angeles': ['Dallas'],
  Dallas: ['Tokyo', 'Aspen', 'Los Angeles'],
  Aspen: ['Dallas']
}



/*
Write a function, hasPath, that takes in an object representing the adjacency
list of a directed acyclic graph and two nodes (src, dst). The function should
return a boolean indicating whether or not there exists a directed path
between the source and destination nodes.
*/

/*
HAS PATH?
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  const neighbors = graph[src];
  for (let neighbor of neighbors) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }
  return false;
};

const graph0 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph0, 'f', 'k')); // true

const graph1 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph1, 'f', 'j')); // false

const graph2 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph2, 'i', 'h')); // true

const graph3 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],
};

console.log(hasPath(graph3, 'v', 'w')); // true

const graph4 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],
};

console.log(hasPath(graph4, 'v', 'z')); // false

* /