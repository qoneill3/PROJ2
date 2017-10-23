var passport = require('passport');

//GET  /SIGNUP
function getSignup(request, response) {
	response.render('sign-up', {message : request.flash('signupMessage')});
}


//POST  /SIGN UP
function postSignup(request, response, next) {
	console.log("signing up!");
	let signupStrategy = passport.authenticate('local-signup', {
		succesRedirect: '/',
		failureRedirect: '/signup',
		falureFlash: true
	});

	return signupStrategy(request, response, next);

}

//GET  /LOGIN
function getLogin(request, response) {
	response.render('login', {message: request.flash('loginMessage')});

}

// POST  /LOGIN
function postLogin(request, response, next) {
	console.log("logging in!");
	let loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/home',
		failureRedirect: '/',
		falureFlash: true

	});

	return loginStrategy(request, response, next);

}

//GET  /LOGOUT
function getLogout(request, response) {
	request.logout();
	response.redirect('/');

}

module.exports = {
	getSignup: getSignup,
	postSignup: postSignup,
	getLogin: getLogin,
	postLogin: postLogin,
	getLogout: getLogout
};