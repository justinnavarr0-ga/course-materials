var express = require('express');
var router = express.Router();

const passport = require('passport');

// This app has no "home" page, but your projects should 😀
router.get('/', function (req, res, next) {
  res.redirect('/movies');
});

// Google OAuth login route
// The passport.authenticate() method will return a middleware function 
// that does the coordinating with Google's OAUTH server. 
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
// localhost:3000/oauth2callback
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/movies',
    // Change failureRedirect to what's best for your app.
    failureRedirect: '/movies'
  }
));

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(function () {
    // Change path to your landing page
    // (customize this route for your project)!
    res.redirect('/movies');
  });
});



module.exports = router;
