const mysql = require('mysql');
const bd = require('../database/connectMySQL');

class AdminServices {

    constructor() {

    }

    getUsers(callback){
        let readQuery = 'SELECT * FROM usuario';
        bd.getConnection( function (err, connection)   {
            if (err) throw err;
            connection.query(readQuery, function (err, result){
                if (err) throw err;
                callback(result);
                connection.release();
            })
        });
    }

    updateUser(callback){

    }

    deleteUser(callback){

    }
    
}

module.exports = AdminServices;