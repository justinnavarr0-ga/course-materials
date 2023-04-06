[React Fundamentals - JSX & Props](https://git.generalassemb.ly/SEI-Standard-Curriculum/SEIR-Course-Materials/blob/main/Unit_4/1-react/1.2-react-jsx-and-props.md)

# React Fundamentals - JSX & Props

## 1. Setup
This lesson builds upon the "React To-Do" sandbox we created in the previous lesson.

## 2. JSX - What & Why?

### What?

JSX is a syntax extension to JavaScript that allows developers to write HTML-like code in their JavaScript files. It was developed by Facebook and is commonly used with React, a popular JavaScript library for building user interfaces.

JSX allows developers to define user interface components in a familiar HTML-like syntax, making it easier to reason about and manipulate the user interface. In addition, JSX provides several benefits over traditional JavaScript code, including:

1. `Conciseness`: JSX allows developers to write code in a more concise and intuitive way. This makes it easier to read and understand, and can lead to faster development times.

2. `Readability`: JSX makes it easier to understand the structure and hierarchy of the user interface, since the code closely resembles HTML.

3. `Safety`: Since JSX is transpiled into JavaScript code, it provides additional safety features like type checking and syntax validation.

While JSX is not strictly necessary for building user interfaces with React, it has become a popular and widely adopted tool within the React ecosystem.

`What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.`

<details>
<summary>❓ What is transpiling</summary>
<hr>

Transpiling converts source code of one language into source code of another language.  They are often referred to as source-to-source compilers. Compilers on the the other hand, convert source code into a form of executable code.

<hr>
</details>

### Why JSX?

- It's simple and clear. Compared to pure JavaScript, JSX provides a more concise and better way to define a UI.

- JSX resembles HTML, which allows us to more easily visualize the UI its JavaScript will create.

- 99.99% (a guess) of React apps are developed today using JSX to define the UI, not vanilla JS.

### 4. Writing JS Expressions Into the DOM Using JSX

To write the result of a JS expression into the DOM within the JSX, we simply need to **enclose the expression within curly braces.**

Let's experiment by typing the the following within `<ToDoList>` in our sandbox and observe the output:

```js
// src/components/ToDoList.jsx

export default function ToDoList() {
  const str = "SEI";
  const score = 94;
  return (
    <ul>
      <ToDoListItem />
      <ToDoListItem />
      <li>Number: {score}</li>
      <li>String: {str}</li>
      <li>Math.random(): {Math.random() * 100}</li>
      <li>Template Literal: {`${str} Rocks`}</li>
      <li>Ternary: {score > 90 ? "A" : "B or less"}</li>
      <li>Booleans, null & undefined: {true}{false}{null}{undefined}</li>
      <li>Logical &&: {score > 90 && <div>Got an 'A'!</div>}</li>
    </ul>
  );
}
```

In React, rendering refers to the process of converting a JavaScript object or component into a format that can be displayed on the screen. When rendering a component, React creates a tree of React elements, which correspond to the HTML elements that will be displayed on the page.

The statement "Objects and most of the built-in Objects (Date, Functions, RegExp, etc.) cannot be rendered as is - just their properties can be rendered" means that when rendering a component in React, you cannot display an entire JavaScript object or a built-in object like `Date`, `Function`, `RegExp`, etc. directly on the screen. Instead, only the properties of the object can be rendered.

For example, if you have a `Person` object with properties like `name`, `age`, and `gender`, you can render the values of these properties on the screen using JSX syntax like:

```jsx
const person = {
  name: "John",
  age: 30,
  gender: "male"
};

function PersonComponent() {
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Gender: {person.gender}</p>
    </div>
  );
}
```

However, you cannot render the entire `person` object as is - only its properties can be rendered. This is because React needs to be able to represent the component as a tree of elements, and JavaScript objects are not valid elements in that tree.

### 5. JSX Itself is a JS Expression!

![JSX Babel Transpiler](https://i.imgur.com/8vLLr1Y.gif)

```jsx
// JSX can be assigned to a variable
const message = <h1>Hello, world!</h1>;

// JSX can be used in a ternary expression
function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
```

### A Component Must Return a Single Root JSX Node

Because a function can only return a single expression, we must be sure to return a single root JSX node using the `return` statement.

For example, the following will fail to compile:
```jsx
function Whoops() {
  return (
    <h1>Whoops</h1>
    <h2>No Dice!</h2>
  );
}
```

The function above is attempting to return two things, i.e., two objects which just isn't possible in JavaScript (or any other popular programming language).

The `only` solution used to be to wrap the sibling components with a single React Element such as a `<div>`:

```jsx
function GoodToGo() {
  return (
    <div>
      <h1>Good To Go</h1>
      <h2>Dice Please!</h2>
    </div>
  );
}
```

The downside of the above approach is that this results in an extra, and perhaps unwanted `<div>` rendered to the DOM which could impact layout/styling.

A better alternative if you don't want or need an extra wrapping React Element is [React Fragments](https://legacy.reactjs.org/docs/fragments.html) added in version 16.2 of React:

```jsx
function GoodToGo() {
  return (
    <>
      <h1>Good To Go</h1>
      <h2>Dice Please!</h2>
    </>
  );
}
```
> 👀 The `<> </>` syntax is shorthand for `<React.Fragment> </React.Fragment>`

### 👉 You Do - Render an Array (3 minutes)

1. Define an array named `misc` before the `return` statement that has the following elements:

2. In **ToDoList.jsx** Add an `<li>` React Element and render the array as its content.

```jsx
// src/components/ToDoList.jsx
export default function ToDoList() {

  const misc = [
    'Hello, world!',
    42,
    true,
    <div>This is a div element</div>,
    <h2>BTY stands for BETTER THAN YESTERDAY!</h2>
  ];

  return (
    <div>
      <h1>Miscellaneous Items</h1>
      <ul>
        <li>{misc}</li>
      </ul>
    </div>
  );
}
```

As you can see, React can render arrays. In fact, it's very common to render arrays of components, which we'll do in a bit.

## 6. What Are Props?

In React, props (short for "properties") are a way to pass data from a parent component to a child component. Props are like function arguments in that they allow you to pass data into a component and use that data to render dynamic content.

Here's an example of how props work:

```jsx
// Parent component
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = 'Alice';
  const age = 30;

  return <ChildComponent 
            name={name}
            age={age}
            height={178.5}
         />;
}

export default ParentComponent;

// Child component
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </div>
  );
}

export default ChildComponent;
```

In this example, we have a parent component called `ParentComponent` that defines two variables, `name` and `age`. The parent component renders a child component called `ChildComponent` and passes the `name` and `age` variables as props using the syntax `name={name}` and `age={age}`.

The child component, in turn, receives the props as an object called `props`. The component can then access the props using dot notation (e.g. `props.name`)` and use the props to render dynamic content.

Overall, props are an important concept in React because they allow you to create reusable components that can be customized with different data depending on how they are used.

### Basic Syntax

The syntax of passing props to a child component is much like defining attributes in an HTML element, for example, we can pass a simple string to a component like this:

```jsx
<Person firstName="Fred" />
```

In the above example, the name of the prop is `firstName`.

Because JSX is transpiled into pure JS, we use lowerCamelCasing to name props. This is contrary to the convention of kebob-casing used to name attributes in HTML.

Like HTML attributes, there should be no spaces before or after the `=` sign.

There is no limit to the number of props that can be passed:

```jsx
<Person
  firstName="Kenjamin"
  age={23}
  height={178.5}
  weight={75}
  language="English"
  occupation="Zoom comedian"
/>
```

**Any** JS expression can be passed, however, expressions other than simple strings (excludes template literals), are passed within curly braces. Thus, the age prop will have the value set to the **number** `21`.

Each prop becomes a property on a "props" object that's passed to the child component.

The next example shows how you can pass an object literal and even a function:

```jsx
function handleRaise(name, amount) {
  // Give the person a raise!
}

<Person
  name={{first: "Fred", last: "Arroyo"}}
  age={21}
  handleRaise={handleRaise}
/>
```

Don't let those double-curly braces (`{{ ... }}`) confuse you. The outer curly braces simply say, "here comes a JS expression"; and the inner curly braces represent an object literal.

### How the Child Components Access Props

A props object is passed to Function Components as an argument:


```jsx
function Person(props) {
  return (
    <div>
      <p>First: {props.name.first}</p>
      <p>Last: {props.name.last}</p>
      <p>Age: {props.age}</p>
      <button onClick={() => props.handleRaise(props.name, 9999)}>Give Raise!</button>
    </div>
  );
}
```

By convention, we name the parameter props instead of `tuna`, `mamaMia`, etc.

As you can see, each passed prop becomes a property on the `props` object that's passed to the Function Component as an argument.

If no props are passed to a component, `props` will be an empty object.

> 👀 IMPORTANT: A prop's value should never be changed. Instead, a different value should be assigned to the prop at the source (the component that "owns" the info being passed).

### Destructuring the *props* Object

In modern JavaScript, it is common to create variables from properties on objects or elements in an array using [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Here's a simple example of using destructuring assignment to create variables for an object's properties:

With **object destructuring**:
```jsx
const car = {
  make: 'Tesla',
  model: 'Model S',
  year: 2020
};

let {make, year} = car;

console.log(make, year);  //=>  "Tesla"  2020
```

Without **object destructuring**:
```jsx
const car = {
  make: 'Tesla',
  model: 'Model S',
  year: 2020
};

let make = car.make;
let year = car.year;

console.log(make, year)
```

We can also use destructuring assignment to destructure parameters. Accordingly, it's common to destructure the `props` object passed to a Function Component.

Using destructuring, the `Person` component refactors to:

```jsx
function Person({ name, age, handleRaise }) {
  return (
    <div>
      <p>First: {name.first}</p>
      <p>Last: {name.last}</p>
      <p>Age: {age}</p>
      <button onClick={() => handleRaise(name, 9999)}>Give Raise!</button>
    </div>
  );
}
```

Here are the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) regarding destructuring objects.

### Using Props in "React To-Do"

Currently in "React To-Do", the <ToDoList> component is rendering two hard-coded <ToDoListItem> components - this isn't very useful.

Instead, we typically would be passing actual data down via props...

#### 1. Define a todos array in App.js:

```jsx
// App.jsx
import ToDoList from './components/ToDoList'

// Add the todos array
const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
];

export default function App() {
  ...
}
```

> 👀 If we were to define the todos array within the Function Component, it would be "reset" (reassigned) every time the component rendered!

#### 2. Pass the todos array to the <ToDoList> component as a prop:

```jsx
// App.jsx
const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
];

