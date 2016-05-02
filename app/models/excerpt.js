// app/models/excerpt.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExcerptSchema = new Schema({
    __id: String,
    label: String,
    excerpt: String
});

module.exports = mongoose.model('Excerpt', ExcerptSchema);
