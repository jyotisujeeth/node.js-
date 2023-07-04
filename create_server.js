//calling http library
var http = require('http');
var url = require('url');

// Createing the server
var server = http.createServer(function (req, res) {
    res.writeHead(200, ('Content length', 'text/html'));
    var q= url.parse(req.url, true).query;
    var text = q.year + '-' + q.month;
    res.end(text);
});

server.listen(3000);
