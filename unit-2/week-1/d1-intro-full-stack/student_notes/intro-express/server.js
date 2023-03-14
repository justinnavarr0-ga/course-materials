// Load express
const express = require('express');
const path = require('path')


// Create our express app
const app = express();

//requiring to do database
const todoDb = require('./data/todo-db')
//configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')) 


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing

// app.get('/', function (req, res) {
//   res.send('first page');
// });

app.get('/todos', function(req, res) {
    res.render('todos/index.ejs', {
        todos: todoDb.getAll()
    })
  });  

// redirects to homepage
app.get('/', function (req, res) {
    res.redirect('/home');
  });

//localhost:3000/home
app.get('/home', function (req, res) {
    res.render('home');
  });


// localhost:3000/puppies
app.get('/puppies', function (req, res) {
    res.send('<h1>sup gang</h1>');
  });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});