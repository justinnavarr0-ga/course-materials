// data/todo-db.js

const todos = [
  { todo: 'Feed wife', done: false },
  { todo: 'Learn to read Chinese', done: true },
  { todo: 'Eat cereal', done: false }
];

module.exports = {
  getAll: function () {
    return todos;
  }
};