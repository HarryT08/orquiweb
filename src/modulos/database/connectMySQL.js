const mysql = require('mysql');

var conexion = mysql.createPool({
    host: 'sql565.main-hosting.eu',
    database: 'u173148296_bd_orquiweb',
    user: 'u173148296_root',
    password: 'Root1506',
    multipleStatements: true
});

module.exports = conexion;
