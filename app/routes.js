// routes.js
// Routes for API

var Excerpt = require('./models/excerpt');
var Participant = require('./models/participant'); 
var Trial = require('./models/trial');
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
            }); 
        });

    // Routes that end in /participants
    // ------------------------------------------------------------
    // Get all participants
        app.get('/api/participants', function(req, res) {
            Participant.find(function(err, participants) {
                if (err)
                    res.send(err);
                res.json(participants);
            });
        });

    // Get a single participant
        app.get('/api/participants/:participant_id', function(req, res) {
            Participant.findById(req.params.participant_id, function(err, participant) {
                if (err)
                    res.send(err);
                res.json(participant);
            });
        });

    // Create a participant
        app.post('/api/participants', function(req, res) {
            var participant = new Participant();
            
            participant.first_name = req.body.first_name;
            participant.last_name = req.body.last_name;
            participant.mturk_id = req.body.mturk_id; 
            participant.excerpts = req.body.excerpts; 
            participant.internet = req.body.internet;
            participant.recognition = req.body.recognition;
            participant.comments = req.body.comments;
            participant.code = req.body.code;


            participant.save(function(err) {
                if (err)
                    res.send(err);
                res.json(participant);
            });
        });

    // Update a participant
        app.put('/api/participants/:participant_id', function(req, res) {
            Participant.findById(req.params.participant_id, function(err, participant) {
                if(err)
                    res.send(err);

                participant.first_name = req.body.first_name;
                participant.last_name = req.body.last_name;
                participant.mturk_id = req.body.mturk_id; 
                participant.excerpts = req.body.excerpts; 
                participant.internet = req.body.internet;
                participant.recognition = req.body.recognition;
                participant.comments = req.body.comments;
                participant.code = req.body.code;

                participant.save(function(err) {
                    if(err)
                        res.send(err);
                    res.json(participant);
                });
            });
        });

    // Remove a participant
    app.delete('/api/participants/:participant_id', function(req, res) {
        Participant.remove({
            _id : req.params.participant_id
        }, function(err, participant) {
            if (err)
                res.send(err);
            res.json({ message: 'Deleted'});
        });
    });

    // Routes that end in /trials
    // ----------------------------------------------------------
    // Get all trials
        app.get('/api/trials', function(req, res) {
            Trial.find(function(err, trials) {
                if (err)
                    res.send(err);
                res.json(trials);
            });
        }); 

        
    // Remove a trial
        app.delete('/api/trials/:trial_id', function(req, res) {
            Trial.remove({
                _id : req.params.trial_id
            }, function(err, trial) {
                if (err)
                    res.send(err);
                res.json({ message: 'Deleted'});
            });
        });

    // FRONTEND ROUTES
    // ===========================================================
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
}; 
