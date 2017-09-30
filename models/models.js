var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: "Title is Required"
	},

	date: {
		type: Date,
	},

	url: {
		type: String
	}
});

var Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;