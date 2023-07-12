var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var mongoose=require('mongoose')
var env=require('dotenv')
env.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database connected... ['+process.env.MONGO_URL+']')
    // next()
  }).catch((err)=>{
    console.log(err)
    // next(createError(500))
  })

const corsoptions = {
    origin: 'http://localhost:4200',
    methods: 'GET, POST, PUT ,DELETE,PATCH',
    allowedHeaders: 'Content-Type, Authorization',
    optionsSuccessStatus: 200
  };

app.use(cors(corsoptions))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
