const express = require('express');
const path = require('path');
const routerApi = require('./modulos/routes');
const app = express();
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 3000);
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

const port = app.get('port');

app.listen(port, () => {
    console.log('Probando server ' + port);
});
