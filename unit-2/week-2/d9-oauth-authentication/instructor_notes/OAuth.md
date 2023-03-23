# OAuth Authentication with Express & Passport

[BTY Class Repo](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-2/week-2/d9-oauth-authentication/9.1-oauth-authentication.md)

[OAuth Starter Code](https://github.com/KendrickPC/oAuth-Lecture-Starter-Code)

Step 1: Register our App with Google's OAuth Server
Step 2: Define the User model
Step 3: Discuss PassportJS
Step 4: Install & Configure Session middleware
Step 5: Install PassportJS
Step 6: Create a Passport config module
Step 7: Install a Passport Strategy for OAuth
Step 8: Configure Passport
Step 9: Define routes for authentication
Step 10: Add Login/Logout UI

## 1. Setup

- [x] Make sure to update your .env file
- [x] npm install for the node_modules
- [x] run `node seed.js` to delete and seed the database.
- [x] Add a review to Interstellar and talk about the Hamilton Khaki Field
- [x] Remove any existing reviews. run node REPL. `.load crud-helper.js` THen run `Movie.updateMany({},  { reviews: [] }).then(console.log)` then `.exit`. Did our review about the wonderful Hamilton Khaki Field (for Interstellar) get deleted?

## 2. Intro to Authentication

- [x] Why teach Authentication to Junior Developers? 

- [x] What is Authentication? 

- [x] Authentication vs. Authorization

Authentication confirms the user's identity, while authorization uses a session token or key to grant access to specific parts of an application.

So... If we track which user made a review, we can post their fancy avatar (with that review) and make sure only that user (and the mean `admin`) can delete/edit their own reviews. 

## 3. Why OAuth? 

❓ What pitfalls of username/password authentication can you think of from a user's perspective?

❓ What might be the pitfalls of username/password authentication from a business that owns the web app point of view?

## 4. What is OAuth?

### A Bit of OAuth Vocabulary
Don't memorize this. Understanding is more important than memorizing.

### What is it?

OAuth is a protocol that different entities agreed to adhere to so everyone can share authorization concerns securely amongst themselves without having to build some centralized system. Think of OAuth as a set of requirements that many companies adhere to so it is easier for everyone to use a sharable solution. OAuth is an authorization protocol.

*OAuth Analogy*

OAuth can be compared to a bouncer at a nightclub who checks the identification of guests before allowing them entry. Just like the bouncer grants access to the club based on the guest's identification, OAuth grants access to a user's data or resources based on their authorization credentials. In this analogy, the club can be seen as the resource provider, the guests as the users, and the bouncer as the OAuth protocol that ensures secure authorization without requiring a centralized system.

### OAuth 2's Flow & Scope

The OAuth Dance.

Don't bother memorizing this. 

[OAuth Overkill Link](https://darutk.medium.com/diagrams-and-movies-of-all-the-oauth-2-0-flows-194f3c3ade85)

The ultimate goal is for the client application (our web app) to obtain an access token from an OAuth provider that allows the app to access the user's resources from that provider's API's.

For mongoose-movies, as is the case with many applications, we are only interested in using OAuth for identifying who the user is by accessing their basic profile info (name, email & avatar).

OAuth is complex, but we'll be using `PassportJS` middleware that will handle most of the "OAuth dance" for us.

[Passport JS](https://www.passportjs.org/)

❓ OAuth Review Questions

(1) True or False: If your site allows users to authenticate via OAuth, you should ensure they create a "strong" password.

(2) To an OAuth provider, such as Google, what is the client application?

## 5. Preview the Completed mongoose-movies App

[DEMO THIS APP](https://mongoose-movies-sei.herokuapp.com/movies)

Authorization vs Authentication.

## 6. Today's OAuth Game Plan

Cute 10 step program.

- [x] Step 1 - Register Our App

[Console for Google Cloud Platform](https://console.cloud.google.com/apis/dashboard?pli=1)

1. Click `new project`
2. Update project name to `mongoose-movies` then click create. When done creating, click `select project`
3. Can we use the same credentials for multiple projects? `NO! NOPE! NO WAY! YOU CANNOT!` It's best practice to register each app separately.
4. Enable the `PEOPLE API`
5. Step 1.4 Obtain Credentials for APP (`Client ID` and `Client SECRET`)
6. If you choose an app logo, there is an approval process w/Google and that could take a bit of time. DO NOT UPLOAD A LOGO!
7. Make sure to save before exiting Google Cloud Console

### Step 2 - Define the User Model

We're creating a `User Model` so we can track our users.

1. Create the user models file with `touch models/user.js`
2. Define the minimal schema for the User model
```js
// models/user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // Let's wait and discover what Google wants to give us.
  name: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
```

### Step 3 - Passport Discussion

OAuth implementation is complicated with various redirects and tokens. PassportJS is an authentication framework that handles authentication-related tasks for Express apps, leaving the details up to the developer. Passport uses plug-ins called strategies to handle different types of authentication. There are over 500 strategies available, including passport-google-oauth. Passport middleware adds a user property to the req object for authenticated requests, allowing access to the user document in all controller actions without querying the DB.

Step 1: Require Passport and its Google OAuth2 strategy:

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
```

Step 2: Configure Passport to use the Google OAuth2 strategy:

```js
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // This function is called after the user has authenticated with Google
    // You can use the profile information to create or update a user document in your database
    // The done function should be called with the user document when finished
    done(null, user);
  }
));
```

Step 3: Configure Passport to serialize and deserialize the user document:

```js
// serializeUser is a function in Passport.js that helps remember a user's identity by writing it down in a notebook.
passport.serializeUser(function(user, done) {
  // This function is called when Passport needs to serialize the user document for storage in a session
  done(null, user.id);
});

// deserializeUser is a function in Passport.js that helps find a user's identity by looking it up in the notebook.
passport.deserializeUser(function(id, done) {
  // This function is called when Passport needs to deserialize the user document from the session
  // User.findById should be replaced with your own function for retrieving a user document from your database.
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
```

Step 4: Add the Passport middleware to your Express app:

```js
app.use(passport.initialize());
app.use(passport.session());
```

Step 5: Now, when a user authenticates with Google and sends a request to your app, Passport middleware will add a `user` property to the `req` object:

```js
app.get('/protected', (req, res) => {
  if (req.user) {
    // The user is logged in, so you can access the user document from req.user
    console.log(req.user);
  } else {
    // The user is not logged in
    res.redirect('/login');
  }
});
```

Note that you can access the user document in ALL of your controller actions without querying the database, because Passport middleware has already added it to the `req` object.

Now, we will `NEVER EVER` query for a `user` document. 

### Step 4 - Session Middleware

What is `Express Sessions`❓❓❓

Imagine you're playing with Ken's Pokemon Cards and you want to take a break, but you also want to remember exactly what you were doing when you come back later.

`Express sessions` are like taking a picture of Ken's Pokemon cards and putting them away, so that when you come back, you can look at the picture and remember what you were playing with before.

Basically, Express sessions remember information about your website or web application (like whether you're logged in or what's in your shopping cart) so that when you come back later, the website or app can remember what you were doing before.

*If the server restarts, session data will be lost. You will see this happen when nodemon restarts the server and you are no longer logged in.* Basically, get used to logging in over and over again. The End.

Passport depends on `session middleware`. Let's install session middleware first. 

Install Express Session
`npm install express-session`

Require `express-session` below the `logger` in server.js
```js
// server.js

var logger = require('morgan');
// new code below
// session will create and add a cryptographically signed cookie
var session = require('express-session');
```

Add a SECRET to .env
```console
GOOGLE_CALLBACK=http://localhost:3000/oauth2callback
SECRET=BTYRocks
```

Configure and Mount Session Middleware
```js
app.use(cookieParser());

// new code below
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// Don't worry about the resave and saveUninitialized settings, they are being set to suppress deprecation warnings.
```

### Step 4.4 - Verifying Session Middleware

Go to chrome console and look for `connect.sid`

❓ Review Questions (1 min)

(1) Before a web app can use an OAuth provider, it must first r__________ with it to obtain a client ____ and a client secret.

(2) Passport uses s__________ designed to handle specific types of authentication.

(3) If there is an authenticated user, the request (req) object will have what property attached to it by Passport?

### Step 5 - Install Passport

Install Passport.js
`npm i passport`

Require `express-session`

```js
// server.js
var session = require('express-session')
// new code below
const passport = require('passport')
```

Mount `passport` under `session middleware`
```js
// server.js

// app.use(session({... code above

// The way passport middleware is being mounted is straight from the docs.
app.use(passport.initialize());
app.use(passport.session());
```

### Step 6 - Create a Passport Config Module

create a separate module so that we don't pollute server.js.

```console
touch config/passport.js
```

We'll be writing configuration code in our `passport.js` file.

### Step 6.1 - Passport Module's Exports Code

Inside server.js

```js
// server.js

require('./config/database');
// new code below
// Configure passport middleware
require('./config/passport');
```

### Step 6.2 - Require Passport

Give access to the passport module
```js
// config/passport.js

const passport = require('passport');
```

### Step 7 - Install the OAuth Strategy

```console
npm i passport-google-oauth
```

### Step 7.1 - Require the OAuth Strategy

require the passport-google-oauth module

```js
// config/passport.js
const passport = require('passport');
// new code below
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
```

Let's make sure there's no errors before moving on to the fun stuff!

### Step 8 - Configuring Passport

We'll be doing three main things here.

1. Call the `passport.use()` method to plug-in an instance of the OAuth strategy and provide a verify callback function that will be called whenever a user has logged in using OAuth.
2. Call the passport.serializeUser() method to provide a callback that Passport will call after the verify callback.
3. Call the passport.deserializeUser() method to provide a callback that Passport will call for every request when a user is logged in.

### Step 8.1 passport.use()

In config/passport.js:
```js
// config/passport.js

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// new code below
// passport.use takes an instance of a strategy
passport.use(new GoogleStrategy(
  // Configuration object
  // Our GoogleStrategy needs to know some things. 
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  // The verify callback function
  // Let's use async/await!
  async function(accessToken, refreshToken, profile, cb) {
    // A user has logged in with OAuth...
  }
));
```

### Step 8.2 - The Verify Callback

The verify callback will be called by Passport when a user has logged in with OAuth.

But wait, how can we tell what user to lookup?

### Step 8.3 - Modify the User ModelStep 8.3 - Modify the User Model
Adding a property for `googleId` to our `userSchema` inside `models/user.js` file:

```js
const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String
}, {
  timestamps: true
});

```

### Step 8.4 - Verify Callback Code

We now need access to our `User` model:

```js
// config/passport.js

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// new code below
const User = require('../models/user');

passport.use(new GoogleStrategy(
  // Configuration object
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  // The verify callback function...
  // Marking a function as an async function allows us
  // to consume promises using the await keyword
  async function(accessToken, refreshToken, profile, cb) {
    // When using async/await to consume promises,
    // there is no use of .then or .catch, so we
    // use a try/catch block to handle an error
    try {
      // A user has logged in with OAuth...
      // Instead of using promise.then with a callback,
      // we can use the await keyword followed by the promise.
      // When that promise is fulfilled, it will return
      // whatever the promise's resolved value is.
      let user = await User.findOne({ googleId: profile.id });
      // Existing user found, so provide it to passport
      // error first callback signature
      // We're giving passport the user body.
      if (user) return cb(null, user);
      // We have a new user via OAuth!
      user = await User.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      });
      // error first callback signature
      // We're giving passport the user body.
      return cb(null, user);
    } catch (err) {
      // error first callback signature
      return cb(err);
    }
  }
));
```

Congratulation! That was the toughest part of our code (the verify function)! 

### Step 8.5 serializeUser() & deserializeUser() Methods

With the passport.use() method done, we now need to code two more methods inside of config/passport module.

Look up in the notes above and tell me what `serialize` and `deserialize` mean. 

### Step 8.6 serializeUser() Method

After the verify callback function returns the user document, passport calls the passport.serializeUser() method's callback passing that same user document as an argument.

```js
// config/passport.js

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});
```

The given code snippet shows how the Passport.js library is used to serialize and deserialize user data for authentication purposes. 

The `serializeUser()` method is used to store a unique identifier of the user in the session, while the `deserializeUser()` method is used to retrieve the user data from the session. 

MongoDB's `_id` field is used as the unique identifier in this example.

```js
// config/passport.js
passport.deserializeUser(async function(userId, cb) {
  // cb has an error first signature
  cb(null, await User.findById(userId));
  // The above async/await code replaces this code
  // User.findById(userId).then(function(user) {
  //   cb(null, user);
  // });
});
```

Let's do another error check. Save it. Make sure your server is still running and your app is still working. 

This is the most code intensive part of the lesson. We can close out of our `passport.js` module. 

### Step 9 - Define Routes for Authentication

We're going to need three auth related routes:

1. A route to handle the request sent when the user clicks Login with Google

2. The /oauth2callback route that we told Google to call after the user confirms or denies the OAuth login.

3. Lastly, we will need a route for the user to logout.

### Step 9.1 Coding the Routes...

Let's add these new routes inside `routes/index.js`

Let's bring in our `passport` module.
```js
// routes/index.js

