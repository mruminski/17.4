const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile('assets/index.html', {root: __dirname});
})

app.get('/userform', function(req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name    
  };
  res.end(JSON.stringify(response));
});

app.listen(3000);