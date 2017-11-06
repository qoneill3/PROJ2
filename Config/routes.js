var express = require('express');
var router = express.Router();

var passport = require('passport');
var session = require('express-session');
var usersController = require('../controllers/users');
var staticController = require('../controllers/statics');



var shelterControllers = require('../controllers/shelterControllers');
var commentController = require('../controllers/commentController');

router.route('/')
	.get(staticController.index);

router.route('/home')
	//.get(shelterControllers.displayShelters);	
	.get(shelterControllers.displaySheltersFromDB);


router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup);


router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin);


router.route('/logout')
	.get(usersController.getLogout);

router.route('/commentGrabber/:id')
	
	.post(commentController.saveComments);	


module.exports = router;

