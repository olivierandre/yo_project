'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var config = require('./config/config');

//  Gulp Sass
var input = './stylesheets/**/*.scss';
var output = './public/styles';
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
});


gulp.task('wiredep', function () {
    gulp.src('./public/index.html')
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    return gulp
        .watch(input, ['sass'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('server', function() {
    return nodemon({
        script: 'server.js',
        ext: 'js html',
        ignore: ['./public'],
        env: {
            'NODE_ENV': 'dev',
            'PORT' : config.server.port
        }
    });
})

gulp.task('default', ['wiredep', 'sass', 'server'], function () {
    gulp.watch(input, ['sass']);

});

