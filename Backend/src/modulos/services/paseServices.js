const bd = require('../database/connectMySQL');

class PaseServices {

    constructor() {  }

    getPedidos(callback) {
        let readQuery = `SELECT * FROM comanda WHERE comanda.estado = 'Pendiente'`;
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

    updateMesa(id , callback){
        let query = `UPDATE mesa m JOIN comanda c on c.idMesa = m.idMesa SET m.estado = "Ocupado" WHERE c.idComanda = ?`
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    updateMesaDen(id , callback){
        let query = `UPDATE mesa m JOIN comanda c on c.idMesa = m.idMesa SET m.estado = "disponible" WHERE c.idComanda = ?`
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    updatePedido(id, callback){
        let query = `UPDATE comanda SET estado = 'Aceptado' WHERE idComanda = ?`
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [id], (err, result) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }

    denegarProductos(data, callback){
        let query = `UPDATE detallecomanda SET estado = 'Rechazado' WHERE idComanda = ? AND idProducto = ?`
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [data.idComanda , data.idProducto], (err, result) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }    

    denegarPedido(idComanda , mensaje , callback){
        let query = `UPDATE comanda SET mensaje = ?, estado = 'Rechazado'  WHERE idComanda = ?`
        bd.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(query, [mensaje.mensaje , idComanda], (err, result) => {
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
            connection.query(query, [idComanda], (err, result) => {
                if (err) throw err;
                callback(result);
                connection.release();
            })
        })
    }
}

module.exports = PaseServices;