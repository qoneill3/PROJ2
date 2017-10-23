let token;
const request = require('request');

function grabToken (req,res,next ){
	if (token) {
		console.log("token exists");
		req.token = token;
		next();
	} else {
		console.log("grabbing token");
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
			req.token = token;
			console.log(token);
			next();
		});
	}
}
module.exports = grabToken;