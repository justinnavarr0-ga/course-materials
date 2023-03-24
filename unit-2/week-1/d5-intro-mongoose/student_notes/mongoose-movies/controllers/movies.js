const Movie = require('../models/movie')

function newMovie (req, res){
    res.render('movies/new')
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

async function create(req, res) {
    try {
        // convert nowShowing's checkbox of nothing or "on" to boolean
        req.body.nowShowing = !!req.body.nowShowing;
        // remove any whitespace at start and end of cast
        req.body.cast = req.body.cast.trim();
        // split cast into an array if it's not an empty string - using a regular expression as a separator
        if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);

        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
        }

        const movie = new Movie(req.body);
        await movie.save();
        console.log(movie);
        // for now, redirect right back to new.ejs
        res.redirect('/movies');
      } catch (err) {
        res.redirect('/movies/new');
      }
}


module.exports = {
    new: newMovie,
    create,
    index
}