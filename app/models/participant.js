// app/models/participant.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Excerpt = new Schema({
    excerpt_id : String,
    analysis : String,
    ratings : [Number]
});

var ParticipantSchema = new Schema({
    first_name : String,
    last_name : String,
    time : { type : Date, default : Date.now },
    mturk_id : String,
    excerpts : [Excerpt],
    internet : Boolean,
    recognition : Boolean,
    comments: String,
    code: String
});

module.exports = mongoose.model('Participant', ParticipantSchema);
