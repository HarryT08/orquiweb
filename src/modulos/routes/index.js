const express = require('express');
const usersRouter = require('./usersRouter');
const bd = require('../database/connectMySQL');

function routerApi(app){
    //add new route for versions
    const router = express.Router();
    app.use('/api', router);
    //use route father
    router.use('/users', usersRouter);
  }

module.exports = routerApi;