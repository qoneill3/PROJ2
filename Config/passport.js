let localStrategy = require('passport-local').Strategy;
let User = require('../models/user');

module.exports = function(passport) {

	passport.serializeUser(function(user, callback) {
		callback(null, user.id);
	});

	passport.deserializeUser(function(id, callback) {
        User.findById(id, function(err, user) {
            callback(err, user);
        });
    });

    passport.use('local-signup', new localStrategy( {
    	usernameField : 'email',
    	passwordField : 'password',
    	passReqToCallback : true
    }, function(req, email, password, callback) {
    	//find user matching this email
    	User.findOne({'local-email' : email}, function(err, user) {
    		if (err) return callback(err);
    		//if someone already has that email...
    		if (user) {
    			console.log("user already exists!");
    			return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
    		} else {
    			//If there is not...
    			//create one
    			let newUser = new User();
    			newUser.local.email = email;
    			newUser.local.password = newUser.encrypt(password);
    			newUser.save(function(err) {
    				if(err) throw err;
    				return callback(null, newUser);
    			});
    		}
    	});
    }));

    passport.use('local-login', new localStrategy({
    	usernameField: 'email',
    	password : ' password',
    	passReqToCallback : true
    }, function(req, email, password, callback) {
    	User.findOne({'local.email': email}, function(err, user) {
    		if (err) return callback(err);
    		if (!user) {
    			return callback(null, false, req.flash('loginMessage', "Username not found."));
			}
			//Wrong Password
			if(!user.validPassword(password)) {
				return callback(null, false, req.flash('loginMessage', 'Wrong Password'));
			}

			return callback(null, user);
    	});
    }));
    



};