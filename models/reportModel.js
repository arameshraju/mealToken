var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var tokenSchema= new Schema({
	empid:{
		type:String,
		required:true,
	},
	fooditem: {  
		type:String,
        required:true

	},tokendate: {  
		type:Date,
        required:true

	}
},
    {
		timestamps:true
});


var token = mongoose.model('token',tokenSchema);

module.exports = token;

