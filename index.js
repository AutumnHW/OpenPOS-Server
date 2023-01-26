const fs = require('fs')
const config = JSON.parse(fs.readFileSync("config.json"))
const net = require('net');
const server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

console.log("Starting OpenPOS Server")
console.log("Version " + config.version)
server.listen(8080, '127.0.0.1');