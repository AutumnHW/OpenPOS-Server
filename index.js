const http = require('http')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync("config.json"))
console.log("Starting OpenPOS Server")
console.log("Version " + config.version)
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Pong!')
    console.log("Ping")
}).listen(8080);