export default function App() {
  return (
    <div className="App">
      <h1>React To-Do</h1>
      {/* A valid comment */}
      {/* Pass todos as a prop */}
      <ToDoList todos={todos} />
    </div>
  );
}
```

#### 3. Refactor ToDoList.jsx to accept props:



```jsx
// src/components/ToDoList.jsx
import ToDoListItem from "./ToDoListItem";

export default function ToDoList(props) {
  return (
    <ul>
      <ToDoListItem />
      <ToDoListItem />
    </ul>
  );
}
```

4. Use React Developer Tools to verify the prop in `<ToDoList>`

`null`

### 👉 You Do - Destructuring (1 minute)

```jsx
// src/components/ToDoList.jsx
import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ todos }) {
  return (
    <ul>
      <ToDoListItem />
      <ToDoListItem />
    </ul>
  );
}
```

5. Create and render a `<ToDoListItem>` component for each element (the to-do string) in the *todos* array

```jsx
// src/components/ToDoList.jsx
import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ todos }) {
  // Create an array of <ToDoListItem> components
  const toDoListItems = todos.map(t => <ToDoListItem />);
  return (
    <ul>
      {toDoListItems}
    </ul>
  );
}
```

versus:::

```jsx
// src/components/ToDoList.jsx
import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map(t => <ToDoListItem />)}
    </ul>
  );
}
```

#### 6. Pass each "todo" string as a prop to the `<ToDoListItem>`

👉 You Do - Pass a todo Prop (1 minute)

From <ToDoList>, pass each "todo" string as a prop named todo to each <ToDoListItem>.

```jsx
// src/components/ToDoList.jsx
import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map(t => <ToDoListItem todo={t}/>)}
    </ul>
  );
}
```

#### 7. Refactor the <ToDoListItem> component to destructure the todo prop and render it instead of the "To Do Item" placeholder text

👉 You Do - More Prop Destructuring (1 minute)

```jsx
// src/components/ToDoListItem.jsx
import React from 'react';

