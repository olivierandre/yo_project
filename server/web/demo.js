module.exports = function (router) {

    router.get('/toto', function (req, res) {
        res.json({
            message: 'yo',
            name: 'Olivier'
        });
    });

};