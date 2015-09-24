var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);