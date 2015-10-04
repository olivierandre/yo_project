module.exports = function (plugins) {
    return function () {
		return plugins.nodemon({
			script: 'server.js',
			ext: 'js html',
			ignore: ['./public']

		});
    };
};
