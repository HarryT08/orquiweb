const bd = require('../database/connectMySQL');

class MeseroServices {

    constructor() { }

    createComanda(data, callback) {
        let query = 'INSERT INTO comanda SET ?'
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [data], (err, result) => {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        });
    }

    createDetalle(data, callback) {
        let query = 'INSERT INTO detallecomanda SET ?'
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [data], (err, result) => {
                if (err) throw err;
                connection.release();
                callback(result);
            })
        });
    }

    getRechazados(id, callback) {
        let query = `SELECT * FROM comanda WHERE estado = 'Rechazado' AND idUsuario = ?`;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result) => {
                if (err) throw err;
                connection.release();
                callback(result);
            });
        })
    }

    getPedidosRechazados(id, callback) {
        let query = `SELECT * FROM detallecomanda d JOIN producto p ON d.idProducto = p.idProducto 
        WHERE estado = 'Rechazado' AND idComanda = ? `;
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result) => {
                if (err) throw err;
                connection.release();
                callback(result);
            });
        })
    }
}

module.exports = MeseroServices;