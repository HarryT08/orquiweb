const express = require('express');
const path = require('path');
const app = express()
const mysql = require('mysql');

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname, 'public')))

//example query database
// const con = require('./modulos/database/connectMySQL.js');
const x = require('./modulos/usuarios/controller.js')


// con.query('select * from usuario' , (err, res, fields)=> {
//     if(err){
//         throw err
//     }
//     res.forEach(element => {
//         console.log(element.nombre);
//     });
// })

app.get('/' , (req, res) => {
    res.render('index')
});

app.listen(app.get('port') , async () => {
    console.log(__dirname);
    console.log( `Sever on port ${app.get('port')}` );
    let y = x.getUsers
    console.log(y)
})
