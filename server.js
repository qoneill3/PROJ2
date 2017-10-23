var express = require('express');
var app = express();
var passport = require('passport');
const path = require('path');
var flash = require('flash');
var session = require('express-session');



require('dotenv').config();

//app.use(function(req, res) {
//	res.send("home page");
//});

//app.use(require('require-sass'));

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(session({secret: "puppy town"}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

let yelpToken = require('./controllers/yelp.js');
app.use(yelpToken);

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use(routes);


function homeController(req, res) {
	console.log("controller hit");
	res.sendFile(__dirname + "/views/index.ejs");

}

app.get('/', function homepage (req, res) {
 	res.render(__dirname + '/views/index.ejs');

 });




app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});