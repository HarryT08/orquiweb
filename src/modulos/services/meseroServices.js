const bd = require('../database/connectMySQL');

class MeseroServices {

    constructor() {}

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
}

module.exports = MeseroServices;