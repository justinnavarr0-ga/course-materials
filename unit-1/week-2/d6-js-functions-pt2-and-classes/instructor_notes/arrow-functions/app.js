console.log('hello world')

//reg func
let squaresReg = [1, 2, 3].map(function (x) { return x * x });
// arrow function
let squares = [1, 2, 3].map(x => x * x);

// reg function declaration
function myOtherFunction(){}
// reg function expression
const myFunction = function(){}

// arrow function expression
const myArrowFunction = () => {
    //code block
}

// single expression, curly brackets optional
const singleExpression = () => console.log('hello')

// returning objects need statement block wrapped in parenthesis
let todos = ['Buy milk', 'Mow lawn'];

//inline object return
let todoObjectsInline = todos.map(todo => ({todo: todo, done: false}));

// code block object return
let todoObjects = todos.map(todo => {
    return {todo: todo, done: false}
});
console.log(todoObjects)