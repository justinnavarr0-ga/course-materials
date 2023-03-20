# Intro to Mongoose

[Intro to Mongoose](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-2/week-1/d5-intro-mongoose/5.1-mongoose-intro.md)

## 1. Demo of the mongoose-movies Reference Application
`null`

## 2. Setup

**Deal with the clone link as soon as possible**

## 3. Intro to Mongoose

### What is Mongoose? 
Mongoose is an object modeling tool for Node.js that provides a schema-based solution to model application data. It is built on top of the MongoDB driver and simplifies interactions with MongoDB by **providing a more structured way to work with data.**

With Mongoose, you can define data models with a schema, which is a blueprint for how data should be stored in the database. Mongoose supports data validation, middleware, and query building, which makes it easier to work with data in a Node.js application.

Mongoose also provides a powerful set of features for managing relationships between data models, such as one-to-one, one-to-many, and many-to-many relationships. It also supports plugins, which allows developers to extend the functionality of Mongoose.

*In summary, Mongoose is a powerful ORM (Object-Relational Mapping) tool that makes working with MongoDB databases in Node.js applications easier and more organized.*

### Why Use Mongoose?
`null`

[Mongoose Docs](https://mongoosejs.com/)

```
"Mongoose provides a straight-forward, schema-based solution to model your application data..."_
```

- [x] Mongoose will automatically `populate` reference documents with the `populate` method. "#unicorn of Mongoose"

Advanced properties won't be learned until end of unit-2 and unit-4.

### The Big Picture:

*Mongoose Schema vs Mongoose Model*

In Mongoose, a `schema` is a blueprint or definition of the structure of documents within a MongoDB collection. It defines the fields and their types, validators, default values, and any other metadata that describe the structure of the documents.

On the other hand, a `model` in Mongoose is a compiled constructor function based on a schema. It is responsible for creating and querying MongoDB collections based on the schema definition. A model is a class that represents a collection in MongoDB, and it provides an interface for interacting with the database.

*In other words, a schema is a static representation of a document structure, whereas a model is a dynamic constructor function that provides methods for interacting with the database based on the schema.*

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
// module.exports = User
// module.exports = userSchema
```

To summarize, a `schema` defines the structure of documents within a MongoDB collection, and a `model` is a dynamic constructor function based on a schema that provides an interface for interacting with the database.


### Big Picture Example:

```js
// Module: models/cat.js
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String,
  breed: String
});

module.exports = mongoose.model('Cat', catSchema);
```

Explain how the controller function relates to the models. 

### ❓ Review Questions

1. we'll want to use it any time a project is CRUDing a MongoDB database.
2. `null`
3. `null`

### 4. Using a .env File to Protect "Secrets"

`.env` files should never be pushed to GitHub and thus need to be Git ignored.

```js
// `morgan` is a middleware used in Express to log HTTP requests details such as the request method, URL, status code, response time, and size. It is used for debugging and monitoring purposes.
var logger = require('morgan');

// It's very important to require dotenv before any other module
// that depends upon the properties added to process.env 
require('dotenv').config();
```

Nodemon does not watch for changes inside your `.env` file.

### 5. Including Mongoose in a Project

MAKE SURE YOU'RE IN THE MONGOOSE-MOVIES FOLDER!

`null`

### 6. Defining Schemas in Mongoose

`models/movie.js` Inside our models folder, our data resource file name is SINGULAR!!!. 

Mongoose vocabulary: A property may also be referred to as a "path" (IN DOCS).

```js
// models/movie.js


```

### 7. Built-in Types for Properties

`Buffer`: In JavaScript, a buffer object is a built-in object that represents a fixed-size raw binary data buffer. It is used to store and manipulate binary data, such as images, audio, video, and network packets, in memory.

`Mixed`: Think of Mixed as a free-form field where you can place anything that can be stored in BSON format.

`ObjectId`: You can think of this as a key in a relational database. This object appears to be a string at times but it is in fact an object.

`Map`: With a map schema type, you can store key-value pairs in a document. 

```js
const user = new User({
  name: 'Moon Dong-Eun',
  preferences: new Map([
    ['color', 'red'],
    ['language', 'Korean']
  ])
});
```

You can access and manipulate the key-value pairs in a map using methods such as `set()`, `get()`, `has()`, `delete()`, and `clear()`. 

```js
user.preferences.set('color', 'green');
console.log(user.preferences.get('color')); // prints 'green'
console.log(user.preferences.has('language')); // prints true
user.preferences.delete('language');
console.log(user.preferences.size); // prints 1
```

### 8. Compiling Schemas into Models

`Reminder: Models, not schemas, are used to perform CRUD on a MongoDB collection.`

```js
// Compile the schema into a model and export it.
module.exports = mongoose.model('Movie', movieSchema)
```

*By default, the collection in the database will be named as the pluralized version of the model in all lower-case.*

### 9. Use a Model to Create Data in a Node REPL

We can use a Mongoose Model in two ways to create documents in the collection:

- 1st way to do it

Creates a model, but doesn't save it yet. 
```js
const User = mongoose.model('User', userSchema);

