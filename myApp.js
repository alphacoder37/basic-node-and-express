var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  }
  )

  console.log(__dirname)


app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE=uppercase) {
  res.json({"message": "HELLO JSON"})
  }
  else {
    res.json({"message": "Hello JSON"})

  }

})

module.exports = app;

