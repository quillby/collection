const mongoose = require('mongoose')

const stamSchema = new mongoose.Schema({
	fhnr: {
		type: String,
		required: true
	},
	cbs: {
		type: String
	},
	other: {
		type: String
	},
	species: {
		type: String
	},
	bsl: {
		type: Number
	},
})

module.exports = mongoose.model('Stam', stamSchema)