const user = new User({ name: 'Alice', age: 30 });

user.save()
  .then(() => {
    console.log('User saved successfully');
  })
  .catch((err) => {
    console.error(err);
  });

```

- 2nd way to do it

Creates and simultaneously saves it. Can save multiple array of objects. 
```js
const User = mongoose.model('User', userSchema);

User.create({ name: 'Bob', age: 35 })
  .then((user) => {
    console.log('User created successfully:', user);
  })
  .catch((err) => {
    console.error(err);
  });

```

#### Creating documents in a Node REPL

```console
node
> require('dotenv').config()   // Necessary if connection string in a .env file
> require('./config/database')
> const Movie = require('./models/movie')
> Movie.create({
... title: 'Star Wars - A New Hope',
... releaseYear: 1977
... }).then((doc) => {
... console.log(doc);
... }).catch((err) => {
... console.error(err);
...})
```

`cast` gave me an array. `nowShowing` property not there. What's going on with this inconsistency?

### 10. Review the 5-Step Process to Add a Feature to a Web App

Once again, here is the process we repeat over and over when adding a feature, including CRUD functionality, in a web app:

1. Determine the proper route: let's use a GET request to '/products' to retrieve a list of products.

2. Add the UI: In our app's navigation menu or homepage, add a link to the new product list page:
```html
<a href="/products">Products</a>
```
FYI: We'll be using forms, *NOT* a link. 

3. Define the route: In our app's router module (e.g. `routes/index.js`), create a new route for the `'/products'` endpoint and map it to the `productController.getProducts` method:

```js
// routes/index.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// productController NOT created YET...
router.get('/products', productController.getProducts);

module.exports = router;
```

4. Add and code the controller action: In our app's controller module (e.g. `controllers/productController.js`), create a new `getProducts` method that retrieves the list of products from the database and renders the `products` view template:

```js
// controllers/productController.js
const Product = require('../models/product');

// Creating a new getProducts method that retrieves the list of products from our database.
exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('products', { title: 'Product List', products });
    })
    .catch(err => next(err));
};
```

5. Respond to the request: In the `getProducts` method, use `res.render` to render the `products` view template, passing in the list of products as data. In this example, we assume the `products` view template is a simple EJS template that iterates over the list of products and displays their titles:

```html
<!-- views/products.ejs -->
<h1><%= title %></h1>
<ul>
  <% products.forEach(product => { %>
    <li><%= product.title %></li>
  <% }); %>
</ul>
```

### 11. Implement the new Functionality

Creating Data is sometimes a `two-request process`...

Suppose you have a web app that allows users to create new blog posts. Creating a new post involves two requests:

1. The first request `displays a form` for the user to enter the post data.

2. The second request `submits the form data to the server`, where the post is created and saved to the database.

Mongoose with Express version:

## The GOOD STUFF! Here we go! 😬🧐

### *Step 1*

Display the `<form>` to enter a new movie:

In our [Routing Chart](https://gist.github.com/jim-clark/17908763db7bd3c403e6), I'm going to go with 

`GET	/posts/new`

Something like this one? 🧐

`GET	/movies/new`

### *Step 2*

```html
<!-- views/partials/headers -->
<body>
  <nav>
    <a href="movies/new">New Movie/Nueva Película</a>
  </nav>
```

### *Step 3*

- [x] Now we define the route

We're gonna rename `routes/users.js` to `routes/movies.js`

Does our app crash in the terminal? Hooray if the app crashes! #lifeIsBeautiful #blessed

Let's go into `server.js` and check out two lines of code that need to be updated. 

```js
// server.js
// var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies')
```

Next, we mounted these routers down below (in server.js) using app.use()

```js
app.use('/movies', moviesRouter)
```

Where next? How about .... `routes/movies.js`?

Let's delete what Express Generator gave us with that `router.get()`

```js
// routes/movies.js
var express = require('express')
var router = express.Router();
// Bringing in NON-Existent Controller!!!
var moviesCtrl = require('../controllers/movies');

