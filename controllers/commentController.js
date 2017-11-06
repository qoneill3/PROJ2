const request = require('request');

let Shelter = require("../models/shelter");



function saveComments(req, response) {
	// console.log(req.body.comment);

	Shelter.findById(req.params.id, function(err, shelter) {
		
		let newComment = req.body.comment;
		console.log(req.body);
		shelter.comments.push(newComment);
		console.log(shelter.comments);
		shelter.save();
		console.log(shelter);
	});

	response.send("Middle ware hit");
	console.log(req.params);
	
}




module.exports= {
	saveComments: saveComments
};