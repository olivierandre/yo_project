module.exports = function (gulp, plugins, input, output, sassOptions) {
    return function () {
        gulp.src(input)
            .pipe(plugins.sass(sassOptions).on('error', plugins.sass.logError))
            .pipe(plugins.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest(output));
    };
};
