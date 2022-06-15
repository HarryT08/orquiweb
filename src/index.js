const express = require('express');
const path = require('path');
const app = express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port') , () => {
    console.log(__dirname);
    console.log( `Sever on port ${app.get('port')}` );
})

app.get('/' , (req, res) => {
    res.render('index')
})