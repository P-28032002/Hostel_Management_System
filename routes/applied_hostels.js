var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");

/* GET users listing. */
router.get('/banglore', function(req, res, next) {
    var applied = store('emailAddress');

    var sql='SELECT * FROM students WHERE emailAddress=?';
    db.query(sql, [city], function (err, result) {
        if(err) throw err
        else{
          //console.log(result)
          res.render('banglore', {hostels : result});
        }
    });
});
module.exports = router;