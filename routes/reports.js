var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/groupmonthly/', function(req, res) {
    var deptJson=[];
 var mdl = require("../models/tokenModel");
    
    mdl.aggregate([{
         $group: {
                _id: '$tokenType',  //$region is the column name in collection
                totalcount: {$sum: 1},
                totalCost: {$sum: '$foodcost'},
                totalDiscount: {$sum: '$fooddiscount'}
            }
    }],function(err,data){
       if(err){
          res.send("Bad Request");
       } else{
           res.send(data);
       }
    });
  
});
router.get('/foodmonthly/', function(req, res) {
    var deptJson=[];
 var mdl = require("../models/tokenModel");
    
    mdl.aggregate([{
         $group: {
                _id: '$fooditem',  //$region is the column name in collection
                totalcount: {$sum: 1},
                totalCost: {$sum: '$foodcost'},
                totalDiscount: {$sum: '$fooddiscount'}
            }
    }],function(err,data){
       if(err){
          res.send("Bad Request");
       } else{
           res.send(data);
       }
    });
  
});
router.get('/employeemonthly/', function(req, res) {
    var deptJson=[];
 var mdl = require("../models/tokenModel");
    
    mdl.aggregate([{
         $group: {
                _id: '$name',  //$region is the column name in collection
                totalcount: {$sum: 1},
                totalCost: {$sum: '$foodcost'},
                totalDiscount: {$sum: '$fooddiscount'}
            }
    }],function(err,data){
       if(err){
          res.send("Bad Request");
       } else{
           res.send(data);
       }
    });
  
});


module.exports = router;