var express = require('express');
var router = express.Router();
const store = require("store2");
/* GET home page. */
router.get('/thankyou', function(req, res, next) {
  var email = store('emailAddress');
  res.render('thankyou',{username:email});
});

module.exports = router;
