var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");

router.get('/payment', function(req, res, next) {
  var email = store('emailaddress');
  console.log(email);
  var sql = 'select * from hostels where email_address=?';
  db.query(sql, [email], function (err, result) {
      if (err) throw err;
      else
      {
      rent1 = result[0].rent;
      store.setAll({rent:rent1});
      console.log(store.getAll());
      res.render('payment',{amount : result});
      }
});
});


router.post('/payment', function(req, res, next) {
    var rent = store('rent');
    var email = store('emailaddress')
    inputData ={
        fname: req.body.firstname,
        lname: req.body.lastname,
        pay: req.body.pay,
        cardnumber: req.body.cardnumber,
        cvv: req.body.cvv,
        month: req.body.month,
        year: req.body.year,
        amount:rent,
        hostel_email:email,
    }

    // save users data into database
    var sql = 'INSERT INTO payment SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
      var sql1 = 'UPDATE hostels SET numberofRoomsVacant = numberofRoomsVacant - 1 where email_address=?';
      db.query(sql1, email, function (err, result){
        if (err) throw err;
           });
        });

   res.redirect('/thankyou');
});
module.exports = router;