var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema contactGroup
var employeeSchema= new Schema({
	empId:{
		type:String,
		required:true,
		unique:true
	},
	name: {
		type:String,
		required : true,
        unique:true
	},	
   phone: {
		type:String,
		required : true,
        unique:true
	},	
   deptId: {
		type:String,
		required : true
        
	}
},
    {
		timestamps:true
});


var emp = mongoose.model('employee',employeeSchema);

module.exports = emp;

