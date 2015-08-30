var shoutouts = require('../models/shoutouts')
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
    console.log('it\'s shoutout time!!');
    res.send(shoutouts);
});
module.exports = router;