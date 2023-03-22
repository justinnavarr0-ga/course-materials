# Javascript Promises

# 1. Setup

Seeding a database is the process of initializing the database with data. 

Hypothetical `crud-helper.js` module.
```js
// require the crud-helper.js module
const crudHelper = require('./crud-helper');

// create a router instance
const router = express.Router();

// define a route that handles GET requests to retrieve all items in a collection
router.get('/', crudHelper.getAll);

// define a route that handles POST requests to create a new item in the collection
router.post('/', crudHelper.create);

// define a route that handles GET requests to retrieve a specific item by ID
router.get('/:id', crudHelper.getById);

// define a route that handles PUT requests to update an existing item by ID
router.put('/:id', crudHelper.updateById);

// define a route that handles DELETE requests to delete an existing item by ID
router.delete('/:id', crudHelper.deleteById);

// export the router instance
module.exports = router;
```

Get into your `mongoose-movies` directory
```console
cd mongoose-movies
touch seed.js
```

## 1.5 What is a Promise?

In JavaScript, a Promise is an object that represents a value that may not be available yet, but will be at some point in the future. It provides a way to write code that can handle both the success and failure of an operation without blocking the execution of the code.

A simple analogy for a Promise might be a package delivery. When you order a package online, you get a tracking number that represents the eventual arrival of the package. You don't know exactly when the package will arrive, but you can use the tracking number to check on its status and get notified when it's delivered. Similarly, in JavaScript, a Promise represents the eventual completion or failure of an operation, and you can use methods like `.then()` and `.catch()` to handle the result of the operation when it becomes available.

```js
const promise = new Promise((resolve, reject) => {
  // perform some operation
  if (operationWasSuccessful) {
    resolve(result);
  } else {
    reject(error);
  }
});

promise.then(result => {
  // handle successful operation
}).catch(error => {
  // handle error
});
```

## 2. The Use Case of Promises

❓ Take a minute to answer the following review questions:


*👉 Cool, so we use a promise to run code after the completion of an asynchronous operation as an alternative to callback functions.*

### Example 1: Fetching Data From A Server

```js
// Create a Promise to fetch data from a server
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

// Use the Promise to fetch the data and handle the result
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Example 2: Waiting for a timeout

```js
// Create a Promise to wait for a timeout
const wait = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Waited for ${duration}ms`);
    }, duration);
  });
};

// Use the Promise to wait for 1 second and handle the result
wait(1000)
  .then(result => console.log(result));
```

## 3. What's a Promise? 

#anObject? #Jesus?

```js
// Use Promises to find all documents in the "movies" collection
Movie.find({})
// Mongoose queries will return a "thenable" that we can work with (just like promises) if we don't provide a callback function:
// According to Mongoose docs, a "thenable" is not a true Promise, but it behaves like one. 
  .then(movies => {
    console.log(movies);
  })
  .catch(error => {
    console.error(error);
  });
```

It's also possible to save the promise object in a variable like this:
```js
// Use Promises to find all documents in the "movies" collection
const moviesPromise = Movie.find({});

moviesPromise.then(function(movies) {
  console.log(movies);
}).catch(function(error) {
  console.error(error);
});
```

👉 A promise represents the eventual completion, or failure, of the asynchronous operation performed by the function/method that returned the promise.

Let's learn about promises in general by creating our own...

## 4. Making Promises

Inside `seed.js`

```js
// seed.js
const p = new Promise(function(resolve, reject) {
  console.log(resolve, reject);
});

console.log(p)

// [Function (anonymous)] [Function (anonymous)]

// Promise { <pending> }

// So, the `initial state` of the `promise` is called `PENDING`.
```

**Observations:**

- The callback function (known as the executor) is immediately called by the Promise class's constructor method.
- When the callback is called, it will be passed two functions as args for the `resolve` and `reject` parameters.
- The created promise object has an initial state of `<pending>`.

*A promise is always in one of three states:*

- `pending`: Initial state, neither fulfilled nor rejected.
- `fulfilled`: The async operation completed successfully. This state is also commonly referred to as "resolved".
- `rejected`: The async operation failed.

*Once a promise has been settled, i.e., it's no longer pending, its state will never change again.*

## 5 Resolving Promises

How does a promise become `fulfilled`? By calling the `resolve` function.
```js
const p = new Promise(function(resolve, reject) {
  let value = 42;
  resolve(value);
});
```

How do we get the value of a resolved promise? By calling the promise's `.then()` method.
```js
const p = new Promise(function(resolve, reject) {
  const value = 42;
  resolve(value);
});

p.then(function(result) {
  console.log(result);
});
```

If need be, the .then() method can be called multiple times and will always return the same resolved value/thing. The following is an example:
```js
const promiseExample = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  if (randomNum <= 5) {
    resolve(randomNum);
  } else {
    reject(`Random number ${randomNum} is greater than 5`);
  }
});

promiseExample
  .then((result) => {
    console.log(`First then() method: ${result}`);
    return result * 2;
  })
  .then((result) => {
    console.log(`Second then() method: ${result}`);
    return result * 3;
  })
  .then((result) => {
    console.log(`Third then() method: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
