const connection = require('../database/connectMySQL.js');

const getUsers =  () => {
    const users = connection.query('select * from usuario', (err, res) => {
        if(err){
            throw err
        }
        let names = res.map( user => user.nombre )
        return names
    })
    return users
}


userServices = {
    getUsers
}

module.exports = userServices