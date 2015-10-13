//var $ = require('jquery');

var App = (function(t) {
	"use strict";

	var self = {};

	var privateFunction = function() {

	};

	self.publicFunction = function() {
		t.test();
		return privateFunction();
	};

	return self;
}(Tools));

App.publicFunction();