```

### Let's Make the Promise Asynchronous

`Asynchronous` means doing things at the same time, but not exactly at the same time.

Think about when you're watching Netflix while your significant other is cooking dinner. You're both doing things at the same time, but you're not doing them together. Your significant other is doing their thing in the kitchen, and you're doing watching Netflix on the couch.

So, when we say that some code is `asynchronous`, it means that it can keep running while it's waiting for something else to finish, just like you can keep watching Netflix while someone else is cooking dinner.

Set timeout Example...
```js
const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

promiseExample
  .then((result) => {
    console.log(`First then() method: ${result}`);
    return result * 2;
  })
  .then((result) => {
    console.log(`Second then() method: ${result}`);
    return result * 3;
  })
  .then((result) => {
    console.log(`Third then() method: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
```

## 6 Rejecting Promises

```js
// seed.js
const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Something went wrong!');
  }, 2000);
});
```

```console
node:internal/process/promises:289
            triggerUncaughtException(err, true /* fromPromise */);
            ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Something went wrong!".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```

Reading the error more closely reveals that we need a .catch() to handle the promise rejection...

```js
// seed.js
const p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Something went wrong!');
  }, 2000);
});

p.then(function(result) {
  console.log(result);
}).catch(function(err) {
  console.log(err);
});
```

#fixed

![In Summary](https://i.imgur.com/B0nzUpC.png)

### ❓ Promises - Review Questions (1 min)

(1) In JS, asynchronous functions/methods are designed to work with callbacks and/or _________.

(2) What three states can a promise be in?

(3) What method do we call on a promise to obtain its resolved value?

## 7. Chaining Promises

*Pyramid of Doom*
```js
function loadUpThatApplication() {
  request("/api/getCustomer", function(response) {
    var customerId = response.customer.id;
    request("/api/customer/accounts/"+customerId, function(response2) {
      request("http://facebook/pics/"+response2.faceBookUserName, function(response3) {
        showTheUserThatBeautifulUI(response3, function() {
          byeByeSpinner()
        })
      })
    })
  })
}
```

Refactored with Promises
```js
function loadUpThatApplication() {
  request("/api/getCustomer")
    .then((response) => {
      const customerId = response.customer.id;
      return request("/api/customer/accounts/" + customerId);
    })
    .then((response2) => {
      return request("http://facebook/pics/" + response2.faceBookUserName);
    })
    .then((response3) => {
      return new Promise((resolve) => {
        showTheUserThatBeautifulUI(response3, () => {
          byeByeSpinner();
          resolve();
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
```

👉 Note that although we are returning primitive values from the callback functions, the .then() method always returns a promise that resolves to the value we returned.

Let's see what happens if we return promises instead of primitives...

First we need a cool asynchronous function that returns a promise:

```js
function asyncAdd(a, b, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(a + b);
    }, delay);
  });
}

// Break this function down in detail because this is the last chance
// for these examples. 
asyncAdd(5, 10, 2000)
  .then(function(sum) {
    console.log(sum);
    return asyncAdd(sum, 100, 3000);
  })
  .then(function(sum) {
    console.log(sum);
    return asyncAdd(sum, 1000, 4000);
  })
  .then(function(sum) {
    console.log(sum);
  });
```

- [x] More commonly though, we'll be using/consuming promises returned by libraries such as Mongoose...

## 8. Example - Seeding a Database

**Seeding** a database is the process of populating a database with some initial data.

**Seeding** a database is usually a one time deal. 

❓ What are the two use cases for seeding a database? (1 minute)

- [x] FYI. We usually would not seed data that will be generated by our users OVER TIME (movies, performers, ratings etc...) but that's what we're going to be doing here.

```console
cd mongoose-movies
```

Inside `seed.js`
```js
// seed.js (a utility to seed/initialize the database)

require('dotenv').config();
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');
```

We will now export two different arrays. An array of `Movie` documents and an array of `Performer` documents.

```console
mongoose-movies: touch data.js
```

Copy this and paste it in data.js
```js
// data.js

exports.performers = [
  {name: 'Natalie Portman', born: '06-09-1981'},
  {name: 'Kevin Bacon', born: '07-08-1958'},
  {name: 'Tom Cruise', born: '07-03-1962'},
  {name: 'Brad Pitt', born: '12-18-1963'},
  {name: 'Emma Watson', born: '04-15-1990'},
  {name: 'Carrie Fisher', born: '10-21-1956'},
  {name: 'Mark Hamill', born: '09-25-1951'},
  {name: 'Harrison Ford', born: '07-13-1942'},
  {name: 'Jodie Foster', born: '11-19-1962'},
  {name: 'Matthew McConaughey', born: '11-04-1969'},
  {name: 'James Woods', born: '04-18-1947'},
  {name: 'Anne Hathaway', born: '11-12-1982'},
  {name: 'Bill Murray', born: '09-21-1950'},
  {name: 'Chevy Chase', born: '10-08-1943'},
  {name: 'Rami Malek', born: '05-12-1981'}
];

exports.movies = [
  {title: 'Contact', releaseYear: 1997, mpaaRating: 'PG', nowShowing: false},
  {title: 'Star Wars - A New Hope', releaseYear: 1977, mpaaRating: 'PG', nowShowing: false,
    reviews: [{content: 'The one that started it all!', rating: 5}]
  },
  {title: 'Interstellar', releaseYear: 2014, mpaaRating: 'PG-13', nowShowing: true,
    reviews: [{content: 'A fantastic sci-fi mind blower!', rating: 5}]
  },
  {title: 'Caddyshack', releaseYear: 1980, mpaaRating: 'R', nowShowing: false,
    reviews: [{content: 'Low-budget senseless comedy', rating: 4}, {content: 'Should not be the classic it is.', rating: 2}]
  },
  {title: 'Bohemian Rhapsody', releaseYear: 2018, mpaaRating: 'PG-13', nowShowing: true}
];
```

When we seed data, it's common to clear out any existing data. 

Inside `seed.js`
```js
// seed.js
const data = require('./data')

// New Code Below

// Just a query object as an arg, no callback!
Movie.deleteMany({})
  .then(function(results) {
    // results will be whatever the promise
    // returned by the deleteMany method resolves to
    console.log('DelEtEd MoViES: ', results);
  })
  .then(function() {
    // process.exit() "cleanly" shuts down a Node program
    process.exit();
  });
```

```console
mongoose-movies: node seed.js
```

Run `node seed.js` twice. What do we see? 

### Deleting movies & performers in Sequence (Serially)

The following code will delete the performers after the movies are deleted and then exit the program:

Inside `seed.js`
```js
// seed.js
const data = require('./data')

// New Code Below

Movie.deleteMany({})
  .then(function(results) {
    console.log('Deleted movies: ', results);
    // Now let's delete the performers and return its "promise"
    return Performer.deleteMany({});
  })
  .then(function(results) {
    console.log('Deleted performers:', results);
  })
  .then(function() {
    // process.exit() "cleanly" shuts down a Node program
    process.exit();
  });
```

The code above first waits for the database to finish deleting the `movies` before it begins to delete the `performers`.

The above works fine, but it provides an opportunity to learn about a more performant approach...

### Performing Asynchronous Operations in Parallel

`Performer.deleteMany({})` and `Movies.delete({})` are mutually exclusive of each other. They don't depend on each other. You could do both **SIMULTANEOUSLY!**

```js
// seed.js
const data = require('./data')

// Save the promises (or call right in the array if feeling frisky)
const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});
// Promise.all will return a single promise that resolves
// only after all of the array's promises resolve
Promise.all([p1, p2])
  .then(function(results) {
    // results will be an array
    console.log(results);
  })
  // Yes we can!
  .then(process.exit);
```

- Wait, so what does `Promise.all()` accept as a parameter? 
- - What is `results` in the code above? 
- What is Promise.all() doing? 

`Promise.all()` will return a single promise that resolves only after all of the array's promises resolve

## Let's Seed Some Data!

```js
// seed.js
const data = require('./data')

Promise.all([p1, p2])
  .then(function(results) {
    console.log(results);
    return Performer.create(data.performers);
  })
  .then(function(performers) {
    console.log(performers);
  })
  .then(process.exit);
```

*👉 You Do - Seed the Movies (2 mins)*

```js
// seed.js
const data = require('./data')

Promise.all([p1, p2])
  .then(function(results) {
    console.log(results);
    return Performer.create(data.performers);
  })
  .then(function(performers) {
    console.log(performers);
    // New Code Below:
    return Movie.create(data.movies)
  }) // New code below:
  .then(function(movies) {
    console.log(movies);
  })
  .then(process.exit);
```

Go ahead and run `node seed.js` in the console again to seed the movies data.


### Associating `movies` & `performers` When Seeding

👀 Important: You should never refer to an actual _id `when seeding!` "Because the _ids change each time the seed module is executed."

Show anti-pattern of what not to do in a seed.

Although querying by _id in MongoDB is always more efficient as it's the primary indexed field, there are times when we don't have the _id available and need to query based on other properties of the documents. However, if we do have the _id, it's always recommended to search by it for better performance.

### Let's say we want to assign the performer, Mark Hamill, to Star Wars - A New Hope...

**insert the following before the .then(process.exit)**

```js
// seed.js

// insert the following before the .then(process.exit)
.then(function(movies) {
  return Promise.all([
    Performer.findOne({name: 'Mark Hamill'}),
    Movie.findOne({title: /Star Wars/})
  ]);
})
.then(function(results) {
  // One day we'll destructure results like this:
  // const [mark, starWars] = results;
  const mark = results[0];
  const starWars = results[1];
  starWars.cast.push(mark._id);
  return starWars.save();
})
.then(function(starWars) {
  console.log(starWars);
})
// Insert the above code before this next line
.then(process.exit);
```

Run `node seed.js` in the Terminal

Tangent Thought: Where do I come up with these style rules? Did I make them up out of thin air because I have strong opinions on this kind of stuff? 

[Airbnb JavaScript Style Guide() {](https://github.com/airbnb/javascript)
