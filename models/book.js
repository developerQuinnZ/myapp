var mongoose = require('mongoose');


var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required: true
	},
	description:{
		type: String
		
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit) {
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback) {
	Book.findById(id, callback);
}

//Add Book
module.exports.addBook = function(book, callback) {
	Book.create(book, callback);
}