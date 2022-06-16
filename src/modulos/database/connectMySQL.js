const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'sql565.main-hosting.eu',
    user: 'u173148296_root',
    password: 'Root1506',
    database: 'u173148296_bd_orquiweb',
});

module.exports = pool;