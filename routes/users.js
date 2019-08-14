var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET user detail. */
router.get('./cool', function(req, res, next) {
    res.send('This is the detail page for the user');
});

module.exports = router;
