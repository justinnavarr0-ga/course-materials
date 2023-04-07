# MERN-Stack Infrastructure - Part 3

[MERN Infrastructure Part 3](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/tree/main/unit-3/week-1/d5-mern-infrastructure/5.2-mern-infrastructure-part-3)

We will begin to implement the ever so important user authentication.

Along the way we'll also learn how to define a component as a class instead of a function and preview how we're going to organize non-React code into service & API modules.

**Part 3 - Begin Implementing Token-Based Auth:**

Part 3 - Begin Implementing Token-Based Auth:

1. The process of adding a feature to a MERN-Stack app
2. Code the <SignUpForm> component as a class component
3. Add service & API modules for the client

## 1. The process of adding a feature to a MERN-Stack app

`null`

## 2. Code the <SignUpForm> Component as a Class Component

We'll need to manage state for the controlled inputs used to gather information from the user that wants to sign up.

Instead of using a function component, we'll define `<SignUpForm>` as a class component which used to be the go to for defining components that needed to manage state prior to hooks being added to the React library.

### 💪 Practice Exercise - Stub Up the Module for the <SignUpForm> Component (1 minute)

The naming conventions of the folders and files for class components is no different than that of function components.

- Create the folder and module for `<SignUpForm>` following the same conventions and best practices as always.

> Hint: Be careful of typos (SignUpForm vs. SignupForm).

Solution: 
1. Inside `components` folder, create a folder `SignUpForm`.
2. Inside `SignUpForm` folder, create a file named `SignUpForm.jsx`

### Set Up <SignUpForm> as a Class Component

```jsx
// src/components/SignUpForm/SignUpForm.jsx

import { Component } from 'react';

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        SignUpForm
      </div>
    )
  }
}
```

### Importing and Rendering a Class Component

Now, back into the `AuthPage.jsx`
```jsx
// src/pages/AuthPage/AuthPage.jsx
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage() {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm />
    </main>
  );
}
```

Check if it renders properly. 

### Initializing a Class Component's State

Unlike with a function component that can define multiple pieces of state by using the `useState` hook multiple times, **a class component's state is always a single object assigned to a state property on the instance of the component.**

There are two ways to initialize the state property: **`constructor`** vs **`class field`**

```jsx
// src/components/SignUpForm/SignUpForm.jsx

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };
}
```

### `this` Keyword in a Class Component

<details><summary>❓ An instance of a class is an _______.</summary>
<p>

**object**

</p>
</details>

<details><summary>❓ An object's methods accesses other properties/methods of the object via the _______ keyword.</summary>
<p>

**`this`**

</p>
</details>

Unlike with function components, a class component accesses its props and methods using `this`, for example:

- `this.props`: Accesses the class component's `props` object, e.g., `this.props.someProp`.
- `this.state`: Accesses the class component's `state` object, e.g., `this.state.email`.
- `this.someMethod()`: Invokes a method defined in the class component or inherited by the superclass (`Component`) such as `this.setState()` used to update state.


### The Complete **render** Method of `<SignUpForm>`

```jsx
// src/components/SignUpForm/SignUpForm.jsx

render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
}
```

- Talk about disable.
- Talk about handleSubmit method (not created YET).
- Talk about required

Let's try to check out our rendered AuthPage component. Nothing can be typed in? Why? Because we haven't stubbed up our `handleChange` method yet. 

### Defining Event Handler Methods in a Class Component

Here's some tricky stuff right here. 

```jsx
// src/components/SignUpForm/SignUpForm.jsx
  handleChange(evt) {
    // This value of this is undefined. 
    // Can't do this.state or this.setState inside our handleChange function.
    alert(JSON.stringify(this))
  }
```

There are two solutions to ensure that a method has this correctly set to the component instance:

1. Define the method as usual and use JavaScript's `bind` method in the constructor method to explicitly set the value of `this`.

```jsx
// src/components/SignUpForm/SignUpForm.jsx

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
...

  handleChange(evt) {
    // This value of this is undefined. 
    // Can't do this.state or this.setState inside our handleChange function.
    alert(JSON.stringify(this.state))
  }
```

2. Use the **class field** syntax along with an arrow function when defining the method which by its very nature fixes the issue due to the way **class fields** are actually initialized in the `constructor` method.


So basically, the solution to the binding of "this" is just ... AN ARROW FUNCTION! 

```jsx
// src/components/SignUpForm/SignUpForm.jsx
handleChange = (evt) => {
  alert(JSON.stringify(this.state))
}
```

Why does the arrow function work? Because `state = {...}` is actually being put into a constructor. And the ARROW function, it's setting `this` into the CONSTRUCTOR method as well (BEHIND THE SCENES of course BTS).

*Now, let's update state in a class based component*

```jsx
// src/components/SignUpForm/SignUpForm.jsx

// The object passed to setState is merged with the current state object
handleChange = (evt) => {
  this.setState({
    // Where is target.name coming from?
    [evt.target.name]: evt.target.value,
    error: ''
  });
};
```

**❓❓❓ Wait, where is target.name coming from?**

Is state being updated in React Dev Tools? 

## Updating State in a Class Component

There's two key differences in how state is updated in class vs. function components:

- Class components always update state by invoking the inherited  `setState()` method vs. invoking the setter function(s) returned by the `useState` hook in function components.

- `setState()` accepts an object as an arg and this object is merged into the existing state object. This differs with how a function component's setter function replaces that state with the value provided.

Class Component Example: 
```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

Function Component Example: 
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
```

## Handling the onSubmit Event

The `<form>` React Element in `<SignUpForm>` already has an event handler method assigned to its onSubmit prop.

### 💪 Practice Exercise - Stub Up the handleSubmit() Method (2 minutes)

```jsx
// src/components/SignUpForm/SignUpForm.jsx

handleSubmit = (evt) => {
  evt.preventDefault();
  alert(JSON.stringify(this.state));
}
```

### Add the CSS

❓ The form-container CSS class is intended to be reused by multiple forms in the app, therefore it should be defined in the ________ module?

COPY THE CSS. Wanna understand the CSS better here? Okay, when you use this app as a reference for your project, go ahead and refactor the CSS.  🤣🤣🤣

Next lesson we'll continue writing the code in the `handleSubmit()` method to send the user's sign-up info to the server using an AJAJ request.

However, doing so in a way that's more likely to get you hired requires organizing such code within **service & API** modules...

## 3. Add Service & API Modules for the Client

Basically, we don't want to litter our components with **NON REACT CODE** 

- Poor code organization
- Bloated, less readable components
- Not DRY and violates the "separation of concerns"

### Utilities, Services, APIs, oh my...

- More work up front, but saves us time in the long run
- Real world setup

- [x] Utility Modules: `null`
- [x] Service Modules: Auth token / JSON Web Token / Persist it somewhere
- [x] API Modules: `null`

### Create folders and files:

`null`



