var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/filmesDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo ready: ' + mongoose.connection.readyState))
  .catch(() => console.log('Mongo: erro na conexão'))

var filmesRouter = require('./routes/filmes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', filmesRouter);

module.exports = app;
