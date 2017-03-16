var restful = require('node-restful');

 var mongoose = restful.mongoose;

var verseSchema = new mongoose.Schema({
    verses: String,

})

module.exports = restful.model('Verse', suraSchema)