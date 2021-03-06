const express = require('express');
const usersRouter = require('./usersRouter');
const adminRouter = require('./adminRouter');
const paseRouter = require('./paseRouter');
const meseroRouter = require('./meseroRouter');


function routerApi(app){
    //add new route for versions
    const router = express.Router();
    app.use('/', router);
    //use route father
    router.use('/home', usersRouter);
    router.use('/admin', adminRouter);
    router.use('/pase', paseRouter);
    router.use('/mesero', meseroRouter);
}

module.exports = routerApi;