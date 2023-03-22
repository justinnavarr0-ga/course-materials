require('dotenv').config();
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

// Save the promises (or call right in the array if feeling frisky)
const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});
// Promise.all will return a single promise that resolves
// only after all of the array's promises resolve
Promise.all([p1, p2])
  .then(function (results) {
    // results will be an array
    console.log(results);
    return Performer.create(data.performers);
  })
  .then(function (performers) {
    console.log(performers);
    return Movie.create(data.movies)
  })
  .then(function (movies) {
    console.log(movies)
  })
  // insert the following before the .then(process.exit)
  .then(function (movies) {
    return Promise.all([
      Performer.findOne({ name: 'Mark Hamill' }),
      Movie.findOne({ title: /Star Wars/ })
    ]);
  })
  .then(function (results) {
    // One day we'll destructure results like this:
    // const [mark, starWars] = results;
    const mark = results[0];
    const starWars = results[1];
    starWars.cast.push(mark._id);
    return starWars.save();
  })
  // Yes we can!
  .then(process.exit);



// // Create a Promise to fetch data from a server
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => resolve(data))
//       .catch(error => reject(error));
//   });
// };

// // Use the Promise to fetch the data and handle the result
// fetchData()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// Create a Promise to wait for a timeout
// const wait = (duration) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Waited for ${duration}ms`);
//     }, duration);
//   });
// };

// // Use the Promise to wait for 1 second and handle the result
// wait(3000).then(result => console.log("this is the result", result));

// const promiseExample = new Promise((resolve, reject) => {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   if (randomNum <= 5) {
//     resolve(randomNum);
//   } else {
//     reject(`Random number ${randomNum} is greater than 5`);
//   }
// });

// promiseExample
//   .then((result) => {
//     console.log(`First then() method: ${result}`);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(`Second then() method: ${result}`);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(`Third then() method: ${result}`);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error}`);
//   });

// const promiseExample = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 3000); // 3000 milleseconds aka 3 seconds
// });

// promiseExample
//   .then((result) => {
//     console.log(`First then() method: ${result}`);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(`Second then() method: ${result}`);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(`Third then() method: ${result}`);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error}`);
//   });

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject('Something went wrong!');
//   }, 2000);
// });

// p.then(function (result) {
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });

// function asyncAdd(a, b, delay) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(a + b);
//     }, delay);
//   });
// }

// // Break this function down in detail because this is the last chance
// // for these examples. 
// asyncAdd(5, 10, 2000)
//   .then(function (sum) {
//     console.log(sum);
//     return asyncAdd(sum, 100, 3000);
//   })
//   .then(function (sum) {
//     console.log(sum);
//     return asyncAdd(sum, 1000, 4000);
//   })
//   .then(function (sum) {
//     console.log(sum);
//   });
