//creating a server and sending a msg to the server
var http = require('http');


//var server = http.createServer();// just creating without msg
var server = http.createServer(function (req, res) {
    res.end('Welcome to the server')
});

var server = http.createServer(function (req, res) {
    res.end('Welcome to the server')
});

server.listen(3000, "localhost", function() {
    console.log("listening on port ");
})