var router = require('express').Router();
// new code below
const passport = require('passport');

// router.get('/'...)

// Google OAuth login route
// The passport.authenticate() method will return a middleware function that does the coordinating with Google's OAuth server.
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));
```

### Step 9.3 Google Callback Route

```js
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/movies',
    // Change failureRedirect to what's best for your app.
    failureRedirect: '/movies'
  }
));
```

### Step 9.4 Logout Route

```js
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    // Change path to your landing page (customize this route for your project)!
    res.redirect('/movies');
  });
});
```

The logout() method was automatically added to the req object by Passport!

## Step 10 - Add Login/Logout UI

We want the nav bar in views/partials/header.ejs to update dynamically depending upon whether there's an authenticated user or not:

![Google Login](https://i.imgur.com/TPzABUk.png)
versus
![Logout](https://i.imgur.com/0tt4eu3.png)

This `CUSTOM` Passport.js middleware function in Express assigns the req.user object to the res.locals object, making it available to the view templates that will be rendered in response to the current request.

The res.locals object is an object that contains response local variables, scoped to the request, and therefore available only to the view(s) rendered during that request/response cycle (if any). These variables are useful to expose request-level information such as authenticated user details, and they can be used directly within your templates.

By adding `next()` at the end of the middleware function, it passes the request on to the next middleware function in the stack, allowing for the application to continue processing the request.

Analogy:

So, imagine you have a passport to go to different places. This code is like a security guard who checks your passport and makes sure you're allowed to go to a certain place.

The guard checks your passport and then writes down some important information about you, like your name and where you're from, on a special paper. This paper is called "res.locals object".

Later, when you get to the place you're going, some people there might want to know your name and where you're from. The special paper the guard wrote on can be used to tell those people that information, so they know who you are.

So, this code makes sure you're allowed to go to a certain place, and then gives some information about you to the people who are expecting you.

```js
// server.js

