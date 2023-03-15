var express = require('express');
var router = express.Router();
// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

// All actual paths start with "localhost:3000/todos"
router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.new)
// GET /todos/:id/edit
router.get('/:id/edit', todosCtrl.edit);
router.get('/:id', todosCtrl.show)
router.post('/', todosCtrl.create)
router.delete('/:id', todosCtrl.delete);

// PUT /todos/:id
router.put('/:id', todosCtrl.update)

module.exports = router;
