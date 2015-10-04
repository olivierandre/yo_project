(function () {

    "use strict";

    var gulp = require('gulp'),
        plugins = require('gulp-load-plugins')(),
        wiredep = require('wiredep').stream,
        global = require('./config/config').global,
        env = process.env.NODE_ENV,
        inputCSS = './stylesheets/**/*.scss',
        output = './public/styles',
        sassOptions = {
            errLogToConsole: true,
            outputStyle: 'expanded'
        };

    gulp.task('sass', require('./tasks/sass/sass')(gulp, plugins, inputCSS, output, sassOptions));
    gulp.task('config', require('./tasks/config/config')(gulp, plugins, global.angular.name, env));
    gulp.task('wiredep', require('./tasks/wiredep/wiredep')(gulp, wiredep));
    gulp.task('mongo', require('./tasks/mongo/mongo')());
	gulp.task('server', require('./tasks/nodemon/nodemon')(plugins));
	gulp.task('header', require('./tasks/nodemon/nodemon')(gulp, plugins));

    gulp.task('default', ['wiredep', 'sass', 'server', 'mongo', 'config'], function () {
        gulp.watch(inputCSS, ['sass']);
    });

    gulp.task('prod', ['header', 'server']);

}());
