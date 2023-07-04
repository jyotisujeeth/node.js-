var http = require('http');
var events = require('events');

var eventEmitter =  new  events.EventEmitter();

var server = http.createServer(function (req, res) {
    eventEmitter.emit('connection', "we can add some mesage here");// event tringger
    res.end('Welcome to the server')
});

eventEmitter.on('connection', function(data) {
    console.log('someone connected!', data);
  });// event listener

server.listen(3000, "localhost", function() {
    console.log("listening on port ");
})
