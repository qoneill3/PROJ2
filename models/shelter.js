var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Shelter = new Schema({
	image_url: String,
	name: String,
	phone: String,
	location: {
		display_address: String
	},	
	url: String,
	comments: String
});

module.exports = mongoose.model('Shelter', Shelter);