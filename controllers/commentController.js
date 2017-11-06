const request = require('request');



function saveComments(req, response) {
	// console.log(req.body.comment);
	response.send("Middle ware hit");
	
}

module.exports= {
	saveComments: saveComments
};