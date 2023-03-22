const Performer = require('../models/performer');
const Movie = require('../models/movie');

module.exports = {
  new: newPerformer,
  create,
  addToCast
};

async function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  const performer = await Performer.create(req.body)
  res.redirect('/performers/new');
}

async function newPerformer(req, res) {
  const performers = await Performer.find({})
  res.render('performers/new', {
    title: 'Add Performer',
    performers
  });
}

async function addToCast(req, res){
  const movie = await Movie.findById(req.params.id)
  console.log(req.body)
  movie.cast.push(req.body.performerId)
  await movie.save()
  res.redirect(`/movies/${movie._id}`);
}