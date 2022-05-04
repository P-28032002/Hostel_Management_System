var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");

/* GET users listing. */
router.get('/applications', function(req, res, next) {
  //  var f_name = req.body.f_name;
  //  console.log(f_name);
   var email = store('emailAddress');
   console.log(email)
    var sql='SELECT * FROM students WHERE hostel_email =?';
    db.query(sql, [email], function (err, result) {
        if(err) throw err
        else{
          //console.log(result)
          res.render('applications', {students : result,username:email});
        }
    });
});
module.exports = router;