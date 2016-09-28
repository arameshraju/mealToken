var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var departmentSchema= new Schema({
	name:{
		type:String,
		required:true,
		unique:true
	},
	description: {
		type:String,
		required : true
	}},
    {
		timestamps:true
});


var dept = mongoose.model('department',departmentSchema);

module.exports = dept;

