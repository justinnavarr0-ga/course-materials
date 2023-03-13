// Load Express
const express = require('express')
const path = require('path');
// require the To Do "database"
const todoDb = require('./data/todo-db')

// Create our express app...
const app = express()
// configuring the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// localhost:3000/
app.get('/', function (req, res) {
  res.redirect('/puppies');
});

// localhost:3000/puppies
app.get('/puppies', function (req, res) {
  res.send('<h1>corgis forever</h1>')
})

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/todos', function (req, res) {
  res.render('todos/index.ejs', {
    todos: todoDb.getAll()
  })
})

// Connecting to server on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000!!!!');
})

