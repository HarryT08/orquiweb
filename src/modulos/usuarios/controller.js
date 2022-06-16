const services = require('./services.js')

const userController = {
    getUsers : (req, res) => {
        let namesUser = services.getUsers
        return namesUser
    },

    getUser : (req, res) => {
        
    }   
}
module.exports = userController