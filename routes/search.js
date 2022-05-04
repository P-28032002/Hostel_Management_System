var express = require('express');
var router = express.Router();
var db=require('./database');
const store = require("store2");
// to display search result page
router.get('/search', function(req, res, next) {
  res.render('searchResult');
});

var hostels;
function reserveHostel(e)
{
  var id = e.target.id;
  console.log(hostels[id]);
}
router.post('/search', function(req, res){
    var city = req.body.city;

    var sql='SELECT * FROM hostels WHERE city =?';
    db.query(sql, [city], function (err, result) {
        if(err) throw err
        else{
          var email = store('emailAddress')
          hostels = result;
          res.render('searchResult', {hostels : result,username : email});
        }
        // res.render(__dirname+"\searchResult",{hostels:result});
        // for(var i = 0;i<result.length;i++){
        //   console.log("Hostel id" + result[i].hostel_id);
        //   console.log("Hostel Name "+result[i].name);
        // }
    });

})
module.exports = router;