...
app.use(passport.session());

// New code below here
// Add this CUSTOM middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  // what happens if we don't call next?
  next();
});
```

Now the logged in user is in a user variable that's available inside all EJS templates!

If nobody is logged in, user will be undefined.

### Step 10.2 Add the Login / Logout UI Logic

Copy and paste the `partials/header.ejs`

```js
// partials/header.ejs

<nav>
  <img src="/images/camera.svg">
  <a href="/movies" <%- title === 'All Movies' ? 'class="active"' : '' %>>ALL MOVIES</a>
  <% if (user) { %>
    <a href="/performers/new"	<%- title === 'Add Performer' ? 'class="active"' : '' %>>
		ADD PERFORMER</a>
    <a href="/movies/new" <%- title === 'Add Movie' ? 'class="active"' : '' %>>ADD MOVIE</a>
    <a href="/logout">LOG OUT</a>
  <% } else { %>
    <a href="/auth/google" class="login">LOG IN&nbsp;<img src="https://i.imgur.com/FHjYyi0.png"></a>
  <% } %>
</nav>
```

```css
/* public/stylesheets/style.css: */

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
}

.login img {
  height: 30px;
}
```

Try logging in and out. Does it work? Well, it works for me! May the 4th be with us. 

Try NOT calling `next()` after `res.locals.user`.

## 7 Code the User Stories

```
AAU, I want to add reviews for a movie when I'm logged in.
```

We already have a <form> for creating reviews on the views/movies/show.ejs template.

However, we only want this UI to show when there's a logged in user.

### 👉 You Do - Hide/Show Review <form> (2 minutes)

Using an <% if %> EJS block in views/movies/show.ejs, render the <form> for adding a review ONLY if there's a logged in user.

HINT: Two line of code. It's an IF block.

Go ahead and test it with reviews. 

## Update the `reviewSchema`

We're going to make three changes to the reviewSchema to make it user-centric:

1. Add a user property that references the user's ObjectId that created the review.
2. To avoid having to populate review sub-docs just to display the user's name with them, we're also going to add a userName property.
3. Similar to userName, let's also add a userAvatar property.

Here's the updated models/movie.js:
```js
const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  // Add the 3 new properties below
  user: {
    // A user property that references the user's ObjectId that created the review.
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Adding a userName property
  userName: String,
  // Adding a userAvatar property
  userAvatar: String
}, {
  timestamps: true
});
```

Let's make a review while logged in. It failed. Why? 

Now that we've updated our Schema, where should we go next? Why?

```js
// controllers/reviews.js

