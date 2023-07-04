var express = require('express');

var app = express();
app.get('/', function(req, res) {
    res.send('<h1>express work</h1>');
});

app.get('/tasks', function(req, res) {
    res.send('<h1>tasks work and created </h1>');
});

app.listen(3000, function() {
console.log('listening on port');
});
