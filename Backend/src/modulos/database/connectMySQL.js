const mysql = require('mysql');

var conexion = mysql.createPool({
    host: '47.89.245.144',
    database: 'orquiweb',
    user: 'artdev',
    password: 'desarrollo2022*',
    multipleStatements: true
});

module.exports = conexion;
