var mongoose = require('mongoose');

var emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var nameMatch = /[A-Za-z-/s]{2,}/g
//var phoneMatch = /([0-9()-]){10,13}/g
var phoneValidator = [
	function (val) {
	return val.match(/[0-9()-]{10,13}/g);
	},
	//Custom error text
	'phone number must be at least 10 numbers and format of: (123)456-7890 123-456-7890 or 1234567890' ];
var userInfoSchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		match: nameMatch
		
	},
	email:{
		type: String,
		required: true,
		validate: emailValidator
	},
	phoneNumber:{
		type: String,
		required: true,
		validate: phoneValidator
	},
	dateOfBirth:{
		type: Date
		
		
	}
});

var UserInfo = module.exports = mongoose.model('UserInfo', userInfoSchema);

module.exports.getUserInfo = function(callback, limit) {
	UserInfo.find(callback).limit(limit);
}

module.exports.getUser = function(user, callback) {
	UserInfo.getUser(user, callback);
}

//Add User
module.exports.addUser = function(user, callback) {
	UserInfo.create(user, callback);
}