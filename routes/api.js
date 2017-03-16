var express = require("express");
var router = express.Router();
var Sura = require('../models/sura')


//Let the sura model interface with these verbs when live users will need only get and post put and delete is for dev only
Sura.methods(['get','put','post', 'delete'])
Sura.register(router,'/sura')

module.exports = router;