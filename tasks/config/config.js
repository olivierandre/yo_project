module.exports = function (gulp, plugins, name, env) {
	var path = require('../../config/constant.json');
    return function () {
        plugins.ngConstant({
                name: name,
                constants: path[env],
                stream: true
            })
            .pipe(gulp.dest('./public/scripts/config'));
    };
};
