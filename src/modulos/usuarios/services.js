const connection = require('../database/connectMySQL.js');

const getUsers =  async () => {
    const users = await connection.query('select * from usuario')
    let names = users.map(user => user.nombre)
    return names
}
userServices = {
    getUsers,
}
module.exports = userServices