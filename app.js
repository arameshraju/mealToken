var express = require('express');
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
console.log('Express Webserver is running .. login to http://${hotname}:${post}/');

});

