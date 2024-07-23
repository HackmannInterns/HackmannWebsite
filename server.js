const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});