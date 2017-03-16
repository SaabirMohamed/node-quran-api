var express = require("express");
var router = express.Router();
var Sura = require('../models/sura')


//make the REST interface from the sura model
Sura.methods(['get','put','post', 'delete'])
Sura.register(router,'/sura')

module.exports = router;