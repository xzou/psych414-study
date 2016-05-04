// app/models/trial.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrialSchema = new Schema({
    trial_id : String,
    condition : String,
    excerpt1 : String,
    excerpt2 : String,
    excerpt3 : String
});

module.exports = mongoose.model('Trial', TrialSchema);
