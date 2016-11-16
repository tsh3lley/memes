// app/models/meme.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MemeSchema   = new Schema({
    name: String,
    ticker: String,
    charity: String,
    price: Number
});

module.exports = mongoose.model('Meme', MemeSchema);