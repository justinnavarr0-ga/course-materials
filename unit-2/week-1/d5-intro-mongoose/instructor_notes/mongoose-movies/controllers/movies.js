const Movie = require('../models/movie')

module.exports = {
  new: newMovie,
  create,
  index
}

async function index(req, res) {
  try {
    const movies = await Movie.find({});
    res.render('movies/index', { movies });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
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

    // Remove empty properties
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }

    const movie = new Movie(req.body);
    await movie.save();

    // for now, redirect right back to new.ejs
    res.redirect('/movies');
  } catch (err) {
    res.redirect('/movies/new');
  }
}



