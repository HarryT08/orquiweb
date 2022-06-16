const services = require('./services.js')

const userController = {
    getUsers : async (req, res) => {
        let namesUser = await services.getUsers
        return namesUser
    },
    
    getUser : (req, res) => {
        
    }   
}
module.exports = userController