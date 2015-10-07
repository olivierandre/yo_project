(function () {

    "use strict";

    var gulp = require('gulp'),
        plugins = require('gulp-load-plugins')(),
        wiredep = require('wiredep').stream,
        env = process.env.NODE_ENV || 'dev',
        inputCSS = './stylesheets/**/*.scss',
        output = './public/styles',
        sassOptions = {
            errLogToConsole: true,
            outputStyle: 'expanded'
        };

    gulp.task('sass', require('./tasks/sass/sass')(gulp, plugins, inputCSS, output, sassOptions));
    gulp.task('wiredep', require('./tasks/wiredep/wiredep')(gulp, wiredep));
	gulp.task('server', require('./tasks/nodemon/nodemon')(plugins));

    gulp.task('default', ['wiredep', 'sass', 'server'], function () {
        gulp.watch(inputCSS, ['sass']);
    });

    //gulp.task('prod', ['header', 'server']);

}());
