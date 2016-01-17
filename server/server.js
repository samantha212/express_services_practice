/**
 * Created by samanthamusselman on 1/16/16.
 */
var express = require('express');
var index = require('./routes/index');

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port:', port);
});