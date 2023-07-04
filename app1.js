var http = require('http');
var events = require('events');

var eventEmitter =  new  events.EventEmitter();

var server = http.createServer(function (req, res) {
    eventEmitter.emit('connection');// event tringger
    res.end('Welcome to the server')
});

eventEmitter.on('connection', (stream) => {
    console.log('someone connected!');
  });// event listener

server.listen(3000, "localhost", function() {
    console.log("listening on port ");
})
