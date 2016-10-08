var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var storeSchema= new Schema({
	store:{
		type:String,
		required:true,
		unique:true
	},
	storedesc: {
		type:String,

	}
},
    {
		timestamps:true
});


var store = mongoose.model('store',storeSchema);

module.exports = store;

