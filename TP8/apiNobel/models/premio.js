var mongoose = require('mongoose');

var laureateSchema = new mongoose.Schema({
	id: String,
	firstname: String,
	surname: String,
	motivation: String,
	share: Number
});

var premioSchema = new mongoose.Schema({
	year: String,
	category: String,
	overallMotivation: String,
	laureates: [laureateSchema]
});

module.exports = mongoose.model('Premio', premioSchema, 'premio');