async function create(req, res) {
  try {
    const movie = await Movie.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    movie.reviews.push(req.body);
    await movie.save();
    res.redirect(`/movies/${movie._id}`);
  } catch (error) {
    // handle error
  }
}
```

Okay. 
1. Let's restart the server (b/c we changed our models) 
2. and create a movie. 
3. Then add a review. 
4. Then check MongoDB Atlas to see if our user properties are added.


Update How Reviews Are Being Displayed:

`no-referrer policy`
```html
<!-- views/movies/show.ejs  -->

<table>
 <thead>
   <tr>
     <th>User</th>
     <th>Date</th>
     <th>Review</th>
     <th>Rating</th>
   </tr>
 </thead>
 <tbody>
   <% let total=0 %>
     <% movie.reviews.forEach(function(r) { %>
       <% total +=r.rating %>
         <tr>
           <td class="review-user"><img alt="avatar" src="<%= r.userAvatar %>" referrerpolicy=" no-referrer">
             <%= r.userName %>
           </td>
           <td>
             <%= r.createdAt.toLocaleDateString() %>
           </td>
           <td>
             <%= r.content %>
           </td>
           <td>
             <%= r.rating %>
           </td>
         </tr>
         <% }); %>
           <tr>
             <td colspan="3"></td>
             <td><strong>
                 <%= (total / movie.reviews.length).toFixed(1) %>
               </strong></td>
           </tr>
 </tbody>
