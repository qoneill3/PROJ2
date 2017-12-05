//require User model
var User = require("../models/user");
var expect = require("chai").expect;

//user should be an obect (email and password)
describe("User", function() {
	describe("User", function() {
	 describe("new", function() {
	  it("initializes a new user", function() {
	      var user = new User();
	      expect(typeof(user)).to.equal("object");
	  });
	 });
	});
});	 