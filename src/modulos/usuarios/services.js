const connection = require('../database/connectMySQL.js');


const getUsers =  async () => {
    const users = await connection.query('select * from usuario')
    return users.nombre
}


userServices = {
    getUsers,
}

module.exports = userServices