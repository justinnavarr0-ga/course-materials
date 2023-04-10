var express = require('express');
var router = express.Router();

const token = process.env.GITHUB_TOKEN;
const ROOT_URL = 'https://api.github.com';

/* GET home page. */
router.get('/', async function(req, res, next) {
  // Use Express's req.query object to 
  // access query parameters
  const username = req.query.username;
  // If this is not a "search",
  // just render the index view
  if (!username) return res.render('index', {userData: null});
  const options = {
    headers: {
      Authorization: `token ${token}`
    }
  }
  const userData = await fetch(`${ROOT_URL}/users/${username}`, options)
    .then(res => res.json());
    console.log(userData)
  // Fetching the the user's repo data
  userData.repos = await fetch(userData.repos_url, options)
    .then(res => res.json());
  // Let's check the first repo to see what properties it has...
  // console.log(userData.repos[0]);
  res.render('index', { userData });
});

module.exports = router;
