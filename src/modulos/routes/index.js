const express = require('express');
const usersRouter = require('./usersRouter');
const adminRouter = require('./adminRouter');

function routerApi(app){
    //add new route for versions
    const router = express.Router();
    app.use('/api', router);
    //use route father
    router.use('/users', usersRouter);
    router.use('/admin', adminRouter);
}

module.exports = routerApi;