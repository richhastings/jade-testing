var express = require('express')
  // , stylus = require('stylus')
  // , nib = require('nib')

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);
