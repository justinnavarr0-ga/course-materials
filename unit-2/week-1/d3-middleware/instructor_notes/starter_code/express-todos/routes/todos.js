var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
 var todosCtrl = require('../controllers/todos');

 // All actual paths start with "localhost:3000/todos"
 router.get('/', todosCtrl.index);
 router.get('/new', todosCtrl.new)
 router.get('/:id', todosCtrl.show)
 router.post('/', todosCtrl.create)
 // delete /todos/:id
//  router.get('/:id/:name/:number', todosCtrl.name)
 router.delete('/:id', todosCtrl.delete)

module.exports = router;
