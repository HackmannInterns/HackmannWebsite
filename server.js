const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 3000;

const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  fs.readFile(path.join(__dirname,'index.html'), (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});