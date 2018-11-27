const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const { appendFileSync } = require('fs');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'output/data.xml'));
});

app.post('/data', function(req, res) {
  appendFileSync('output/data.xml', req.body.data);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Done!');
});

app.listen(55665, null, () => {
  console.log(`listening on http://localhost:55665`);
});