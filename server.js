var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Articles = require("./models/models.js")

var port = process.env.PORT || 3000;

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nyt");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));

// Database configuration
var databaseUrl = "nytreactdb";
var collections = ["article"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});


app.listen(port);
console.log("listening on Port 3000");