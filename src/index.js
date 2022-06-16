const express = require('express');
const path = require('path');
const routerApi = require('./modulos/routes');
const app = express();
const port = 3000;

//settings
app.set('port', port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//example query database
// const con = require('./modulos/database/connectMySQL.js');

routerApi(app);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('Probando server ' + port);
});