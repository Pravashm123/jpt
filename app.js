var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var verify = require('./verify');
var cors = require('cors');

// database connection
const url = 'mongodb://localhost:27017/babygarden';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});

connect.then((db) => {
    console.log("Connected to mongodb server");
}, (err) => { console.log(err); });

// Defining routes
var indexRouter = require('./routes/index');
var userRoute = require('./routes/users');
var uploadRouter = require('./routes/upload');
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/product');

// starting express app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'session-id',
    secret: 'mysessionkey',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('*', cors({
    origin: 'http://localhost:5500',
    credentials:true
}));

// Defining path for the routes
app.use('/', indexRouter);
app.use('/users', userRoute); 
app.use('/upload', uploadRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

module.exports = app;

