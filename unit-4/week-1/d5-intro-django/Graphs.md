# Graphs

- Graphs are used in any social network.
- Any time we're modeling users.
- Recommendation engines (Netflix's next KDRAMA)
- Advertisers target you off something

## Objectives

- Explain what a graph is
- Compare and contrast different types of graphs and their use cases in the real world
- Implement a graph using an adjacency list
- Traverse through a graph using BFS and DFS

## What Are Graphs?

[Wiki Graph page (abstract data type)](<https://en.wikipedia.org/wiki/Graph_(abstract_data_type)>)

Graphs are a type of data structure that represent a collection of objects, called vertices, and the connections between them, called edges. Think of vertices as points, and edges as lines connecting them.

An **analogy** for a graph could be a map of a city. The map shows different locations in the city as vertices, and the roads connecting them as edges. Each location (vertex) may have multiple roads (edges) leading to other locations, and some locations may not have any roads connecting to them.

Similarly, in a graph data structure, each vertex can be connected to multiple other vertices via edges, and some vertices may not have any edges connected to them. Graphs can be used to represent a wide range of real-world problems, such as social networks, transportation systems, and communication network

**TLDR; nodes + connections**

![Imgur](https://i.imgur.com/djtH364.png)

![Imgur](https://i.imgur.com/RIJuxhr.png)

![Imgur](https://i.imgur.com/WI7M6j4.png)

![Imgur](https://i.imgur.com/rHpdmPZ.png)

- [x] Linked Lists
- [x] Trees
- [x] Graphs

## Uses For Graphs:

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- EVERYWHERE

![Graph Social Network](https://ndres.me/images/facebook-graph.jpg)

**[Observe The Friend Paradox in Facebook Data Using Python
Do Your Friends Have More Friends Than You, On Average?](https://towardsdatascience.com/observe-the-friend-paradox-in-facebook-data-using-python-314c23fd49e4)**

**[Graph Modeling Relationships Between Musical Genres](https://musicmap.info/)**

Wait... So what are graphs again? TLDR: Nodes + Connections. Very free form.

## Essential Graph Terms:

- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distanced between vertices

- [x] There's **ONLY** one way to get there. TREE GRAPH
- [x] What's the vertex? What's the edge?
      ![Tree Graph](https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tree_graph.svg/1200px-Tree_graph.svg.png)

## Undirected Graph:

![Undirected Graph](https://www.researchgate.net/profile/P-Subbaraj/publication/289036860/figure/fig1/AS:350308980019202@1460531577653/A-simple-undirected-graph-with-20-nodes-and-48-edges.png)

- Edges have two way connections
- Facebook friends social network where I we can both see each other's profiles 🤪

## Directed Graph:

- F is like the dead end.
- Instagraph or Twitter social network (Blue check mark people vs BTY)🤪
- Edge could be bidirectional or unidirectional. 

![Directed Graph](https://imgs.search.brave.com/LwwxF6uqFhQp-GSQPYQv3CozlVGlsqUibLD-_llj_Vo/rs:fit:450:280:1/g:ce/aHR0cHM6Ly9jb21w/dXRlcnNjaWVuY2V3/aWtpLm9yZy9pbWFn/ZXMvYy9jNi9EaXJl/Y3RlZF9ncmFwaC5w/bmc)

## Weighted Graph

![WEIGHTED GRAPH](https://www.gabormelli.com/RKB/images/4/45/Edge_Weighted_Graph.png)


So we have undirected, directed, weighted, and unweighted graph.


## How do we store our graph data?
Social Graph to Spot Spammer:
  - [x] How do we store this data?
  - [x] What we really need are the vertices (nodes) and a way to store the connections (Linked List .next BST .left .right ).

Social Graph to Spot Spammer:
![Social Graph to Spot Spammer](https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2013/04/07061041/graph.jpg)

## Different Strategies for Storing DATA in Graphs: *Adjacency Matrix*
- A matrix is a 2D structure usually implemented with nested arrays.

| -   | A   | B   | C   | D   | E   | F   |
| --- | --- | --- | --- | --- | --- | --- |
| A   | 0   | 1   | 0   | 0   | 0   | 1   |
| B   | 1   | 0   | 1   | 0   | 0   | 0   |
| C   | 0   | 1   | 0   | 1   | 0   | 0   |
| D   | 0   | 0   | 1   | 0   | 1   | 0   |
| E   | 0   | 0   | 0   | 1   | 0   | 1   |
| F   | 1   | 0   | 0   | 0   | 1   | 0   |

![Imgur](https://i.imgur.com/Qzk44GG.png)

Wikipedia Page: Adjacency Matrix:
[Adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix)

## Different Strategies for Storing DATA in Graphs: *Adjacency List*

![Imgur](https://i.imgur.com/VwLOPDd.png)


```python
lst = [
  [1, 5], # 0
  [0, 2], # 1
  [1, 3], # 2
  [2, 4], # 3
  [3, 5], # 4
  [4, 0], # 5
]
```

So wait. What if our nodes aren't numeric? What if they're string?

![Imgur](https://i.imgur.com/Z89pjSs.png)

```python
# Hash Table / Hash Map

lst = {
  "A" : ["B", "F"],
  "B" : ["A", "C"],
  "C" : ["B", "D"],
  "D" : ["C", "E"],
  "E" : ["D", "F"],
  "F" : ["E", "A"],
}
```

## Adjacency Matrix VS Adjacency List BIG O

*Differences & Big O*

|V| - number of vertices
|E| - number of edges

| Operation     | Adjacency List | Adjacency Matrix |
| ------------- | -------------- | ---------------- |
| Add Vertex    | O(1)           | `O(              | V^2 | )`   |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | `O(            | V                | +   | E    | )` | `O(  | V^2 | )` |
| Remove Edge   | `O(            | E                | )`  | O(1) |
| Query         | `O(            | V                | +   | E    | )` | O(1) |
| Storage       | `O(            | V                | +   | E    | )` | `O(  | V^2 | )` |


If you don't have a lot of connections or edges, maybe don't use an adjacency matrix

> Sparse data is a variable in which the cells do not contain actual data within data analysis. 
> Sparse data is empty or has a zero value.

| -    | Adjacency List 😬                         | vs  | Adjacency Matrix                      |
| ---- | ---------------------------------------- | --- | ------------------------------------- |
| Pros | Can take up less space (in sparse graph) |     | Faster to lookup specific edge        |
| Pros | Faster to iterate over all edges         |     |                                       |
|      |                                          |     |                                       |
|      |                                          |     |                                       |
| Cons | Can be slower to lookup specific edge    |     | Takes up more space (in sparse graph) |
| Cons |                                          |     | Slower to iterate over all edges      |


- [x] If all you want is to know the edges, it's easier to do with an adjacency list. If we go to a matrix, we're going to have to iterate all the other data stored inside (empty spaces). 
- [x] To look up an edge (query an edge), an adjacency matrix is VERY FAST! 
- [x] The Big O here doesn't matter THAT MUCH right now. Just know that, **IN GENERAL**, a *matrix* takes up more space (with a sparse data set), slower to iterate over all edges, but faster to lookup specific edge
- [x] However, some people think the implementation of a matrix could be a little easier. 
- [x] An *adjacency list* takes up less space, faster to iterate over edges, but slower to query an edge.

### What will BTY (Better Than Yesterday) use?

🤪 An Adjacency List 😬

Porque (why)? ❓🤨

Because most of the data in the **real world** tends to lend itself to sparser and/or larger graphs.

> Social Graph to Spot Spammers:
> How do we want to store this data? An adjacency list or an adjacency matrix?

![Social Graph to Spot Spammer](https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2013/04/07061041/graph.jpg)

A matrix has the POSSIBILITY to store more connections. IF our data COULD BE FULL (jam packed), go with Matrix. But otherwise, I'd default to Adjacency List.


# Let's start to implement our code

Objectives: 

- [x] Add Vertex Intro.
- [x] Add Vertex Solution
- [x] Add Edge Intro
- [x] Add Edge Solution
- [x] Remove Edge Intro
- [x] Remove Edge Solution
- [x] Remove Vertex Intro
- [x] Remove Vertex Solution

[GA Graphs Exercise](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/computer-science/11-graphs/exercises/Graph.js)

## Add Vertex Intro;

*Our Graph Class:*
```js
// Undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
}
```

*Adding a vertex PSEUDOCODE:*
- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.
- If we have a graph called "`g`", we would do `g.addVertex("Tokyo")` resulting in the following:
```js
{
  "Tokyo": []
}
```



<details>
<summary>
<b>Add Vertex Solution</b>
</summary>
<hr>

**A function is a block of code that can be called with inputs and optionally returns an output.**

```js
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }
}
```
<hr>

- What about duplicates? We're not going to write a bunch of error handlers so we can keep it simple. 
- Obviously in the real world, we'll gonna want to add some protection in there: throw an error saying there's already a vertex in there or say we ignored it. But our code is going to override it and set it to empty.

<hr>

**handling duplicates**

```js
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
```
<hr>

**TESTING with creating a new graph**
<hr>

```js
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

// Go step by step here. DON'T COPY PASTE!
const g = new Graph()
g.addVertex("Tokyo")
console.log(g)
g.addVertex("Los Angeles")
console.log(g)
// Checking if duplicate protector works.
g.addVertex["Tokyo"]
console.log(g)
// DO NOT INTERACT WITH ADJACENCY LIST THIS WAY! DO NOT!
g.adjacencyList["Tokyo"].push("Seoul")
console.log(g)
```
<hr>
</details>


## Add Edge Intro;

- Draw connections between two vertices.
- If we're adding cities in (Ex. Dallas, Aspen etc...) **American Airlines** Fluff, an edge will represent a flight that AA offers.
- This function should accept two vertices, we can call them `vertex1` and `vertex2`

```js
addEdge(vertex1, vertex2) {

}
```

<b>Creating departure and returning flights below</b>
- The function should find in the adjacency list the key of `vertex1` and push `vertex2` to the array
- The function should find in the adjacency list the key of `vertex2` and push `vertex1` to the array
- Don't worry about handling errors/invalid vertices

Example of what we're trying to do:
```js
{
  "Tokyo": [],
  "Dallas": [],
  "Aspen": []
}


g.addEdge("Tokyo", "Dallas")
// UNDIRECTED GRAPH:
// g.addEdge("Dallas", "Tokyo")

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo"],
  "Aspen": []
}


g.addEdge("Dallas", "Aspen")
// UNDIRECTED GRAPH:
// g.addEdge("Aspen", "Dallas")

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}

```

## Add Edge Solution;

<details>
<summary>
<b>Add Edge Solution</b>
</summary>
<hr>

**Add Edge Solution**

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

// Testing our graph
const g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
console.log(g)
g.addEdge("Dallas", "Tokyo")
console.log(g)
```

If we wanted to make this a directed graph, what should we do? 

:::HINT::: addEdge for one direction, not both. v1 --> v2
<hr>
</details>

## Remove Edge Intro
> Let's say we want to remove an edge. From `Dallas` to `Tokyo`
> This actually means that we're removing **TWO** pieces of data,
#### Removing an edge
- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

Example: 
```js
 {
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
 }

g.removeEdge("Tokyo", "Dallas")
```
We'll need to remove Dallas from the Tokyo list AND Tokyo from the Dallas list

Keep in mind that we need to maintain `Aspen` in our `Dallas` list.

Basically, reassigning the Dallas list to be equal to `"Dallas": ["Tokyo", "Aspen"]` minus `"Tokyo"`

Our End Result
```js
{
  "Tokyo": [],
  "Dallas": ["Aspen"],
  "Aspen": ["Dallas"]
}
```

## Remove Edge Solution

<details>
<summary>
<b>Remove Edge Solution</b>
</summary>
<hr>

**Remove Edge Solution**

```js
class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
}

// Testing our graph
const g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
console.log(g)
g.removeEdge("Tokyo", "Dallas")
console.log(g)

// I GET IT. What about error handling?
// g.removeEdge("Los Angeles", "San Francisco")
```

If we wanted to make this a directed graph, what should we do? 

:::HINT::: addEdge for one direction, not both. v1 --> v2
<hr>
</details>


## Remove Vertex Intro

- The function should accept a vertex to remove (a single argument)
- The function should loop as long as there are any other vertices in the adjacency list for that vertex. Basically, if we have "Taipei" in our adjacency list, and there are 10 edges of "Taipei" from lists of other cities, we need to loop through that and remove each connection. It's not enough just to DELETE Taipei from the list. We also need to remove all of the edges. Otherwise, we're left with these broken edges.
- Inside of the loop, call our **removeEdge** function with the vertex we are removing and any values in the adjacency list for that vertex
- Delete the key in the adjacency list for that vertex

Example: 

```js
{
  "Tokyo": ["Dallas", "Hong Kong"],
  "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
  "Aspen": ["Dallas"],
  "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
  "Los Angeles": ["Hong Kong","Dallas"],
}

g.removeVertex("Hong Kong")


// If we only deleted the Key, we'd still have Tokyo to Hong Kong.🫤
{
  "Tokyo": ["Dallas", "Hong Kong"],
  "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
  "Aspen": ["Dallas"],
  // "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
  "Los Angeles": ["Hong Kong","Dallas"],
}

```

Note: Usually, you we just set Hong Kong to an empty list. But we will delete it.
```js
"Hong Kong" : []
```

End Result:
```js
// All traces of Hong Kong GONE
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen", "Los Angeles"],
  "Aspen": ["Dallas"],
  "Los Angeles": ["Dallas"],
}
```

## Remove Vertex Solution

<details>
<summary>
<b>Remove Vertex Solution</b>
</summary>
<hr>

**Remove Vertex Solution**

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
console.log(g)
g.removeVertex("Hong Kong")
console.log(g)

```

<hr>
</details>

So we can add some basic conditional logic for error handling...

