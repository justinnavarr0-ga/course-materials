const Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    title: "All To-Dos"
  });
}
function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: "To-do Details"
  });
}

function newToDo(req, res) {
  res.render('todos/new', { title: 'New Todo'})
}

function create(req, res) {
  console.log(req.body);
  Todo.create(req.body)
  res.redirect('/todos');
}

function deleteTodo(req, res){
  Todo.deleteOne(req.params.id)
  res.redirect('/todos')
}

function edit(req, res){
  const todo = Todo.getOne(req.params.id)
  res.render('todos/edit', {
    title: "Edit To-do",
    todo
  })
}

function update(req, res){
  req.body.done = !!req.body.done
  //update below has not been created yet
  //needs an id and then the updated data
  //used req.body when we created the data
  //req.body is an object were sending over to the update method
  Todo.update(req.params.id, req.body)
  res.redirect(`/todos/${req.params.id}`)
}

module.exports = {
  index,
  show,
  new: newToDo,
  create,
  delete: deleteTodo,
  edit,
  update,
};