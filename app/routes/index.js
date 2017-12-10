const mitsukuRoutes = require('./mitsuku_routes');

module.exports = function(app, db) {
    mitsukuRoutes(app, db);
    // Other route groups could go here, in the future
};