const ToDoListItem = ({ todo }) => {
  // console.log("TODO", todo)
  return (
    <>
      <li>{todo}</li>
    </>
  );
};

export default ToDoListItem;
```

Still having a `unique "key" prop.`

## 7. Properly Rendering Arrays of Components

```jsx
// src/components/ToDoList.jsx
export default function ToDoList({ todos }) {
  return (
    <ul>
      // last resort quickfix 
      {todos.map((t, idx) => (
        // Last resort to get unique keys
        <ToDoListItem todo={t} key={idx} />
      ))}
    </ul>
  );
}
```

## 8. Props for React Elements

id, `className`, style.

It's `className` instead of `class` because `class` is a reserved word in Javascript.

## 9. Intro to Styling React Elements

❓ Only React Elements can be styled, not user-defined components - why?

User-defined components do not actually find their way into the DOM, only React Elements do. For example, you would never see a <ToDoList> tag in the DOM 🙂

```jsx
// Don't even think about doing this! Big ANTI-PATTERN. NOT GOING TO WORK!
<ToDoList className="something"/>
```

- [x] Inside `src/components`, create a `ToDoListItem.css` file.

```jsx
// src/components/ToDoListItem.jsx

// Import the styles - making them available globally 
// YOU NEED the .css at the end! 
import "./ToDoListItem.css";
```

❓ Why bother creating stylesheets for components since we can just put all of the styles in a single stylesheet like styles.css?

It's a great way to organize CSS rules that apply only to a given component!

Whereas styles.css is a great place for general, application-wide CSS.

### Styling With the `className` Prop

Let's add some CSS rules within ToDoListItem.css:

```css
.ToDoListItem {
  margin: 4vmin;
  padding: 2vmin;
  border: 1vmin solid purple;
  list-style: none;
  font-size: 6vmin;
}
```

So wait. Why isn't this working? What's going on? 😔😟😩😭😖

```jsx
// src/components/ToDoListItem.jsx

