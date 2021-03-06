var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var tokenSchema= new Schema({
	empid:{
		type:String
	},
	name:{
		type:String,        
        required:true

	},
    tokenType:{
		type:String,        
        required:true

	},
	fooditem: {  
		type:String,
        required:true

	},
    foodcost: {  
		type:Number,
        required:true
	},
    fooddiscount: {  
		type:Number,
        required:true
	},
    
    tokendate: {  
		type:Date,
        required:true

	}
},
    {
		timestamps:true
});


var token = mongoose.model('token',tokenSchema);

module.exports = token;

