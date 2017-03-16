var express = require("express");
var mongoose =require("mongoose");
var bodyParser = require("body-parser")
var dbname = 'quran';
var dbp = 'cqb9IZb60KlV2urN';

mongoose.connect('mongodb://admin:'+ dbp + '@cluster0-shard-00-00-9ybil.mongodb.net:27017,cluster0-shard-00-01-9ybil.mongodb.net:27017,cluster0-shard-00-02-9ybil.mongodb.net:27017/'+ dbname +'?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

// express and middleware
app = express();
app.use(bodyParser.urlencoded({ extended :true}));
app.use(bodyParser.json());

// Routing
app.get("/",function(req , res){
    res.send("working")
});

app.use('/api', require('./routes/api'))


// start
console.log('API Started on port 3000');
app.listen("3000");