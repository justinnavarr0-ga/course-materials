var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
 var todosCtrl = require('../controllers/todos');

 // All actual paths start with "localhost:3000/todos"
 
 router.get('/', todosCtrl.index);
 //get /todos/new
 router.get('/new', todosCtrl.new)
 router.get('/:id', todosCtrl.show)
 // post /todos
 router.post('/', todosCtrl.create)

module.exports = router;
