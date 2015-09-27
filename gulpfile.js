'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    wiredep = require('wiredep').stream,
    nodemon = require('gulp-nodemon'),
    config = require('./config/config'),
    global = config.global,
    header = require('gulp-header'),
    fs = require('fs'),
    env;

//  Gulp Sass
var input = './stylesheets/**/*.scss';
var output = './public/styles';
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('development', function () {
    env = 'dev';
    config = config[env];
    plugins.env = env;
    plugins.config = config;
});

gulp.task('production', function () {
    env = 'prod';
    config = config[env];
    plugins.env = env;
    plugins.config = config;
});

gulp.task('sass', require('./tasks/sass/sass')(gulp, plugins, input, output, sassOptions));
gulp.task('config', require('./tasks/config/config')(gulp, plugins, require('./config/constant.json'), global.angular.name));

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

gulp.task('server', function () {
    return nodemon({
        script: 'server.js',
        ext: 'js html',
        ignore: ['./public'],
        env: {
            'NODE_ENV': env,
            'PORT': config.server.port
        }

    });

});

gulp.task('header', function () {
    var pkg = require('./package.json');
    var file = fs.readFileSync('header.txt', 'utf8');
    gulp.src('./public/scripts/**/*.js')
        .pipe(header(file, {
            pkg: pkg
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['development', 'wiredep', 'sass', 'config', 'server'], function () {
    gulp.watch(input, ['sass']);
});

gulp.task('prod', ['production', 'header', 'server']);

