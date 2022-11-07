const bd = require('../database/connectMySQL');
const bcrypt = require("bcryptjs");
const rondas = 10;

class AdminServices {

    constructor() {

    }

    createUser(data, callback) {
        let query = 'INSERT INTO usuario SET ?'
        bcrypt.hash(data.password, rondas, (err, encriptada) => {
            data.password = encriptada;
        });
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [data], (err, result) => {
                if (err) {
                    callback(null);
                } else {
                    callback(result);
                    connection.release();
                }
            })
        });
    }

    getUsers(callback) {
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

    getUser(id, callback) {
        let read = 'SELECT * FROM usuario WHERE idUsuario=?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(read, [id], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    updateUser(data, id, callback) {
        let update = 'UPDATE usuario SET ? WHERE idUsuario = ?';
        bcrypt.hash(data.password, rondas, (err, encriptada) => {
            data.password = encriptada;
        });
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(update, [data, id], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    deleteUser(callback, id) {
        let query = 'DELETE FROM usuario WHERE idUsuario = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result, fields) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    getMesas(callback) {
        let readQuery = 'SELECT * FROM mesa';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        });
    }

    getMesasByEstado(estado, callback) {
        let readQuery = `SELECT * FROM mesa WHERE estado = ?`;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, [estado], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        });
    }

    createMesa(data, callback) {
        let query = 'INSERT INTO mesa SET ?'
        bd.getConnection(function (err, connection) {
            if (err) callback('error');
            connection.query(query, [data], (err, result) => {
                if (err) callback('error');
                callback(result);
                connection.release();
            })
        });
    }

    updateMesa(id, callback){
        let query = `UPDATE mesa SET estado = 'disponible' WHERE idMesa = ?`;
        bd.getConnection(function (err, connection) {
            if(err) throw err;
            connection.query(query, [id], (err, result) => {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    deleteMesa(callback, id) {
        let query = 'DELETE FROM mesa WHERE idMesa = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result, fields) => {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    updateStateMesa(id, callback) {
        let update = `UPDATE mesa SET estado = 'reservada' WHERE idMesa = ?`;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(update, [id], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    getProductos(callback) {
        let query = 'SELECT * FROM producto'
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, function (err, result) {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        });
    }

    getProducto(id, callback) {
        let read = 'SELECT * FROM producto WHERE idProducto=?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(read, [id], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    createProducto(data, callback) {
        let query = 'INSERT INTO producto SET ?'
        bd.getConnection(function (err, connection) {
            if (err) callback(err)
            connection.query(query, [data], (err, result) => {
                if (err) callback(err)
                callback(result);
                connection.release();
            })
        });
    }

    deleteProducto(callback, id) {
        let query = 'DELETE FROM producto WHERE idProducto = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result, fields) => {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    createReserva(data, callback) {
        let query = 'INSERT INTO reserva SET ?'
        bd.getConnection(function (err, connection) {
            if (err) callback(err)
            connection.query(query, [data], (err, result) => {
                if (err) callback(err)
                connection.release();
                callback(result);
            })
        });
    }

    getReserva(id, date, callback) {
        let read = 'SELECT * FROM reserva WHERE idMesa = ? AND fecha = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(read, [id, date], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    getReservas(date, time, callback) {
        let read = 'SELECT * FROM reserva WHERE fecha >= ? AND hora >= ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(read, [date, time], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    deleteReserva(id, callback) {
        let query = `DELETE FROM reserva WHERE idReserva = ?`;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result) => {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    updateProducto(data, id, callback) {
        let update = 'UPDATE producto SET ? WHERE idProducto = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(update, [data, id], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    getFactura(idMesa, callback) {
        let query = `SELECT * FROM comanda c JOIN detallecomanda d 
        ON c.idComanda = d.idComanda JOIN producto p ON d.idProducto = p.idProducto
        WHERE c.estado = 'Aceptado' AND c.idMesa = ?`;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [idMesa], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    updateComanda(idComanda, callback) {
        let query = `UPDATE comanda SET estado = 'Facturado' WHERE idComanda = ?`;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [idComanda], (err, result) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    updateDetalleComanda(idDetalle, idProducto, callback){
        let query = `UPDATE detallecomanda SET estado = 'Facturado' WHERE idDetalleComanda = ? AND idProducto = ?`;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [idDetalle, idProducto], (err, result) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    countReserva(fecha, callback){
        let query = `SELECT * FROM reserva WHERE fecha = ?`;
        bd.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(query, [fecha], function(err,result){  
                if(err) throw err;
                connection.release();
                callback(result.length);
            })
        })
    }

    countComanda(fecha, callback){
        let query = `SELECT * FROM comanda WHERE fecha = ?`;
        bd.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(query, [fecha], function(err,result){
                if(err) throw err;
                connection.release();
                callback(result.length);
            })
        })
    }

    getLast(callback){
        let query = `SELECT * FROM comanda ORDER BY idComanda DESC LIMIT 4`;
        bd.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(query, function(err,result){
                if(err) throw err;
                connection.release();                
                callback(result);
            })
        })
    }
}
module.exports = AdminServices;