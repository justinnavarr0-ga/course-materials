const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/performers');

router.get('/performers/new', performersCtrl.new);
router.post('/performers', performersCtrl.create);

// POST /movies/:id/performers
router.post('/movies/:id/performers', performersCtrl.addToCast);


module.exports = router;