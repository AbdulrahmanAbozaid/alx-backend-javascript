const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end("Done");
});

server.listen(3000, 'localhost', () => {
  console.log('Listening');
});
