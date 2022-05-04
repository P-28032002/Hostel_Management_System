var express = require('express');
var session = require('express-session')
var router = express.Router();
/* GET users listing. */
router.get('/logout', function(req, res) {
  res.redirect('/login');
});
module.exports = router;