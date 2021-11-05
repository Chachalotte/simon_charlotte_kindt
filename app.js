
var express = require('express');
var app = express();
const port = 3000;
const webpack = require('webpack');

const path = require ("http");
// const server = http.createserver(app);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

var listener = app.listen(port, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
