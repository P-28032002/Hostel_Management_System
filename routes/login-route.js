var express = require('express');
var router = express.Router();
var db = require('./database');
var session = require('express-session');
const store = require("store2");
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login-form');
});

router.post('/login', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;
    store.setAll({emailAddress: req.body.email_address, password: req.body.password});
    //console.log(store.getAll())
    var sql='SELECT * FROM registration WHERE email_address =? AND password =?';
    db.query(sql, [emailAddress, password], function (err, result, fields) {
        if(err) throw err
        if(result.length>0){
            // req.session.loggedinUser= true;
            // req.session.emailAddress= req.body.emailAddress;
            //var email = req.body.emailAddress;
            //res.redirect('/dashboard');
            if(result[0].usertype == 'Tenant')
            {
             res.render('dashboard',{username : req.body.email_address});
            }
            else{
             res.render('dashboard_hostel_owner',{username : req.body.email_address});
            }
        }else{
            res.render('login-form',{alertMsg:"Your Email Address or password is wrong"});
        }
    })

})

module.exports = router;