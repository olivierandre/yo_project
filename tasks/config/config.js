module.exports = function(gulp, plugins, path, name) {
    return function() {
        return plugins.ngConstant({
            name: name,
            constants: path[plugins.env],
            stream: true
        })
            .pipe(gulp.dest('./public/scripts/config'));
    };
};