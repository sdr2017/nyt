var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongojs = require("mongojs");
var path = require("path");
var apiRoutes = require("./controllers/apiRoutes.js");
var Article = require("./models/Article.js");

var app = express();
var port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
//router(app);

//mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/nyt");
// var db = mongoose.connection;

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

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