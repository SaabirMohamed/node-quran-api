var restful = require('node-restful');

 var mongoose = restful.mongoose;

var suraSchema = new mongoose.Schema({
    title: String,
    versetotal: Number,
    totalwords: Number,
    suraposition: Number,
    hadith: String,
    videoUrl: String,
    soundbyte: String,
    period: String, 
    ayas: []

})

module.exports = restful.model('Sura', suraSchema)


