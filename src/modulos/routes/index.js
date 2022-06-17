const express = require('express');
const usersRouter = require('./usersRouter');
const adminRouter = require('./adminRouter');

function routerApi(app){
    //add new route for versions
    const router = express.Router();
    app.use('/', router);
    //use route father
    router.use('/home', usersRouter);
    router.use('/admin', adminRouter);
}

module.exports = routerApi;