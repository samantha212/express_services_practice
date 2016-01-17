/**
 * Created by samanthamusselman on 1/16/16.
 */
var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(request, response){
   response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;