//require Shelter model
var Shelter = require("../models/shelter");
var expect = require("chai").expect;

//Shelter should be an object/ & it should have a name
describe("Shelter", function() {
	describe("Shelter", function() {
	 describe("new", function() {
	  it("initializes a new shelter", function() {
	      var rescue = new Shelter();
	      expect(typeof(rescue)).to.equal("object");
	  });
	 });
	 describe("name", function() {
		it("should have a name", function() {
			var rescue = Shelter();
      		expect(rescue.name).to.not.be.empty;
    	});
	});
	});
});