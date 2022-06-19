const express = require('express');
const path = require('path');
const routerApi = require('./modulos/routes');
const app = express();
const session = require('express-session');
const port = 3000;
const cors = require('cors');

//settings
app.set('port', port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
app.use(cors());
routerApi(app);

app.listen(port, () => {
    console.log('Probando server ' + port);
});