</table>
```

Update the CSS now that the avatar is showing up.

```css
/* public/stylesheets/style.css */

.review-user {
  display: flex;
  justify-content: center;
  align-items: center;
}

.review-user img {
  border-radius: 50%;
  height: 40px;
}
```

## Code the Next User Story

```
AAU, I want to be able to delete a review that I previously created.
```

We want to ensure that only the user that created a review can delete it.

### Step 1 - Determine the Proper Route

❓ What is the proper route to delete a review?

```
DELETE /reviews/:id
```

Although Reviews are a nested resource, the server doesn't need to know the id of the movie that the review is embedded within; thus the "shallow route".

### Step 2 - Display the UI to Send the HTTP Request

```html
<!-- views/movies/show.ejs -->
...
        <th>Rating</th>
        <!-- Add this placeholder header cell -->
        <th></th>
...
          <td><%= r.rating %></td>
          <!-- Add this td -->
          <td>
            <!-- Used to be if (user && user._id) to take care of undefined/null -->
            <!-- We cannot compare `===` objects  -->
            <% if (user?._id.equals(r.user)) { %>
              <form action="/reviews/<%= r._id %>?_method=DELETE" method="POST">
                <button type="submit">X</button>
              </form>
            <% } %>
          </td>
```

Install `method-override` with npm 

```
npm i method-override
```

Require `method-override` in `server.js`

```js
// server.js

