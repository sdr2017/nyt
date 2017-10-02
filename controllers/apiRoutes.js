var express = require("express");
var router = express.Router();
var path = require("path");

var apiRoutes = function(app){
	//query Mongo DB for all saved articles
	app.get("/api/saved", function(req, res) {
	    res.send("Get Request!");
	});
	
	//save an article to DB
	app.post("/api/saved", function(req, res) {
	    res.send("post request");
	});
	
	//delete an article
	app.delete("/api/saved", function(req, res) {
	    res.send("delete request");
	});
	
	//homepage
	app.get("/*", function(req, res) {
	    //res.json();
	    res.sendFile(__dirname + "/public/index.html");
	});
}

module.exports = apiRoutes;