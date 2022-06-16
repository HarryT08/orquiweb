const express = require('express')
const router = express.Router()
const userControler = require('./controller.js')

module.exports.usersAPI = (app) => {
    router
        .get('/', userControler.getUsers)
        .get('/:id')
        .post('/')
        .delete()
    
    app.use('', router)
}