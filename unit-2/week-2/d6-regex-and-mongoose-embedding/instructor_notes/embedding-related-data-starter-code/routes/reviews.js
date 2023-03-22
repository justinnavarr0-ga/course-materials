const express = require('express');
const router = express.Router();

// Require the yet to be created reviews controller
const reviewsCtrl = require('../controllers/reviews')

// Define the Route below
router.post('/movies/:id/reviews', reviewsCtrl.create)

module.exports = router;

