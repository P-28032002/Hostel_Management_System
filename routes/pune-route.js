var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");
/* GET users listing. */
router.get('/pune', function(req, res, next) {
    var city = 'Pune';
    var email = store('emailAddress');
    var sql='SELECT * FROM hostels WHERE city =?';
    db.query(sql, [city], function (err, result) {
        if(err) throw err
        else{
          res.render('pune', {hostels : result,username:email});
        }
    });
});
module.exports = router;