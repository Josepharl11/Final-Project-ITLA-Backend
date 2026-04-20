const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const buildingsRouter = require('./routes/buildings');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api/buildings', buildingsRouter);

mongoose.connect('mongodb://localhost:27017/ITLAMAP')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
