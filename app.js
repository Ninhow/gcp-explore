const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;
console.log(path.join(__dirname, '/views/index.html'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);