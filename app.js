
var express = require('express');
var app = express();
const port = 3000;
const webpack = require('webpack');



const path = require ("path");
// const server = http.createserver(app);

// respond with "hello world" when a GET request is made to the homepage
app.use('/src', express.static(__dirname + '/src'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));

});

var listener = app.listen(port, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
