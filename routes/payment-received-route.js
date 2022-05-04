var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");

/* GET users listing. */
router.get('/payment_received', function(req, res, next) {
    var hos_email = store('emailAddress');
    
    var sql='SELECT * FROM payment WHERE hostel_email =?';
    db.query(sql, [hos_email], function (err, result) {
        if(err) throw err
        else{
          console.log(result)
          res.render('payment-received', {payment : result,username:hos_email});
        }
    });
});
module.exports = router;