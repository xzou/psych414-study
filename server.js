// server.js

// BASE SETUP
// ============================================================

// Call packages we need
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 9000;
var db = require('./config/db');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// CONFIGURATION
//============================================================
//mongoose.connect(db.mlab_url || db.url);
//mongoose.connect(db.url);
//mongoose.connect(db.mlab_url);

mongoose.connect('mongodb://heroku_wj78jsv6:f255nrb9bkuv06jr5s1de080rf@ds013162.mlab.com:13162/heroku_wj78jsv6');

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true}));

// Override with the  X-HTTP-Method-Override header in the request
// Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// Set static files location
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/views', express.static(__dirname + '/public/views'));

// ROUTES
//  ============================================================
require('./app/routes')(app); // Configures routes

// START SERVER
// ============================================================
app.listen(port);
console.log('working on ' + port); 

// Expose app
exports = module.exports = app;
