# MERN Infrastructure Part 2

[MERN Infrastructure Part 2](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/tree/main/unit-3/week-1/d5-mern-infrastructure/5.1-mern-infrastructure-part-2)

## 1. Setup

Rename VSCode terminals to `Express-Backend` and `React-Dev-Server`

## 2. The Plan - Part 2

`null`

## 3. Set Up user State

Basically, is the `user` `logged in` or `undefined`? 

A good place to start is to define the user state.

**👉 You Do - Define the user State in App.jsx (2 mins)**

1. Use the useState hook to define a state variable named user.
2. Initialize user to null.
3. The setter function should be named according to convention.

> Hint: Don't forget to add the necessary import.

In app.jsx
```jsx
// src/pages/App/App.jsx

import { useState } from 'react';
import './App.css';
import React from 'react'

function App() {
  const [user, setUser] = useState(null);

  return (
    ...
  );
}

export default App;
```

## 4. Add Skeleton Page-Level Components

❓ In which folder will we define these new page-level components?

**👉 You Do - Stub up SEI CAFE's page-level components (5 mins)**

Solution:

1. Inside pages `src/pages` folder, create a a new folder name `AuthPage`, `NewOrderPage`, and `OrderHistoryPage`.  Inside `AuthPage` folder, create a new file named `AuthPage.jsx`. Do the same pattern for `NewOrderPage` and `OrderHistoryPage` folders.

2. Stub up that `AuthPage` component 
```jsx
// src/pages/AuthPage/AuthPage.jsx

export default function AuthPage() {
  return (
    <h1>AuthPage</h1>
  )
}
```

3. Copy the `AuthPage.jsx` to `NewOrderPage.jsx` and `OrderHistoryPage.jsx`.

```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

export default function NewOrderPage() {
  return (
    <h1>NewOrderPage</h1>
  )
}
```

```jsx
// src/pages/OrderHistoryPage/OrderHistoryPage.jsx

export default function OrderHistoryPage() {
  return (
    <h1>OrderHistoryPage</h1>
  )
}
```

## 5. Conditionally Render Based On the user State

