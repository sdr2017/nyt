var path = require("path");

var apiRoutes = function(app){
	app.get("/api/saved", function(req, res) {
	    res.send("Get Request!");
	});

	app.post("/api/saved", function(req, res) {
	    res.send("post request");
	});

	app.delete("/api/saved", function(req, res) {
	    res.send("delete request");
	});

	app.get("/*", function(req, res) {
	    //res.json();
	    res.send("homepage");
	});
}

module.exports = apiRoutes;