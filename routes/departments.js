var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
    var deptJson=[
        {deptName:'Admin',desc:'Admin Department'},
        {deptName:'Accounts',desc:'Admin Department'},
        {deptName:'Manufacting',desc:'Manufacting Department'}
    ];
  res.send(deptJson);
});


module.exports = router;