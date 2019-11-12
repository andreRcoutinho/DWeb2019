var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/obrasDB', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Mongo ready: ' + mongoose.connection.readyState))
	.catch(() => console.log('Mongo: erro na conexão'));

var obrasRouter = require('./routes/obras');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', obrasRouter);

module.exports = app;
