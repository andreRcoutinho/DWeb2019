var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/premiosNobel', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Mongo ready: ' + mongoose.connection.readyState))
	.catch(() => console.log('Mongo: erro na conexão'));

var premiosRouter = require('./routes/premios');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', premiosRouter);

module.exports = app;
