![Express Node JS Image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.brainvire.com%2Fwp%2Fwp-content%2Fuploads%2F2016%2F05%2Fexpress-js-an-ideal-node-js-framework-to-develop-enterprise-web-applications.jpg&f=1&nofb=1&ipt=bf3dfad0e9ca67d2c509fc53154486ef2670f4b83132da7ec9ef89f17f631120&ipo=images)

# Intro to the Express Framework for Node

[Intro to the Express Framework for Node](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-2/week-1/d1-intro-full-stack/1.3-intro-express.md)

## 1. Setup
- [x] `npm init -y` instead of `npm init`
- [x] Accept the defaults, except for the entry point - set this to be "server.js".

## 2. The Three Fundamental Capabilities of Web Application Frameworks

#### 1. The Ability to Define Routes
```js
const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to Reddit!');
});

// Define a route for a subreddit page
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`Welcome to the ${subreddit} subreddit!`);
});

// Define a route for a specific post
app.get('/r/:subreddit/comments/:postId/:title', (req, res) => {
  const { subreddit, postId, title } = req.params;
  res.send(`Welcome to the ${title} post on the ${subreddit} subreddit!`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

```

#### 2. Middleware Analogy

*Popular Middleware Packages for Express.js*

1. `body-parser`: This middleware parses incoming request bodies in a middleware before your handlers, making it easier to work with form data, JSON, and other types of data submitted via HTTP POST requests.

2. `morgan`: This middleware logs HTTP requests and responses to the console, making it easier to debug your app and track down errors.

3. `cors`: This middleware enables cross-origin resource sharing (CORS), allowing your app to make requests to resources on other domains.

4. `express-session`: This middleware provides session management capabilities for your app, allowing you to store session data on the server and access it across requests.

5. `passport`: This middleware provides authentication capabilities for your app, making it easy to authenticate users using various strategies, such as local authentication, OAuth, or OpenID.

6. `helmet`: This middleware sets various HTTP headers to improve the security of your app, such as adding XSS protection, preventing clickjacking, and enforcing HTTPS.

7. `compression`: This middleware compresses HTTP responses to reduce the amount of data sent over the network, improving the performance of your app.

**An analogy for middleware** could be a relay race in track and field. Just as relay runners pass the baton between each other to complete a race, middleware acts as the mediator between different software components or systems, passing information and requests back and forth. Just as each relay runner has a specific role in the race, *middleware also has a specific purpose, which is to facilitate communication and data exchange between different applications, services, or databases.* And just as a relay team works together to achieve a common goal, *middleware helps different software components work together seamlessly to accomplish a specific task or function.*

[Passport is Authentication Middleware for Node.js.](https://www.passportjs.org/)

#### 3. The ability to use a view engine to render dynamic templates

Don't get too caught up with this example. We will be using EJS, **NOT** Pug! Just get a general understanding of what *"view engine to render dynamic templates"* means. 
```js
const express = require('express');
const app = express();

// Set up Pug as the view engine
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // Render the "index" template using Pug
  res.render('index', { title: 'Welcome to my app!', message: 'Hello, world!' });
});
```

```
<!-- index.pug -->
html
  head
    title= title
  body
    h1= message
```

## 3. Intro to the Express Framework
`null`

## 4. Express - Hello World!
```js
// server.js

// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
```

- Let's break down this code line by line
- [x] Step 1:
```js
console.log('\nlogging express -->', express);
console.log('\ncalling express function -->', express());
```
- [x] Step 2: What are we storing in the app variable? 
- [x] Step 3: app.get()... Explain this code to me.
```js
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.get('/visual', function (req, res) {
  res.send('<h2>Kenjamin Button is the visual member of BTY!</h2>');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
```

Using `send()` is a general purpose way to respond to the request, however, it's kind of like using `console.log()` - **soon we'll be using more specific methods.**

- [x] Test the code out for both routes.
- [x] Explain Step 3 to me.

## 5. Basic Structure of the Express Server

Document using comments what a typical Express server needs to do:

```js
// server.js

// Configure the app (app.set)
  
  
// Mount middleware (app.use)
```

- [x] Make some changes to `res.send()`. Server won't update. Restarting the server every time we make a change is a grind. Let's find a better way to do this.

## 6. Auto-Restart the Server Using Nodemon

```console
nodemon -v
nodemon --version
```

Does it work with a `command + R` to refresh the page? 

#### Back to routing...

Express uses the `HTTP Method` and the `Path/Endpoint` of the HTTP request to match a route defined in the application.

![HTTP Method](https://bytenbit.com/wp-content/uploads/2019/09/HTTP-method-1024x419.png)

[Express Routing Documentation](https://expressjs.com/en/guide/routing.html)

## 7. The Route's Callback

#### ❓ What part(s) of the HTTP Request does Express use when determining what route the request matches?

#### ❓ What is that `next` parameter doing there? What does that tell us?

## 8. Request & Response Objects

- [x] Show student an example of the `req` object.
- [x] Show student an example of the `res` object.

## 9. Ways to Respond to a Request

[What is JSON? JSON Tutorial](https://www.w3schools.com/js/js_json_intro.asp)

## 10. Rendering Views

- [x] path.join() is simply a Node method that builds a properly formatted path from segment strings passed to it.

- [x] __dirname is available in Node modules and represents the path of the current folder where the currently running code lives; and views is the name of the folder we created to hold our views.

`Pro Tip`: Copy and Paste the error messages and search GOOGLE for how to fix those error messages.

## 11. Dynamic Templating Using EJS

- use EJS to dynamically generate HTML
- we can also pass in a `JavaScript object` as a second argument and all of its properties will be accessible in the view within ejs tags!

- Squids not dropping ink versus Squids dropping ink.

## 12. Redirecting

#### Determining when to res.render() or res.redirect()
- When the browser sends a GET HTTP request, the server should respond with res.render().

- Any request other than a GET method, i.e. POST, PUT or DELETE, results in data being changed on the server and typically should be responded to using res.redirect().

## 13. ❓ Essential Questions (1 min):

- Squids versus clown hats aka flounder fish.