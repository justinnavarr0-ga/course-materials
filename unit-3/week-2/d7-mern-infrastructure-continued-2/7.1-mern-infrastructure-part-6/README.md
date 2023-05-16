<img src="https://i.imgur.com/IKHxRMa.png">

# MERN-Stack Infrastructure - Part 6

## Learning Objectives

|Students Will Be Able To:|
|---|
| Use localStorage to Persist Data |
| Better Understand How to Implement Features in the MERN-Stack |

## Road Map

- The Plan - Part 6
- Infrastructure - Part 6 of 7

## The Plan - Part 6

In Part 6 we will continue to implement user authentication.

**Part 6 - Implementing Token-Based Auth (continued):**
  1. Save the token in the browser's local storage
  2. Update the `user` state
  3. Implement logging out
  4. Implement logging in

## 1. Save the Token in the Browser's Local Storage

In the previous lesson we created the JWT on the server when the visitor signed up.  We also verified that the token was being sent back to the browser by logging it out in the console.

Because we will need to send the JWT to the server with any AJAX request that requires the controller action to know who the user is, we need to save the token in the client.

We can't simply assign the token to a variable or put it on state because a page refresh would loose the token.

Instead, we'll utilize the browser's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist the JWT. This also enables the user to be logged in automatically when they browse to the app! That is, as long as the JWT hasn't expired.

<details><summary>❓ Where in the code does it make the most sense to persist the token to local storage?</summary>
<p>

**The `signUp` method in the `users-service.js` module (when the token has been received from the server).**

</p>
</details>

Here's the refactor:

```js
export async function signUp(userData) {
...
    const token = await usersAPI.signUp(userData);
    // Persist the "token"
    localStorage.setItem('token', token);
...
```

> Note: Local Storage only stores and retrieves strings. When saving, the data will automatically be converted to a string, however, you will be responsible for using `JSON.parse()` to convert the string retrieved from local storage back into a number, boolean, array, object, etc.

Let's verify it's working by signing up again and checking out the Local Storage in DevTool's Application tab:

<img src="https://i.imgur.com/qcwKdLO.png">

<details><summary>❓ What did we save in the JWT's payload when we created it?</summary>
<p>

**The token's payload has a `user` property that contains the data from the user's MongoDB document!**

</p>
</details>

Time to put that payload to use...

## 2. Update the `user` State

We need to set/update the `user` state defined in the `<App>` component whenever:

- The React app is loaded or refreshed.
- A visitor signs up.
- A user logs in.
- The user logs out.

Let's start with when the app is loaded/refreshed...

### Setting the `user` State When the Page is Loaded or Refreshed

<details><summary>❓ In plain language, what logic should we implement to set the <code>user</code> state when the page loads/refreshes? Try to consider the three cases of token persistence in localStorage: Valid token exists; Expired token exists; and no token exists.</summary>
<p>

<ol><strong>
  <li>Retrieve the token from localStorage.</li>
  <li>If there isn't a token, set <code>user</code> to <code>null</code>.</li>
  <li>If there's an expired token, remove it from localStorage and set <code>user</code> to <code>null</code>.</li>
  <li>If the token hasn't expired, extract the <code>user</code> object from the payload use set the <code>user</code> state to that object.</li>
</strong></ol>

</p>
</details>

It makes sense to code much of the above logic in new `getToken()` and `getUser()` functions in **users-service.js**:

```js
// users-service.js

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
```

With those nifty functions in place, we can use `getUser()` in `<App>` to set the `user` state.

