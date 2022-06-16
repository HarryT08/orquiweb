const mysql = require('mysql');
const { promisify } = require("util")

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'sql565.main-hosting.eu',
    user: 'u173148296_root',
    password: 'Root1506',
    database: 'u173148296_bd_orquiweb',
});

pool.query = promisify(pool.query)
module.exports = pool;