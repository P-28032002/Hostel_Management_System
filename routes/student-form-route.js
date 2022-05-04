var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");


// to display student form 
router.get('/student/:email', function(req, res, next) {
//router.get('/student', function(req, res, next) {
  var email = req.params.email;
  //console.log(email);
  store.setAll({emailaddress: email})
  console.log(store.getAll());
 var email = store('emailAddress');
  res.render('student-form',{username:email});
});

// to store user input detail on post request
 router.post('/student', function(req, res, next) {
    //router.post('/student', function(req, res, next) {
    var email = store('emailaddress');
    inputData ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        gender: req.body.tenant,
        age: req.body.age,
        college_name: req.body.college_name,
        degree: req.body.degree,
        branch_name: req.body.branch_name,
        hostel_email:email
    }

// check unique email address
var sql='SELECT * FROM students WHERE email_address =? and hostel_email=?';
//var sql1='SELECT * FROM applications WHERE email_address =? and hostel_email=?'
db.query(sql, [inputData.email_address,inputData.hostel_email] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.email_address+ " was already exist. You have already applied to this hostel.";
 }
 if(inputData.age < 0)
 {
     var msg = "The age cannot be less than 0";
 }
 else{
     
    // save users data into database
    var sql = 'INSERT INTO students SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
           
  var msg ="Your application has been received by the hostel owner!!";
 }
 //res.render('payment',{alertMsg:msg,username:email});
 res.redirect('/payment');
})
// db.query(sql1, [inputData.email_address,inputData.hostel_email] ,function (err, data, fields) {
//     if(err) throw err
//     if(data.length>1){
//         var msg = inputData.email_address+ " was already exist. You have already applied to this hostel.";
//     }else{
        
//        // save users data into database
//        var sql = 'INSERT INTO students SET ?';
//       db.query(sql, inputData, function (err, data) {
//          if (err) throw err;
//               });
              
//      var msg ="Your application has been received by the hostel owner!!";
//     }
//     res.render('student-form',{alertMsg:msg});
//    })
     
});
module.exports = router;