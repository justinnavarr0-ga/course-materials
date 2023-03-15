const todos = [
  {id: 125223, todo: 'Feed Dogs', done: true},
  {id: 127904, todo: 'Learn Express', done: false},
  {id: 139608, todo: 'Buy Milk', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return todos;
}

function getOne(id){
  id = parseInt(id)
  return todos.find(todo => todo.id === id)
}

function create(todo){
  todo.id = Date.now() % 10000000
  todo.done = false
  todos.push(todo)
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = todos.findIndex(todo => todo.id === id);
  todos.splice(idx, 1);
}

