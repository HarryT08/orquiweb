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
        console.log(username , " " , password);
        let readQuery = 'SELECT * FROM usuario WHERE username = ? AND password = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, [username , password] ,  (err, result) => {
                if (err) throw err;
                callback(result[0])
                connection.release()
            })
        });
    }

}

module.exports = UserServices;