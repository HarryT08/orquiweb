const services = require('./services.js')

const userController = {
    getUsers : async () => {
        let namesUser = await services.getUsers()
        return namesUser
    },

    getUser : (req, res) => {
        
    }   
}
module.exports = userController