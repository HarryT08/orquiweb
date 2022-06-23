const bd = require('../database/connectMySQL');

class PaseServices {

    constructor() {  }

    getPedidos(callback) {
        let readQuery = 'SELECT * FROM comanda';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(readQuery, function (err, result) {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        });
    }

    getPedido(id, callback) {
        let read = 'SELECT * FROM comanda WHERE idComanda = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(read, [id], function (err, result) {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        })
    }

    deletePedido(id, callback){
        let query = 'DELETE FROM comanda WHERE idComanda = ?';
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result, fields) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    getProductos(idComanda, callback){
        let query = 'SELECT p.nombre, p.idProducto, dc.cantidad, dc.idComanda, c.idMesa FROM producto p JOIN detallecomanda dc ON p.idProducto = dc.idProducto JOIN comanda c ON c.idComanda = dc.idComanda AND dc.idComanda = ?' 
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [idComanda], (err, result, fields) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }
}

module.exports = PaseServices;