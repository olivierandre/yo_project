
var Tools = (function() {
	'use strict';
	var self = {};
	self.test = function() {
		var form = document.forms[0];

		form.addEventListener("submit", submitForm, false);
	};

	var submitForm = function(event, test) {
		event.preventDefault();
		console.log('yo!!!');
	};

	return self;
}());
