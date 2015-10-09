(function() {
	'use strict';

	// set up ========================
	var express = require('express');
	var app = express();
	var mongoose = require('mongoose');
	var morgan = require('morgan');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');
	var router = express.Router();
	var server = require('http').createServer(app);
	var browserSync = require('browser-sync');

	// configuration =================
	var port = process.env.PORT || 3000;

	app.use(express.static(__dirname + '/public'));
	app.use(morgan(process.env.NODE_ENV));
	app.use(bodyParser.urlencoded({
		'extended': 'true'
	}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({
		type: 'application/vnd.api+json'
	}));
	app.use(methodOverride('X-HTTP-Method-Override'));

	// all of our routes will be prefixed with /api
	app.use('/api', router);
	app.use('/api/secure', router);

	// routes ======================================================================
	require('./server/index.js')(app);
	require('./server/web/demo.js')(router);

	// REGISTER OUR ROUTES -------------------------------

	// listen (start app with node server.js) ======================================
	server.listen(port, listening);
	console.log("App listening on port " + port);

	function listening() {
		browserSync({
			proxy: 'localhost:' + port,
			files: ['public/**/*.{html,js,css}']
		});
	}
}());