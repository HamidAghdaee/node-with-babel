'use strict';

var _http = require('http');

var port = 8000;

var server = (0, _http.createServer)(function (req, res) {
  console.log('got a request');
});

server.listen(port, function () {
  console.log('Listening on port', port);
});