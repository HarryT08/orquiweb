const express = require('express');
const path = require('path');
const app = express()
const mysql = require('mysql');

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));

//Cochinada
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'sql565.main-hosting.eu',
    user: 'u173148296_root',
    password: 'Root1506',
    port: '3306',
    database: 'u173148296_bd_orquiweb',
    debug: false
});

pool.getConnection(function(err, connection) {

    // do whatever you want with your connection here

    connection.release();

});

//Middlewares
// app.use(myConnection(mysql,{
//     host: 'sql565.main-hosting.eu',
//     user: 'u173148296_root',
//     password: 'Root1506',
//     port: '3306',
//     database: 'u173148296_bd_orquiweb'
// }, 'single'));

//Archivos fijos
app.use(express.static(path.join(__dirname, 'public')))

//Routing
app.get('/' , (req, res) => {
    res.render('index')
});

app.listen(app.get('port') , () => {
    console.log(__dirname);
    console.log( `Sever on port ${app.get('port')}` );
})