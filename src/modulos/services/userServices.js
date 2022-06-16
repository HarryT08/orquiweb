const mysql = require('mysql');
const bd = require('../database/connectMySQL');

class UserServices {
    constructor() {
    }

    find(callback) {
        let readQuery = 'SELECT * FROM usuario';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        });
    }

    findOne(callback, username, password){
        let readQuery = 'SELECT * FROM usuario WHERE username = ? AND password = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, [username , password] ,  (err, result) => {
                if (err) throw err;
                if(result.length > 0) {
                    console.log('ok encontrado');
                    connection.release();
                    callback();
                }
            })
        });
    }
}

module.exports = UserServices;