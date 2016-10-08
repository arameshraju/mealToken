var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var fooditemSchema= new Schema({
	fooditem:{
		type:String,
		required:true,
		unique:true
	},
	fooditemdesc: {  
		type:String

	},
	regrate: {  
		type:Number,
        required:true

	},
	emprate: {  
		type:Number,
        required:true

	}
},
    {
		timestamps:true
});


var fooditem = mongoose.model('fooditem',fooditemSchema);

module.exports = fooditem;

