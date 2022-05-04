var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");

/* GET users listing. */
router.get('/profile', function(req, res, next) {
    var stu_email = store('emailAddress');
    var sql='SELECT * FROM students WHERE email_address=?';
    db.query(sql, [stu_email], function (err, result1) {
        if(err) throw err
        else{
          var sql1='SELECT * FROM hostels WHERE email_address=?';
          db.query(sql1, [result1[0].hostel_email], function (err, result2) {
              if(err) throw err
              else{
                  //console.log(result1[0].hostel_email);
                  //console.log(result2);
                  var email = store('emailAddress');
                  res.render('profile', {students : result1,hostels:result2,username:email});
              }
          });
        }
    });

});
module.exports = router;