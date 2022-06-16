const connection = require('../database/connectMySQL.js');



const getUsers =  async () => {
    const users = await connection.query('select * from usuario', (err, res, x) => {
        if(err){
            throw err
        }
        let names = res.map( user => user.nombre )
        return names
    })
    return users
}


userServices = {
    getUsers,
}

module.exports = userServices