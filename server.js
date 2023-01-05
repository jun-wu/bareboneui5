var express = require('express');
var app = express();



app.get('/', function(req, res) {
   
   res.sendFile(__dirname + '/webapp/index.html');
});



var server = app.listen(4004, function() {
    console.log('Node server is running');
});