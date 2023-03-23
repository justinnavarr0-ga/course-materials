const Movie = require('../models/movie');

module.exports = {
  create,
  delete: deleteReview
};

// controllers/reviews.js

async function deleteReview(req, res, next) {
  try {
    const movie = await Movie.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // Rogue user!
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


