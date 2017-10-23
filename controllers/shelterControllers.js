const request = require('request');
const db = require('../models');

function displayShelters(req, response) {
	console.log(req.token);
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

module.exports= {
	displayShelters: displayShelters
};