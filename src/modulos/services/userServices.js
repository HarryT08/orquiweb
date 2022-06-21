const bd = require('../database/connectMySQL');
const bcrypt = require("bcryptjs");
const rondas = 10;

class UserServices {
    constructor() {

    }

    find(callback) {
        let readQuery = 'SELECT * FROM usuario';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, function (err, result) {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        });
    }

    findOne(callback, username, password) {
        let readQuery = 'SELECT * FROM usuario WHERE username = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, [username], (err, result) => {
                if (err) throw err;
                connection.release();
                bcrypt.compare(password, result[0].password, (err, coinciden) => {
                    if (coinciden) {
                        callback(result[0]);
                    }
                    else {
                        callback(null);
                    }
                });
            })
        });
    }

}

module.exports = UserServices;