// All routes start with '/movies'
// GET movies/new
// /movies is already taken care of with server.js
router.get('/new', moviesCtrl.new);

module.exports = router;
```

Our server is still not happy w/those red English words. Hmmm... 🧐

### *Step 4*

YOU DO CHALLENGE! 1 minute! Try not to look below if you can avoid it. 

1. Create the `controllers/movies.js` module.
- Inside our `mongoose-movies` folder, let's `mkdir controllers` to make a controllers folder. 
- `touch controllers/movies.js`
- Inside `controllers/movies.js`:
```js
// controllers/movies.js
module.exports = {
  new: newMovie
}

function newMovie(req, res) {
  res.send('New Movie about 방탄소년단 is FIRE!')
}
```

So now, when we go to `http://localhost:3000/movies/new` does something pop up?

Okay. Jokes aside, here we go with `res.render` like adults and not BTS fan boys.

```js
// controllers/movies.js
module.exports = {
  new: newMovie
}

function newMovie(req, res) {
  res.render('movies/new')
}
```

`movies` is the name of the template. We haven't created anything specific for movies yet, but we need a dedicated folder for each type of data resource. Wait, what is a data resource? 🧐🧐🧐

Reload the page. Do we all get the following error message? If so, hooray! Checkpoint reached.

```
Failed to lookup view "movies/new" in views directory
```

### *Step 5*

*Create the View*

Inside terminal...

```console
mkdir views/movies
touch views/movies/new.ejs
```

Copy and paste the following code into views/movies/new.ejs

```html
<!-- views/movies/new.ejs -->
<%- include('../partials/header') %>

<h2>Enter a New Movie</h2>
<!-- Proper route created for our CREATE ACTION -->
<!-- RESTful Routes to CRUD Mapping -->
<!-- https://gist.github.com/jim-clark/17908763db7bd3c403e6 -->
<form action="/movies" method="POST">
  <label>Title:
    <!-- This name attribute is assigned the same VALUE as our MODEL -->
    <!-- Check out ALL the OTHER name VALUES with the MODEL -->
    <input type="text" name="title">
  </label><br>
  <label>Release Year:
    <!-- With the name VALUE. USUALLY, if your data is not showing up (maybe one field), you have a mismatch here with the name VALUE  -->
    <input type="number" name="releaseYear">
  </label><br>
  <label>MPAA Rating
    <select name="mpaaRating">
      <option value="G">G</option>
      <option value="PG">PG</option>
      <option value="PG-13">PG-13</option>
      <option value="R">R</option>
    </select>
  </label><br>
  <label>Cast (separate actors with commas):
    <!-- For our array of actors, they're just gonna be string. -->
    <!-- Our server will parse through those strings and extract the actors names WITH REGEX! 😂-->
    <input type="text" name="cast">
  </label><br>
  <label>Now Showing:
    <input type="checkbox" name="nowShowing" checked>
  </label><br>
  <button type="submit">Add Movie</button>
</form>

<%- include('../partials/footer') %>
```

Does localhost:3000/ link `New Movie` a tag give us that cool form?

## 12. Implement the `create` Functionality

### *Step 1 - Determine the "proper" route (HTTP Method & Endpoint)*

Inside our routes/movies.js:
```js
// routes/movies.js

// GET /movies/new
router.get('/new', moviesCtrl.new)
// POST /movies
```

### *Step 2 - Add the UI*

Check out our `views/movies/new.ejs` form

The <form>STUFF HERE in views/movies/new.ejs</form> itself IS the UI. 

### *Step 3 - Define the route on the server*

```js
// routes/movies.js

// GET /movies/new
router.get('/new', moviesCtrl.new);
// POST /movies
router.post('/', moviesCtrl.create);
```

Is our server broken again? Congratulations! We did it! #failedSuccessfully

### *Step 4 - Add and code the controller action/method and be sure to export it*

Let's fix our server now.

Inside our controllers/movies.js, it's the same flow as `newMovie`.

```js
// controllers/movies.js
module.exports = {
  new: newMovie,
  create
}

function create(req, res) {

}
```

