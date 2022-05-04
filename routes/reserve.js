var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");

/* GET users listing. */
router.get('/reserve', function(req, res, next) {
    //console.log(store.getAll())
    // var s = store('emailAddress')
    var sql='SELECT * FROM hostels WHERE email_address=?';
    db.query(sql, ['zostel@gmail.com'], function (err, result) {
        if(err) throw err
        else{
          res.render('reserve', {hostels : result});
        }
    });
});
module.exports = router;