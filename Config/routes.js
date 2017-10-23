var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var usersController = require('../controllers/users');
var staticController = require('../controllers/statics');

router.route('/')
	.get(staticController.index);

router.route('/home')
	.get(staticController.home);	


router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup);


router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin);


router.route('/logout')
	.get(usersController.getLogout);


module.exports = router;

