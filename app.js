var express = require('express');
var app = express();
var passport = require('passport');

app.use(function(req, res) {
	res.send("home page");
});

//app.get('/', function homepage (req, res) {
//  res.sendFile(__dirname + '/views/index.html');
// });

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});