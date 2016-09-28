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
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected! and enabled Rest
    console.log("Data base connect");
    app.use('/api/department', dept);

});


app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
console.log('Express Webserver is running .. login to http://${hotname}:${post}/');

});

