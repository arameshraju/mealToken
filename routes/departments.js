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
 var dept = require("../models/departmentModel");
    dept.find({},function(err,depts){
       if(err){
          res.send("Bad Request");
       } else{
           res.send(depts);
       }
    });
  

  
});
router.post('/', function (req, res) {
    
 var dept = require("../models/departmentModel");
    console.log(req);
  var newDept=new  dept(req.body); 
    newDept.save(function (err) {
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