const request = require('request');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/shelters';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

let Shelters = require('../models/shelter');

function displayShelters(req, response) {
	// console.log(req.token);
	let options = {
		url: "https://api.yelp.com/v3/businesses/search?term=animal+shelters&location=denver",
		headers: {Authorization: "Bearer " + req.token}
	};
	request(options, function(err, res ,body) {
		if(err) {console.log("ERROR: " + err);}
		let bod = JSON.parse(body);
		let shelters = bod.businesses;
		response.render('home', { shelters });
	});
}

function displaySheltersFromDB(request, response) {
	Shelters.find({}, function(err, shelters) {
		// console.log("yp");
		// console.log(shelters.length);
		response.render('home', { shelters });

	});
	//query.exec(function (err, shelters) {
  	//	if (err) return handleError(err);
  	//});

	
}

module.exports= {
	displayShelters: displayShelters,
	displaySheltersFromDB: displaySheltersFromDB
};