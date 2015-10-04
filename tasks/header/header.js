module.exports = function (gulp, plugins) {
    var pkg = require('../../package.json'),
        fs = require('fs'),
        file = fs.readFileSync('header.txt', 'utf8');
    return function () {
        gulp.src('./public/scripts/**/*.js')
            .pipe(plugins.header(file, {
                pkg: pkg
            }))
            .pipe(gulp.dest('./dist/'));
    };
};
