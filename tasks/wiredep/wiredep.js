module.exports = function (gulp, wiredep) {
    return function () {
        gulp.src('./public/index.html')
            .pipe(wiredep({
                optional: 'configuration',
                goes: 'here'
            }))
            .pipe(gulp.dest('./public'));
    };
};
