const mitsuku        = require('mitsuku-api')();

module.exports = function(app, db) {
    app.post('/chat', (req, res) => {

        mitsuku.send(req.body.input)
            .then((response) => {
            res.send(response)
        });

    });
};