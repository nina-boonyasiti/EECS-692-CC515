var http = require('http');
var server = http.createServer(function(req, res) {
  res.end("Hello, Web Browser!");
});
var port = 3000;

server.listen(port, function(){
  console.log("Server is listening on port " + port);
});