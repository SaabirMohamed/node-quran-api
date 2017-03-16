var express = require("express");
var mongoose =require("mongoose");
var bodyParser = require("body-parser")
var dbname = 'EDIT THIS PART';
var dbp = 'EDIT THIS PART';

mongoose.connect('mongodb://admin:'+ dbp + '@cluster0-shard-00-00-9ybil.mongodb.net:27017,cluster0-shard-00-01-9ybil.mongodb.net:27017,cluster0-shard-00-02-9ybil.mongodb.net:27017/'+ dbname +'?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

app = express();
app.use(bodyParser.urlencoded({ extended :true}));
app.use(bodyParser.json());

// Routing
app.get("/",function(req , res){
    res.send("Quran API is working online please use /api/sura to get to the data")
});

app.use('/api', require('./routes/api'))


// start
console.log('API Started on port 3000');
app.listen("3000");