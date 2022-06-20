const mysql = require('mysql');
const bd = require('../database/connectMySQL');

class AdminServices {

    constructor() {

    }

    createUser(data, callback){
        let query = 'INSERT INTO usuario SET ?'
        bd.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(query, [data], (err, result) => {
                if(err) throw err;
                callback(result);
                connection.release();
            })
        });
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

    getUser(id, callback){
        let read = 'SELECT * FROM usuario WHERE idUsuario=?';
        bd.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(read, [id], function(err, result){
                if(err) throw err;
                connection.release();
                callback(result);                
            })
        })
    }

    updateUser(data, id, callback){
        let update = 'UPDATE usuario SET ? WHERE idUsuario = ?';
        bd.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query(update, [data, id], function(err, result){
                if(err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    deleteUser(callback, id){
        let query = 'DELETE FROM usuario WHERE idUsuario = ?';
        bd.getConnection(function(err,connection){
            if (err) throw err;
            connection.query(query, [id],(err, result, fields) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    getMesas(callback){
        let readQuery = 'SELECT * FROM mesa';
        bd.getConnection( function (err, connection)   {
            if (err) throw err;
            connection.query(readQuery, function (err, result){
                if (err) throw err;
                connection.release();
                callback(result);                
            })
        });
    }
    
    createMesa(data, callback){
        let query = 'INSERT INTO mesa SET ?'
        bd.getConnection(function(err, connection){
            if(err) callback('error');
            connection.query(query, [data], (err, result) => {
                if(err) callback('error');
                callback(result);
                connection.release();
            })
        });
    }

    deleteMesa(callback, id){
        let query = 'DELETE FROM mesa WHERE idMesa = ?';
        bd.getConnection(function(err,connection){
            if (err) throw err;
            connection.query(query, [id],(err, result, fields) => {
                if (err) throw err;
                connection.release();
                callback(result);                
            })
        })
    }

    getProductos(callback){   
        let query = 'SELECT * FROM producto'
        bd.getConnection( function (err, connection)   {
            if (err) throw err;
            connection.query(query, function (err, result){
                if (err) throw err;
                callback(result);
                connection.release();
            })
        });
    }

    createProducto(data, callback){
        let query = 'INSERT INTO producto SET ?'
        bd.getConnection(function(err, connection){
            if(err) callback(err)
            connection.query(query, [data], (err, result) => {
                if(err) callback(err)
                callback(result);
                connection.release();
            })
        });
    }

    deleteMesa(callback, id){
        let query = 'DELETE FROM producto WHERE idProducto = ?';
        bd.getConnection(function(err,connection){
            if (err) throw err;
            connection.query(query, [id],(err, result, fields) => {
                if (err) throw err;
                connection.release();
                callback(result);                
            })
        })
    }
}

module.exports = AdminServices;