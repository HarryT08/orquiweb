const express = require('express')
const router = express.Router()

module.exports.usersAPI = (app) => {
    router
        .get('/')
        .get('/:id')
        .post('/')
        .delete()
    
    app.use('api/users', router)
}