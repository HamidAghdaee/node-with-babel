import { createServer } from 'http';
const port = 8000;

const server = createServer(function(req, res) {
  console.log('got a request')
});

server.listen(port, function() {
  console.log('Listening on port', port);
});
