const Movie = require('../models/movie');

module.exports = {
  create,
  delete: deleteReview
};

async function create(req, res) {
  try {
    const movie = await Movie.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    // We can push (or unshift) subdocs into Mongoose arrays
    movie.reviews.push(req.body);
    // Save any changes made to the movie doc
    await movie.save();
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/movies/${movie._id}`);
  } catch (error) {
    // handle error
  }
}

// controllers/reviews.js

// Include the next parameter - used for error handling in the catch
function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Movie.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id }).then(function (movie) {
    // Rogue user!
    if (!movie) return res.redirect('/movies');
    // Remove the review using the remove method available on Mongoose arrays
    movie.reviews.remove(req.params.id);
    // Save the updated movie
    movie.save().then(function () {
      // Redirect back to the movie's show view
      res.redirect(`/movies/${movie._id}`);
    }).catch(function (err) {
      // Let Express display an error
      return next(err);
      // res.redirect(`/movies/${movie._id}`);
    });
  });
}