![Conditionally Render](https://i.imgur.com/UwNRJYv.png)


```jsx
// app.jsx

return (
  <main className="App">
    { user ? <NewOrderPage /> : <AuthPage /> }
  </main>
);
```

Great. Now do we get the following error?

```console
./src/pages/App/App.jsx
  Line 11:   'user' is not defined          no-undef
  Line 12:  'NewOrderPage' is not defined  react/jsx-no-undef
  Line 14:  'AuthPage' is not defined      react/jsx-no-undef

Search for the keywords to learn more about each error.
```

Sounds good! Failed Successfully! I'll give y'all 2 minutes to fix this.

Go into the console, `React Dev Tools` and change state to `truthy`

Updating the hook's State to any truthy value will result in <NewOrderPage> rendering instead!

## 6. Intro to Client-Side Routing Using React Router

[What is React Router and How Do I Install It???](https://www.npmjs.com/package/react-router)

> 👀 React Router has recently been updated from version 5.x to 6.x which included breaking changes. Be aware that the code in most of the tutorials, etc. out there that include React Router may not work any more.

Install React Router 

```console
npm i react-router
```

### How it Works - React Router Is Component-Based!
**React Router provides several components used to conditionally render our app's components based upon the path of the URL in the address bar**

*Please read the above again because it's fundamental to understanding how React Router works.*

### The `<BrowserRouter>` Component

`<BrowserRouter>` is the top-level React Router component that makes React Router work.

Only a single `<BrowserRouter>` needs to be rendered and any components that need to use routing features must be nested within it, thus, the convention is to wrap the `<App>` component.

> ❓ In which module will we need to wrap <App> with <BrowserRouter>?  `index.js`

> 👀 Those components named ending with .Provider are using React's Context API to provide info to components down in the component hierarchy without having to pass that info as props.

## 7. Implement Client-Side Routing

Most React apps only need to perform routing in the `<App>` component - let's see how...

### The `<Routes>` Component

Any component that wants to define client-side routes will first need to render a `<Routes>` component.

Because `<App>` is where we will define all client-side routes, let's import the Routes component there:

[How to Fix the Breaking Changes](https://stackoverflow.com/questions/70183636/routes-is-not-defined-react-jsx-no-undef)

```jsx
// src/pages/App/App.jsx

import React, { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'


function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      { user ? 
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes> 
        : 
        <AuthPage />
      }
    </main>
  );
}

export default App;
```

## 👉 You Do - Add Another `<Route>` (2 mins)

1. Add a new `<Route>` used to render `<OrderHistoryPage />` when the path of the URL is /orders

```jsx
// src/pages/App/App.jsx

  // Version 5 vs Version 6
  <Route path="/orders/new" element={<NewOrderPage />} />
  // Easier to pass props if you need to
  <Route path="/orders" element={<OrderHistoryPage />} />

```

2. Test by changing the path of the URL back and forth between `/orders` and `/orders/new`.

`http://localhost:3000/orders`

`http://localhost:3000/orders/new`

`http://localhost:3000/` should show NOTHING! 

## 8. Implement a Basic Navigation Bar

### 👉 You Do - Stub up a <NavBar> component (3 mins)

1. Create a `<NavBar>` component within the components folder.
2. `<NavBar>` should render a `<nav>` React Element with the text "NavBar" as its only content for now.
3. Import `<NavBar>` in `App.jsx`


Solution:

1. Create a `components` folder inside `src`. 
2. Create a `NavBar` folder inside the `components` folder.
3. Create a `NavBar.jsx` file inside the `components/NavBar` folder.

```jsx
// components/NavBar/NavBar.jsx

import React from 'react';

export default function NavBar() {
  return (
    <nav>NavBar</nav>
  )
}
```

4. Now, inside `App.jsx`, import the `NavBar` component.  
5. Get that NavBar to render
```jsx
// src/pages/App/App.jsx
import NavBar from '../../components/NavBar/NavBar.jsx';


  return (
    <main className="App">
      { user ? 
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes> 
        </>
        : 
        <AuthPage />
      }
    </main>
  );
```

### ❓ Assuming we want <NavBar> to render at all times regardless of whether there's a logged in user or not, where would we add it to the JSX?

Between `<main>` and the ternary expression.

## The <Link> Component

### ❓ What HTML element did we use to change the URL in our previous web apps?

The `<a>` hyperlink element.

### ❓ What happens if we use traditional HTML hyperlinks in a SPA?

It would cause a page reload when performing the navigation.

Luckily, React Router provides a `<Link>` component that renders hyperlinks that when clicked, change the URL client-side only without triggering an HTTP request.

```jsx
// src/components/NavBar/NavBar.jsx

// Don't forget the import
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="orders">Order History</Link> **||&&--@@**
      <Link to="/orders/new">New Order</Link>
    </nav>
  );
}
```

Test the links out above. Does the page "reload"?

"Chrome inspect" the page with our navbar. Do we see `<a>` tags in our Elements? What's going on here? 

### Congrats on implementing client-side routing!

## Further Study:

*Route Params - Client-Side*

- Check out React Router's [useParams](https://reactrouter.com/en/6.10.0/hooks/use-params) hook that allows you to access route parameters similar to how we did in Express.

Wait... What the heck is React Router's `useParams` hook? 

React Router's `useParams` hook is a built-in hook that allows you to access and extract dynamic parameters from the current URL in a React component.

When you define a route with parameters using the Route component in React Router, such as:

```jsx
<Route path="/users/:id" component={UserDetail} />
```

The `:id` is considered a dynamic parameter in the URL. When the user navigates to a URL that matches this route, React Router extracts the value of the `id` parameter from the URL and passes it to the `UserDetail` component as a prop.

To access the value of the `id` parameter inside the `UserDetail` component, you can use the `useParams` hook like this:

```jsx
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  // use the id parameter here
}
```

The `useParams` hook returns an object that contains key-value pairs of all the parameters in the URL. In this case, it will return an object with a single key `id` that maps to the value of the `id` parameter in the URL.

*Other Topics*

- Use React Router's <NavLink> component when you want to style hyperlinks dynamically based upon the current URL.

- Learn more about the Context API which is a way to provide info to child components without having to pass that info as props.

