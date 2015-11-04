var express = require('express'),
  router = express.Router(),
  models = require('../models/index');

router.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }).then(function(user) {
    res.json(user);
  });
});

// get all users
router.get('/users', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});


module.exports = router;
