var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
//GET localhost3000/skills
router.get('/', skillsCtrl.index);
//GET localhost3000/skills/new
router.get('/new', skillsCtrl.addSkill)
//GET localhost3000/skills/12894
router.get('/:id', skillsCtrl.show)

//POST localhost3000/skills
router.post('/', skillsCtrl.create)

//DELETE localhost3000/skills/:id
router.delete('/:id', skillsCtrl.deleteSkill)

router.get('/edit/:id', skillsCtrl.edit)

router.put('/edit/:id', skillsCtrl.update);

module.exports = router;
