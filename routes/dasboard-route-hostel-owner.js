var express = require('express');
var session = require('express-session');
var router = express.Router();
const store = require("store2");
/* GET users listing. */
router.get('/dashboard_hostel_owner', function(req, res, next) {
        var email = store('emailAddress');
        res.render('dashboard_hostel_owner',{username:email})
});
module.exports = router;