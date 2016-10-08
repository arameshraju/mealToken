var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
    var deptJson=[];
 var mdl = require("../models/employeeModel");
    mdl.find({},function(err,data){
       if(err){
          res.send("Bad Request");
       } else{
           res.send(data);
       }
    });
  

  
});
router.post('/', function (req, res) {
    
 var mdl = require("../models/employeeModel");
    console.log(req);
  var newmdl=new  mdl(req.body); 
    newmdl.save(function (err) {
      if (err) {
        console.log(err);
          res.send("Bad Request");
      } else {
        console.log('Record Saved');

          res.send("Saved");
      }
    });

});

module.exports = router;