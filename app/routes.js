// routes.js
// Routes for API

var Excerpt = require('./models/excerpt');
var express = require('express');

module.exports = function(app) {
    var router = express.Router();

    // Test route
    router.get('/', function(req, res) {
        res.json({ message: 'shit be working'});
    });

    // Middleware to use for all requests
    router.use(function(req, res, next) {
        console.log('shit is happening');
        next();
    });

    // Routes that end in /excerpts
    // ------------------------------------------------------------ 
    // Get all excerpts
        app.get('/api/excerpts', function(req, res) {
            Excerpt.find(function(err, excerpts) {
                if (err)
                    res.send(err);
                res.json(excerpts);
            });
        });

    // Get a single excerpt
        app.get('/api/excerpts/:excerpt_id', function(req, res) {
            Excerpt.findById(req.params.excerpt_id, function(err, excerpt) {
                if (err)
                    res.send(err);
                res.json(excerpt);
                console.log("ID: ", typeof req.params.excerpt_id);
            }); 
        });

    // More routes for the API will be here


    // FRONTEND ROUTES
    // ===========================================================
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
}; 
