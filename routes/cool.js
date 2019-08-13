var express = require('express');
var router = express.Router();

/* GET user detail. */
router.get('/', function(req, res, next) {
    res.send('This is the detail page for the user');
});

module.exports = router;