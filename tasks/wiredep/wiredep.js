module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('./public/index.html')
            .pipe(plugins.wiredep({
                optional: 'configuration',
                goes: 'here'
            }))
            .pipe(gulp.dest('./public'));
    };
};