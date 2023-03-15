# Express Update Todo:

[Express Update To Do ](https://git.generalassemb.ly/sei-blended-learning/curriculum/blob/main/unit-2/2-express-framework/2.5-express-update-to-do.md)

## 1. Setup:

`null`

- Are we all at where we had left off? 

- Do we have the `method-override` middleware? 

[method-override DOCS](https://expressjs.com/en/resources/middleware/method-override.html)

## 2. Intro:

`null`

## 3. Exercise #1 - Updating the Text of the To-Do

**Step 1**

```js
// views/todos/show.ejs

<%- include('../partials/header') %>
<h3><%= todo.todo %></h3>
<h3>Complete: <%= todo.done ? 'Yes' : 'No' %></h3>
// Step 1: Identify the proper route....
<a href="">Edit To-Do</a>

<%- include('../partials/footer') %>

```

If we look at our [Restful Routes to Crud Mapping](https://gist.github.com/jim-clark/17908763db7bd3c403e6), we can take a wild guess that maybe we're looking for `GET	/posts/:id/edit	  Return view (form) to edit a post`? 

Why do we need that `/edit` at the end of our GET route here? 🤔

**Step 2**
```js
// routes/todos.js

// Let's keep our GET requests together?
// GET /todos/:id/edit
// Hmmm... Let's come back to this in a bit...

```

**Step 3**

Now that we know what our proper path is... let's go back to show.ejs
```js
// views/todos/show.ejs
<a href="/todos/<%= todo.id %>/edit">Edit To-Do</a>
```

Clicking on this will give us a 404 error. Let's see if we can get a 404 error.

**Step 4**

```js
// routes/todos.js

// GET /todos/:id/edit
router.get('/:id/edit', todosCtrl.edit);
```

Does saving it crash our app? Awww.  😧

**Step 5**

```js
// controllers/todos.js
module.exports = {
  // Make sure to export edit... Because we called it todosCtrl.edit in routes/todos.js for our router.get('/:id/edit')
  edit,
}

function edit(req, res) {
  // Your users will expect to have the data they want to edit prefilled in the form's inputs.... on assignment. READ IT. 
  // Referencing show function...
  const todo = Todo.getOne(req.params.id);
  res.render('todos/edit', {
    title: 'Edit To-Do',
    todo 
  });
}
```

Click around on webpage. Error message FAILED TO LOOKUP VIEW "todos/edit" IN VIEWS DIRECTORY.

**Step 6**

Copy new.ejs
```js
// views/todos/edit.ejs
// Start with new.ejs code as a template for edit.ejs. Does anything show up in the browser now?

<%- include('../partials/header') %>

<form action="/todos" method="POST">
  <input type="text" name="todo">
  <button type="submit">Save To-Do</button>
</form>

<%- include('../partials/footer') %>
```

**Step 7**

Edit got us the form, but it's the UPDATE request that will actually UPDATE on the server.

Wait, what is the proper request for update? Let's check it out [here](https://gist.github.com/jim-clark/17908763db7bd3c403e6) with our guide. My guess is `PUT /posts/:id`

Okay. Fine. I'm gonna go into my routes/todos.js file.

```js
// routes/todos.js

// PUT /todos/:id

```

Okay. At least I got the proper path now.

```js
// views/todos/edit.ejs

<%- include('../partials/header') %>
// todo.id is from function edit in controllers/todos.js
// todo.todo has the actual text. 
// method overide with _method=PUT
<form action="/todos/<%= todo.id %>?_method=PUT" method="POST">
  <input type="text" name="todo" value="<%= todo.todo %>">
  <button type="submit">UPDATE To-Do</button>
</form>

<%- include('../partials/footer') %>
```

Now a refresh should have our input filled in yeah? Let's test...

Hitting the UPDATE To-Do button should give us a 404 error because we have not defined that route.

**Step 8**

If we follow the guide [here](https://gist.github.com/jim-clark/9f9bd19d60d9ce2ec57be8242b6aee96) on our guide, we still need #3 which is `Step 3 - Define the Route`

```js
// routes/todos.js
router.put('/:id', todosCtrl.update);
```

Breaks the `nodemon server` right? To the controller we go! 

**Step 9**

Let's export the `update` first.

```js
// controllers/todos.js
module.exports = {
  update,
}

function update(req, res) {
  // update method not created yet. 
  // needs id and then the updated data...
  // we used req.body when we created the data...
  // req.body is an object we're sending over to the update method
  Todo.update(req.params.id, req.body);
  // res.render or res.redirect?
  // Going back to the detail page (show page)
  // GET /todos/:id
  // string template literals for the id
  // redirect goes back to show functionality.
  res.redirect(`/todos/${req.params.id}`)
}
```

**Step 10**

Now we gotta code the `update` in `models/todo.js`

```js
// models/todo.js

module.exports = {
  update
}

// Do we need parameters? I'll check controllers/todos.js for my update function.
function update(id, updatedTodo) {
  // This code is gonna look something similar to models/todo.js getOne function.
  // converting string to an integer
  id = parseInt(id)
  const todo = todos.find(todo => todo.id === id)
  // The below code will work. Let's test it out in the browser.
  todo.todo = updatedTodo.todo
}
```

However, there's a better way. Why is there a better way? Problem is that `todo.todo = updatedTodo.todo`: *a lot of the time, we'll be updating objects with MULTIPLE inputs with properties.*

Here's the better way. 

Express merges our object we provide when we render. 
```js
// controllers/todos.js
function edit() {
  // has a res.render title: 'Edit To-Do',
  // todo
}
```

We wanna take `updatedTodo` and merge it to `todo`.todo object.

```js
// models/todo.js

function update(id, updatedTodo) {
  // This code is gonna look something similar to models/todo.js getOne function.
  // converting string to an integer
  id = parseInt(id)
  const todo = todos.find(todo => todo.id === id)
  // The below code will work. Let's test it out in the browser.
  todo.todo = updatedTodo.todo
}

```

Object.assign method:

Go to chrome browser console:

```js
const todo = {todo: 'Feed Dogs'};
const updatedTodo = {todo: 'Feed Dogs & Cats'}

Object.assign(todo, updatedTodo)
```

Cool. It works. Now, let's finish this off.

```js
// models/todo.js
function update(id, updatedTodo) {
  // This code is gonna look something similar to models/todo.js getOne function.
  // converting string to an integer
  id = parseInt(id)
  const todo = todos.find(todo => todo.id === id)
  // The below code will work. Let's test it out in the browser.
  // todo.todo = updatedTodo.todo

  // We are updated the PROPERTY of todo
  Object.assign(todo, updatedTodo)
}
```

## 4. Exercise #2 - Changing Whether the To-Do is Done or Not

Let's change whether the todo was done or not.

**Step 1**

Hm... Inside views/todos/edit.ejs, we need a new input.
```js
// views/todos/edit.ejs

<%- include('../partials/header') %>
// todo.id is from function edit in controllers/todos.js
// todo.todo has the actual text. 
// method overide with _method=PUT
<form action="/todos/<%= todo.id %>?_method=PUT" method="POST">
  <input type="text" name="todo" value="<%= todo.todo %>">

  <input type="checkbox" name="done">

  <button type="submit">UPDATE To-Do</button>
</form>

<%- include('../partials/footer') %>
```

using `name` to match the propety in the models/todos.je

it says to use `checked` which is a Boolean. Stub it up with some squids.

```js
// views/todos/edit.ejs

<input type="checkbox" name="done" <%= todo.done ? 'checked' : '' %>>
```

Refresh. Does it show up? Cool, but it looks nasty. Let's fix that.

**Step 2**

```js
// views/todos/edit.ejs

<%- include('../partials/header') %>

<form action="/todos/<%= todo.id %>?_method=PUT" method="POST">
  <input type="text" name="todo" value="<%= todo.todo %>"><br>
  <label>
    Completed?
    <input type="checkbox" name="done" <%= todo.done ? 'checked' : '' %>>
    Terminado
  </label>

  <button type="submit">UPDATE To-Do</button>
</form>

<%- include('../partials/footer') %>
```

Does Feed Dogs & Cats show up as pre checked? Sure does! 

**Step 3**

Check our quirkiness of FORM DATA in network tab for checked boxes.

Why is `done: on` and not a Boolean? Booleans please!

**Step 4**

Converting `on` to a Boolean

```js
// controllers/todos.js

function update(req, res) {
  // Clean up our req.body.done property
  req.body.done = !!req.body.done
  Todo.update(req.params.id, req.body);
  res.redirect(`/todos/${req.params.id}`)
}
```

We're corrupting our database if we DON'T DO THIS!