Yay! Server fixed! Sort of.

Before we can create our movie, we need ACCESS to our model.

```js
// controllers/movies.js

const Movie = require('../models/movie');

module.exports = {
  new: newMovie,
  create
}

function create(req, res) {
  // Lots of code here.
}
```

Time to copy and paste that monster piece of code for `create`:

```js
// controllers/movies.js

function create(req, res) {
  // Convert nowShowing's checkbox to a boolean (instead of 'on')
  // nowShowing might not even exist. That's fine. It'll just return undefined which is falsy.
  req.body.nowShowing = !!req.body.nowShowing;
  // We don't know how the user will type in the cast into our form.
  // Example of our troll: 
  // " Chadwick Boseman  , Johnny Depp,    Denzel Washington      , Kim Dami,   Zhou Dongyu    "

}
```

Let's break out our `💩troll💩` in Javascript with our Chrome Browser. 

```js
// google chrome console

let cast = " Chadwick Boseman  , Johnny Depp,    Denzel Washington      , Kim Dami,   Zhou Dongyu    "
cast.split(', ')
// We still gotta trim off any extra white space on both ends. 💩💩💩
cast = cast.trim()
cast.split(/\s*,\s*/)
// Finally. We took care of our troll. Back to our controllers/movie.js file
```

#overKill

```js
// google chrome console

let cast = ''
cast.split(/\s*,\s*/) // ['']
// We wanna avoid the ['']
```

Now, back in our controllers/movie.js, let's flush out our create function.

```js
// controllers/movies.js

function create(req, res) {
  // Convert nowShowing's checkbox to a boolean (instead of 'on')
  // nowShowing might not even exist. That's fine. It'll just return undefined which is falsy.
  req.body.nowShowing = !!req.body.nowShowing;
  
  // Removing leading/trailing spaces
  req.body.cast = req.body.cast.trim();
  
  // taking care of the following situation: (test in chrome console)
  // cast = ''
  // cast.split(/\s*,\s*/) --> ['']
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(/\s*,\s*/)
  }
  // req.body is a beautiful object now. It's good to go.
  const movie = new Movie(req.body);
  // These callback functions ALWAYS have this err signature
  // save is asynchronous.
  movie.save()
    .then(() => {
      console.log("This here is our create movie function from our controllers/movie.js -->", movie);
      res.redirect('/movies/new');
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/movies/new');
    });

}
```

### *Step 5 - Redirect*

Can we create a new movie? Let's test it with our `💩troll💩` Cast comma separator approach.

*push code to github*

## 13. Use a Model to Read Data

Need to be able to READ data.

### *`Query Builder Syntax` in Mongoose.*
- find `All === (100%)` movies with ratings PG
- chaining release year. 
- `cast` is an array. 
- select saying "I ONLY want the title and releaseYear"
- `.exec(cb)`; Welcomes to 2023. How are we gonna learn about what this does?

That above example is super rare. But if I was collecting super rare type of Pokemon cards, I bet I would write one of those queries.

### *Useful Model methods to query for data*
Table

- [x] `find` ALWAYS returns an array. So since it's an array, in our callback, why do we call it movies? DO NOT call this movie!!! It's `movies`
- [x] You'll `ALWAYS` use `find` when you want to select more than one document. 

- [x] `findById` It's common to have the `id` of the document we're looking for. Not looking for a `query object` (like above), it just wants an `id`. 

- [x] Let's say you want to find a single document, but you don't have its `id`, you would use `findOne`. Later, when we want to find the user by their email address (authentication lesson).

What's that `Note: An empty query object {} selects ALL documents` mean?

## 14. Implement `index` Functionality

1. Identify the RESTful route (using our guide)
```js
// routes/movies.js

// GET /movies --> from RESTful route guide GET /posts to READ ALL POSTS/movies
```

2. views/partials/header.ejs
```js
// views/partials/header.ejs
<a href="/movies/new">New Movie/Nueva Pelicula</a> ||--||
<a href="/movies">All Movies/Todos Pelicula</a>
```

3. Back to `routes/movies.js`
```js
// routes/movies.js

// GET /movies
router.get('/', moviesCtrl.index);
```

Server broken? #failedSuccessfully! We've reached a checkpoint! 

4. Into our `controllers` we go!
```js
// controllers/movies.js

module.exports = {
  index,
}

function index(req, res) {
  // Yay! We are stubbed up!
}
```

