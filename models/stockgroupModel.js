var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var stockgroupSchema= new Schema({
	stockgroup:{
		type:String,
		required:true,
		unique:true
	},
	stockgroupdesc: {  
		type:String

	}
},
    {
		timestamps:true
});


var stockgroup = mongoose.model('stockgroup',stockgroupSchema);

module.exports = stockgroup;

