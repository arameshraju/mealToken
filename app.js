var express = require('express'),
 bodyParser = require('body-parser'),
    mongoose = require('mongoose');
var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes 
var dept = require('./routes/departments');
app.use('/api/department', dept);


app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
console.log('Express Webserver is running .. login to http://${hotname}:${post}/');

});

