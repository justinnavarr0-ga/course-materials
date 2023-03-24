var express = require('express');
var router = express.Router();

const moviesCtrl = require('../controllers/movies')

/* GET movies listing. */
// localhost: 3000/movies/new
//All routes start with /movies 
router.get('/new', moviesCtrl.new);

router.post('/', moviesCtrl.create)

//GET // movies/ 
router.get('/', moviesCtrl.index)

module.exports = router;
