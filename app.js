var express = require('express'),
 bodyParser = require('body-parser'),
    mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mealtoken');
var db = mongoose.connection;

var hostname = 'localhost';
var port = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes 
var dept = require('./routes/departments');
var emp = require('./routes/employee');
var food = require('./routes/fooditem');
var sg = require('./routes/stockgroup');
var si = require('./routes/stockitem');
var store = require('./routes/store');
var token = require('./routes/token');
var reports = require('./routes/reports');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected! and enabled Rest
    console.log("Data base connect");
    app.use('/api/department', dept);
    app.use('/api/employee', emp);
    app.use('/api/fooditem', food);
    app.use('/api/stockgroup', sg);
    app.use('/api/stockitem', si);
    app.use('/api/store', store);
    app.use('/api/token', token);
    app.use('/api/reports', reports);

});


app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
console.log('Express Webserver is running .. login to http://${hotname}:${post}/');

});

