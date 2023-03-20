# Mongoose Embedding Related Data

[Embedding Related Data](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-2/week-2/d6-regex-and-mongoose-embedding/6.2-mongoose-embedding-related-data.md)



## 2. Review the starter code. 

- [x] `controllers/movies.js` is passing in a title.
- [x] `views/partials/headers.ejs` is passing in that title.
- [x] What is an SVG graphic?
- [x] `views/movies/new.ejs` is using css grid for layout with `<label><input><label><input><label><input>`
- [x] details button inside `views/movies/index.ejs` is a hyperlink.
- [x] No more home page. Being redirected to `localhost:3000/movies` to show all movies. `views/index.ejs` has been deleted. We're being redirected. 


show route & show controller are for viewing a "SINGLE MOVIE"

## 3. The Movie --< Review Relationship

- [x] Discuss parent child relationship
- [x] Referencing Reviews vs Embedding Reviews
- [x] Embedding sub-documents. Sub-documents have their own `_id`
- [x] We want to go with embedding for this type of relationship. Embedding is always more efficient - unless there is a reason to do so, go with embedding.

There are several scenarios where `referencing data is preferable to embedding` it in NoSQL databases:


#### Tangent thought of Referencing Data instead of Embedding Data
1. Large data sets: If the embedded data set is too large, it can slow down query performance and consume more memory. In this case, it is more efficient to reference the data.

2. Dynamic data: If the embedded data is frequently updated, it can be more efficient to reference the data to avoid rewriting the entire document each time.

3. Complex relationships: If the data has complex relationships, referencing the data allows for more flexibility in querying and managing the data.

4. Reusability: If the same data is used in multiple documents, referencing the data can reduce data redundancy and make it easier to update the data in one place.

5. Scalability: Referencing data can improve scalability by distributing data across multiple servers or clusters, making it easier to scale horizontally.

In summary, referencing data instead of embedding it in NoSQL databases can improve query performance, reduce data redundancy, and improve scalability, especially in scenarios where data is large, dynamic, or has complex relationships.

### *Embed or Reference Reviews?*

- [x] I don't want reviews hanging around out there in the wild. What would be the point of that?
- [x] What would happen if `mongoose-movies` was using an SQL Database? Call on someone.
- [x] Talk about choice in MongoDB/Mongoose

