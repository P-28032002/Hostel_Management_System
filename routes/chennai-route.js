var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");
/* GET users listing. */
router.get('/chennai', function(req, res, next) {
    var city = 'Chennai';
    var email = store('emailAddress');
    var sql='SELECT * FROM hostels WHERE city =?';
    db.query(sql, [city], function (err, result) {
        if(err) throw err
        else{
          res.render('chennai', {hostels : result,username:email});
        }
    });
});
module.exports = router;