<li className="ToDoListItem">{todo}</li>
```

### 👉 You Do - Use Another Stylesheet (5 minutes)

`null`

### Styling Using the style Prop

The style prop in React differs from its HTML counterpart in that it must be assigned a **JS object** instead of a string value.

It's more efficient to use `className` compared with `style`. 

Let's say we want to alternate the background color of each To Do based on whether its index is odd or even.

So the next thing we need to ask ourselves is:
**How will each `<ToDoListItem`> component know if its odd or even?**
Well, we're certainly going to have to pass an additional prop from its parent, `<ToDoList>`.

FYI: `key` is internal to React only. 

### 👉 You Do - Pass the Index of the Iteration (2 minutes)

1. Pass the index of the map iteration (`idx` parameter) to each `<ToDoListItem>` component using a prop named `index`.

```jsx
// src/components/ToDoList.jsx
import ToDoListItem from "./ToDoListItem";
import './ToDoList.css'

export default function ToDoList({ todos }) {
  // Create an array of <ToDoListItem> components
  const toDoListItems = todos.map((t, idx) => <ToDoListItem todo={t} index={idx} key={idx} />);
  return (
    <ul className="ToDoList">
      {toDoListItems}
    </ul>
  );
}
```

2. In **ToDoListItem.jsx**, destructure the `index` prop being passed to it.

```jsx
// src/components/ToDoListItem.jsx
import React from 'react';
// Import the styles - making them available globally 
import "./ToDoListItem.css";

const ToDoListItem = ({ todo, index }) => {
  // console.log("TODO", todo)
  return (
    <li
      className="ToDoListItem"
      // style has to take an OBJECT!!!
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum"
      }}
    >
      {todo}
    </li>
  );
};

export default ToDoListItem;
```

## 10. ❓ Essential Questions (3 mins)



## 11. 💪 Bonus Exercise - Display the To Do Number