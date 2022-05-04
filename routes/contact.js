var express = require('express');
var router = express.Router();
var db=require('./database');

// to display search result page
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/contact', function(req, res, next) {
    
    inputData ={
        name: req.body.firstname,
        phone_number: req.body.phone,
        email_address: req.body.email,
        city: req.body.city,
        message: req.body.subject,
    }

    // save users data into database
    var sql = 'INSERT INTO feedback SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your feedback will be addressed soon !! Thank You..";
 
 res.render('contact',{alertMsg:msg});

     
});

module.exports = router;

/*

CREATE TABLE `feedback` (
  `id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `phone_number` int(10) DEFAULT NULL,
  `email_address` varchar(50) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `message` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

select * from feedback; */