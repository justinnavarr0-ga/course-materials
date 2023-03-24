var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
 var todosCtrl = require('../controllers/todos');

 // All actual paths start with "localhost:3000/todos"
 router.get('/', todosCtrl.index);
 //to create new to do
 // get /todos/new
 router.get('/new', todosCtrl.new)
 //localhost:3000/todos/:id (numbernubmernumber)
 router.get('/:id', todosCtrl.show) //this is the show route 
 //update a todo//get/
router.get('/:id/edit', todosCtrl.edit)
 
// POST /todos
router.post('/', todosCtrl.create)

router.delete('/:id', todosCtrl.delete)

router.put('/:id', todosCtrl.update)

module.exports = router;
