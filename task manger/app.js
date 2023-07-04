var express = require('express');
var http = require('http');
var app = express();
var fs = require('fs');

var server = http.createServer(app);
app.get('/', function(req, res) {
    res.send('<h1>express work</h1>');
});

app.get('/tasks', function(req, res) {
    fs.readFile('./db.json', function(err, data) {
        res.send(data.toString());
    })
});

server.listen(3000, function() {
console.log('listening on port');
});
