const Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}
function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id)
  });
}

function newTodo(req, res){
  res.render('todos/new', {titile: 'New Todo'})
}

function create(req, res){
  console.log(req.body)
  Todo.create(req.body);
  res.redirect('/todos')
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo
};