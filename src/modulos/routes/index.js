const express = require('express');
const usersRouter = require('./usersRouter');

function routerApi(app){
    //add new route for versions
    const router = express.Router();
    
    app.use('/api', router);
    //use route father
    router.use('/home', usersRouter);
}

module.exports = routerApi;