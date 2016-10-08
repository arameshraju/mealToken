var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var stockitemSchema= new Schema({
	stockitem:{
		type:String,
		required:true,
		unique:true
	},
	stockitemdesc: {  
		type:String

	},
	mesurement: {  
		type:String,
        required:true

	},
	stockgroup: {  
		type:String,
        required:true

	}
},
    {
		timestamps:true
});


var stockitem = mongoose.model('stockitem',stockitemSchema);

module.exports = stockitem;