First, import `getUser`:

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
// Add the following import
import { getUser } from '../../utilities/users-service';
```

Now let's put it to use with this tiny refactor:

```jsx
export default function App() {
  const [user, setUser] = useState(getUser());
```

We could use the React Developer Tools to verify it worked, but why not just add a bit of code to render the user's name in the `<NavBar>` instead?

#### 💪 Practice Exercise - Render the User's Name in `<NavBar>` (5 minutes)

1. Before `<NavBar>` can render the user's name, email, or whatever, you need to pass the `user` state as a prop (name the prop `user`).
2. Render the user's name any way you wish in `<NavBar>`.
  
> Hint:  `<NavBar>` is currently not coded to accept any props

<img src="https://i.imgur.com/vBD8dT4.png">

### Setting the `user` State When a Visitor Signs Up

Now we can finish the sign up functionality by updating the `user` state after the visitor successfully signs up.

Currently, the `signUp()` function in **users-server.js** is returning the token. However, if we take a look at the following code in **SignUpForm.jsx**...

```jsx
// The promise returned by the signUp service method 
// will resolve to the user object included in the
// payload of the JSON Web Token (JWT)
const user = await signUp(formData);
// Baby step!
console.log(user)
```

...we can see that we expect the `signUp()` function to return the user object instead.

Nothing that a quick refactor in **users-service.js** can't handle:

```js
export async function signUp(userData) {
  try {
...
    localStorage.setItem('token', token);
    // Update the following line of code
    return getUser();
...
```

Told you that would be a quick refactor 😊

We need a way to update `user` state defined in `<App>` from `<SignUpForm>`.  This requires that a function be passed from `<App>` to `<SignUpForm>` via a prop.

Ordinarily, if there's business/application logic that needs to be performed other than simply updating state, we would need to write a separate function and pass it via a prop. However, in this case, we simply need to update `user` with the `setUser()` setter function... 

#### 💪 Practice Exercise - Update `user` State From `<SignUpForm>` (5 minutes)

1. Pass `setUser` from `<App>` **down the component hierarchy** to `<SignUpForm>`.
2. In `<SignUpForm>`, replace the `console.log(user)` with a call to the `setUser` function, passing to it `user`.

> Hints:  Ordinarily we would need to destructure props passed to function components. However, class components like `<SignUpForm>` access their props as `this.props.<name of the prop>` so there's no destructuring or anything else necessary.

<hr>

Let's use DevTools to manually clear the token from Local Storage, then sign up as a new user to test out the code!

<img src="https://i.imgur.com/Qj4h58Q.png">

Nice - congrats on implementing sign up functionality!

## 3. Implement Logging Out

**AAU, I want to be able to log out of SEI CAFE just in case someone with the munchies gets a hold of my computer.**

<details><summary>❓ What did we just do to effectively "log out" the currently logged in user?</summary>
<p>

**Removed the token from local storage and set the `user` state to `null`.**

</p>
</details>

You know the flow - start with the UI that the user is going to interact with.

### Add Log Out UI

<details><summary>❓ Which component is the logical place to add a button or link used to log out?</summary>
<p>

**`<NavBar>`**

</p>
</details>

You already know how to use a `<button>` with a click handler, but we can also use React Router's `<Link>` if we prefer the "look" of a hyperlink vs. a button.

However, we don't want to use this particular `<Link>` to navigate, so we'll leave its `to` prop empty:

```jsx
// NavBar.jsx

...
<nav>
  ...
  &nbsp;&nbsp;<span>Welcome, {user.name}</span>
  &nbsp;&nbsp;<Link to="">Log Out</Link>
</nav>
```

Clicking the rendered link will not navigate.

### Add the `onClick` Event Prop & Handler

Now let's add an `onClick` prop and assign an event handler:

```jsx
<Link to="" onClick={handleLogOut}>Log Out</Link>
```

Yup, we need to code that `handleLogOut` handler:

```jsx
// NavBar.jsx

export default function NavBar({ user }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  ...
```

### Finish Implementing Log Out Functionality

<details><summary>❓ We're not done yet, based upon the code in the handler, what else do we need to do?</summary>
<p>

<strong><ol>
  <li>Code and export the <code>logOut</code> function in <strong>users-service.js</strong>.</li>
  <li>Import <code>logOut</code> according to how we wrote the line of code that uses it.</li>
  <li>Pass the <code>setUser</code> setter function as a prop to <code>&LT;NavBar></code>.</li>
  <li>Destructure that prop.</li>
</ol></strong>

</p>
</details>

### Code the `logOut` Function

All the `logOut` function needs to do is remove the token:

```js
// users-service.js

export function logOut() {
  localStorage.removeItem('token');
}
```

### Import `logOut` in `<NavBar>`

We're going to import using the syntax that matches the way we invoked the function:

```jsx
// NavBar.jsx

import { Link } from 'react-router-dom';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';
```

> Note: Using the above syntax to import provides some additional context when using the imported item.

### Pass the `setUser` Setter From `<App>` to `<NavBar>`

**💪 You got this!**

### Destructure the `setUser` Prop in `<NavBar>`

**💪 Slam dunk!**

Log out and celebrate:

<img src="https://i.imgur.com/Itiu1OE.png">

#### Congrats, mern-infrastructure has only one more part remaining!
