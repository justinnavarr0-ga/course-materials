![Node JS Logo](https://i.imgur.com/hA8ZNev.png)

# Intro to Node

[Intro to Node Class Repo](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-2/week-1/d1-intro-full-stack/1.2-intro-to-node.md)


## 1. Setup

1. In Terminal, move into your code folder: 
```shell
cd ~/course-materials/unit-2/week-1/d1-???/student_notes
```
2. Make a new folder named first-node: `mkdir first-node`
3. Move into the new folder: `cd first-node`
4. Create a main.js file: `touch main.js`
5. Open the project/folder in VS Code: `code .`

## 2. What is Node.js?

Node.js is a free, open-source, cross-platform runtime environment for executing JavaScript code outside of a web browser.

Example??? In chrome console...
```js
const bty = 'Better Than Yesterday (but not better than tomorrow)!'
console.log(bty)
```

Run the above code in node.

**Node differs from JS primarily because:**

- [x] It doesn't have the browser's DOM or Web APIs.
- [x] Node has low-level networking and file system APIs that browser JS does not (for security reasons).


low level networking:

```js
// here's a simple example of how to use Node.js to create a TCP server:

// A module is "loaded" into a Node app using Node's require function
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    socket.write('Server received your message.');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

```

file system example:
```js
// node-file-system-test.js

// A module is "loaded" into a Node app using Node's require function
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
```

These packages are managed using the `npm` command installed with Node. Node's package ecosystem is the largest open source ecosystem in the world.

#### Node's REPL

Inside console, just type `node`

There you go. Knock yourself out with those examples.

#### Executing Node Programs

```shell
node main.js
```

#### ❓ Review Questions - What is Node.js?

- (1) Is Node.js a programming language?
- (2) Is `const el = document.getElementById('my-list');` a valid JavaScript statement in a Node app?

## 3. Why the Enthusiasm for Node.js?

- A basic example of an **Input/Output** workflow could be accessing data from a database, or making requests over a network, among many others.

- One of the primary goals of Node.js was to assist engineers in alleviating some of these **Input/Output** challenges.

- Javascript is synchronous and single-threaded.

- We want `Asynchronous: Not simultaneous; not concurrent in time;` and multi-threaded.

### Chef In The Kitchen Analogy:

Node.js is designed to handle many concurrent connections efficiently, and one way it achieves this is through its asynchronous and event-driven design.

Imagine you are a chef cooking multiple dishes in a kitchen. If you were cooking one dish at a time, you would have to wait until one dish was completely finished before starting the next one. This would be inefficient and time-consuming.

However, if you had multiple stovetops and burners, you could cook multiple dishes simultaneously. While one dish is cooking on one burner, you can chop vegetables for another dish on a different cutting board, and then switch back and forth between them as needed.

Similarly, in Node.js, instead of waiting for one input/output operation to complete before starting the next one, multiple input/output operations can be performed simultaneously. When a request comes in, Node.js doesn't block and wait for that request to finish processing before handling the next one. Instead, it can handle multiple requests at the same time, switching back and forth between them as needed.

This approach allows Node.js to efficiently handle many concurrent connections without wasting resources or causing unnecessary delays.

## The different between L1 and L2 cache
L1 and L2 are the first and second cache in the hierarchy of cache levels. L1 has a smaller memory capacity than L2. Also, L1 can be accessed faster than L2. L1 is usually in-built to the chip, while L2 is soldered on the motherboard very close to the chip.

## 5. Node Modules

![Modular Phone](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F46%2Ff9%2F61%2F46f9619c23cf08d855c8dbed7ff943a2.jpg&f=1&nofb=1&ipt=a3599c297ea10c1629e4798fae4ee450aa14742c0b5a9f7339dc68b1a7fcf78a&ipo=images)

- Modules in Node allow us to modularize and reuse code in a Node app.
- Modules can contain any number of JS functions and related data.

### Modules Built Into Node

- [x] What is the `http` module?

```
The Node.js http module is a built-in module that provides functionality to create and interact with HTTP servers and clients.

In simpler terms, it allows you to create web servers using Node.js. With the http module, you can create a web server that listens for incoming requests from clients (such as web browsers) and responds to those requests by sending back a response (such as a web page or data).

The http module provides methods to create an HTTP server, handle incoming requests, send responses, and manage various HTTP-related tasks such as handling headers, cookies, and authentication.

Overall, the http module is an essential part of building web applications with Node.js, as it enables you to create a server that can handle HTTP requests and responses.
```

- [x] What is the `fs` module?

```
The Node.js fs module is a built-in module that provides functionality to work with the file system in a Node.js application.

In simpler terms, it allows you to read, write, and manipulate files and directories using Node.js. With the fs module, you can read the contents of a file, write data to a file, create and delete directories, and perform other file-related operations.

The fs module provides methods to perform various file system tasks, such as reading and writing files, creating and deleting directories, checking file and directory existence, and managing file permissions.

Overall, the fs module is an essential part of building file-based applications with Node.js, as it enables you to work with the file system in a Node.js application.
```

#### Modules Built Into Node

1. Create a main.js file.
2. Inside main.js, paste the following code:
```js
// main.js

// A module is "loaded" into a Node app using Node's require function
const fs = require('fs');

fs.writeFile('./hello.txt', 'Hello!', function() {
  console.log('done creating file');
});
```
3. Inside terminal, run the main.js file with Node.js
```
node main.js
```

#### Our Own Node Modules

- In a Node application, every JavaScript file is a module!

- Node File Structure with models, routes, controllers, views, etc
![Node File Structure with models, routes, controllers, views, etc](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1308%2F1*ebN0NttjuIufkpgi8e2UgQ.png&f=1&nofb=1&ipt=a77aaaba78730dca7a27547d8f61873185708890c052d4b399202e507b12be07&ipo=images)

- A module is "loaded" into a Node app using Node's require function 

1. In console, `touch days-of-week.js`
2. Inside `days-of-week.js`, run the following code:
```js
console.log(module);
```
1. Let's discuss what's inside the module:
**The property on module that we're REALLY interested in though is exports...**

#### Exporting a Single Piece of Functionality

Inside `days-of-week.js`:
```js
// days-of-week.js

// Don't forget the 's' after exports!
module.exports = 'BTY - Better Than Yesterday is my 2nd favorite cohort of ALL-TIME!!!';
```

Inside `main.js`
```js
// main.js

const daysOfWeek = require('./days-of-week');

// It is convention to name the variable the same as, or similar to, the name of the module being required. Don't go naming this salmonSashimi or something wild.
// const salmonSashimi = require('./days-of-week');

console.log(daysOfWeek);  // -> BTY - Better Than Yesterday is my 2nd favorite cohort of ALL-TIME!!!
```

*When we require our app's own modules, we need to **ALWAYS** provide a relative path, i.e., starting with either a . or ..*

#### 👉 You Do: Update module.exports (1 min)

❓ What would be logged out?

#### Exporting Lot's of Functionality

- *Key Point: Again, require() returns whatever module.exports is assigned or holds!*

- *IMPORTANT: It is not possible to assign functionality to the exports shortcut variable because it will stop referencing module.exports.*

```js
// in-the-weeds.js

// Example of Nonsense above:
exports = {
  message: "Hello from BTY world",
};

console.log(exports === module.exports); // Output: false

// We are using the exports shortcut variable to export an object with a message property. However, we are assigning a new object to exports, which breaks the reference to module.exports.
```

To fix this issue, we can assign the object directly to module.exports, like this:

```js
// in-the-weeds.js
module.exports = {
  message: "Hello from BTY world",
};

console.log(exports === module.exports); // Output: true

// In 2023, the Output: false occurs. This may be due to a proper update. Basically, don't get creative with your exports here. Just get the job done right. Exporting modules is NOT the place to get creative.
```

- The code in the module **only runs the first time the module is required.** Allow me demo this for you.

```js
console.log("This code runs only once when the module is required");

module.exports = {
  message: "Hello from onceTest.js file!!!",
};
```

```js
// indexOnceTest.js
const btyOne = require("./onceTest.js");
const btyTwo = require("./onceTest.js");

console.log(btyOne.message); // Output: "Hello from onceTest.js file!!!"
console.log(btyTwo.message); // Output: ""Hello from onceTest.js file!!!"
```

### ❓ Review Questions - Modules

4. Why won't the following code work as intended?
```js
// add.js module
exports = function (x, y) { return x + y };
```

The issue with this code is that it's attempting to reassign the value of the exports object to a new function expression. This will not work as expected because exports is just a reference to the module's module.exports object, which is what actually gets exported.

## 6. Practice Exercises - Node Modules (15 mins)

#### 💪 Modules Practice - Single Piece of Functionality

```js
// random.js

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(random(1, 10));
module.exports = {
  random,
}
```

```js
// main.js
const random = require('./random');
console.log(random);

for (let i = 0; i < 10; i++) {
  console.log(random.random(100, 200) );
}
```

#### 💪 Modules Practice - Multiple Functionality

```js
// circle.js
function area(radius) {
  console.log('area function working!')
  const result = (radius * radius) * Math.PI
  return Number(result.toFixed(2));
}

function circumference(radius) {
  console.log('circumference function working');
  const result = radius * 2 * Math.PI
  return Number(result.toFixed(2))
}

module.exports = {
  area,
  circumference,
}
```

```js
// main.js
const circle = require('./circle');

console.log(circle.area(50))
console.log(circle.circumference(75))
```

#### Conclusion

- Notes Review...

## 7. Further Study

#### npm - Node Package Manager
- Create a `further-study` folder and demonstrate this.
- Demonstrate .gitignore and node_modules
[Hinge Clone](https://github.com/megan023/HingeClone)

#### Blocking vs. Non-Blocking Code

An analogy to describe the difference between blocking, non-blocking, synchronous, and asynchronous JavaScript can be imagined as a restaurant server taking orders from customers.

In a `blocking and synchronous scenario`, the server takes one customer's order, writes it down, goes to the kitchen, waits for the food to be prepared, serves the food to the customer, and repeats the process with the next customer. **The server cannot take any other orders until the current order is completed, and no customers can be served until the food is ready.** This process can be slow and inefficient, especially if there are many customers waiting to be served.

In a `non-blocking and synchronous scenario`, the server takes one customer's order, writes it down, and hands it off to the kitchen. **While the food is being prepared, the server can take other customers' orders and write them down. When the first order is ready, the server serves the food and repeats the process.** This allows the server to serve more customers in less time since they can take multiple orders simultaneously.

In an `asynchronous scenario`, the server takes one customer's order, writes it down, and hands it off to the kitchen. The server then goes to take other customers' orders without waiting for the food to be prepared. When the food is ready, the kitchen notifies the server, who then serves the food and repeats the process. This allows the server to take as many orders as possible without waiting for any food to be prepared.

*In JavaScript terms, `the blocking and non-blocking scenarios refer to how the code execution blocks or allows for other code to execute while it's waiting for an operation to complete. The synchronous and asynchronous scenarios refer to whether the code waits for an operation to complete or not before moving on to the next line of code.*

```