### A Movie to Review ERD Diagram
![A Movie to Review ERD Diagram](https://i.imgur.com/NqDxv0G.png)

**Notice how we don't have a `Review` model? So why do we have a `Review Schema` then?**

## 4 Subdocuments
`null`

## 5. Define a Schema for Review Subdocuments

```js
// models/movie.js
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
  }
}, {
  // Options Object
  timestamps: true
});
// Just above the movieSchema...
const movieSchema = new Schema({
```

Now we try and USE the reviewsSchema.
```js
const movieSchema = new Schema({
  ...
  nowShowing: { type: Boolean, default: false },
  // reviews is an array of review subdocs!
  // Telling Mongoose that the objects we push into the array must match the reviewSchema
  reviews: [reviewSchema]
}, {
  timestamps: true
});
```

## 6. Creating Reviews

- [x] Show the User Story. Do we understand what's going on here? Creating data is NOT a two request process here! There is no `new` functionality. 


### Step 1: Determine the Proper Route:

[Routing for Related Resources (One:Many & Many:Many Relationships)](https://gist.github.com/jim-clark/17908763db7bd3c403e6#routing-for-nested-resources-onemany--manymany-relationships). Let's read into the `Purpose` section to figure this one out.

```
POST	/posts/:id/comments
POST /movies/:id/reviews
```

Wait, so is `:id` for the movie or for the not yet created reviews?


Again...
[Routing for Related Resources (One:Many & Many:Many Relationships)](https://gist.github.com/jim-clark/17908763db7bd3c403e6#routing-for-nested-resources-onemany--manymany-relationships).


Notice the `/comments` and `/posts` as a prefix? See this inconsistent pattern here? Our top level paths (top 7) are consistent. In our `server.js` when we mounted our `moviesRouter`
```js
// server.js
app.use('/movie', moviesRouter);
```

Big Take-Away: When it comes to mounting the `reviewsRouter`, it's inconsistent? Why? Check out `/comments/:id` route. If we wanted to delete the comment, all we need to know is the `:id` of the comment and NOTHING else. We actually don't NEED the `:id` of the movie. That's why we have these `"Shallow" routes` that shorten up the URL.

This is what we gotta know...
```
POST	/posts/:id/comments
POST /movies/:id/reviews
```

### Step 2 - Create the UI that Sends the Request:

A `<form>` can send a POST, but a hyperlink `<a>` cannot sent a POST. 

```html
// movies/show.ejs
</section>
<!-- new markup below -->
<br><br><h2>Reviews</h2>
<form id="add-review-form" method="POST"
  action="/movies/<%= movie._id %>/reviews">
  <label>Review:</label>
  <textarea name="content"></textarea>
  <label>Rating:</label>
  <select name="rating">
    <!-- The values are matching our enums -->
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5" selected>5</option>
  </select>
  <input type="submit" value="Add Review">
</form>
```

How the value for the action is being written? Is `movie._id` referring to the not yet created `reviews` or the already created `movies`?

Update the CSS. Watch the magic happen. 

### Step 3 - Define the Route on the Server

- [x] Each data resource that we are CRUDing, whether there's a model for it or not, whether it's embedded or not, will still have a dedicated router and a dedicated controller (if you're CRUDing).

We don't have a dedicated views for reviews, but we're going to have a dedicated router and a dedicated controller for reviews.

```
touch routes/review.js
```

```js
// routes/review.js
const express = require('express')
const router = express.Router();

// You Do - Require the yet to be created reviews controller 


// You Do - Define the Route below

module.exports = router;
```

👉 You Do - Finish the Router Code Above (1 min)

1. Require the reviews controller (yet to be created).
2. Define the route we just identified for creating a review.

```js
// routes/review.js
const express = require('express')
const router = express.Router();
// You Do - Require the yet to be created reviews controller 
const reviewsCtrl = require('../controllers/reviews')


// All routes start with "/" (root)!!!

// POST /movies/:id/reviews
router.post('/movies/:id/reviews', reviewsCtrl.create)

module.exports = router;
```

Wait, why do we need a `/movies/` in front of our post route?

Overall, the `/movies` segment of the route indicates that this endpoint is specifically related to `movies` and the `:id` parameter specifies which `movie` the `review` is associated with.

```js
// server.js
var moviesRouter = require('./routes/movies');
const reviewsRouter = require('./routes/reviews');

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
// Mounting to root because not all routes for reviews
// starts with /reviews
app.use('/', reviewsRouter);
```

Did our app crash? #failedSuccessfully

```js
// routes/reviews.js

// POST /movies/:id/reviews
router.post('/movies/:id/reviews', reviewsCtrl.create)
```

Still crashing? Oh no! Where to next? 

### Step 4: Create and Code the Controller Action

```
touch controllers/reviews.js
```

```js
// controllers/reviews.js
// Why do we need to bring in our Movie model?
const Movie = require('../models/movie');

module.exports = {
  create
};

async function create(req, res) {
  try {
    const movie = await Movie.findById(req.params.id);
    // we push an object with the data for the 
    // review sub-doc into Mongoose arrays
    movie.reviews.push(req.body);
    // Not saving sub-doc, but the top level document.
    const updatedMovie = await movie.save();
    res.redirect(`/movies/${updatedMovie._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}
```

Okay, let's write a review and check if it was posted correctly via MongoDB Atlas.

## 7. Displaying Reviews

Okay. What is the AAU basketball thing talking about? Explain it to me. 

In our `views/movies/show.ejs`, are we gonna have to pass in reviews separately? `#NO` because the movie document has those reviews embedded in it. 

```html
<!-- views/movies/show.ejs -->
</form>

<!-- New markup below -->

<% if (movie.reviews.length) { %>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Review</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <% movie.reviews.forEach(function(r) { %>
        <tr>
          <td><%= r.createdAt.toLocaleDateString() %></td>
          <td><%= r.content %></td>
          <td><%= r.rating %></td>
        </tr>
      <% }); %>
    </tbody>
  </table>
<% } else { %>
  <h5>No Reviews Yet</h5>
<% } %>

```

