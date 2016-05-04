// app/models/participant.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
    consent : Boolean,
    time : { type : Date, default : Date.now },
    mturk_id : String,
    excerpts : {
        excerpt1_id : String,
        analysis1 : String,
        ratings1 : [],
        excerpt2_id : String,
        analysis2 : String,
        ratings2 : [],
        excerpt3_id : String,
        analysis3 : String,
        ratings3 : []
    },
    internet : Boolean,
    recognition : Boolean,
    comments: String,
    code: String
});

module.exports = mongoose.model('Participant', ParticipantSchema);
