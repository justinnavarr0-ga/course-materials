# Intro to React & Components

[Intro to React & Components Class Repo](https://git.generalassemb.ly/SEI-Standard-Curriculum/SEIR-Course-Materials/blob/main/Unit_4/1-react/1.1-intro-react-and-components-full.md)


## 1. What is React?
`null`

## 2. Why Use React?

❓❓❓Single page application (SPA) isn't that limiting our app❓❓❓

> 👀 React is a popular JavaScript library for building user interfaces, often used to develop single page applications (SPAs) which provide a faster and more responsive user experience by dynamically updating only the necessary parts of a web page, without requiring a full page reload.

Most importantly, you want to learn to use React because...

<figure>
  <img src="https://i.imgur.com/vGlFRHq.png">
  <figcaption>Source: <a href="https://www.devjobsscanner.com/blog/the-most-demanded-frontend-frameworks-in-2022/">devjobsscanner.com</a></figcaption>
</figure>
<figure>
  <img src="https://i.imgur.com/FfSLt6b.png">
  <figcaption>Source: <a href="https://www.devjobsscanner.com/blog/the-most-demanded-frontend-frameworks-in-2022/">devjobsscanner.com</a></figcaption>
</figure>

## 3. Creating a React App

You will see tutorials online using `npx create-react-app <app name>`

Vite (pronounced “veet” and French for “quick” 👀) makes you more productive.

Why Vite? 

In summary, React apps are becoming more complex, demanding more from our tools. Simultaneously, web browsers are evolving. 

Vite aims to leverage advancements in the ecosystem. Not only to make load times quicker but also to offer an instantaneous, almost magic-feeling developer experience. 

[Create a new React app with Vite](https://scrimba.com/articles/create-react-app-with-vite/)

```Terminal
npm create vite@latest
```

```
? Project name: react-to-do
? Select a framework: > React
? Select a variant: > Javascript

Done. Now run:

  cd react-to-do
  npm install
  npm run dev
```

Go to `src/app.jsx`

```jsx
// src/app.jsx
<div className="App">
  <h1>Hello CodeSandbox</h1>
  <h2>Start editing to see some magic happen!</h2>
</div>
```

Not bad. Play around with it again! 
```jsx
// src/app.jsx
<div className="App">
  <h1>Hello Better Than Yesterday! </h1>
  <h2>Start editing to see some magic happen!</h2>
</div>
```

### Modern JavaScript

CRA! HAHA. ROFL. 

[Create React App is Dead! Here are Some Alternatives](https://hackernoon.com/create-react-app-is-dead-here-are-some-alternatives) from February 03, 2023.

### ❓ Review Questions - React (1 min)

<details>
<summary>
(1) What is the purpose of the React library?
</summary>
<hr>

**The purpose of the React library is to provide a fast and efficient way to build user interfaces, using components, for web applications.**

<hr>
</details>

<details>
<summary>
(2) True or False: React uses HTML to define user interfaces.
</summary>
<hr>

**False.**  It may look like HTML, but it's a similar markup language known as **JSX**.

<hr>
</details>

## 4. Components

### What Are Components?

In React, components are reusable building blocks that encapsulate code and functionality for rendering specific parts of a user interface, and can be compared to building blocks of a Lego set where each block represents a specific part of the overall structure and can be combined with other blocks to create a larger and more complex structure.

![Lego Camp Nou](https://cdn.shopify.com/s/files/1/0022/7573/7711/products/lego-camp-nou-fc-barcelona-10284-light-kit_3.jpg?v=1644514204)

Let's contrast the two different kinds of components in React:

- User-defined components that we as developers define
- Built-in components that are part of the React library

### User-Defined Components

We code user-defined components and use them to compose the application's user interface.

There is a single user-defined component, <App>, that's defined and exported in the App.js module:

👀 User-defined components must be named using UpperCamelCasing.

A component may be defined using a JS function or class. Since the introduction of "React hooks" in version 16.8, **`the trend has been to code components exclusively using functions.`**

Our user-defined components typically render other user-defined components and/or React's built-in components...

- [x] Build a user-defined component

### Built in Components

Some built-in components that are part of the React library include:

`<div>`: a container for other components and HTML elements
`<span>`: an inline container for text and other elements
`<input>`: a component for accepting user input, such as text or a checkbox
`<button>`: a component for triggering an action, such as submitting a form or navigating to a different page
`<img>`: a component for displaying images on a web page.

👀 React Elements will always be named using lowercase.

👀 User-defined components themselves, e.g., <App> do not render an HTML element in the DOM - after all, a browser wouldn't know what the heck an <App> HTML element is.

### HTML/Component Hierarchy

In a React app, the hierarchical structure of HTML elements in the browser is determined by a tree-like structure of user-defined components, with the top component conventionally named <App>, which is rendered when the app loads.

## 5. How a React App is Loaded and Renders

- [x] Let's browse the React app: `index.html` --> `<script>` --> `main.jsx` --> `App.jsx`

When a component is rendered, it's chlidren are rendered as well.

A component re-renders when its state is updated.

### High-Performance Rendering of Components

manipulating the DOM is relatively CPU intensive.

- [x] Virtual DOM vs actual DOM using "diff"

![React Virtual DOM vs Actual DOM](https://blog.logrocket.com/wp-content/uploads/2023/01/5-react-actual-dom-update-repaint.png)

### ❓ Review Questions - Components (2 mins)

<details>
<summary>
(1) True or False:  User-defined components must be named in lowercase.
</summary>
<hr>

**False**.  They are named using **UpperCamelCasing**.

<hr>
</details>

<details>
<summary>
(2) True or False:  A Function Component is a component that is written as a JS function and returns its user interface as JSX.
</summary>
<hr>

**True**

<hr>
</details>

<details>
<summary>
(3) True or False:  When a component is rendered, all of its children are also rendered.
</summary>
<hr>

**True**

<hr>
</details>

<details>
<summary>
(4) After a React app is rendered for the first time by the <code>root.render()</code> method, components re-render when ________ is updated.
</summary>
<hr>

**State**

<hr>
</details>

<details>
<summary>
(5) True or False: A div tag placed inside of jsx(react component) is an html div element?
</summary>
<hr>

**False**. A div tag, or really any traditional html tag(`<p>, <li>, <span> .etc`), placed inside of jsx is in fact a react component meant to represent its respective html element in react's virtual DOM.

```jsx
function MyComponent() {
    return (
        <div>This div tag not an html div element, but a react component meant to represent an html div element in react's virtual DOM</div>
    );
}
```

<hr>
</details>

### 6. Designing User Interfaces Using Components

To develop a React application, we compose the UI using a hierarchy of components.

![Breaking Down Components](https://i.imgur.com/TqerRDf.png)

<details>
<summary>
❓ Which top of the component-hierarchy component is missing from the above diagram?
</summary>
<hr>

**`<App>`**

<hr>
</details>

<details>
<summary>
❓ What are the names of the two components being rendered by the "missing" <code>&lt;App&gt;</code> component?
</summary>
<hr>

**`<Network>`** and **`<Predictions>`**

<hr>
</details>

<br>

We must get used to thinking about our UI in terms of components. This "Component Thought" requires us to:

- Break the UI into several smaller components to make the code more manageable.
- Compose (combine) these components into other components.
- Compose page-level components that render according to which client-side route is active.

## 7. Let's Define a Component

Let's refactor "React To-Do" so that the `<App>` component renders a `<ToDoList>` component instead of the `<ul>` and its contents...

Modules should be named the same as the component, i.e., using UpperCamelCasing.

> 👀 By using `.jsx` as the module's extension, we'll get better code completion and a cool React icon by the filename.

### Note: Importing the React Library is No Longer Necessary

1. Inside `src/components`, create a new `ToDoList.jsx`:

```jsx
export default function ToDoList() {
  // Application logic, etc. goes here
  return (
    <ul>
      <li>Learn React</li>
      <li>Learn the MERN-Stack</li>
    </ul>
  );
}
```

Now, import this `ToDoList` component into `App.jsx`.

```js
// src/App.jsx
import { useState } from 'react'
import './App.css'
import Blog from './components/Blog'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className="App">
      <Blog />
      <h1>react-to-do</h1>
      <ToDoList />
    </div>
  )
}

export default App
```

Do we see our `ToDoList` component rendered on the screen?

## 8. 💪 Practice Exercise: Define and Render Another Component (10 mins)

Kenjamin's Solution:

1. Inside components folder, create a file called `ToDoListItem.jsx`. 
2. `rsc` vscode shortcut for react stateless component.
3. Export the function. 
4. Add the following code:

```jsx
// src/components/ToDoListItem.jsx
import React from 'react';

const ToDoListItem = () => {
  return (
    <li>To Do Item</li>
  );
};

export default ToDoListItem;
```

Inside `ToDoList.jsx`, import `ToDoListItem` and render it.
```jsx
import ToDoListItem from "./ToDoListItem";

export default function ToDoList() {
  // Application logic, etc. goes here
  return (
    <ul>
      <ToDoListItem />
      <ToDoListItem />
    </ul>
  );
}

```

## 9. Install and Open React Developer Tools

[Install React Devtools Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

Go to chrome devtools --> Click on Components to see what's going on. 