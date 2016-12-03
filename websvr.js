var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
  // write to client
  response.write('Hello World Hasanain Alsabonchi\n');
 // tell the server I end 
   response.end('');
}).listen(8001);




