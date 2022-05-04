var express = require('express');
var session = require('express-session');
var router = express.Router();
const store = require("store2");

/* GET users listing. */
router.get('/contactus', function(req, res, next) {
        
        var email = store('emailAddress');

        res.render('contactus',{username:email} );
});
module.exports = router;