const request = require('request');
require('dotenv').config();



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shelters');

let Shelter = require("./models/shelter");



function displayShelters(token) {
	
	let options = {
		url: "https://api.yelp.com/v3/businesses/search?term=animal+shelters&location=denver",
		headers: {Authorization: "Bearer " + token}
	};
	request(options, function(err, res ,body) {
		if(err) {console.log("ERROR: " + err);}
		let bod = JSON.parse(body);
		let shelters = bod.businesses;
		console.log("");
		for (i = 0; i < shelters.length; i++) {
			console.log(shelters[i]);
		}
		
		Shelter.remove({}, function(err) {
  			if (err) {
    			console.log("ERROR:", err);
  			}
		});

		Shelter.create(shelters, function(err, docs) {
	  		if (err) {
	    		console.log("ERROR:", err);
	  		} else {
	    		console.log("Created:", docs);
	   		 	mongoose.connection.close();
	 		 }
			});
		console.log("creating db");
	});
}

function getToken() {
	request.post({
			url: "https://api.yelp.com/oauth2/token",
			form: {
				client_id: process.env.YELP_ID,
				client_secret: process.env.YELP_SECRET,
				grant_type: "client_credentials"
			}
		}, function(err, httpRespone, body) {
			body = JSON.parse(body);
			token = body.access_token;
			displayShelters(token);
			
		});
}





getToken();


