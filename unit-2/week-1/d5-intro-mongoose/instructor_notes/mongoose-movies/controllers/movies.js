const Movie = require('../models/movie')

module.exports = {
  new: newMovie,
  create
}

function newMovie(req, res) {
  res.render('movies/new')
}

async function create(req, res) {
  try {
    // Convert nowShowing's checkbox to a boolean (instead of 'on')
    // nowShowing might not even exist. That's fine. It'll just return undefined which is falsy.
    req.body.nowShowing = !!req.body.nowShowing;
    // Removing leading/trailing spaces
    req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);

    const movie = new Movie(req.body);
    await movie.save();

    // for now, redirect right back to new.ejs
    res.redirect('/movies/new');
  } catch (err) {
    res.redirect('/movies/new');
  }
}