var express = require('express');
var router = express.Router();

var moviesCtrl = require('../controllers/movies')

// GET movies/new 
// localhost:3000/movies/new
// All routes start with /movies
// /movies is already taken care of in server.js
router.get('/new', moviesCtrl.new)

// POST /movies
// localhost:3000/movies
router.post('/', moviesCtrl.create)

// GET	/movies	Read all movies
router.get('/', moviesCtrl.index)


module.exports = router;
