var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var checkRouter = require('./routes/check');
var majorRouter = require('./routes/major');
var minorRouter = require('./routes/minor');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

nunjucks.configure(['views'], {
    autoescape: true,
    express: app
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/check', checkRouter);
app.use('/major', majorRouter);
app.use('/minor', minorRouter);

module.exports = app;