5. Here's our code for the index. Failed version first.

```js
// controllers/movies.js

module.exports = {
  index,
}

function index(req, res) {
  // The below WILL NOT WORK! Newbie mistake
  const movies = Movie.find({}, cb)
  // We won't have those movie documents until we're inside of the callback function.
}
```

Here's the way we're gonna code it successfully.

```js
// controllers/movies.js
module.exports = {
  index,
}

function index(req, res) {
  Movie.find({})
    .then((movies) => {
    // movies is an array
    // {movie} provides data. render second argument ALWAYS an object.
      res.render('movies/index', { movies })
    })
    .catch((err) => {
      // handle error
      console.error(err);
    }
  )
}
```

1. *`views/movies/index.ejs`*
```html
<!-- views/movies/index.ejs -->
<%- include('../partials/header') %>

<h2>Movie List</h2>
<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Release Year</th>
      <th>Rating</th>
      <th>Cast</th>
      <th>Now Showing</th>
    </tr>
  </thead>
  <tbody>
    <!-- Write the line of EJS to iterate over movies using forEach -->
      <tr>
        <td><%= m.title %></td>
        <td><%= m.releaseYear %></td>
        <td><%= m.mpaaRating %></td>
        <td><%= m.cast.join(', ') %></td>
        <!-- finish the ternary expression to display
                      'Yes' or 'Nope' --> 
        <td><%= m.nowShowing ?  %></td>
      </tr>
    <!-- Close the forEach using EJS here -->
  </tbody>
</table>

<%- include('../partials/footer') %>
```

- Show table headers (th) and table data (td) from HTML docs. Original Space Jam movie was build with tables.

```html
<!-- views/movies/index.ejs -->
<%- include('../partials/header') %>

<h2>Movie List</h2>
<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Release Year</th>
      <th>Rating</th>
      <th>Cast</th>
      <th>Now Showing</th>
    </tr>
  </thead>
  <tbody>
    <!-- Write the line of EJS to iterate over movies using forEach -->
    <% movies.forEach(function(m) { %>
      <tr>
        <td><%= m.title %></td>
        <td><%= m.releaseYear %></td>
        <td><%= m.mpaaRating %></td>
        <td><%= m.cast.join(', ') %></td>
        <!-- finish the ternary expression to display
                      'Yes' or 'Nope' --> 
        <td><%= m.nowShowing ? 'Yes' : 'Nope' %></td>
      </tr>
    <!-- Close the forEach using EJS here -->
    <% }); %>
  </tbody>
</table>

<%- include('../partials/footer') %>
```

- [x] Click All Movies link. localhost:3000/movies

- [x] Fingers crossed! Does it work? Yay! It works for me! 

Wanna update our data using our atlas cloud?

Now, finishing touches

```js
// controllers/movies.js
function create() {
  // MAKE THIS ONE SMALL CHANGE!
  
  // res.redirect('/movies/new');
  res.redirect('/movies');
}
```

WE ARE DONE WITH CREATE!!!

## 15. Further Study

### *Defining Default Values for a Property*

`models/movie.js` file for reference.

Okay. so `releaseYear: {type: Number, default: 2000},` Mongoose is going to see an `empty string` and assign the value of `0` or maybe an error??? Basically, we need to fix this.

```js
// models/movie.js

const movieSchema = new mongoose.Schema({
  title: String,
  releaseYear: {type: Number, default: 2000},
  mpaaRating: String,
  cast: [String],
  nowShowing: {type: Boolean, default: false}
});
```

Now, create action in our controllers
```js
if (req.body.cast) req.body.cast = req.body.cast.split(',');

// remove empty properties
for (let key in req.body) {
  if (req.body[key] === '') delete req.body[key];
}

const movie = new Movie(req.body);
```

- [x] Test it out in the app to make sure it works with an empty releaseYear

Explain `getFullYear()` default.

### Defining Validations for a Property

Our drop down menu, on front end, is a weak security measure. Validate data on the back end as well. 

Update `movieSchema` to object required true. Test adding a movie without the title. #failedSuccessfully

All data from req.body comes up as string, but Mongoose will take care of '1999' string and convert it to a number.

LOTS OF WAYS TO FORMAT STRING.

`enum` allows us to provide an array of string(s). Whatever comes up from req.body, if it doesn't match up, it fails one of these validations.

`match` ...

```js
const movieSchema = new mongoose.Schema({
  ...
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  ...

```



