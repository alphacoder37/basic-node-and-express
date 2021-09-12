var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser')



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  }
  )

app.get('/', function(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  console.log(req.ip)
  next()
})
app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE='uppercase') {
  res.json({"message": "HELLO JSON"})
  }
  else {
    res.json({"message": "Hello JSON"})
  }
})

app.get('/now', function(req, res, next) {
  req.time = new Date().toString()
  next()
}, function(req, res)
{
res.json({"time": req.time})
})

app.get('/:word/echo', function(req, res, next) {
  res.json({'echo': req.params.word})
})

app.get('/name', function(req, res, next) {
  res.json({'name': `${req.query.firstname} ${req.query.lastname}`})
})

console.log(bodyParser)

module.exports = app;

