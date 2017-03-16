// Im not using this model ... maybe for future 
var restful = require('node-restful');
var mongoose = restful.mongoose;

var verseSchema = new mongoose.Schema({
    verses: String,

})

module.exports = restful.model('Verse', verseSchema)