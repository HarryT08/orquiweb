const mysql = require('mysql');
const bd = require('../database/connectMySQL');

class UserServices {
    constructor() {

    }

    find() {
        let readQuery = 'SELECT * FROM usuario';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, function (err, result) {
                if (err) throw err;
                connection.release();
                console.log(result);
                return result;
            })
        });
    }
}

module.exports = UserServices;