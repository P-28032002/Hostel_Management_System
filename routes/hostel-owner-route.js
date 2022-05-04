var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");

// to display student form 
router.get('/hostel', function(req, res, next) {
  res.render('hostel-owner-form');
});

// to store user input detail on post request
router.post('/hostel', function(req, res, next) {
    
    inputData ={
        name: req.body.h_name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        numberofRooms: req.body.rooms,
        numberofRoomsVacant: req.body.roomsvac,
        email_address: req.body.email_address,
        rent: req.body.rent
    }
// check unique email address
var sql='SELECT * FROM hostels WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.email_address+ "was already exist";
 }else{
     
    // save users data into database
    var sql = 'INSERT INTO hostels SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your information is successfully saved";
 }
 res.render('hostel-owner-form',{alertMsg:msg});
})
     
});
module.exports = router;