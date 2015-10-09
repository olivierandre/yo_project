var $ = require('jquery');
var app = (function() {
	"use strict";

	var self = {};
	var privateFunction = function() {
		return $('.yo');
	};

	self.publicFunction = function() {
		return privateFunction();
	};

	return self;
}());

console.log(app.publicFunction());