var passport = require('passport');
// Add the line below 
var methodOverride = require('method-override');
```

Mount `method-override`
```js
// server.js

app.use(cookieParser());
// Add the line below
app.use(methodOverride('_method'));
```

### Step 3 - Define the Route

👉 You Do - Define the delete Route (1 min)

```js
// routes/reviews.js

// DELETE /reviews/:id
router.delete('/reviews/:id', reviewsCtrl.delete);
```

### Step 4 - Code the **`delete`** Action

```js
// controllers/reviews.js

module.exports = {
  create,
  delete: deleteReview
}

async function deleteReview(req, res, next) {
  try {
    const movie = await Movie.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // if movie is null or undefined, which means that the movie with the specified review ID and user ID was not found. If that's the case, the function returns a redirect response to the /movies page.
    if (!movie) return res.redirect('/movies');
    // Remove the review using the remove method available on Mongoose arrays
    movie.reviews.remove(req.params.id);
    // Save the updated movie
    await movie.save();
    // Redirect back to the movie's show view
    res.redirect(`/movies/${movie._id}`);
  } catch (err) {
    // Let Express display an error
    return next(err);
    // res.redirect(`/movies/${movie._id}`);
  }
}
```

### Step 5 - Render or Redirect

Already done in the above code!

Test it out!

## 8. Implement Authorization

❓ What is authorization?
```
Authorization determines what functionality a given user can access. For example, we don't want unauthenticated users to be able to delete reviews.
```

In this step, we will see how we can easily protect the routes that require a user to be logged in, e.g., adding a movie or review.

Passport adds a nice method to the req object, `req.isAuthenticated()` that returns `true` or `false` depending upon whether there's a logged in user or not.

We're going to write our own little middleware function to take advantage of `req.isAuthenticated()` to perform some authorization.

### Using Authorization Middleware

```js
// routes/movies.js

router.get('/', moviesCtrl.index);
// Use ensureLoggedIn middleware to protect routes
router.get('/new', ensureLoggedIn, moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', ensureLoggedIn, moviesCtrl.create);

```

### Code the Authorization Middleware

```
touch config/ensureLoggedIn.js
```

```js
// config/ensureLoggedIn.js

// Middleware for routes that require a logged in user
module.exports = function(req, res, next) {
  // Pass the req/res to the next middleware/route handler
  if ( req.isAuthenticated() ) return next();
  // Redirect to login if the user is not already logged in
  res.redirect('/auth/google');
}
```

Now we have to require it in our routes/movies.js
```js
// routes/movies.js

const moviesCtrl = require('../controllers/movies');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');
```

### 👉 You Do - Protect More Routes (3 mins)

Protect the appropriate routes in:
- `routes/reviews.js`
- `routes/performers.js`

We coded authentication in a way that GA thinks is good to learn Mongoose and authentication. In the real world, you would implement authentication right away. 

[Passport Google OAUTH tutorial with SQL Lite ](https://www.passportjs.org/tutorials/google/)